import React from 'react';
import { HeroContainer, Block, HeroPrimaryText, HeroInfo } from './Hero.styled';
import heroImage from '../../assets/Hero/hero.jpeg';
import heroImageMobile from '../../assets/Hero/lots_of_tins.jpeg';

import ContactUsForm from '../ContactUsForm/ContactUsForm';
const Hero = () => {
  return (
    <HeroContainer heroImage={heroImage} heroImageMobile={heroImageMobile}>
      <Block>
        <HeroPrimaryText>
          {' '}
          Виробник металевих рішень, що відповідають вашим стандартам{' '}
        </HeroPrimaryText>

        <HeroInfo>
          Здійснюємо виробництво металевої продукції з 1994 року. Наші банки,
          підноси та кришки – це поєднання надійності, функціональності та
          високих стандартів.
        </HeroInfo>
      </Block>

      <ContactUsForm />
    </HeroContainer>
  );
};

export default Hero;
