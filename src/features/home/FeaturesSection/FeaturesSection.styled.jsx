import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 24px;

  padding: 40px 0;
`;

export const FeatureList = styled.ul`
  display: grid;
  gap: 32px;

  margin-top: 48px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FeatureCard = styled.li`
  cursor: default;
  overflow: hidden;

  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.base};

    &:hover {
      transform: translateY(-8px);
      box-shadow: ${({ theme }) => theme.shadows.lg};
      border-color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;

  aspect-ratio: 16 / 10;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(
    to top,
    rgba(3, 37, 65, 0.45),
    rgba(3, 37, 65, 0.05)
  );
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;

  padding: 28px;

  gap: 18px;
`;

export const FeatureNumber = styled.span`
  font-size: 0.8rem;

  font-weight: 700;

  color: ${({ theme }) => theme.colors.accent};

  letter-spacing: 0.25em;
`;

export const FeatureItemTitle = styled.h3`
  font-size: 1.2rem;
  line-height: 1.3;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.3rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.5rem;
  }
`;

export const FeatureItemText = styled.p`
  line-height: 1.7;
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.textSecondary};

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

    overflow: hidden;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.1rem;
  }
`;

export const MoreButton = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLg}) {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: auto;

    font-size: 1rem;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.accent};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.1rem;
  }
`;
