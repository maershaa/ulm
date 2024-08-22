import {
  BackgroundsColores,
  StyledLink,
  MobMenuContainer,
  LineMobile,
  NavigationList,
  NavItem,
} from './MobileMenu.styled.jsx';
import Logo from '../../Logo/Logo.jsx'
import { useLocation } from 'react-router-dom';

const MobileMenu = ({ handleClick }) => {
  const location = useLocation();

  return (
    <MobMenuContainer>
      <BackgroundsColores>
        <Logo />
        <LineMobile />
        <NavigationList>
          <NavItem>
            <StyledLink
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
              onClick={handleClick}
            >
              ГОЛОВНА
            </StyledLink>
          </NavItem>

          <NavItem>
            <StyledLink
              to="/aboutUs"
              className={location.pathname === '/aboutUs' ? 'active' : ''}
              onClick={handleClick}
            >
              ПРО НАС
            </StyledLink>
          </NavItem>

          <NavItem>
            <StyledLink
              to="/features"
              className={location.pathname === '/features' ? 'active' : ''}
              onClick={handleClick}
            >
              ПЕРЕВАГИ
            </StyledLink>
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
            </StyledLink>{' '}
          </NavItem>
        </NavigationList>
      </BackgroundsColores>
    </MobMenuContainer>
  );
};

export default MobileMenu;
