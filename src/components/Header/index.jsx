import React, { useMemo, useState, useCallback } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { v4 as uuid } from 'uuid';

import {
  Container,
  MainHeader,
  CollapsableMenu,
  Logo,
  Navigator,
  SocialMedia,
} from './styles';

import logo from '../../assets/logo_transparent.png';
import openseaIcon from '../../assets/opensea.svg';
import openseaBlackIcon from '../../assets/opensea_black.svg';

import { useGlobalData } from '../../hooks/global';

import { screenBreakpoints } from '../../utils/screenBreakpoints';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { documentWidth } = useGlobalData();

  const handleOpenMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const navigatorRoutes = useMemo(() => {
    return [
      {
        id: uuid(),
        path: '#about-section',
        label: 'Specifications',
      },
      {
        id: uuid(),
        path: '#story-section',
        label: 'What it is?',
      },
      {
        id: uuid(),
        path: '#roadmap-section',
        label: 'Roadmap',
      },
      {
        id: uuid(),
        path: '#team-section',
        label: 'The Team',
      },
    ];
  }, []);

  return (
    <Container>
      <MainHeader isOpen={isMenuOpen}>
        {documentWidth <= screenBreakpoints.md && (
          <button type="button" onClick={handleOpenMenu}>
            <FiMenu />
          </button>
        )}

        {!isMenuOpen && (
          <Logo>
            <a
              href="https://billionairelynxclub.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logo} alt="Lynx Billionaire Club" />
            </a>
          </Logo>
        )}
        {documentWidth > screenBreakpoints.md && (
          <Navigator>
            {navigatorRoutes.map(route => {
              return (
                <HashLink key={route.id} to={route.path}>
                  {route.label}
                </HashLink>
              );
            })}
          </Navigator>
        )}

        <SocialMedia>
          <a
            href="https://twitter.com/lynxclubnft/"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord />
          </a>
          <a
            href="https://instagram.com/lynxclubnft/"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://opensea.io/collection/billionairelynxclub"
            target="_blank"
            rel="noreferrer"
          >
            {isMenuOpen && <img src={openseaBlackIcon} alt="Opensea" />}
            {!isMenuOpen && <img src={openseaIcon} alt="Opensea" />}
          </a>
        </SocialMedia>
      </MainHeader>
      {isMenuOpen && (
        <CollapsableMenu>
          {navigatorRoutes.map(route => {
            return (
              <li key={route.id}>
                <a href={route.path}>{route.label}</a>
              </li>
            );
          })}
        </CollapsableMenu>
      )}
    </Container>
  );
};

export default Header;
