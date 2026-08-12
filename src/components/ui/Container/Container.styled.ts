import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  padding: 0;

  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 24px;
  }
`;
