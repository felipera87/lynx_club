import styled, { css } from 'styled-components';
import tw from 'tailwind-styled-components';

import { device } from '../../utils/screenBreakpoints';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const TimelineContainer = tw.div`
  flex
  flex-col
  justify-around
  items-center
`;

export const TimelineLinker = styled.div`
  position: absolute;
  height: ${props => props.height}px;
  width: 10px;
  background-color: black;
  top: 0;
  left: 35px;
  z-index: -1;
`;

const TimelineItemElements = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  &:not(:first-child) {
    margin-top: 50px;
  }

  & > div.timeline-box-container {
    width: 80px;
    height: auto;
    margin: 0 5%;
    position: relative;

    & > div.timeline-box {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: auto;
      width: 80px;
      height: 80px;
      border-radius: 8px;
      background-color: black;
      color: white;
      font-size: 18px;
      font-weight: 700;
      z-index: 10;

      border: 2px solid black;
      background-color: transparent;
      color: black;

      ${props => {
        if (props.barPosition > props.offsetTop) {
          return css`
            background-color: black;
            color: white;
          `;
        }
        return css``;
      }}
    }
  }

  & > h3 {
    width: 15%;
    text-align: right;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
  }

  & > div.timeline-text {
    display: flex;
    flex-direction: column;
    height: auto;

    width: 50%;
    & > p {
      font-size: 14px;
    }
  }

  ${device.md} {
    width: 60%;
  }
`;

export const TimelineItem = tw(TimelineItemElements)`
  flex
  md:items-center
`;
