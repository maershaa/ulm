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

  background-color: var(--primary-bg-dark-color);

  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;

  border-top-left-radius: var(--radius-lg);
  border-top-right-radius: var(--radius-lg);

  border-bottom: 1px solid var(--light-accent);
  box-shadow:
    rgba(46, 47, 66, 0.08) 0px 2px 1px,
    rgba(46, 47, 66, 0.16) 0px 1px 1px,
    rgba(46, 47, 66, 0.08) 0px 1px 6px;

  @media (min-width: ${breakpoints.tabletLg}) {
    padding: 0 25px;
  }
`;
