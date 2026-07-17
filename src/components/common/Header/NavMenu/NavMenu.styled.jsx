import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints } from '@/assets/styles/breakpoints';

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;

  @media (min-width: ${breakpoints.desktopLg}) {
    flex-direction: row;
    align-items: center;
    gap: 32px;
  }
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;

  color: var(--primary-text-color-light);

  border: 1px solid var(--primary-text-color-light);
  border-radius: var(--radius-lg);

  font-size: 0.8rem;
  font-weight: 500;

  transition: var(--transition-base);

  position: relative;

  padding: 4px 0;

  color: var(--text-color-muted);
  border: none;

  font-size: 0.9rem;

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

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1rem;
  }

  &:hover,
  &:focus-visible,
  &.active {
    color: var(--primary-text-color-light);
  }

  &:hover::after,
  &:focus-visible::after,
  &.active::after {
    transform: scaleX(1);
  }
`;
