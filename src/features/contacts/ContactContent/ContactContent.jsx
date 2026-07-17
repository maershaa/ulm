import {
  ContactContainer,
  Phone,
  ContactInfo,
  ContactLink,
  Icon,
} from './ContactContent.styled';
import { Title, ContactUsForm } from '@/components';
import Map from '@/pages/ContactsPage/Map';
import { useTranslation } from 'react-i18next';

const ContactContent = () => {
  const { t } = useTranslation('contacts');

  return (
    <>
      <ContactContainer>
        <Title title={t('contacts.title')} />
        <address>
          <ContactInfo>{t('contacts.factoryName')}</ContactInfo>
          <ContactInfo>{t('contacts.addressStreet')}</ContactInfo>
          <ContactInfo>{t('contacts.addressCity')}</ContactInfo>
        </address>

        <Phone>
          <ContactInfo>
            <Icon>
              <svg>
                <use xlinkHref="#icon-phone"></use>
              </svg>
            </Icon>
            <ContactLink href="tel:+380487151660">
              +38 (048) 715-16-60
            </ContactLink>
          </ContactInfo>

          <ContactInfo>
            {t('contacts.fax')}
            <ContactLink href="tel:+380487145509">
              +38 (048) 714-55-09
            </ContactLink>
          </ContactInfo>
        </Phone>
        <ContactInfo>
          {t('contacts.option1')}
          <ContactLink href="mailto:info@ulm.com.ua">
            <Icon>
              <svg>
                <use xlinkHref="#icon-mail"></use>
              </svg>
            </Icon>
            info@ulm.com.ua
          </ContactLink>
        </ContactInfo>
        <ContactInfo>
          {t('contacts.option2')}
          <ContactLink href="mailto:factory@ulm.com.ua">
            <Icon>
              <svg>
                <use xlinkHref="#icon-mail"></use>
              </svg>
            </Icon>
            factory@ulm.com.ua
          </ContactLink>
        </ContactInfo>

        <Map />
      </ContactContainer>
      <ContactUsForm />
    </>
  );
};

export { ContactContent };
