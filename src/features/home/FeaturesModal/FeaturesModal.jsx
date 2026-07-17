import {
  ModalContainer,
  ModalContent,
  CloseButton,
  ModalImage,
  ModalText,
} from './FeaturesModal.styled';
import { useTranslation } from 'react-i18next';

// Основной компонент модалки
const FeaturesModal = ({ show, onClose, featureContent }) => {
  const { t } = useTranslation('home');

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
        <ModalImage
          src={featureContent.imageSrc}
          alt="Expanded view"
          loading="lazy"
        />
        <ModalText>
          {t(`features.items.${featureContent.id}.description`)}
        </ModalText>
      </ModalContent>
    </ModalContainer>
  );
};

export default FeaturesModal;
