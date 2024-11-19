import styled from 'styled-components';

export const FooterContainer = styled.div`
  min-width:100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: var(--primary-bg-dark-color);

  padding: 15px;

  margin-left: auto;
  margin-right: auto;

  border-bottom: 1px solid #196f97;
  box-shadow:
    rgba(46, 47, 66, 0.08) 0px 2px 1px,
    rgba(46, 47, 66, 0.16) 0px 1px 1px,
    rgba(46, 47, 66, 0.08) 0px 1px 6px;

  @media (min-width: 768px) {
    padding: 0 25px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
    order: 3; /* По умолчанию для мобильных внизу */
    
    max-width: 200px;

  @media (min-width: 768px) {
    order: 0; /* Для планшетов и десктопов отображается первым */

    max-width: 300px;
  }
`;

export const Address = styled.address`
  order: 1;

  max-width: 200px;

  @media (min-width: 768px) {
    max-width: 250px;
  }
`;

export const Phone = styled.div`
  order: 2;

max-width: 200px;

@media (min-width: 768px) {
  max-width: 250px;
}
`;
export const ContactInfo = styled.p`

  display: flex;
  align-items: center;
  font-size: 1rem;

  line-height: 1.2;
color: var(--primary-text-color-light);
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
color: var(--primary-text-color-light);
  text-decoration: none;

  display: flex;
  align-items: start;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
  &:hover {
    text-decoration: underline;
  }
`;


export const CopyrightText = styled.p`
  color: var(--primary-text-color-light);

margin: 0;
margin-bottom: 10px;
`;

export const StyledLink = styled.a`
  color: #00baff;
  text-decoration: none;

  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
  &:hover {
    text-decoration: underline;
  }
`;