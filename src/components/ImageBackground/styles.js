import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  color: white;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  position: absolute;

  ${props => {
    return css`
      opacity: ${props.opacity};
      transform: scale(${props.scale});
      top: ${props.top}px;
      left: ${props.left}px;
    `;
  }}

  & > img {
    width: 100%;
    height: 100%;
  }
`;
