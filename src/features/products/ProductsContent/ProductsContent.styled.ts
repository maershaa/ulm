import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  margin-right: auto;
  margin-left: auto;

  padding: 40px 20px;
`;

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

export const Description = styled.p`
  max-width: 760px;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 1.05rem;
  line-height: 1.8;
  text-align: center;

  margin: 0 auto 20px auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 auto 40px auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.15rem;
  }
`;
