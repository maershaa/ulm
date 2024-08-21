import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoLink = styled(NavLink)`
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.125;
  color: var(--primary-text-color);
  display: flex;
  align-items: center;
  column-gap: 8px;
  cursor: pointer;


  margin-right: auto;
  @media screen and (min-width: 768px) {
    column-gap: 15px;
  }
`;

export const LogoText = styled.span`
  text-transform: uppercase;
  font-style: italic;
  font-family: "Oswald", sans-serif;


  font-size: 24px;
  font-weight: 500px;
  color: #ffffff;
  text-shadow: 
  0 0 2px #00baff, 
  0 0 4px #00baff, 
  0 0 8px #00baff, 
  0 0 16px #00baff;;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

