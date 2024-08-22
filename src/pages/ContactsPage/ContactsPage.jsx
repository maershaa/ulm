import React from 'react';
import {
  Container,
  ContactContainer,
  Address,
  ContactInfo,
  ContactLink,
  Icon,
} from './ContactsPage.styled';
import ContactUsForm from '../../components/ContactUsForm/ContactUsForm';
import sprite from '/src/assets/icons.svg';
import Title from '../../components/Title/Title'
import Map from './Map';

const ContactsPage = () => {
  return (
    <Container className="container">
      <ContactContainer>
      <Title title="Контакти" />
        <Address>
          <ContactInfo>ТОВ "Южлитографметалл"</ContactInfo>
          <ContactInfo>Застава II, вул. Привозна, 1</ContactInfo>
          <ContactInfo>Одеса 65098, Україна</ContactInfo>

          <ContactInfo>
            <Icon>
              <svg>
                <use xlinkHref={`${sprite}#icon-phone`}></use>
              </svg>
            </Icon>
            +38 (048) 715-16-60
          </ContactInfo>

          <ContactInfo>факс. +38 (048) 714-55-09</ContactInfo>
        </Address>
        <ContactInfo>
          З питань комерції:{' '}
          <ContactLink href="mailto:info@ulm.com.ua">
          
          <Icon>
              <svg>
                <use xlinkHref={`${sprite}#icon-mail`}></use>
              </svg>
            </Icon>

            info@ulm.com.ua
          </ContactLink>
        </ContactInfo>
        <ContactInfo>
          З питань виробництва:{' '}
          <ContactLink href="mailto:factory@ulm.com.ua">
          <Icon>
              <svg>
                <use xlinkHref={`${sprite}#icon-mail`}></use>
              </svg>
            </Icon>
            factory@ulm.com.ua
          </ContactLink>
        </ContactInfo>

        <Map />
      </ContactContainer>

      <ContactUsForm />

      
    </Container>
  );
};

export default ContactsPage;
