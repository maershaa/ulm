import React from 'react';
import { LogoLink, LogoText } from './Logo.styled';
import logo from './logo_metall.png';

const Logo = () => {
  return (
    <LogoLink to="/">
      {/* <LogoText> Южлитографметалл </LogoText> */}
      <img src={logo} alt="Логотип компанії ULM" width={170} height={140} />
    </LogoLink>
  );
};

export default Logo;
