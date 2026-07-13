import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* Прячем всё, что выходит за границы экрана (особенно размытые края бликов) */
  overflow-x: hidden;

  background-color: var(--surface-bg-color);

  main {
    flex-grow: 1;
    display: flex;
    width: 100%;
    position: relative;

    @media (min-width: 1280px) {
      align-items: center;
    }

    /* блик 1 — тёмно-синий, по центру, самый мягкий */
    &::before {
      content: '';
      position: absolute;
      width: 450px;
      height: 450px;
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
      filter: blur(220px);

      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      background: var(--accent-color);
      opacity: 1;
    }

    & > * {
      position: relative;
      z-index: 1;
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 450px;
    height: 450px;
    border-radius: 50%;
    pointer-events: none; /* Чтобы сквозь них можно было кликать */
    z-index: 0;
    filter: blur(220px); /* Мощное размытие для мягкого свечения */
  }

  /* блик 2 — бирюзовый акцент, верхний левый угол */
  &::before {
    top: 5%;
    left: -150px;
    background: var(--accent-color);
    opacity: 0.8;
  }

  /* блик 3 — тёплый медный акцент, нижний правый угол */
  &::after {
    bottom: 10%;
    right: -150px;
    background: var(--accent-color);
    opacity: 0.9;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;
