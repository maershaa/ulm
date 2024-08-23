import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 20px;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const ContactContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;

  text-align: left;
`;

export const Address = styled.address`
  margin-bottom: 20px;
`;

export const Phone = styled.div`
  margin-bottom: 20px;
`;

export const ContactInfo = styled.p`
  margin-bottom: 5px;

  display: flex;
  align-items: center;
  font-size: 1rem;

  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const Icon = styled.div`
  margin-right: 8px;

  svg {
    width: 22px;
    height: 22px;
    fill: var(--accent-color);
  }
`;

export const ContactLink = styled.a`
  color: #045174;
  text-decoration: none;

  display: flex;
  align-items: center;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
  &:hover {
    text-decoration: underline;
  }
`;
