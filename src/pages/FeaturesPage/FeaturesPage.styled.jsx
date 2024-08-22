import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Title = styled.h1`
  display: inline;
  margin: 0;
  margin-right: 10px;
  color: #000000;

  font-family: 'Caladea', Arial, sans-serif;

  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  line-height: 1.25;

  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }

  /* Псевдоэлемент для разделительной полоски */
  &::after {
    content: '';
    display: block;
    border-top: 6px solid #1274a2; /* Цвет полоски */
    width: 100px; /* Ширина полоски */
    margin-top: 20px; /* Отступ сверху */
    margin-bottom: 20px; /* Отступ снизу */
  }
`;

export const FeatureGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;

  grid-gap: 5px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

    grid-gap: 15px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const FeatureItem = styled.li`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
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

  @media (min-width: 1024px) {
    max-height: 730px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;

  @media (min-width: 768px) {
    max-width: 300px;
    margin-bottom: 0;
  }

  @media (min-width: 1024px) {
    max-width: 500px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  background-color: var(--accent-color);
  color: var(--primary-text-color-light);

  width: 100%;
  aspect-ratio: 1 / 1;
  padding: 16px;
  margin: 0;
  gap: 1.5rem;

  @media (min-width: 768px) {
    text-align: left;
    padding: 24px;
    max-width: 300px;
  }

  @media (min-width: 1024px) {
    max-width: 500px;
    padding: 32px;
  }
`;

export const FeatureItemTitle = styled.h4`
  text-transform: uppercase;
  margin: 0;
  font-weight: 700;

  font-size: 1.7rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const FeatureItemText = styled.p`
  position: relative;
  padding: 0 30px;
  height: 84px;
  font-size: 1.4rem;
  line-height: 1.2;
  text-align: justify;

  @media (min-width: 768px) {
    font-size: 0.8rem;
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

  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
`;
