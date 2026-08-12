import styled from 'styled-components';

export const ErrorMessage = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 5px 10px;
  font-size: 0.8rem;

  color: ${({ theme }) => theme.colors.warning};
  background: ${({ theme }) => theme.colors.warningBg};
  border: 1px solid ${({ theme }) => theme.colors.warning};
  border-radius: ${({ theme }) => theme.radius.sm};

  box-shadow: ${({ theme }) => theme.shadows.xs};

  svg {
    color: ${({ theme }) => theme.colors.warning};
  }

  span {
    color: ${({ theme }) => theme.colors.warning};
  }
`;
