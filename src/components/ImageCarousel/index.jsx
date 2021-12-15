import React, { useMemo } from 'react';
import { v4 as uuid } from 'uuid';

import { Container, Content, DisplayImage } from './styles';

const ImageCarousel = ({ images }) => {
  const middlePosition = useMemo(() => {
    return Math.floor(images.length / 2);
  }, [images.length]);

  const imageCollection = useMemo(() => {
    return images.map((image, index) => {
      return {
        id: uuid(),
        position: index,
        ...image,
      };
    });
  }, [images]);

  return (
    <Container>
      <Content>
        {imageCollection.map(image => {
          return (
            <DisplayImage
              key={image.id}
              position={image.position}
              middlePosition={middlePosition}
            >
              <img src={image.src} alt="Cover" />
            </DisplayImage>
          );
        })}
      </Content>
    </Container>
  );
};

export default ImageCarousel;
