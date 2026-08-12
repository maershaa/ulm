import styled from 'styled-components';

export const Title = styled.h2`
  display: inline;
  margin: 0;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.accentLight};
  font-family: 'Caladea', Arial, sans-serif;

  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  line-height: 1.25;

  font-size: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 2rem;
  }

  /* Псевдоэлемент для разделительной полоски */
  &::after {
    content: '';
    display: block;
    border-top: 6px solid var(1274a2);
    width: 100px;
    margin-top: 15px;
    margin-bottom: 20px;
  }
`;
