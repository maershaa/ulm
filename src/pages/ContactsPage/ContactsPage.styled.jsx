import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 20px;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;
