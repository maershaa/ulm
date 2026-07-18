import styled from 'styled-components';

export const Glow = styled.div`
  position: absolute;
  z-index: -1; // родитель должен иметь isolation: isolate
  pointer-events: none;

  width: ${({ $size }) => $size ?? 450}px;
  height: ${({ $size }) => $size ?? 450}px;

  border-radius: ${({ theme }) => theme.radius.round};
  filter: blur(220px);

  background: ${({ theme }) => theme.colors.glowPrimary};

  opacity: ${({ $opacity }) => $opacity ?? 1};

  top: ${({ $top }) => $top ?? 'auto'};
  left: ${({ $left }) => $left ?? 'auto'};
  right: ${({ $right }) => $right ?? 'auto'};
  bottom: ${({ $bottom }) => $bottom ?? 'auto'};

  ${({ $centered }) => $centered && 'transform: translate(-50%, -50%);'}
`;
