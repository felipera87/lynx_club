import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 8px;
  position: relative;

  transition: background-color 0.2s;

  ${props => {
    if (props.dark) {
      return css`
        color: #fff;
        background: #000;

        &:hover {
          background: ${shade(0.8, '#fff')};
        }
      `;
    }
    return css`
      color: #000;
      background: #fff;

      &:hover {
        background: ${shade(0.2, '#fff')};
      }
    `;
  }}

  padding: 12px 28px;
  font-weight: 700;
`;
