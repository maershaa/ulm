import styled from 'styled-components';
import { breakpoints } from '@/assets/styles/breakpoints';

export const LayoutWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  // Гарантирует, что z-index: -1 у <Glow /> не "провалится"
  // ниже фона body, а останется именно позади контента LayoutWrapper
  isolation: isolate;

  background-color: ${({ theme }) => theme.colors.page};

  main {
    flex-grow: 1;
    display: flex;
    width: 100%;
    position: relative;

    @media (min-width: ${breakpoints.desktopLg}) {
      align-items: center;
    }
  }
`;
