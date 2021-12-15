import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaDiscord } from 'react-icons/fa';

import { Container, Logo, Navigator, SocialMedia } from './styles';

const Header = () => {
  return (
    <Container>
      <Logo>LOGO</Logo>
      <Navigator>
        <Link to="/specifications">Specifications</Link>
        <Link to="/whatisthis">What it is?</Link>
        <Link to="/roadmap">Roadmap</Link>
        <Link to="/team">The Team</Link>
      </Navigator>
      <SocialMedia>
        <a href="https://discord.com/" target="_blank" rel="noreferrer">
          <FaDiscord />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </SocialMedia>
    </Container>
  );
};

export default Header;
