import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  color: #828282;
  height: 300px;
  padding: 80px 0;

  & > a {
    text-decoration: underline;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: underline;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  font-weight: 900;

  & > h2 {
    font-size: 25px;

    &:first-child {
      color: #fff;
    }
    &:not(:first-child) {
      color: #000;
      text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
      margin-left: 5px;
    }
  }
`;
