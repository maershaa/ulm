import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 40px 20px;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Block = styled.div`
  background-image: url(${(props) => props.bgImageAboutUsPage});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: var(--primary-text-color-light);
  background-position: center center;

  width: 100%;
  min-height: 400px;
  padding: 20px;

  border-radius: 10px;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  padding: 40px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  border-radius: 5px;

  background-color: var(--primary-text-color-light);

  @media (min-width: 768px) {
    width: 80%;
    padding: 60px 40px;
  }

  @media (min-width: 1000px) {
    width: 50%;
  }
`;
export const AboutUsInfo = styled.p`
  text-align: left;

  color: var(--primary-bg-dark-color);
  background-color: var(--primary-text-color-light);

  font-size: 0.9rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 0 10px 0 0;
  }
`;
