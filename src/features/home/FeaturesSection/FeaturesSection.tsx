import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import {
  SectionWrapper,
  FeatureList,
  FeatureCard,
  ImageWrapper,
  StyledImage,
  Overlay,
  CardContent,
  FeatureNumber,
  FeatureItemTitle,
  FeatureItemText,
  MoreButton,
} from './FeaturesSection.styled';

import FeaturesModal from '@/features/home/FeaturesModal/FeaturesModal';
import { featuresData } from '@/constants';
import { Subtitle } from '@/components';
import { Feature } from '@/types';

const FeaturesSection = () => {
  const { t } = useTranslation('home');

  const isTabletLg = useMediaQuery({
    minWidth: '768px',
  });

  const [showFeaturesModal, setShowFeaturesModal] = useState(false);
  const [modalContent, setModalContent] = useState<Feature | null>(null);

  const openFeaturesModal = (feature: Feature) => {
    setModalContent(feature);
    setShowFeaturesModal(true);
  };

  return (
    <SectionWrapper id="features">
      <Subtitle subtitle={t('features.title')} />

      <FeatureList>
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            onClick={isTabletLg ? () => openFeaturesModal(feature) : undefined}
          >
            <ImageWrapper>
              <StyledImage
                src={feature.imageSrc}
                alt={t(`features.items.${feature.id}.alt`)}
                loading="lazy"
              />

              <Overlay />
            </ImageWrapper>

            <CardContent>
              <FeatureNumber>
                {String(index + 1).padStart(2, '0')}
              </FeatureNumber>

              <FeatureItemTitle>
                {t(`features.items.${feature.id}.title`)}
              </FeatureItemTitle>

              <FeatureItemText>
                {t(`features.items.${feature.id}.description`)}
              </FeatureItemText>

              <MoreButton type="button">{t('features.more')}</MoreButton>
            </CardContent>
          </FeatureCard>
        ))}
      </FeatureList>

      {showFeaturesModal && modalContent && (
        <FeaturesModal
          show={showFeaturesModal}
          onClose={() => setShowFeaturesModal(false)}
          featureContent={modalContent}
        />
      )}
    </SectionWrapper>
  );
};

export { FeaturesSection };
