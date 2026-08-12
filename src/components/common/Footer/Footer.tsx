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
          <ContactMethod icon="phone" href="tel:+380503164389">
            +38 (050) 316-43-89
          </ContactMethod>
          <ContactMethod icon="phone" href="tel:+380503333084">
            +38 (050) 333-30-84
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
