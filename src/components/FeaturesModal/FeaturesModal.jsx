import React from 'react';
import {
  ModalContainer,
  ModalContent,
  CloseButton,
  ModalImage,
  ModalText

} from './FeaturesModal.styled';

// Основной компонент модалки
const FeaturesModal = ({ show, onClose, text, imageSrc }) => {
  // Если show=false, модалка не отображается
  if (!show) return null;

  // Закрытие модалки при клике на фон (вне модалки)
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalContainer onClick={handleBackdropClick}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ModalImage src={imageSrc} alt="Expanded view" />
        <ModalText>{text}</ModalText>
      </ModalContent>
    </ModalContainer>
  );
};

export default FeaturesModal;
