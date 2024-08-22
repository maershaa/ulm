import { Navigation, StyledLink } from './NavMenu.styled';

import { useLocation } from 'react-router-dom';

const NavMenu = () => {
    const location = useLocation();

  return (
    <Navigation>
      <StyledLink to="/" className={location.pathname === '/' ? 'active' : ''}>
        ГОЛОВНА
      </StyledLink>

      <StyledLink
        to="/services"
        className={location.pathname === '/services' ? 'active' : ''}
      >
        ПОСЛУГИ
      </StyledLink>

      <StyledLink
        to="/aboutUs"
        className={location.pathname === '/aboutUs' ? 'active' : ''}
      >
        ПРО НАС
      </StyledLink>

      <StyledLink
        to="/features"
        className={location.pathname === '/features' ? 'active' : ''}
      >
        ПЕРЕВАГИ
      </StyledLink>

      <StyledLink
        to="/products"
        className={location.pathname === '/products' ? 'active' : ''}
      >
        ПРОДУКЦІЯ
      </StyledLink>

      <StyledLink
        to="/contacts"
        className={location.pathname === '/contacts' ? 'active' : ''}
      >
        КОНТАКТИ
      </StyledLink>
    </Navigation>
  );
};

export default NavMenu;
