import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    flex-wrap: nowrap;
  }
`;
