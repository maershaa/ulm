import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;

  position: fixed;

  top: 0;
  left: 0;
  right: 0;

  z-index: ${({ theme }) => theme.zIndex.header};

  padding: 0 30px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.colors.brand};

  border-bottom: 1px solid ${({ theme }) => theme.colors.accentLight};

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    padding: 0 50px;
  }
`;
