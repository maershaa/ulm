import { LogoLink } from './Logo.styled';
import logo from './logo_metall.png';

const Logo = () => {
  return (
    <LogoLink to="/">
      {/* <LogoText> Южлитографметалл </LogoText> */}
      <img
        src={logo}
        alt="Логотип компанії ULM"
        width={140}
        height={110}
        loading="lazy"
      />
    </LogoLink>
  );
};

export { Logo };
