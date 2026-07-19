import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;

  padding: 40px 10px;

  border-bottom-left-radius: ${({ theme }) => theme.radius.lg};
  border-bottom-right-radius: ${({ theme }) => theme.radius.lg};

  background-color: rgb(3, 37, 65);
  background-image: linear-gradient(
      to right,
      rgba(3, 37, 65, 0.9) 0%,
      rgba(3, 37, 65, 0) 100%
    ),
    url(${(props) => props.$heroImageTablet});

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
    background-size: cover;
    background-repeat: no-repeat;

    background-image: linear-gradient(
        to right,
        rgba(3, 37, 65, 0.9) 0%,
        rgba(3, 37, 65, 0) 100%
      ),
      url(${(props) => props.$heroImageMobile});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    background-image: linear-gradient(
        to right,
        rgba(3, 37, 65, 0.9) 0%,
        rgba(3, 37, 65, 0) 100%
      ),
      url(${(props) => props.$heroImage});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;

    justify-items: stretch;
    gap: 60px;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  text-align: center;

  margin-bottom: 20px;
  padding: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const HeroPrimaryText = styled.h1`
  color: ${({ theme }) => theme.colors.textInverse};

  font-size: 1.7rem;
  font-weight: 600;
  line-height: 1.3;

  text-align: left;

  margin-bottom: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 3rem;
  }

  /*Декоративная полоска */
  &::after {
    content: '';
    display: block;
    border-top: 6px solid ${({ theme }) => theme.colors.accentLight};

    width: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
export const HeroInfo = styled.h2`
  color: ${({ theme }) => theme.colors.textInverse};

  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.2;

  text-align: left;

  margin-bottom: 35px;
  max-width: 600px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.8rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 2.2rem;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    width: auto;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    width: 100%;
    white-space: nowrap; //чтобы на 2 строки "про нас" не разделялось
    margin-top: 20px;

    font-weight: 600;
    font-size: 1rem;
    padding: 14px 28px;
    border-radius: ${({ theme }) => theme.radius.lg};

    background-color: ${({ theme }) => theme.colors.accentLight};

    opacity: 0.8;
    color: ${({ theme }) => theme.colors.textInverse};

    transition: ${({ theme }) => theme.transitions.base};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: auto;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 1.1rem;
    }

    &:hover {
      transform: translateY(-2px);
      opacity: 1;
      box-shadow: 0 4px 12px var(--glow-color);
    }
  }
`;
