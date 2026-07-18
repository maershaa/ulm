import styled from 'styled-components';
import { breakpoints } from '@/assets/styles/breakpoints';

export const FooterWrapper = styled.div`
  min-width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: ${({ theme }) => theme.colors.brand};
  padding: 15px;

  margin-left: auto;
  margin-right: auto;

  border-bottom-left-radius: ${({ theme }) => theme.radius.lg};
  border-bottom-right-radius: ${({ theme }) => theme.radius.lg};

  border-top: 1px solid ${({ theme }) => theme.colors.accentLight};

  @media (min-width: ${breakpoints.tabletLg}) {
    padding: 0 25px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Wrapper = styled.div`
  order: 3; /* По умолчанию для мобильных внизу */

  max-width: 200px;

  @media (min-width: ${breakpoints.tabletLg}) {
    order: 0; /* Для планшетов и десктопов отображается первым */

    max-width: 300px;
  }
`;

export const Address = styled.address`
  order: 1;

  max-width: 200px;

  @media (min-width: ${breakpoints.tabletLg}) {
    max-width: 250px;
  }
`;

export const Phone = styled.div`
  order: 2;

  max-width: 200px;

  @media (min-width: ${breakpoints.tabletLg}) {
    max-width: 250px;
  }
`;
export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;

  line-height: 1.2;
  color: ${({ theme }) => theme.colors.textInverse};

  @media (min-width: ${breakpoints.tabletLg}) {
    font-size: 1.1rem;
  }
`;

export const Icon = styled.div`
  margin-right: 8px;

  svg {
    width: 22px;
    height: 22px;
    fill: ${({ theme }) => theme.colors.accent};
  }
`;

export const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.textInverse};

  text-decoration: none;

  display: flex;
  align-items: start;
  font-size: 1rem;

  @media (min-width: ${breakpoints.tabletLg}) {
    font-size: 1.1rem;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const CopyrightText = styled.p`
  color: ${({ theme }) => theme.colors.textInverse};

  margin: 0;
  margin-bottom: 10px;
`;

export const StyledLink = styled.a`
  color: #00baff;
  text-decoration: none;

  font-size: 1rem;

  @media (min-width: ${breakpoints.tabletLg}) {
    font-size: 1.1rem;
  }
  &:hover {
    text-decoration: underline;
  }
`;
