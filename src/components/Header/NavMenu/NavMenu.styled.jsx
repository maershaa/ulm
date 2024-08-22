import styled from 'styled-components';
import { Link } from 'react-router-dom';


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


