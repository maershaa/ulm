import styled from 'styled-components';

export const BtnBurger = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.textInverse};

  // Должна быть выше мобильного меню, иначе иконку "закрыть" будет не видно
  z-index: ${({ theme }) => theme.zIndex.burgerButton};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLg}) {
    display: none;
  }

  svg {
    width: 32px;
    height: 32px;
  }
`;
