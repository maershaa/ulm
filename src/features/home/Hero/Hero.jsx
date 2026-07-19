import {
  HeroContainer,
  Block,
  HeroPrimaryText,
  HeroInfo,
  ButtonsGroup,
  FeaturesTitle,
  HeroFeatures,
  HeroFeature,
} from './Hero.styled';
import heroImage from '@/assets/images/Hero/hero.jpeg';
import heroImageTablet from '@/assets/images/Hero/lots_of_tins.jpeg';
import heroImageMobile from '@/assets/images/Hero/lots_of_tins_mb.jpeg';

import { FaIndustry, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import { FaBoxesStacked } from 'react-icons/fa6';
import { MdFactory } from 'react-icons/md';

import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation('home');

  return (
    <HeroContainer
      $heroImage={heroImage}
      $heroImageTablet={heroImageTablet}
      $heroImageMobile={heroImageMobile}
    >
      <Block>
        <HeroPrimaryText>{t('hero.title')}</HeroPrimaryText>

        <HeroInfo>{t('hero.subtitle1')}</HeroInfo>
        <HeroInfo>{t('hero.subtitle2')}</HeroInfo>

        <ButtonsGroup>
          <a href={'#aboutUs'}>
            <FaIndustry size={24} />
            {t('hero.linkAbout')}
          </a>
          <a href={'#features'}>
            <FaShieldAlt size={24} />
            {t('hero.linkFeatures')}
          </a>
        </ButtonsGroup>
      </Block>

      <HeroFeatures>
        <FeaturesTitle>{t('hero.featuresSection.title')}</FeaturesTitle>{' '}
        <HeroFeature>
          <FaCheckCircle />
          <span>{t('hero.featuresSection.quality')}</span>
        </HeroFeature>
        <HeroFeature>
          <MdFactory />
          <span>{t('hero.featuresSection.manufacturing')}</span>
        </HeroFeature>
        <HeroFeature>
          <FaBoxesStacked />
          <span>{t('hero.featuresSection.volumes')}</span>
        </HeroFeature>
      </HeroFeatures>
    </HeroContainer>
  );
};

export { Hero };
