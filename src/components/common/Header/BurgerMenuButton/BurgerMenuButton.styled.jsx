import styled from 'styled-components';
import { breakpoints } from '@/assets/styles/breakpoints';

export const BtnBurger = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2001; //потому что нужно перекрыть MobMenuContainer с z-index: 2000

  @media (min-width: ${breakpoints.desktopLg}) {
    display: none;
  }
`;

export const SvgIconBurger = styled.svg`
  width: 32px;
  height: 32px;
  stroke: white;
`;
