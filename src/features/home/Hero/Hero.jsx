import {
  HeroContainer,
  Block,
  HeroPrimaryText,
  HeroInfo,
  ButtonsGroup,
  StyledLink,
} from './Hero.styled';
import heroImage from '@/assets/images/Hero/hero.jpeg';
import heroImageTablet from '@/assets/images/Hero/lots_of_tins.jpeg';
import heroImageMobile from '@/assets/images/Hero/lots_of_tins_mb.jpeg';

import { ContactUsForm } from '@/components';

import { FiCompass, FiPlusCircle } from 'react-icons/fi';

const Hero = () => {
  return (
    <HeroContainer
      $heroImage={heroImage}
      $heroImageTablet={heroImageTablet}
      $heroImageMobile={heroImageMobile}
    >
      <Block>
        <HeroPrimaryText>
          Виробник металевих рішень, що відповідають вашим стандартам{' '}
        </HeroPrimaryText>

        <HeroInfo>
          Здійснюємо виробництво металевої продукції з 1994 року. Наші банки,
          підноси та кришки – це поєднання надійності, функціональності та
          високих стандартів.
        </HeroInfo>

        <ButtonsGroup>
          <StyledLink to={'#aboutUs'}>
            <FiCompass size={32} />
            ПРО НАС{' '}
          </StyledLink>
          <StyledLink to={'#features'}>
            <FiPlusCircle size={32} />
            ПЕРЕВАГИ{' '}
          </StyledLink>
        </ButtonsGroup>
      </Block>

      <ContactUsForm />
    </HeroContainer>
  );
};

export { Hero };
