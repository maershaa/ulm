import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: sticky; /* или position: fixed; */
  top: 0; /* Для фиксированного позиционирования */
  z-index: 1000; /* Для обеспечения отображения поверх других элементов */

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
  background-color: #032541;

  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid #196f97;
  box-shadow:
    rgba(46, 47, 66, 0.08) 0px 2px 1px,
    rgba(46, 47, 66, 0.16) 0px 1px 1px,
    rgba(46, 47, 66, 0.08) 0px 1px 6px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  text-decoration: none;
  color: #00baff;
  margin-right: 25px;
  display: inline-flex;
  border: 1px solid #00baff;
  border-radius: 10px;
  transition:
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    -webkit-transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &.active {
    background-color: #00baff;
    color: #196f97;
  }

  &:hover,
  &:focus {
    color: #196f97;
    border: 1px solid #196f97;
  }
`;

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '12px'};
  height: ${(props) => props.size || '12px'};
  fill: ${(props) => props.color || '#ffffff'};
  display: inline-block;
  margin-right: 5px;
  box-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;
