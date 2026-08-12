import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding: 110px 0;
`;

export const Content = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 64px 32px;

  text-align: center;

  background: ${({ theme }) => theme.colors.section};

  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.radius.lg};

  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const Title = styled.h2`
  margin-bottom: 20px;

  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;

  color: ${({ theme }) => theme.colors.accentLight};
`;

export const Description = styled.p`
  max-width: 620px;

  margin: 0 auto 40px;

  font-size: 1.125rem;
  line-height: 1.7;

  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ContactButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  padding: 18px 36px;

  border-radius: ${({ theme }) => theme.radius.round};

  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accentLight},
    ${({ theme }) => theme.colors.accent}
  );

  color: ${({ theme }) => theme.colors.textInverse};

  font-size: 1rem;
  font-weight: 600;

  transition: ${({ theme }) => theme.transitions.base};

  &:hover,
  &:focus-visible {
    transform: translateY(-3px);

    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  svg {
    flex-shrink: 0;
  }
`;
