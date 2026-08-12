import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterRoot = styled.div`
  width: 100%;
  padding: 14px 30px 0 30px;

  background-color: ${({ theme }) => theme.colors.brand};
  border-top: 1px solid ${({ theme }) => theme.colors.accentLight};

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    padding: 0 50px;
  }
`;

export const FooterMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 24px;

    text-align: left;
  }
`;

export const Column = styled.div`
  order: 3; /* на мобильных — последним */
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 220px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    order: 0; /* на планшетах/десктопе — первым */
    align-items: flex-start;
    max-width: 280px;
  }
`;

export const Address = styled.address`
  order: 1;
  font-style: normal;
  max-width: 220px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    max-width: 260px;
  }
`;

export const Phone = styled.div`
  order: 2;
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 220px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    max-width: 260px;
  }
`;

export const CopyrightText = styled.p`
  color: ${({ theme }) => theme.colors.textInverse};
  margin: 0;
`;

/* --- Нижняя полоса: политика + подпись разработчика --- */

export const BottomBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 14px 20px;

  border-top: 1px solid ${({ theme }) => theme.colors.borderSubtle};

  font-size: 0.8rem;

  span {
    color: ${({ theme }) => theme.colors.textInverse};
  }
`;

export const PolicyLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textInverse};
  opacity: 0.7;
  text-decoration: none;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

export const Divider = styled.span`
  color: ${({ theme }) => theme.colors.textInverse};
  opacity: 0.35;
`;

export const DevCredit = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textInverse};
  opacity: 0.7;
`;

// Фон футера (theme.colors.brand) фиксирован и не меняется между темами,
// поэтому цвет ссылки тоже фиксированный, а не токен темы.
export const StyledLink = styled.a`
  color: #00baff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
