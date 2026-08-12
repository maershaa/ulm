import { useTranslation } from 'react-i18next';
import { Title, ContactUsForm } from '@/components';
import { Map, ContactMethod } from '@/features/contacts';
import {
  Wrapper,
  ContactContainer,
  AddressLine,
  Phone,
} from './ContactContent.styled';

const ContactContent = () => {
  const { t } = useTranslation('contacts');

  return (
    <Wrapper>
      <ContactContainer>
        <Title title={t('contacts.title')} />

        <address>
          <AddressLine>{t('contacts.factoryName')}</AddressLine>
          <AddressLine>{t('contacts.addressStreet')}</AddressLine>
          <AddressLine>{t('contacts.addressCity')}</AddressLine>
        </address>

        <Phone>
          <ContactMethod
            icon="phone"
            label={t('contacts.phoneLabel')}
            href="tel:+380503164389"
          >
            +38 (050) 316-43-89
          </ContactMethod>
          <ContactMethod
            icon="phone"
            label={t('contacts.faxLabel')}
            href="tel:+380503333084"
          >
            +38 (050) 333-30-84
          </ContactMethod>
        </Phone>

        <ContactMethod
          icon="mail"
          label={t('contacts.option1')}
          href="mailto:info@ulm.com.ua"
        >
          info@ulm.com.ua
        </ContactMethod>

        <Map />
      </ContactContainer>

      <ContactUsForm />
    </Wrapper>
  );
};

export { ContactContent };
