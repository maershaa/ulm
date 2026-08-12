import styled from 'styled-components';

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
    padding-top: 92px; //header height === 72 и чуть с запасом чтобы красиво смотрелось

    flex-grow: 1;
    display: flex;
    width: 100%;
    position: relative;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktopLg}) {
      align-items: center;
    }
  }
`;
