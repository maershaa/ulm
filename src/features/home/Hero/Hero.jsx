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

import { FiCompass, FiPlusCircle } from 'react-icons/fi';

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

        <HeroInfo>{t('hero.subtitle')}</HeroInfo>

        <ButtonsGroup>
          <a href={'#aboutUs'}>
            <FiCompass size={32} />
            {t('hero.linkAbout')}
          </a>
          <a href={'#features'}>
            <FiPlusCircle size={32} />
            {t('hero.linkFeatures')}
          </a>
        </ButtonsGroup>
      </Block>

      <ContactUsForm />
    </HeroContainer>
  );
};

export { Hero };
