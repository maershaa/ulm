import { Navigation, StyledLink, StyledAnchor } from './NavMenu.styled';
import { useLocation } from 'react-router-dom';

const NavMenu = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <Navigation>
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
