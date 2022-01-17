import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { v4 as uuid } from 'uuid';
import { AnimatePresence, useAnimation } from 'framer-motion';

import { Container, Content, DisplayItem } from './styles';

const variants = {
  enter: direction => {
    return {
      x: direction === 'next' ? 320 : -320,
    };
  },
  center: {
    x: 0,
  },
  enter2: direction => {
    return {
      x: direction === 'next' ? [320, 0] : [-320, 0],
    };
  },
};

const TextCarousel = ({ items }) => {
  const controls = useAnimation();

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

      if (newDirection === 'next') {
        controls.start({ x: [300, 0] });
      }
      if (newDirection === 'previous') {
        controls.start({ x: [-300, 0] });
      }
    },
    [handleIndex, controls],
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
            custom={direction}
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
          >
            <div>
              <h3>{firstItem.title}</h3>
              <p>{firstItem.description}</p>
            </div>
          </DisplayItem>
        )}
      </AnimatePresence>
      <Content>
        {middleItems.length > 0 && (
          <>
            <AnimatePresence>
              <DisplayItem
                key={middleItems[0].id}
                animate="center"
                custom={direction}
                initial="enter"
                variants={variants}
                transition={{ duration: 0.4, type: 'easeInOut' }}
              >
                <div>
                  <h3>{middleItems[0].title}</h3>
                  <p>{middleItems[0].description}</p>
                </div>
              </DisplayItem>
            </AnimatePresence>
            <AnimatePresence>
              <DisplayItem
                key={middleItems[1].id}
                animate="center"
                custom={direction}
                initial="enter"
                variants={variants}
                transition={{ duration: 0.4, type: 'easeInOut' }}
              >
                <div>
                  <h3>{middleItems[1].title}</h3>
                  <p>{middleItems[1].description}</p>
                </div>
              </DisplayItem>
            </AnimatePresence>
            <AnimatePresence>
              <DisplayItem
                key={middleItems[2].id}
                animate="center"
                custom={direction}
                initial="enter"
                variants={variants}
                transition={{ duration: 0.4, type: 'easeInOut' }}
              >
                <div>
                  <h3>{middleItems[2].title}</h3>
                  <p>{middleItems[2].description}</p>
                </div>
              </DisplayItem>
            </AnimatePresence>
          </>
        )}
      </Content>
      <AnimatePresence>
        {lastItem && (
          <DisplayItem
            key={lastItem.id}
            initial="enter"
            animate="center"
            custom={direction}
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
            isLastItem
          >
            <div>
              <h3>{lastItem.title}</h3>
              <p>{lastItem.description}</p>
            </div>
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
