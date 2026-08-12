import {
  SectionWrapper,
  Block,
  AboutUsInfo,
  InfoContainer,
} from './AboutUsSection.styled';
import { Title } from '@/components';
import bgImageAboutUsPage from '@/assets/images/aboutUs/bg-tin.jpeg';

import { useTranslation } from 'react-i18next';

const AboutUsSection = () => {
  const { t } = useTranslation('home');

  return (
    <SectionWrapper id="aboutUs">
      <Block $bgImageAboutUsPage={bgImageAboutUsPage}>
        <InfoContainer>
          <Title title={t('aboutUs.title')} />

          <AboutUsInfo>{t('aboutUs.paragraph1')}</AboutUsInfo>

          <AboutUsInfo>{t('aboutUs.paragraph2')}</AboutUsInfo>

          <AboutUsInfo>{t('aboutUs.paragraph3')}</AboutUsInfo>
        </InfoContainer>
      </Block>
    </SectionWrapper>
  );
};

export { AboutUsSection };
