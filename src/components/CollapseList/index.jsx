import React, { useEffect, useState, useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { AnimatePresence } from 'framer-motion';

import { Container, Item, ItemDetail } from './styles';

const CollapseList = ({ items }) => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const newItems = items.map((item, index) => {
      return {
        id: uuid(),
        isOpen: false,
        index,
        ...item,
      };
    });

    setListItems(newItems);
  }, [items]);

  const handleExpandClick = useCallback(
    item => {
      const newItems = [...listItems];

      const newItem = {
        ...item,
      };
      newItem.isOpen = !newItem.isOpen;

      newItems[item.index] = newItem;

      setListItems(newItems);
    },
    [listItems],
  );

  return (
    <Container>
      {listItems.map(item => {
        return (
          <Item key={item.id} isOpen={item.isOpen}>
            <div>
              <span>{item.title}</span>
              <button type="button" onClick={() => handleExpandClick(item)}>
                {item.isOpen ? <FiMinus /> : <FiPlus />}
              </button>
            </div>
            <AnimatePresence>
              {item.isOpen && (
                <ItemDetail
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 0, height: 0, padding: 0 },
                  }}
                >
                  {item.description}
                </ItemDetail>
              )}
            </AnimatePresence>
          </Item>
        );
      })}
    </Container>
  );
};

export default CollapseList;
