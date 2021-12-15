import React, { useRef, useEffect } from 'react';

import { Container } from './styles';

const StarBackground = ({ numberOfStars, height }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef) {
      const canvas = canvasRef.current;

      const canvas2dContext = canvasRef.current.getContext('2d');
      // eslint-disable-next-line no-undef
      canvas.width = window.innerWidth;
      canvas.height = height;

      for (let i = 0; i < numberOfStars; i += 1) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;

        const intensity = Math.floor(Math.random() * 255);
        const rgb = `rgb(${intensity}, ${intensity}, ${intensity})`;
        canvas2dContext.fillStyle = rgb;
        canvas2dContext.fillRect(x, y, 1, 1);
      }
    }
  }, [canvasRef, height, numberOfStars]);

  return (
    <Container height={height}>
      <canvas ref={canvasRef} />
    </Container>
  );
};

export default StarBackground;
