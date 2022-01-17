import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 400px;
  z-index: 5;
  position: relative;
  overflow: hidden;

  & > button {
    position: absolute;
    top: 0;
    height: 100%;
    color: white;
    width: 30px;
    font-size: 35px;
    z-index: 20;
  }
  & > button.text-carousel-prev-button {
    left: 10%;
  }
  & > button.text-carousel-next-button {
    right: 10%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
  height: auto;
  overflow-x: hidden;
`;

export const DisplayItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;

  width: 25%;

  & > div {
    background-color: transparent;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(46px);
    border-radius: 8px;
    width: 80%;

    & > h3 {
      font-weight: 700;
      margin-bottom: 10px;
      font-size: 20px;
      text-align: start;
      padding: 15px;
    }

    & > p {
      padding: 15px;
    }
  }

  ${props => {
    if (props.isFirstItem) {
      return css`
        position: absolute;
        top: 0;
        left: -15%;
        z-index: 10;
        color: #ffffff88;
        filter: blur(2px);
      `;
    }
    if (props.isLastItem) {
      return css`
        position: absolute;
        top: 0;
        right: -15%;
        z-index: 10;
        color: #ffffff88;
        filter: blur(2px);
      `;
    }
    return css``;
  }}
`;
