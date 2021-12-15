import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Title } from './styles';

const Footer = () => {
  return (
    <Container>
      <Title>
        <h2>BILLIONAIRE</h2>
        <h2>LYNX CLUB</h2>
      </Title>

      <Link to="terms">Terms & Conditions</Link>

      <span>2021 Billionaire Lynx Club. All Rights Reserved.</span>
    </Container>
  );
};

export default Footer;
