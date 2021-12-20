import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: ${props => `${props.height}px`};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  canvas {
    width: 100%;
    height: ${props => `${props.height}px`};
    display: block;
    padding: 0;
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
`;
