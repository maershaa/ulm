import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const StyledLink = styled(Link)`
  position: relative;
  padding: 4px 0;

  font-family: var(--font-heading);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.04em;

  color: rgba(245, 243, 239, 0.72);
  text-decoration: none;

  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;

    width: 100%;
    height: 1px;

    background-color: var(--accent-color);

    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
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
