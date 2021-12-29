import styled, { css } from 'styled-components';
import tw from 'tailwind-styled-components';

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
  h-14
  px-5
  md:px-20
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

export const Logo = tw.div`
  bg-white
  rounded-lg
  text-black
  py-1
  p-2
  font-bold
  text-xs
`;

export const Navigator = tw.nav`
  space-x-8
`;

export const SocialMedia = tw.div`
  flex
  flex-row
  space-x-4
  md:text-2xl
`;
