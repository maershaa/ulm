import styled from 'styled-components';

export const HeaderContainer = styled.div`
  min-width: 100%;

  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.header};

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.brand};
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;

  border-bottom: 1px solid ${({ theme }) => theme.colors.accentLight};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-top-left-radius: ${({ theme }) => theme.radius.lg};
    border-top-right-radius: ${({ theme }) => theme.radius.lg};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    padding: 0 25px;
  }
`;
