import styled from '@emotion/styled';

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
    url(${(props) => props.heroImageTablet});
    
  @media (min-width: 450px) {
    background-image: linear-gradient(
      to right,
      rgba(3, 37, 65, 0.9) 0%,
      rgba(3, 37, 65, 0) 100%
    ),
    url(${(props) => props.heroImageMobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgb(3, 37, 65);
  }

  @media (min-width: 625px) {
    padding: 40px;
  }

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    flex-direction: row;
    height: 600px;

    background-image: linear-gradient(
        to right,
        rgba(3, 37, 65, 0.9) 0%,
        rgba(3, 37, 65, 0) 100%
      ),
      url(${(props) => props.heroImage});
  }
`;

export const Block = styled.div`
  text-align: center;
  width: 90%;
  text-align: center;

  margin-bottom: 20px;

  @media (min-width: 768px) {
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

  @media (min-width: 625px) {
    font-size: 1.8rem;
  }

  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }

  /* Псевдоэлемент для разделительной полоски */
  &::after {
    content: '';
    display: block;
    border-top: 6px solid #1274a2; 
    width: 100px;
    margin-top: 20px; 
    margin-bottom: 20px; 
  }
`;
export const HeroInfo = styled.h3`
  color: #ffffff;

  margin-bottom: 10px;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.2;

  text-align: center;

  @media (min-width: 625px) {
    font-size: 1.1rem;
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`;
