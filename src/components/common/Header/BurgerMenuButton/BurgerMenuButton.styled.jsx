import styled from 'styled-components';
import { breakpoints } from '@/assets/styles/breakpoints';

export const BtnBurger = styled.button`
  background-color: inherit;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 101;

  @media (min-width: ${breakpoints.desktopLg}) {
    display: none;
  }
`;

export const SvgIconBurger = styled.svg`
  width: 32px;
  height: 32px;
  stroke: white;
`;
