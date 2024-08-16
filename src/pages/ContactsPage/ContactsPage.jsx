import React from 'react'
import { Container, ContactContainer, Address, ContactTitle, ContactInfo, ContactLink  } from './ContactsPage.styled';


const ContactsPage = () => {
  return (
    <Container>
    <ContactContainer>
      <ContactTitle>Контакти</ContactTitle>
      <Address>
        <ContactInfo>ТОВ "Південлітографметал"</ContactInfo>
        <ContactInfo>Застава II, вул. Привозна, 1</ContactInfo>
        <ContactInfo>Одеса 65098, Україна</ContactInfo>
        <ContactInfo>тел. +38 (048) 715-16-60</ContactInfo>
        <ContactInfo>факс. +38 (048) 714-55-09</ContactInfo>
      </Address>
      <ContactInfo>З питань комерції: <ContactLink href="mailto:info@ulm.com.ua">info@ulm.com.ua</ContactLink></ContactInfo>
      <ContactInfo>З питань виробництва: <ContactLink href="mailto:factory@ulm.com.ua">factory@ulm.com.ua</ContactLink></ContactInfo>
    </ContactContainer>
  </Container>
  )
}

export default ContactsPage