import styled from 'styled-components';
// import { breakpoints } from '@/assets/styles/breakpoints';
import { zIndex } from '@/assets/styles/zIndex';

export const MobMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;

  background-color: ${({ theme }) => theme.colors.brand};
  z-index: ${zIndex.mobileMenu};
  overflow: hidden;
  isolation: isolate; // чтобы z-index: -1 у <Glow /> не терялся

  nav {
    margin-top: 30px;
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;

  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accentLight};
`;

export const MenuBody = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
