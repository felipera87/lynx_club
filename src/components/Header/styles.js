import styled, { css } from 'styled-components';
import tw from 'tailwind-styled-components';

import openseaShadowedIcon from '../../assets/opensea_shadow.svg';

export const Container = tw.header`
  absolute
  inset-0
  z-30
`;

const MainHeaderElements = styled.div`
  & > button {
    font-size: 30px;
  }

  ${props => {
    if (props.isOpen) {
      return css`
        background-color: white;
        color: black;
      `;
    }
    return css`
      background-color: transparent;
      color: white;
    `;
  }}
`;

export const MainHeader = tw(MainHeaderElements)`
  w-full
  flex
  flex-row
  justify-between
  items-center
  h-24
  pt-2
  px-5
  md:px-20
  relative
`;

const CollapsableMenuElements = styled.ul`
  & > li {
    padding: 35px 20px;
    font-weight: 700;
  }
`;

export const CollapsableMenu = tw(CollapsableMenuElements)`
  w-full
  flex
  flex-col
  items-center
  bg-white
  text-black
  h-50
`;

const LogoElements = styled.div`
  left: calc(50% - 50px);
  & > a > img {
    width: 100px;
  }
`;

export const Logo = tw(LogoElements)`
  rounded-lg
  text-black
  py-1
  font-bold
  text-xs
  absolute
  md:static
`;

export const Navigator = tw.nav`
  space-x-8
`;

const SocialMediaElements = styled.div`
  & > a {
    & > svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const SocialMedia = tw(SocialMediaElements)`
  flex
  flex-row
  space-x-4
  md:text-2xl
`;

export const Icon = styled.div`
  width: 25px;
  height: 25px;
  background: url(${props => props.src});
  background-size: 100% 100%;

  &:hover {
    background: url(${openseaShadowedIcon});
    background-size: 100% 100%;
  }
`;
