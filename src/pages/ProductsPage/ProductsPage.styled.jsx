import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  min-height: 100vh; //! vh обозначает "viewport height", что означает "процент от высоты окна просмотра". 100vh означает 100% от высоты видимого окна браузера */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  margin-right: auto;
  margin-left: auto;
  padding-top: 20px;
`;

export const ProductsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  padding: 20px;
  margin-bottom: 30px;
  gap: 10px;

  align-items: stretch; //! Устанавливает одинаковую высоту для всех элементов

  @media (min-width: 768px) {
    margin-bottom: 80px;
    gap: 20px;
  }

  @media (min-width: 1280px) {
    gap: 30px;
  }
`;

export const ProductsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  border: 1px solid #e0e0e0;
  border-radius: 0.3rem;
  border-bottom-color: var(--accent-color);

  // !Устанавливает базовый размер элемента равный 100% ширины контейнера, за вычетом 20 пикселей.
  // Это позволяет элементу занимать всю ширину контейнера, но оставляет небольшой отступ.
  flex-basis: calc(100% - 20px);
  margin-bottom: 15px;
  padding: 22px;

  @media (min-width: 768px) {
    // !Элемент занимает 50% ширины контейнера, минус 20 пикселей. Это делит экран на два столбца.
    flex-basis: calc(50% - 20px);
  }

  @media (min-width: 1024px) {
    // !Элемент занимает 33.3333% ширины контейнера, минус 30 пикселей. Это делит экран на три столбца.
    flex-basis: calc(33.3333% - 30px);
  }
`;

export const ProductsItemContainer = styled.div`
  width: 100%;
`;

export const ProductsItemImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1 / 1;

  border-radius: 50%;
`;
export const ProductsItemTitle = styled.h3`
  margin-top: 10px;
  color: var(--accent-color);

  font-weight: 700;
  font-size: 1.7rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;
export const ProductsItemText = styled.p`
  margin-top: 10px;
  color: var(--accent-color);


  font-weight: 500;
  font-size: 1.2rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
`;
