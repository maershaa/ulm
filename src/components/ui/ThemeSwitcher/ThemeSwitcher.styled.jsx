import styled from 'styled-components';
import { breakpoints } from '@/assets/styles/breakpoints';

export const ThemeSwitcherWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: start;

  @media (min-width: ${breakpoints.desktop}) {
    margin-top: 0;
    margin-left: 20px;
    align-items: center;
  }

  input {
    width: 0;
    height: 0;
    visibility: hidden;
    position: absolute;
  }

  label {
    position: relative;
    display: block;

    width: 70px;
    height: 26px;

    border-radius: var(--radius-lg);

    background: var(--accent-color);
    border: 1px solid var(--border-color-strong);
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    transition: var(--transition-base);
  }

  /* Ползунок (солнце) */
  label::after {
    content: '';
    width: 22px;
    height: 22px;
    position: absolute;
    top: 1px;
    left: 2px;

    background: linear-gradient(135deg, #ffdf9e, #f39c12);
    border-radius: var(--radius-round);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Темная тема */
  input:checked + label {
    background: var(--primary-bg-dark-color);
    border-color: var(--light-accent);
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.4);
  }

  /* Ползунок в темной теме (луна) */
  input:checked + label:after {
    left: 68px;
    transform: translateX(-100%);
    background: linear-gradient(135deg, #4ea8d8, #032541);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  }

  /* Эффект вытягивания в форме элипса при клике на свг */
  label:active:after {
    width: 28px;
  }

  /* Иконки */
  label svg {
    position: absolute;
    width: 14px;
    height: 14px;
    top: 5px;
    z-index: 10;
    transition: var(--transition-base);
  }

  /* Солнце слева */
  label svg.sun {
    left: 6px;
    fill: var(--text-color);
    opacity: 0.8;
  }

  /* Луна справа */
  label svg.moon {
    left: 50px;
    fill: var(--text-color-muted);
    opacity: 0.4;
  }

  /* Состояние иконок в темной теме */
  input:checked + label svg.sun {
    fill: var(--text-color-muted);
    opacity: 0.4;
  }

  input:checked + label svg.moon {
    fill: #ffffff;
    opacity: 1;
  }
`;
