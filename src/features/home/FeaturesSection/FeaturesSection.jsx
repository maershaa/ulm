import { useState } from 'react';
import {
  SectionWrapper,
  FeatureList,
  FeatureItem,
  TextContainer,
  StyledImage,
  FeatureItemTitle,
  FeatureItemText,
} from './FeaturesSection.styled';
import FeaturesModal from '@/features/home/FeaturesModal/FeaturesModal';
import { featuresData } from '@/constants';
import { Title } from '@/components';
import { useTranslation } from 'react-i18next';

const FeaturesSection = () => {
  const [showFeaturesModal, setShowFeaturesModal] = useState(false);

  // Состояние для хранения данных текущей особенности, которые будут отображаться в модалке
  const [modalContent, setModalContent] = useState({});

  const openFeaturesModal = (feature) => {
    setModalContent(feature);
    setShowFeaturesModal(true);
  };

  const closeFeaturesModal = () => {
    setShowFeaturesModal(false);
  };

  const { t } = useTranslation('home');

  return (
    <SectionWrapper id="features">
      <Title title={t('features.title')} />
      <FeatureList>
        {featuresData.map((feature) => (
          <FeatureItem
            key={feature.id}
            onClick={() => openFeaturesModal(feature)}
          >
            <StyledImage
              src={feature.imageSrc}
              alt={t(`features.items.${feature.id}.alt`)}
              loading="lazy"
            />
            <TextContainer>
              <FeatureItemTitle>
                {t(`features.items.${feature.id}.title`)}
              </FeatureItemTitle>
              <FeatureItemText>
                {t(`features.items.${feature.id}.description`)}
              </FeatureItemText>
            </TextContainer>
          </FeatureItem>
        ))}
      </FeatureList>

      {/* Компонент модалки */}
      {showFeaturesModal && (
        <FeaturesModal
          show={showFeaturesModal}
          onClose={closeFeaturesModal}
          featureContent={modalContent}
        />
      )}
    </SectionWrapper>
  );
};

export { FeaturesSection };
