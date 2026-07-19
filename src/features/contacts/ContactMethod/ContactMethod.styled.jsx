import styled from 'styled-components';

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  margin-bottom: 10px;

  font-size: 1rem;
  line-height: 1.2;

  color: ${({ theme }) => theme.colors.textPrimary};

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    font-size: 1.1rem;
  }
`;

export const Icon = styled.div`
  display: flex;

  svg {
    width: 22px;
    height: 22px;
    fill: ${({ theme }) => theme.colors.accentLight};
  }
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.colors.accentLight};
  text-decoration: none;

  font-size: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    font-size: 1.1rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;
