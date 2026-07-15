import styled from 'styled-components';
import { breakpoints } from '@/assets/styles/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 20px;

  @media (min-width: ${breakpoints.tabletLg}) {
    flex-wrap: nowrap;
  }
`;
