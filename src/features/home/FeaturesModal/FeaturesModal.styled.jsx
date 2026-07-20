import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 32px;

  background: rgba(3, 37, 65, 0.75);
  backdrop-filter: blur(6px);

  z-index: ${({ theme }) => theme.zIndex.modalBackdrop};
`;

export const ModalContent = styled.div`
  position: relative;

  width: 100%;
  max-width: 760px;

  overflow: hidden;

  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

export const ModalImage = styled.img`
  width: 100%;
  aspect-ratio: 16/9;

  object-fit: cover;
`;

export const ModalBody = styled.div`
  padding: 36px;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;

  margin-bottom: 18px;

  color: ${({ theme }) => theme.colors.textPrimary};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.8rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 2.2rem;
  }
`;

export const ModalDivider = styled.div`
  width: 100px;
  height: 3px;

  margin-bottom: 26px;

  background: ${({ theme }) => theme.colors.accent};
`;

export const ModalText = styled.p`
  line-height: 1.9;
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.textSecondary};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.1rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;

  top: 20px;
  right: 20px;

  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ theme }) => theme.radius.round};

  background: rgba(255, 255, 255, 0.95);
  color: ${({ theme }) => theme.colors.brand};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: white;
  }

  svg {
    width: 26px;
    height: 26px;
    flex-shrink: 0;
  }
`;
