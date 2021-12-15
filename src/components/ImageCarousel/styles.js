import styled, { css } from 'styled-components';

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
    const size = 180 - 20 * Math.abs(props.middlePosition - props.position);
    const blur = Math.abs(props.middlePosition - props.position);
    return css`
      width: ${size}px;
      height: ${size}px;
      filter: blur(${blur}px);
    `;
  }}

  & > img {
    width: 100%;
  }
`;
