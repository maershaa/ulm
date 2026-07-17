import styled from 'styled-components';

export const Switcher = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2px;

  padding: 2px;

  border: 1px solid var(--border-color-strong);
  border-radius: var(--radius-lg);

  background-color: var(--primary-bg-dark-color);

  transition: var(--transition-base);
`;

export const LanguageButton = styled.button`
  min-width: 34px;
  height: 28px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 10px;

  border-radius: calc(var(--radius-lg) - 2px);

  font-family: 'Manrope', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.03em;

  color: ${({ $active }) =>
    $active
      ? 'var(--primary-bg-dark-color)'
      : 'var(--primary-text-color-light)'};

  background-color: ${({ $active }) =>
    $active ? 'var(--primary-text-color-light)' : 'transparent'};

  opacity: ${({ $active }) => ($active ? 1 : 0.75)};

  transition: var(--transition-base);

  &:hover {
    opacity: 1;
    background-color: ${({ $active }) =>
      $active
        ? 'var(--primary-text-color-light)'
        : 'rgba(255, 255, 255, 0.08)'};
  }

  &:focus-visible {
    outline: 2px solid var(--primary-text-color-light);
    outline-offset: 2px;
  }

  &:active {
    transform: scale(0.96);
  }
`;
