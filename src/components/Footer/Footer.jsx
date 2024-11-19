import React from 'react';
import Logo from '../Logo/Logo';
import {
  FooterContainer,
  Container,
  Phone,
  Address,
  ContactInfo,
  ContactLink,
  Icon,
  CopyrightText,
  StyledLink,
} from './Footer.styled';
import sprite from '/src/assets/icons.svg';

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Logo />
        <CopyrightText>
          Copyright © 2024{' '}
          <StyledLink href="https://www.linkedin.com/in/valeriiayefremova/">
            Валерія Єфремова
          </StyledLink>
        </CopyrightText>
      </Container>

      <Address>
        <ContactInfo>
          ТОВ "Южлитографметалл" Застава II, вул. Привозна, 1, Одеса, 65098,
          Україна
        </ContactInfo>
      </Address>

      <Phone>
        <ContactInfo>
          <Icon>
            <svg>
              <use xlinkHref={`${sprite}#icon-phone`}></use>
            </svg>
          </Icon>
          <ContactLink href="tel:+380487151660">
            +38 (048) 715-16-60
          </ContactLink>
        </ContactInfo>

        <ContactInfo>
          факс.
          <ContactLink href="tel:+380487145509">
            +38 (048) 714-55-09
          </ContactLink>
        </ContactInfo>
      </Phone>
    </FooterContainer>
  );
};
