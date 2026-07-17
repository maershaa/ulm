import { MobMenuContainer, LogoWrapper, MenuBody } from './MobileMenu.styled';
import { Logo } from '@/components/ui/Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
import { Glow } from '@/assets/styles/Glow.styled';

const MobileMenu = ({ handleClick }) => {
  return (
    <MobMenuContainer>
      <Glow $size={400} $opacity={0.7} $top="-100px" $left="-100px" />
      <Glow $size={350} $opacity={0.4} $top="45%" $left="50%" $centered />
      <Glow $size={400} $opacity={0.8} $bottom="-100px" $right="-100px" />

      <MenuBody>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <NavMenu handleClick={handleClick} />
      </MenuBody>
    </MobMenuContainer>
  );
};

export default MobileMenu;
