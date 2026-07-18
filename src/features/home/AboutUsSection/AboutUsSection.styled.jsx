import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 40px 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    /* padding-left: 32px;
    padding-right: 32px; */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    /* padding-left: 20px;
    padding-right: 20px; */
  }
`;

export const Block = styled.div`
  background-image: url(${(props) => props.$bgImageAboutUsPage});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.textInverse};

  background-position: center center;

  width: 100%;
  min-height: 400px;
  padding: 20px;

  border-radius: ${({ theme }) => theme.radius.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
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

  border-radius: ${({ theme }) => theme.radius.md};

  background-color: ${({ theme }) => theme.colors.textInverse};

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    max-width: 500px;
    padding: 60px 40px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 600px;
  }
`;
export const AboutUsInfo = styled.p`
  text-align: left;

  color: ${({ theme }) => theme.colors.brand};
  background-color: ${({ theme }) => theme.colors.textInverse};

  font-size: 0.9rem;
  line-height: 1.2;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    font-size: 1rem;
    padding: 0 10px 0 0;
  }
`;
