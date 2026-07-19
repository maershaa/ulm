import styled from 'styled-components';

// Контейнер для всей модалки, включая затемнённый фон
export const ModalContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    padding: 24px;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    /* запрет прокрутки странички при открытой модалке */
    overflow: hidden;
    overscroll-behavior: none;

    background: rgba(3, 37, 65, 0.65);
    backdrop-filter: blur(5px);

    z-index: ${({ theme }) => theme.zIndex.modalBackdrop};
  }
`;

// Контейнер для контента модалки
export const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 680px;
  padding: 28px;

  background: ${({ theme }) => theme.colors.elevated};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};

  z-index: ${({ theme }) => theme.zIndex.modalContent};
`;

// Кнопка закрытия модалки
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 36px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;

  background: ${({ theme }) => theme.colors.elevated};
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.radius.round};

  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.textInverse};
  }
`;

export const ModalImage = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.md};
  margin-bottom: 24px;
`;

export const ModalText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;

  color: ${({ theme }) => theme.colors.textInverse};
`;
