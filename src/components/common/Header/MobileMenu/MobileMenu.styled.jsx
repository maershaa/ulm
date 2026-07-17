import styled from 'styled-components';
// import { breakpoints } from '@/assets/styles/breakpoints';

import bg224 from '@/assets/images/mob-menu-bg/bg224.png'; // перевірте правильність шляху та імпорту
import bg223 from '@/assets/images/mob-menu-bg/bg223.png';
import bg222 from '@/assets/images/mob-menu-bg/bg222.png';

export const MobMenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  z-index: 2000;
  background-color: var(--primary-bg-dark-color);

  nav {
    margin-top: 30px;
  }
`;

export const BackgroundsColores = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2001;
  background:
    url(${bg224}) no-repeat center center / cover,
    url(${bg223}) no-repeat center center / cover,
    url(${bg222}) no-repeat center center / cover;
`;

export const LineMobile = styled.div`
  height: 2px;
  width: 100%;
  background-color: var(--primary-bg-dark-color);
`;
