import tw from 'tailwind-styled-components';

export const Container = tw.header`
  flex
  flex-row
  justify-between
  items-center
  h-14
  px-20
  bg-transparent
  absolute
  inset-0
  text-white
  z-10
`;

export const Logo = tw.div`
  bg-white
  rounded-lg
  text-black
  py-1
  p-2
  font-bold
`;

export const Navigator = tw.nav`
  space-x-8
`;

export const SocialMedia = tw.div`
  flex
  flex-row
  space-x-4
  text-2xl
`;
