import React, { useMemo } from 'react';
import { v4 as uuid } from 'uuid';

import { Container, ImageContainer } from './styles';

const ImageBackground = ({ numberOfImages, imageSet, containerHeight }) => {
  const backgroundImages = useMemo(() => {
    const result = [];

    // eslint-disable-next-line no-undef
    const maxWidth = window.innerWidth;

    for (let i = 0; i < numberOfImages; i += 1) {
      const indexImage = Math.floor(Math.random() * imageSet.length);
      const positionX = Math.floor(Math.random() * (maxWidth + 1));
      const positionY = Math.floor(Math.random() * (containerHeight + 1));
      const scale = Math.floor(Math.random() * (5 - 3 + 1) + 3) / 10;
      const opacity = Math.floor(Math.random() * (4 - 1 + 1) + 1) / 10;

      result.push({
        id: uuid(),
        src: imageSet[indexImage],
        positionX,
        positionY,
        scale,
        opacity,
      });
    }

    return result;
  }, [containerHeight, imageSet, numberOfImages]);
  return (
    <Container>
      {backgroundImages.map(image => {
        return (
          <ImageContainer
            key={image.id}
            top={image.positionY}
            left={image.positionX}
            scale={image.scale}
            opacity={image.opacity}
          >
            <img src={image.src} alt="Small background" />
          </ImageContainer>
        );
      })}
    </Container>
  );
};

export default ImageBackground;
