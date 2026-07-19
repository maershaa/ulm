import { useTranslation } from 'react-i18next';

import { Title, Container } from '@/components';
import {
  Wrapper,
  UpdatedAt,
  Section,
  Heading,
  Text,
} from './PrivacyPolicyPage.styled';

const PrivacyPolicyPage = () => {
  const { t } = useTranslation('legal');

  // sections — массив { heading, text }, хранится в public/locales/*/legal.json
  const sections = t('privacyPolicy.sections', { returnObjects: true });

  return (
    <Container>
      <Wrapper>
        <Title title={t('privacyPolicy.title')} />
        <UpdatedAt>{t('privacyPolicy.lastUpdated')}</UpdatedAt>

        {sections.map((section, index) => (
          <Section key={index}>
            <Heading>{section.heading}</Heading>
            <Text>{section.text}</Text>
          </Section>
        ))}
      </Wrapper>
    </Container>
  );
};

export default PrivacyPolicyPage;
