import styled from 'styled-components';
import { breakpoints } from '@/assets/styles/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 40px 0;

  @media (min-width: ${breakpoints.tabletLg}) {
    /* padding-left: 32px;
    padding-right: 32px; */
  }

  @media (min-width: ${breakpoints.desktop}) {
    /* padding-left: 20px;
    padding-right: 20px; */
  }
`;

export const Block = styled.div`
  background-image: url(${(props) => props.$bgImageAboutUsPage});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: var(--primary-text-color-light);
  background-position: center center;

  width: 100%;
  min-height: 400px;
  padding: 20px;

  border-radius: var(--radius-lg);

  @media (min-width: ${breakpoints.tabletLg}) {
    padding: 40px;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  gap: 20px;

  justify-content: center;
  align-items: center;

  border-radius: var(--radius-md);
  background-color: var(--primary-text-color-light);

  @media (min-width: ${breakpoints.tabletLg}) {
    max-width: 500px;
    padding: 60px 40px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    max-width: 600px;
  }
`;
export const AboutUsInfo = styled.p`
  text-align: left;

  color: var(--primary-bg-dark-color);
  background-color: var(--primary-text-color-light);

  font-size: 0.9rem;
  line-height: 1.2;

  @media (min-width: ${breakpoints.tabletLg}) {
    font-size: 1rem;
    padding: 0 10px 0 0;
  }
`;
