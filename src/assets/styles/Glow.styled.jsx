import styled from 'styled-components';

// Единая "техника бликов" для всего проекта: один круг с blur.
// Раньше это делалось либо картинками (MobileMenu), либо ::before/::after
// (SharedLayout) — теперь один компонент, переиспользуемый везде.
// Цвет берётся из var(--accent-color), поэтому блик сам меняется
// вместе с темой (light/dark), в отличие от PNG.
export const Glow = styled.div`
  position: absolute;
  z-index: -1; // родитель должен иметь isolation: isolate
  pointer-events: none;

  width: ${({ $size }) => $size ?? 450}px;
  height: ${({ $size }) => $size ?? 450}px;

  border-radius: var(--radius-round);
  filter: blur(220px);

  background: var(--accent-color);
  opacity: ${({ $opacity }) => $opacity ?? 1};

  top: ${({ $top }) => $top ?? 'auto'};
  left: ${({ $left }) => $left ?? 'auto'};
  right: ${({ $right }) => $right ?? 'auto'};
  bottom: ${({ $bottom }) => $bottom ?? 'auto'};

  ${({ $centered }) => $centered && 'transform: translate(-50%, -50%);'}
`;
