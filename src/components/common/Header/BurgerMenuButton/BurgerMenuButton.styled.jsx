import styled from 'styled-components';
import { breakpoints } from '@/assets/styles/breakpoints';
import { zIndex } from '@/assets/styles/zIndex';

export const BtnBurger = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  // Должна быть выше мобильного меню, иначе иконку "закрыть" будет не видно
  z-index: ${zIndex.burgerButton};

  @media (min-width: ${breakpoints.desktopLg}) {
    display: none;
  }
`;

export const SvgIconBurger = styled.svg`
  width: 32px;
  height: 32px;
  stroke: var(--primary-text-color-light);
`;
