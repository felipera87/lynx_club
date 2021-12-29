import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  width: 100%;
  overflow-x: hidden;
  z-index: 5;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
  width: ${props => props.size};
  height: 100%;
  position: absolute;
`;

export const DisplayImage = styled.div`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;

  margin: 0 20px;

  position: absolute;

  ${props => {
    if (props.animationTimeReference > 0 && !props.isLastImage) {
      return css`
        transition: left 1s, width 1s, height 1s;
      `;
    }
    return css``;
  }}

  ${props => {
    const { size } = props;
    const blur = props.imageBlurFactor * props.positionDistanceToMiddle;

    if (!props.isLastImage) {
      return css`
        left: ${props.distanceToLeft + props.shiftImages}px;
        width: ${size > 0 ? size : 0}px;
        height: ${size > 0 ? size : 0}px;
        filter: blur(${blur}px);
      `;
    }
    return css`
      left: ${props.distanceToLeft + props.shiftImages}px;
      width: ${size > 0 ? size : 0}px;
      height: ${size > 0 ? size : 0}px;
      filter: blur(${blur}px);
    `;
  }}

  & > img {
    width: 100%;
  }
`;
