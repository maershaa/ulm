import styled from 'styled-components';
import { breakpoints } from '@/assets/styles/breakpoints';

export const ThemeSwitcherWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: ${breakpoints.desktopLg}) {
    margin-left: 20px;
  }

  input {
    width: 0;
    height: 0;
    visibility: hidden;
    position: absolute;
  }

  label {
    cursor: pointer;

    position: relative;
    display: block;

    overflow: hidden;

    width: 92px;
    height: 34px;

    border: 1px solid ${({ theme }) => theme.colors.borderStrong};
    border-radius: ${({ theme }) => theme.radius.lg};
    background: ${({ theme }) => theme.colors.accent};

    transition: ${({ theme }) => theme.transitions.base};
  }

  /* Ползунок (солнце) */
  label::after {
    content: '';
    width: 30px;
    height: 30px;
    position: absolute;
    top: 1px;
    left: 2px;

    background: linear-gradient(135deg, #ffdf9e, #f39c12);
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.shadows.switchThumb};
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Темная тема */
  input:checked + label {
    background: ${({ theme }) => theme.colors.brand};
    border-color: ${({ theme }) => theme.colors.accentLight};
    box-shadow: ${({ theme }) => theme.shadows.switchTrackDark};
  }

  /* Ползунок в темной теме (луна) */
  input:checked + label:after {
    left: 58px;
    background: linear-gradient(135deg, #4ea8d8, #032541);
    box-shadow: ${({ theme }) => theme.shadows.switchThumbDark};
  }

  /* Эффект вытягивания в форме элипса при клике на свг */
  label:active:after {
    width: 34px;
  }

  /* Иконки */
  label svg {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 8px;
    z-index: 10;
    transition: ${({ theme }) => theme.transitions.base};
  }

  /* Солнце слева */
  label svg.sun {
    left: 8px;
    fill: ${({ theme }) => theme.colors.textPrimary};

    opacity: 0.8;
  }

  /* Луна справа */
  label svg.moon {
    left: 66px;
    fill: ${({ theme }) => theme.colors.textSecondary};

    opacity: 0.4;
  }

  /* Состояние иконок в темной теме */
  input:checked + label svg.sun {
    fill: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.4;
  }

  input:checked + label svg.moon {
    fill: ${({ theme }) => theme.colors.textInverse};
    opacity: 1;
  }
`;
