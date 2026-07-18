import styled from 'styled-components';
import { breakpoints } from '@/assets/styles/breakpoints';

export const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  padding: 40px 20px;
`;

export const FeatureList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;

  grid-gap: 5px;

  @media (min-width: ${breakpoints.tabletLg}) {
    grid-template-columns: 1fr 1fr;

    grid-gap: 15px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const FeatureItem = styled.li`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: ${breakpoints.tabletLg}) {
    flex-direction: column;

    // Для нечётных элементов (1, 3, 5...)
    &:nth-of-type(odd) {
      flex-direction: column;
    }

    // Для чётных элементов (2, 4, 6...)
    &:nth-of-type(even) {
      flex-direction: column-reverse;
    }
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;

  @media (min-width: ${breakpoints.tabletLg}) {
    max-width: 300px;
    margin-bottom: 0;
  }

  @media (min-width: ${breakpoints.desktop}) {
    max-width: 500px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  background-color: ${({ theme }) => theme.colors.accent};

  color: ${({ theme }) => theme.colors.textInverse};

  width: 100%;
  aspect-ratio: 1 / 1;

  margin: 0;
  gap: 1.5rem;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 16px;
  }

  @media (min-width: ${breakpoints.tabletLg}) {
    text-align: left;
    padding: 24px;
    max-width: 300px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    max-width: 500px;
    padding: 32px;
  }
`;

export const FeatureItemTitle = styled.h4`
  text-transform: uppercase;
  margin: 0;
  font-weight: 700;

  font-size: 1.3rem;

  @media (min-width: ${breakpoints.tabletLg}) {
    font-size: 1rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.2rem;
  }
`;

export const FeatureItemText = styled.p`
  position: relative;
  padding: 0 30px;
  font-size: 0.9rem;
  line-height: 1.2;
  text-align: justify;

  @media (min-width: ${breakpoints.mobileLg}) {
    font-size: 1rem;
  }

  @media (min-width: ${breakpoints.tabletLg}) {
    font-size: 1rem;
    padding: 0 10px 0 0;

    //! Делаем (...) троеточиеи обрезаем текст
    display: -webkit-box;
    -webkit-line-clamp: 5; /* Ограничивает количество строк до 5 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis; /* добавляет многоточие, если текст не помещается в выделенные строки. */
    max-height: calc(
      1.2em * 5
    ); /* Устанавливает максимальную высоту для 5 строк */
  }
`;
