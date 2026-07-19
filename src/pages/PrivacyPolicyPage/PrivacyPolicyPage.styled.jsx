import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 40px 20px 60px;
`;

export const UpdatedAt = styled.p`
  margin-top: 8px;
  margin-bottom: 32px;

  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Section = styled.section`
  margin-bottom: 28px;
`;

export const Heading = styled.h2`
  margin-bottom: 8px;

  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
