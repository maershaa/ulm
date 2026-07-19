import { useTranslation } from 'react-i18next';

import { Logo } from '@/components';
import { ContactMethod } from '@/features/contacts';
import { ContactInfo } from '@/features/contacts/ContactMethod/ContactMethod.styled';
import {
  FooterRoot,
  FooterMain,
  Column,
  Address,
  Phone,
  BottomBar,
  PolicyLink,
  Divider,
  DevCredit,
  StyledLink,
} from './Footer.styled';

const Footer = () => {
  const { t } = useTranslation('contacts');

  return (
    <FooterRoot data-theme="dark">
      <FooterMain>
        <Column>
          <Logo />
        </Column>

        <Address>
          <ContactInfo>
            {t('contacts.factoryName')} {t('contacts.addressStreet')}{' '}
            {t('contacts.addressCity')}
          </ContactInfo>
        </Address>

        <Phone>
          <ContactMethod icon="phone" href="tel:+380487151660">
            +38 (048) 715-16-60
          </ContactMethod>
          <ContactMethod icon="phone" href="tel:+380487145509">
            +38 (048) 714-55-09
          </ContactMethod>
        </Phone>
      </FooterMain>

      <BottomBar>
        <span>Copyright © 2026 ULM</span>
        <Divider>•</Divider>
        <PolicyLink to="/privacy-policy">{t('privacyPolicyLink')}</PolicyLink>
        <Divider>•</Divider>
        <DevCredit>
          {t('devCreditLabel')}{' '}
          <StyledLink
            href="https://www.linkedin.com/in/valeriiayefremova/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Valeriia Y.
          </StyledLink>
        </DevCredit>
      </BottomBar>
    </FooterRoot>
  );
};

export { Footer };
