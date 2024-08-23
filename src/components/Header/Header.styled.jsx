import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  min-width:100%;
  
  position: sticky; /* или position: fixed; */
  top: 0; /* Для фиксированного позиционирования */
  z-index: 1000; /* Для обеспечения отображения поверх других элементов */

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--primary-bg-dark-color);

  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid #196f97;
  box-shadow:
    rgba(46, 47, 66, 0.08) 0px 2px 1px,
    rgba(46, 47, 66, 0.16) 0px 1px 1px,
    rgba(46, 47, 66, 0.08) 0px 1px 6px;

  @media (min-width: 768px) {
    padding: 0 25px;
  }
`;

