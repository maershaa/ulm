import styled from '@emotion/styled';

export const Container = styled.div`
    max-width: 1200px;
  width: 100%;
  min-height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 80px 20px;
  margin: 0 auto;

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

  padding: 20px;

  width: 100%;
  min-height: 400px;
  border-radius: 10px;

  @media (min-width: 768px) {
    padding: 40px;

  }

`;

export const InfoContainer = styled.div`
  width: 80%;
  padding: 60px 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  border-radius: 5px;

  background-color: var(--primary-text-color-light);


  @media (min-width: 900px) {
    width: 50%;
  }


`;

export const AboutUsInfo = styled.p`
  text-align: left;

  color: var(--primary-bg-dark-color);
  background-color: var(--primary-text-color-light);
  
  font-size: 1.4rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 0.9rem;
    padding: 0 10px 0 0;
  }


`;
