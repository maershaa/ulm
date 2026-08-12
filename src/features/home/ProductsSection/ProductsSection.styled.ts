import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 24px;

  padding: 20px 0;
`;

export const SectionDescription = styled.p`
  max-width: 760px;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 1.05rem;
  line-height: 1.8;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.15rem;
  }
`;

export const ProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  gap: 16px;

  width: 100%;
  margin-top: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    gap: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLg}) {
    gap: 32px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 24px;
`;
export const ButtonLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 14px;

  padding: 18px 34px;

  border-radius: ${({ theme }) => theme.radius.round};

  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accentLight} 0%,
    ${({ theme }) => theme.colors.accent} 100%
  );

  color: ${({ theme }) => theme.colors.textInverse};

  font-size: 1rem;
  font-weight: 600;

  box-shadow:
    0 12px 30px rgba(18, 116, 162, 0.25),
    0 4px 12px rgba(18, 116, 162, 0.15);

  transition:
    transform 250ms ease,
    box-shadow 250ms ease;

  overflow: hidden;
  position: relative;

  &:hover {
    transform: translateY(-2px) scale(1.03);

    box-shadow:
      0 18px 40px rgba(18, 116, 162, 0.35),
      0 8px 18px rgba(18, 116, 162, 0.2);
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }
`;
