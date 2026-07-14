import { Navigation, StyledLink } from './NavMenu.styled';
import { useLocation } from 'react-router-dom';

const NavMenu = () => {
  const location = useLocation();
  const links = [
    { to: '/', label: 'Головна' },
    { to: '/products', label: 'Продукція' },
    { to: '/contacts', label: 'Контакти' },
  ];

  return (
    <Navigation>
      {links.map((link) => (
        <StyledLink
          key={link.to}
          to={link.to}
          className={location.pathname === link.to ? 'active' : ''}
        >
          {link.label.toUpperCase()}
        </StyledLink>
      ))}
    </Navigation>
  );
};

export default NavMenu;
