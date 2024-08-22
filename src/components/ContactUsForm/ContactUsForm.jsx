import React from 'react'
import { FormContainer, FormGroup, FormLabel, FormInput, FormTextarea, FormButton } from './ContactUsForm.styled';

const ContactUsForm = () => {
  return (
  <FormContainer>
   <form>
        <FormGroup>
          <FormLabel htmlFor="fullName">Повне Ім'я</FormLabel>
          <FormInput
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Ваше повне ім'я"
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="phone">Телефон</FormLabel>
          <FormInput
            type="tel"
            id="phone"
            name="phone"
            placeholder="Ваш телефон"
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="email">Електронна Адреса</FormLabel>
          <FormInput
            type="email"
            id="email"
            name="email"
            placeholder="Ваш email"
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="message">Текст повідомлення</FormLabel>
          <FormTextarea
            id="message"
            name="message"
            rows="4"
            placeholder="Ваше повідомлення"
            required
          />
        </FormGroup>
        <FormButton type="submit">Зв'яжіться з нами</FormButton>
      </form>
      </FormContainer>
  )
}

export default ContactUsForm