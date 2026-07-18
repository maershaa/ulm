import styled from 'styled-components';

export const ProductsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 10px;

  align-items: stretch; //! Устанавливает одинаковую высоту для всех элементов

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    gap: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLg}) {
    gap: 30px;
  }
`;

export const ProductsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  border: 1px solid ${({ theme }) => theme.colors.borderSubtle};

  border-radius: ${({ theme }) => theme.radius.lg};

  border-bottom-color: ${({ theme }) => theme.colors.accent};

  background-color: ${({ theme }) => theme.colors.card};

  // !Устанавливает базовый размер элемента равный 100% ширины контейнера, за вычетом 20 пикселей.
  // Это позволяет элементу занимать всю ширину контейнера, но оставляет небольшой отступ.
  flex-basis: calc(100% - 20px);
  margin-bottom: 15px;
  padding: 22px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    // !Элемент занимает 50% ширины контейнера, минус 20 пикселей. Это делит экран на два столбца.
    flex-basis: calc(50% - 20px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    // !Элемент занимает 33.3333% ширины контейнера, минус 30 пикселей. Это делит экран на три столбца.
    flex-basis: calc(33.3333% - 30px);
  }

  div {
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 1 / 1;

    border-radius: ${({ theme }) => theme.radius.round};
  }

  h3 {
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.textPrimary};

    font-weight: 700;
    font-size: 1.7rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
      font-size: 1rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 1.2rem;
    }
  }

  p {
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.textPrimary};

    font-weight: 500;
    font-size: 1.2rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
      font-size: 1rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 1.1rem;
    }
  }
`;
