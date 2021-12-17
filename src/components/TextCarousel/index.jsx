import React, { useState, useMemo, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { v4 as uuid } from 'uuid';

import { Container, Content, DisplayItem } from './styles';

const TextCarousel = ({ items }) => {
  const [firstItemIndex, setFirstItemIndex] = useState(0);
  const maxItemsOnScreen = 3;

  const middleItems = useMemo(() => {
    return items
      .filter((item, index) => {
        return (
          index >= firstItemIndex && index < firstItemIndex + maxItemsOnScreen
        );
      })

      .map((item, index) => {
        return {
          id: uuid(),
          index,
          ...item,
        };
      });
  }, [firstItemIndex, items]);

  const firstItem = useMemo(() => {
    if (firstItemIndex === 0) {
      return null;
    }

    return items[firstItemIndex - 1];
  }, [firstItemIndex, items]);

  const lastItem = useMemo(() => {
    if (firstItemIndex + maxItemsOnScreen === items.length) {
      return null;
    }

    return items[firstItemIndex + maxItemsOnScreen - 1];
  }, [firstItemIndex, items]);

  const carouselNavigate = useCallback(
    direction => {
      const newFirstItemIndex =
        direction === 'previous' ? firstItemIndex - 1 : firstItemIndex + 1;

      if (
        newFirstItemIndex >= 0 &&
        newFirstItemIndex < items.length - (maxItemsOnScreen - 1)
      ) {
        setFirstItemIndex(newFirstItemIndex);
      }
    },
    [firstItemIndex, items.length],
  );

  return (
    <Container>
      {firstItem && (
        <button
          type="button"
          className="text-carousel-prev-button"
          onClick={() => carouselNavigate('previous')}
        >
          <FiChevronLeft />
        </button>
      )}
      {firstItem && (
        <DisplayItem isFirstItem key={firstItem.id}>
          <h3>{firstItem.title}</h3>
          <p>{firstItem.description}</p>
        </DisplayItem>
      )}
      <Content>
        {middleItems.map(item => {
          return (
            <DisplayItem key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </DisplayItem>
          );
        })}
      </Content>
      {lastItem && (
        <DisplayItem isLastItem key={lastItem.id}>
          <h3>{lastItem.title}</h3>
          <p>{lastItem.description}</p>
        </DisplayItem>
      )}
      {lastItem && (
        <button
          type="button"
          className="text-carousel-next-button"
          onClick={() => carouselNavigate('next')}
        >
          <FiChevronRight />
        </button>
      )}
    </Container>
  );
};

export default TextCarousel;
