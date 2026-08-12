import { useTranslation } from 'react-i18next';

import { Title, Container } from '@/components';
import {
  Wrapper,
  UpdatedAt,
  Section,
  Heading,
  Text,
} from './PrivacyPolicyPage.styled';

interface PrivacyPolicySection {
  heading: string;
  text: string;
}

const PrivacyPolicyPage = () => {
  const { t } = useTranslation('legal');

  // sections — массив { heading, text }, хранится в public/locales/*/legal.json
  const sections = t('privacyPolicy.sections', {
    returnObjects: true,
  }) as PrivacyPolicySection[]; //Функция t() всегда возвращает string. Но когда вы передаёте { returnObjects: true }, вы говорите i18next: «верни мне не строку, а массив секций { heading, text } из legal.json). Когда мы пишем "as PrivacyPolicySection[]" вы явно говорите компилятору: «не пытайся выводить тип сам, доверься мне, здесь будет именно PrivacyPolicySection[]»

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
