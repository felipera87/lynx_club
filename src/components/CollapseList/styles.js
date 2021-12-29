import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.ul`
  width: 100%;
  list-style: none;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 26px 40px;

  &:not(:first-child) {
    border-top: 1px solid #a6a6a644;
  }

  & > div {
    display: flex;
    justify-content: space-between;

    & > span {
      color: ${props => (props.isOpen ? '#8B4EFF' : 'white')};
    }

    & > button {
      background-color: ${props => (props.isOpen ? '#5c5c5c' : 'white')};
      color: ${props => (props.isOpen ? 'white' : 'black')};
      padding: 5px;
      border-radius: 8px;
      width: 25px;
      height: 25px;
    }
  }
`;

export const ItemDetail = styled(motion.p)`
  color: #a6a6a6;
  padding-top: 20px;
`;
