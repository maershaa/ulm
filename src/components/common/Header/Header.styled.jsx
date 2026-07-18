import styled from 'styled-components';
import { breakpoints } from '@/assets/styles/breakpoints';
import { zIndex } from '@/assets/styles/zIndex';

export const HeaderContainer = styled.div`
  min-width: 100%;

  position: sticky;
  top: 0;
  z-index: ${zIndex.header};

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.brand};
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;

  border-top-left-radius: ${({ theme }) => theme.radius.lg};
  border-top-right-radius: ${({ theme }) => theme.radius.lg};

  border-bottom: 1px solid ${({ theme }) => theme.colors.accentLight};

  @media (min-width: ${breakpoints.tabletLg}) {
    padding: 0 25px;
  }
`;
