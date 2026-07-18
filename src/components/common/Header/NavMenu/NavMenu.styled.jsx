import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints } from '@/assets/styles/breakpoints';

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (min-width: ${breakpoints.desktopLg}) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  justify-content: center;

  @media (min-width: ${breakpoints.desktopLg}) {
    flex-direction: row;
    align-items: center;
    gap: 32px;
  }
`;

export const StyledLink = styled(Link)`
  position: relative;
  padding: 6px 14px;

  color: ${({ theme }) => theme.colors.textSecondary};

  border: none;
  border-radius: ${({ theme }) => theme.radius.lg};

  font-size: 0.9rem;
  font-weight: 500;

  transition: ${({ theme }) => theme.transitions.base};

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.textInverse};
  }

  &.active {
    color: ${({ theme }) => theme.colors.textInverse};

    background-color: ${({ theme }) => theme.colors.accentLight};
    font-weight: 600;
  }

  @media (min-width: ${breakpoints.desktopLg}) {
    font-size: 1rem;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;

      width: 100%;
      height: 2px;

      background-color: ${({ theme }) => theme.colors.accentLight};
      transform: scaleX(0);
      transform-origin: left;
      transition: ${({ theme }) => theme.transitions.base};
    }

    &.active {
      background-color: transparent;
    }

    &.active::after {
      transform: scaleX(1);
    }
  }
`;
