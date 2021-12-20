import styled, { css } from 'styled-components';

import { device } from '../../utils/screenBreakpoints';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  width: 100%;
  z-index: 5;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow-x: hidden;
  padding: 0 auto;
`;

export const DisplayImage = styled.div`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;

  margin: 0 20px;

  ${props => {
    const sizeMobile =
      200 - 80 * Math.abs(props.middlePosition - props.position);

    const blurMobile = 5 * Math.abs(props.middlePosition - props.position);

    return css`
      width: ${sizeMobile > 0 ? sizeMobile : 0}px;
      height: ${sizeMobile > 0 ? sizeMobile : 0}px;
      filter: blur(${blurMobile}px);
    `;
  }}
  ${device.md} {
    ${props => {
      const size = 180 - 20 * Math.abs(props.middlePosition - props.position);
      const blur = Math.abs(props.middlePosition - props.position);

      return css`
        width: ${size > 0 ? size : 0}px;
        height: ${size > 0 ? size : 0}px;
        filter: blur(${blur}px);
      `;
    }}
  }

  & > img {
    width: 100%;
  }
`;
