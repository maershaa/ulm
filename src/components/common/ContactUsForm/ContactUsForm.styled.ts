import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;

  margin: 0 auto;
  padding: 50px 30px;

  background-color: ${({ theme }) => theme.colors.card};

  border-radius: ${({ theme }) => theme.radius.md};

  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 15px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 1rem;
  margin-left: 2px;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.1rem;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;

  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radius.sm};

  font-size: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.1rem;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};

    outline: none;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.1rem;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};

    outline: none;
  }
`;

export const FormButton = styled.button`
  cursor: pointer;

  padding: 12px 16px;
  font-size: 0.9rem;
  text-transform: uppercase;

  border-radius: ${({ theme }) => theme.radius.sm};
  border: none;

  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.textInverse};

  transition: ${({ theme }) => theme.transitions.base};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentLight};
  }
`;
