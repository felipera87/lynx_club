import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from 'react';

import { Container } from './styles';

import StarField from './classes/StarField';

const StarBackground = ({ numberOfStars, height }) => {
  const canvasRef = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(0);
  const [canvasHeight, setCanvasHeight] = useState(0);
  const [canvas2dContext, setCanvas2dContext] = useState(null);
  const [starField, setStarField] = useState(null);

  const canvasHalfWidth = useMemo(() => {
    return canvasWidth / 2;
  }, [canvasWidth]);

  const canvasHalfHeight = useMemo(() => {
    return canvasHeight / 2;
  }, [canvasHeight]);

  const draw = useCallback(() => {
    if (canvas2dContext && starField) {
      canvas2dContext.setTransform(1, 0, 0, 1, 0, 0);
      canvas2dContext.fillStyle = 'rgba(0,0,0,0.2)';
      canvas2dContext.fillRect(0, 0, canvasWidth, canvasHeight);

      starField.draw();

      // eslint-disable-next-line no-undef
      window.requestAnimationFrame(draw);
    }
  }, [canvas2dContext, canvasHeight, canvasWidth, starField]);

  const initializeStarField = useCallback(() => {
    if (canvas2dContext) {
      const newStarField = new StarField(
        250,
        canvasHalfWidth,
        canvasHalfHeight,
        canvas2dContext,
      );
      setStarField(newStarField);
    }
  }, [canvas2dContext, canvasHalfHeight, canvasHalfWidth]);

  useEffect(() => {
    if (canvasRef) {
      const canvas = canvasRef.current;

      // eslint-disable-next-line no-undef
      canvas.width = window.innerWidth;
      canvas.height = height;

      setCanvasWidth(canvas.width);
      setCanvasHeight(canvas.height);

      const newCanvas2dContext = canvasRef.current.getContext('2d');
      newCanvas2dContext.fillStyle = 'black';
      newCanvas2dContext.fillRect(0, 0, canvas.width, canvas.height);
      setCanvas2dContext(newCanvas2dContext);

      initializeStarField();
    }
  }, [canvas2dContext, canvasRef, height, initializeStarField, numberOfStars]);

  useEffect(() => {
    draw();
  }, [draw]);

  return (
    <Container height={height}>
      <canvas ref={canvasRef} />
    </Container>
  );
};

export default StarBackground;
