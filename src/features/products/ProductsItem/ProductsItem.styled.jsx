import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: ${({ theme }) => theme.colors.card};

  flex-basis: calc(100% - 20px);
  margin-bottom: 15px;
  padding: 22px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    flex-basis: calc(50% - 20px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
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
