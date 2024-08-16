import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Header.styled';
import { useLocation } from 'react-router-dom';

import Logo from '../Logo/Logo';

export const Header = () => {
  const location = useLocation();
  
  
  return (
    <HeaderContainer>
     
      <Logo />

      <Navigation>
        <StyledLink to="/services" className={location.pathname === '/services' ? 'active' : ''}>
          ПОСЛУГИ
        </StyledLink>

        <StyledLink to="/aboutUs" className={location.pathname === '/aboutUs' ? 'active' : ''}>
          ПРО НАС
        </StyledLink>

        <StyledLink to="/features" className={location.pathname === '/features' ? 'active' : ''}>
          ПЕРЕВАГИ
        </StyledLink>

        <StyledLink to="/products"  className={location.pathname === '/products' ? 'active' : ''}>
          ПРОДУКЦІЯ
        </StyledLink>

        <StyledLink to="/contacts"     className={location.pathname === '/contacts' ? 'active' : ''}>

          КОНТАКТИ
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
