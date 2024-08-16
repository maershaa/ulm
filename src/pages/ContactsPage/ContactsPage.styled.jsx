import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 500px; */
`;

export const ContactContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

export const Address = styled.address`
  margin-bottom: 20px;
`;

export const ContactTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
`;

export const ContactInfo = styled.p`
  margin-bottom: 5px;
`;

export const ContactLink = styled.a`
  color: #045174;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
