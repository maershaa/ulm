import styled from 'styled-components';
import { breakpoints } from '@/assets/styles/breakpoints';

export const ContactContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;

  text-align: left;

  address {
    margin-bottom: 20px;
  }
`;

export const Phone = styled.div`
  margin-bottom: 20px;
`;

export const ContactInfo = styled.div`
  margin-bottom: 5px;

  display: flex;
  align-items: center;
  font-size: 1rem;

  line-height: 1.2;

  color: var(--text-color);

  @media (min-width: ${breakpoints.tabletLg}) {
    font-size: 1.1rem;
  }
`;

export const Icon = styled.div`
  margin-right: 8px;

  svg {
    width: 22px;
    height: 22px;
    fill: var(--light-accent);
  }
`;

export const ContactLink = styled.a`
  color: var(--light-accent);
  text-decoration: none;

  display: flex;
  align-items: center;
  font-size: 1rem;

  @media (min-width: ${breakpoints.tabletLg}) {
    font-size: 1.1rem;
  }
  &:hover {
    text-decoration: underline;
  }
`;
