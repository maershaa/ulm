import {
  ModalContainer,
  ModalContent,
  CloseButton,
  ModalImage,
  ModalText,
} from './FeaturesModal.styled';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

// Основной компонент модалки
const FeaturesModal = ({ show, onClose, featureContent }) => {
  const { t } = useTranslation('home');

  // Используем медиазапрос для проверки ширины экрана
  const isTabletLg = useMediaQuery({ minWidth: '768px' });

  // Если show=false, модалка не отображается
  if (!show) return null;

  // Закрытие модалки при клике на фон (вне модалки)
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isTabletLg) return null;

  return (
    <ModalContainer onClick={handleBackdropClick}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton aria-label="Close modal" onClick={onClose}>
          ×
        </CloseButton>
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
