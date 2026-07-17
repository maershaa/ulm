import { NavWrapper, Navigation, StyledLink } from './NavMenu.styled';
import { useLocation } from 'react-router-dom';
import { ThemeSwitcher, LanguageSwitcher } from '@/components';
import { useTranslation } from 'react-i18next';

const NavMenu = ({ handleClick }) => {
  const location = useLocation();
  const { t } = useTranslation('main');

  const links = [
    { to: '/', translationKey: 'main' },
    { to: '/products', translationKey: 'products' },
    { to: '/contacts', translationKey: 'contacts' },
  ];

  return (
    <NavWrapper>
      <Navigation>
        {links.map((link) => (
          <StyledLink
            key={link.to}
            to={link.to}
            className={location.pathname === link.to ? 'active' : ''}
            onClick={handleClick}
          >
            {t(`navLinks.${link.translationKey}`)}
          </StyledLink>
        ))}
      </Navigation>
      <ThemeSwitcher />
      <LanguageSwitcher />
    </NavWrapper>
  );
};

export default NavMenu;
