import {
  StyledLink,
  StyledAnchor,
  MobMenuContainer,
  LineMobile,
  NavigationList,
  NavItem,
  BackgroundsColores,
} from './MobileMenu.styled';
import { Logo } from '@/components/ui/Logo/Logo';

const MobileMenu = ({ handleClick }) => {
  return (
    <MobMenuContainer>
      <BackgroundsColores>
        <Logo />
        <LineMobile />
        <NavigationList>
          <NavItem>
            <StyledAnchor href={'#aboutUs'} onClick={handleClick}>
              ПРО НАС
            </StyledAnchor>
          </NavItem>
          <NavItem>
            <StyledAnchor href={'#features'} onClick={handleClick}>
              ПЕРЕВАГИ
            </StyledAnchor>
          </NavItem>
          <NavItem>
            <StyledLink
              to="/products"
              className={location.pathname === '/products' ? 'active' : ''}
              onClick={handleClick}
            >
              ПРОДУКЦІЯ
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink
              to="/contacts"
              className={location.pathname === '/contacts' ? 'active' : ''}
              onClick={handleClick}
            >
              КОНТАКТИ
            </StyledLink>
          </NavItem>
        </NavigationList>
      </BackgroundsColores>
    </MobMenuContainer>
  );
};

export default MobileMenu;
