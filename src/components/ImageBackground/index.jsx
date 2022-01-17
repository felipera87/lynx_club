import React, { useState, useEffect, useCallback } from 'react';
import { v4 as uuid } from 'uuid';

import { Container, ImageContainer } from './styles';

const ImageBackground = ({ numberOfImages, imageSet, containerHeight }) => {
  const [backgroundImages, setBackgroundImages] = useState([]);

  useEffect(() => {
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
        translateX: 0,
        translateY: 0,
      });
    }

    setBackgroundImages(result);
  }, [containerHeight, imageSet, numberOfImages]);

  const generateRandomInteger = useCallback((min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }, []);

  const changeImagesPosition = useCallback(() => {
    setBackgroundImages(oldImages => {
      return oldImages.map(image => {
        const newImage = { ...image };
        const x = generateRandomInteger(-300, 300);
        const y = generateRandomInteger(-300, 300);

        newImage.translateX = x;
        newImage.translateY = y;

        return newImage;
      });
    });
  }, [generateRandomInteger]);

  useEffect(() => {
    if (changeImagesPosition) {
      setInterval(() => {
        changeImagesPosition();
      }, 2500);
    }
  }, [changeImagesPosition]);

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
            translateX={image.translateX}
            translateY={image.translateY}
          >
            <img src={image.src} alt="Small background" />
          </ImageContainer>
        );
      })}
    </Container>
  );
};

export default ImageBackground;
