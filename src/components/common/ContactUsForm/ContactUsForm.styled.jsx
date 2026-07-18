import styled from 'styled-components';
import { breakpoints } from '@/assets/styles/breakpoints';

export const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;

  margin: 0 auto;
  padding: 50px 30px;

  background-color: ${({ theme }) => theme.colors.card};

  border-radius: ${({ theme }) => theme.radius.md};

  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.tabletLg}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
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
  color: var(--text-color);

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.1rem;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};

  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 1rem;

  @media (min-width: ${breakpoints.desktop}) {
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
  border: 1px solid #ddd;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 0.9rem;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1rem;
  }

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const FormButton = styled.button`
  cursor: pointer;

  padding: 0.75rem 1.1rem;
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: none;

  font-size: 0.9rem;

  background-color: ${({ theme }) => theme.colors.accent};

  color: #fff;

  transition: ${({ theme }) => theme.transitions.base};

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1rem;
  }

  &:hover {
    background-color: #196f97;
  }
`;
