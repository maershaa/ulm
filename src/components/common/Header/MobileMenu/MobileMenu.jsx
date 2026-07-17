import {
  MobMenuContainer,
  LineMobile,
  BackgroundsColores,
} from './MobileMenu.styled';
import { Logo } from '@/components/ui/Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
const MobileMenu = ({ handleClick }) => {
  return (
    <MobMenuContainer>
      <BackgroundsColores>
        <Logo />
        <LineMobile />
        <NavMenu handleClick={handleClick} />
      </BackgroundsColores>
    </MobMenuContainer>
  );
};

export default MobileMenu;
