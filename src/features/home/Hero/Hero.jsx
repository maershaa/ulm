import {
  HeroContainer,
  Block,
  HeroPrimaryText,
  HeroInfo,
  ButtonsGroup,
} from './Hero.styled';
import heroImage from '@/assets/images/Hero/hero.jpeg';
import heroImageTablet from '@/assets/images/Hero/lots_of_tins.jpeg';
import heroImageMobile from '@/assets/images/Hero/lots_of_tins_mb.jpeg';

import { ContactUsForm } from '@/components';

import { FaIndustry, FaShieldAlt } from 'react-icons/fa';

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

      <ContactUsForm />
    </HeroContainer>
  );
};

export { Hero };
