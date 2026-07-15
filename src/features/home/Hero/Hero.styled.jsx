import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints } from '@/assets/styles/breakpoints';

export const HeroContainer = styled.div`
  background-color: rgb(3, 37, 65);

  padding: 40px 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
  flex-direction: column;

  background-image: linear-gradient(
      to right,
      rgba(3, 37, 65, 0.9) 0%,
      rgba(3, 37, 65, 0) 100%
    ),
    url(${(props) => props.$heroImageTablet});

  @media (min-width: ${breakpoints.mobileLg}) {
    background-image: linear-gradient(
        to right,
        rgba(3, 37, 65, 0.9) 0%,
        rgba(3, 37, 65, 0) 100%
      ),
      url(${(props) => props.$heroImageMobile});
    background-size: cover;
    background-repeat: no-repeat;
    background-color: rgb(3, 37, 65);
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 40px;
  }

  @media (min-width: ${breakpoints.tabletLg}) {
    flex-wrap: nowrap;
    flex-direction: row;
    /* height: 600px; */

    background-image: linear-gradient(
        to right,
        rgba(3, 37, 65, 0.9) 0%,
        rgba(3, 37, 65, 0) 100%
      ),
      url(${(props) => props.$heroImage});
  }
`;

export const Block = styled.div`
  text-align: center;
  width: 90%;
  text-align: center;

  margin-bottom: 20px;

  @media (min-width: ${breakpoints.tabletLg}) {
    width: 50%;
    margin-bottom: 0;
  }
`;

export const HeroPrimaryText = styled.h2`
  color: var(--primary-text-color-light);

  margin-bottom: 10px;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.3;

  text-align: left;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.8rem;
  }

  @media (min-width: ${breakpoints.tabletLg}) {
    width: 50%;
    margin-bottom: 0;
  }

  /* Псевдоэлемент для разделительной полоски */
  &::after {
    content: '';
    display: block;
    border-top: 6px solid var(--light-accent);
    width: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
export const HeroInfo = styled.h3`
  color: var(--primary-text-color-light);

  margin-bottom: 10px;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.2;

  text-align: center;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.1rem;
  }

  @media (min-width: ${breakpoints.tabletLg}) {
    text-align: left;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;

  @media (min-width: ${breakpoints.mobileLg}) {
    flex-direction: row;
    width: auto;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  font-weight: 600;
  font-size: 1rem;
  padding: 14px 28px;
  border-radius: var(--radius-lg);

  transition: all 0.2s ease;

  width: 100%;
  margin-top: 20px;

  @media (min-width: ${breakpoints.mobileLg}) {
    width: auto;
  }

  background-color: var(--light-accent);
  opacity: 0.8;
  color: var(--primary-text-color-light);

  &:hover {
    transform: translateY(-2px);
    opacity: 1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;
