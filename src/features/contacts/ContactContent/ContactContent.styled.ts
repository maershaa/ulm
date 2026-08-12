import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    flex-wrap: nowrap;
  }
`;

export const ContactContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;

  text-align: left;

  address {
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin-bottom: 20px;
  }
`;

export const AddressLine = styled.div`
  font-size: 1rem;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    font-size: 1.1rem;
  }
`;

export const Phone = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-bottom: 20px;
`;
