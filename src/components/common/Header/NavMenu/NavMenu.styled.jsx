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

  color: var(--text-color-muted);
  border: none;
  border-radius: var(--radius-lg);

  font-size: 0.9rem;
  font-weight: 500;

  transition: var(--transition-base);

  &:hover,
  &:focus-visible {
    color: var(--primary-text-color-light);
  }

  &.active {
    color: var(--primary-text-color-light);
    background-color: var(--light-accent);
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

      background-color: var(--light-accent);

      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.25s ease;
    }

    &.active {
      background-color: transparent;
    }

    &.active::after {
      transform: scaleX(1);
    }
  }
`;
