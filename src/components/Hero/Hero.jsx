import React from 'react';
import {  HeroContainer, Block, HeroPrimaryText, HeroInfo, FormContainer, FormGroup, FormLabel, FormInput, FormTextarea, FormButton } from './Hero.styled';
import heroImage from '../../assets/Hero/hero.jpeg'; 

const Hero = () => {
  return (
    <HeroContainer heroImage={heroImage}>
   <Block>
   <HeroPrimaryText> Виробник металевих рішень, що відповідають вашим стандартам </HeroPrimaryText>
   

  <HeroInfo>
        Здійснюємо виробництво металевої продукції з 1994 року. Наші банки,
        підноси та кришки – це поєднання надійності, функціональності та високих
        стандартів.
      </HeroInfo>
   </Block>

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
    </HeroContainer>
  );
};

export default Hero;
