import styled from 'styled-components';
import { breakpoints } from '@/assets/styles/breakpoints';

export const LayoutWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  background-color: var(--page-bg-color);

  main {
    flex-grow: 1;
    display: flex;
    width: 100%;
    position: relative;

    position: relative;
    isolation: isolate;

    &::before {
      z-index: -1;
    }

    @media (min-width: ${breakpoints.desktopLg}) {
      align-items: center;
    }

    /* блик 1 —  по центру */
    &::before {
      content: '';
      position: absolute;
      width: 450px;
      height: 450px;
      border-radius: var(--radius-round);
      pointer-events: none;
      z-index: 0;
      filter: blur(220px);

      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      background: var(--accent-color);
      opacity: 1;
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 450px;
    height: 450px;
    border-radius: var(--radius-round);
    pointer-events: none; /* Чтобы сквозь них можно было кликать */
    z-index: 0;
    filter: blur(220px);
  }

  /* блик 2 - верхний левый угол */
  &::before {
    top: 5%;
    left: -150px;
    background: var(--accent-color);
    opacity: 0.8;
  }

  /* блик 3 —  нижний правый угол */
  &::after {
    bottom: 10%;
    right: -150px;
    background: var(--accent-color);
    opacity: 0.9;
  }
`;
