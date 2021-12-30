import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { v4 as uuid } from 'uuid';
import { AnimatePresence } from 'framer-motion';

import { Container, Content, DisplayItem } from './styles';

const variants = {
  enter: direction => {
    return {
      x: direction === 'next' ? 300 : -300,
    };
  },
  center: {
    x: 0,
  },
  exit: direction => {
    return {
      x: direction === 'previous' ? 300 : -300,
    };
  },
};

const TextCarousel = ({ items }) => {
  const [itemCollection, setItemCollection] = useState([]);
  const [firstItemIndex, setFirstItemIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const maxItemsOnScreen = 3;

  useEffect(() => {
    const newItemCollection = items.map((item, index) => {
      return {
        id: uuid(),
        index,
        ...item,
      };
    });
    setItemCollection(newItemCollection);
  }, [items]);

  const middleItems = useMemo(() => {
    return itemCollection.filter((item, index) => {
      return (
        index >= firstItemIndex && index < firstItemIndex + maxItemsOnScreen
      );
    });
  }, [firstItemIndex, itemCollection]);

  const firstItem = useMemo(() => {
    if (firstItemIndex === 0) {
      return null;
    }

    return itemCollection[firstItemIndex - 1];
  }, [firstItemIndex, itemCollection]);

  const lastItem = useMemo(() => {
    if (firstItemIndex + maxItemsOnScreen === itemCollection.length) {
      return null;
    }

    return itemCollection[firstItemIndex + maxItemsOnScreen];
  }, [firstItemIndex, itemCollection]);

  const handleIndex = useCallback(
    newDirection => {
      const newFirstItemIndex =
        newDirection === 'previous' ? firstItemIndex - 1 : firstItemIndex + 1;

      if (
        newFirstItemIndex >= 0 &&
        newFirstItemIndex < itemCollection.length - (maxItemsOnScreen - 1)
      ) {
        setFirstItemIndex(newFirstItemIndex);
      }
    },
    [firstItemIndex, itemCollection.length],
  );

  const carouselNavigate = useCallback(
    newDirection => {
      setDirection(newDirection);
      handleIndex(newDirection);
    },
    [handleIndex],
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
      <AnimatePresence>
        {firstItem && (
          <DisplayItem
            key={firstItem.id}
            isFirstItem
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
          >
            <h3>{firstItem.title}</h3>
            <p>{firstItem.description}</p>
          </DisplayItem>
        )}
        <Content>
          {middleItems.map(item => {
            return (
              <DisplayItem
                key={item.id}
                initial="enter"
                animate="center"
                exit="exit"
                custom={direction}
                variants={variants}
                transition={{ duration: 0.4, type: 'easeInOut' }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </DisplayItem>
            );
          })}
        </Content>
        {lastItem && (
          <DisplayItem
            key={lastItem.id}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
            isLastItem
          >
            <h3>{lastItem.title}</h3>
            <p>{lastItem.description}</p>
          </DisplayItem>
        )}
      </AnimatePresence>
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
