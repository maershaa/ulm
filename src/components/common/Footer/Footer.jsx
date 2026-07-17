import { Logo } from '@/components';
import {
  FooterWrapper,
  Wrapper,
  Phone,
  Address,
  ContactInfo,
  ContactLink,
  Icon,
  CopyrightText,
  StyledLink,
} from './Footer.styled';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('contacts');

  return (
    <FooterWrapper>
      <Wrapper>
        <Logo />
        <CopyrightText>
          Copyright © 2024{' '}
          <StyledLink href="https://www.linkedin.com/in/valeriiayefremova/">
            Valeriia Yefremova{' '}
          </StyledLink>
        </CopyrightText>
      </Wrapper>

      <Address>
        <ContactInfo>
          {t('contacts.factoryName')} {t('contacts.addressStreet')}{' '}
          {t('contacts.addressCity')}
        </ContactInfo>
      </Address>

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
    </FooterWrapper>
  );
};

export { Footer };
