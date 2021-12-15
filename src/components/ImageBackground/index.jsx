import React from 'react';

import { Container } from './styles';

const ImageBackground = ({ children }) => {
  return (
    <Container>
      <h1>ImageBackground</h1>
      {children}
    </Container>
  );
};

export default ImageBackground;
