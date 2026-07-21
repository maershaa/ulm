import { FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import {
  Section,
  Content,
  Title,
  Description,
  ContactButton,
} from './CTASection.styled';

const CTASection = () => {
  const { t } = useTranslation('home');

  return (
    <Section>
      <Content>
        <Title>{t('cta.title')}</Title>

        <Description>{t('cta.description')}</Description>

        <ContactButton to="/contacts">
          <FaEnvelope size={20} />
          {t('cta.button')}
        </ContactButton>
      </Content>
    </Section>
  );
};

export { CTASection };
