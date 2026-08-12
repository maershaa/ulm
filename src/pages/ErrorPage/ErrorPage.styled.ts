import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;

  min-height: 100vh;

  padding: 20px;

  svg {
    width: 64px;
    height: 64px;
  }
`;

export const Title = styled.h1`
  text-align: center;

  color: ${({ theme }) => theme.colors.textInverse};

  font-size: 1.7rem;
  font-weight: 600;
  line-height: 1.3;

  margin-bottom: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.h2`
  text-align: center;

  color: ${({ theme }) => theme.colors.textInverse};

  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.2;

  margin-bottom: 35px;
  max-width: 600px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.8rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 2.2rem;
  }
`;

export const SorryText = styled.h3`
  text-align: center;

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

export const BackButton = styled.a`
  margin-top: 20px;

  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 10px 18px;

  border-radius: 10px;
  border: none;

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

  overflow: hidden;
  position: relative;

  transition:
    transform 250ms ease,
    box-shadow 250ms ease;

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
