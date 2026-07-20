import {
  ModalContainer,
  ModalContent,
  CloseButton,
  ModalImage,
  ModalBody,
  ModalTitle,
  ModalDivider,
  ModalText,
} from './FeaturesModal.styled';

import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { IoClose } from 'react-icons/io5';

const FeaturesModal = ({ show, onClose, featureContent }) => {
  const { t } = useTranslation('home');

  const isTablet = useMediaQuery({
    minWidth: '768px',
  });

  if (!show || !isTablet) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalContainer onClick={handleBackdropClick}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton aria-label="Close" onClick={onClose}>
          <IoClose />
        </CloseButton>

        <ModalImage
          src={featureContent.imageSrc}
          alt={t(`features.items.${featureContent.id}.alt`)}
        />

        <ModalBody>
          <ModalTitle>
            {t(`features.items.${featureContent.id}.title`)}
          </ModalTitle>

          <ModalDivider />

          <ModalText>
            {t(`features.items.${featureContent.id}.description`)}
          </ModalText>
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  );
};

export default FeaturesModal;
