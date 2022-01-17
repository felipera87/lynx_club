import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { v4 as uuid } from 'uuid';

import { Container, Content, DisplayImage } from './styles';

import { screenBreakpoints } from '../../utils/screenBreakpoints';

import { useGlobalData } from '../../hooks/global';

const ImageCarousel = ({ images }) => {
  const { documentWidth } = useGlobalData();
  const [imageCollection, setImageCollection] = useState(
    images.map((image, index) => {
      return {
        id: uuid(),
        position: index,
        positionDistanceToMiddle: Math.abs(
          Math.floor(images.length / 2) - index,
        ),
        distanceToLeft: 0,
        size: 0,
        ...image,
      };
    }),
  );
  const [animationTimeReference, setAnimationTimeReference] = useState(0);

  const middleImageIndex = useMemo(() => {
    return Math.floor(images.length / 2);
  }, [images.length]);

  const imageBlurFactor = useMemo(() => {
    return documentWidth > screenBreakpoints.md ? 1 : 5;
  }, [documentWidth]);

  const maxImageWidth = useMemo(() => {
    return documentWidth > screenBreakpoints.md ? 180 : 200;
  }, [documentWidth]);

  const imageResizeFactor = useMemo(() => {
    return documentWidth > screenBreakpoints.md ? 20 : 80;
  }, [documentWidth]);

  const imageContainerSize = useMemo(() => {
    const lastImage = imageCollection.find(
      image => image.position === imageCollection.length - 1,
    );
    return lastImage ? `${lastImage.distanceToLeft + lastImage.size}px` : '0px';
  }, [imageCollection]);

  const shiftImages = useMemo(() => {
    if (documentWidth > screenBreakpoints.md) {
      const smallestImageSize = Math.min(
        ...imageCollection.map(image => image.size).filter(size => size > 0),
      );
      return -1 * Math.floor(smallestImageSize / 2);
    }

    return 0;
  }, [documentWidth, imageCollection]);

  useEffect(() => {
    setInterval(() => {
      setAnimationTimeReference(prev => prev + 1);
    }, 1000);
  }, []);

  const iterateCarousel = useCallback(() => {
    setImageCollection(prevImageCollection =>
      prevImageCollection.map(image => {
        const resultImage = { ...image };

        if (resultImage.position - 1 >= 0) {
          resultImage.position -= 1;
        } else {
          resultImage.position = prevImageCollection.length - 1;
        }

        resultImage.positionDistanceToMiddle = Math.abs(
          middleImageIndex - resultImage.position,
        );

        let distanceToLeft = 0;
        for (let i = 0; i < resultImage.position; i += 1) {
          const currentImage = prevImageCollection.find(
            findImage => findImage.position === i,
          );

          let size =
            maxImageWidth -
            imageResizeFactor * currentImage.positionDistanceToMiddle;
          if (size < 0) {
            size = 0;
          }

          const padding = size > 0 ? 40 : 0;

          distanceToLeft += size + padding;
        }
        resultImage.distanceToLeft = distanceToLeft;
        let size =
          maxImageWidth -
          imageResizeFactor * resultImage.positionDistanceToMiddle;
        if (size < 0) {
          size = 0;
        }
        resultImage.size = size;

        return resultImage;
      }),
    );
  }, [middleImageIndex, imageResizeFactor, maxImageWidth]);

  useEffect(() => {
    if (animationTimeReference % 2 === 0) {
      iterateCarousel();
    }
  }, [animationTimeReference, iterateCarousel]);

  return (
    <Container>
      <Content size={imageContainerSize}>
        {imageCollection.map(image => {
          return (
            <DisplayImage
              key={image.id}
              positionDistanceToMiddle={image.positionDistanceToMiddle}
              distanceToLeft={image.distanceToLeft}
              imageSize={image.size}
              imageBlurFactor={imageBlurFactor}
              isLastImage={image.position === imageCollection.length - 1}
              shiftImages={shiftImages}
              animationTimeReference={animationTimeReference}
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
