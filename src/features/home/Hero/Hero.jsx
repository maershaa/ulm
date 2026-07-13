import { HeroContainer, Block, HeroPrimaryText, HeroInfo } from './Hero.styled';
import heroImage from '@/assets/images/Hero/hero.jpeg';
import heroImageTablet from '@/assets/images/Hero/lots_of_tins.jpeg';
import heroImageMobile from '@/assets/images/Hero/lots_of_tins_mb.jpeg';

import { ContactUsForm } from '@/components';
const Hero = () => {
  return (
    <HeroContainer
      heroImage={heroImage}
      heroImageTablet={heroImageTablet}
      heroImageMobile={heroImageMobile}
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

        <div>
          <a href={'#aboutUs'}> ПРО НАС </a>

          <a href={'#features'}>ПЕРЕВАГИ</a>
        </div>
      </Block>

      <ContactUsForm />
    </HeroContainer>
  );
};

export { Hero };
