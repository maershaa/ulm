import styled from 'styled-components';

export const ErrorMessage = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 5px 10px;
  font-size: 0.8rem;

  border-radius: var(--radius-md);

  border: 1px solid var(--border-color);
  background: rgba(248, 184, 98, 0.1);
  box-shadow: 0 0 15px rgba(248, 184, 98, 0.4);
  opacity: 0.8;

  svg {
    color: #ad6a13;
  }

  span {
    color: #ad6a13;
  }
`;
