import styled from 'styled-components';

export const ProductsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 10px;

  align-items: stretch;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    gap: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLg}) {
    gap: 30px;
  }
`;
