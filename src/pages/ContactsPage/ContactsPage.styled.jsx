import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 20px;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
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

export const ContactInfo = styled.p`
  margin-bottom: 5px;

  display: flex;
  align-items: center;
  font-size: 16px;
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
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;


