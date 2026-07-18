import styled from 'styled-components';

export const Switcher = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2px;

  padding: 2px;

  border: 1px solid ${({ theme }) => theme.colors.borderStrong};

  border-radius: ${({ theme }) => theme.radius.lg};

  background-color: ${({ theme }) => theme.colors.brand};
  transition: ${({ theme }) => theme.transitions.base};
`;

export const LanguageButton = styled.button`
  min-width: 34px;
  height: 28px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 10px;

  border-radius: ${({ theme }) => theme.radius.lg};

  font-family: 'Manrope', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.03em;

  color: ${({ theme, $active }) =>
    $active ? theme.colors.textInverse : theme.colors.textSecondary};

  background: ${({ theme, $active }) =>
    $active ? theme.colors.accent : 'transparent'};

  opacity: ${({ $active }) => ($active ? 1 : 0.75)};

  transition: ${({ theme }) => theme.transitions.base};

  &:hover {
    opacity: 1;
    background: ${({ theme, $active }) =>
      $active ? theme.colors.accentLight : theme.colors.borderSubtle};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }

  &:active {
    transform: scale(0.96);
  }
`;
