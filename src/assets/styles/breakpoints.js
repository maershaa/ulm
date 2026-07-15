export const breakpoints = {
  mobile: '375px',
  mobileLg: '450px',
  tablet: '625px',
  tabletLg: '768px',
  desktop: '1000px',
  desktopLg: '1280px',
  wide: '1800px',
};

export const media = {
  mobileLg: (styles) =>
    `@media (min-width: ${breakpoints.mobileLg}) { ${styles} }`,
  tablet: (styles) => `@media (min-width: ${breakpoints.tablet}) { ${styles} }`,
  tabletLg: (styles) =>
    `@media (min-width: ${breakpoints.tabletLg}) { ${styles} }`,
  desktop: (styles) =>
    `@media (min-width: ${breakpoints.desktop}) { ${styles} }`,
  desktopLg: (styles) =>
    `@media (min-width: ${breakpoints.desktopLg}) { ${styles} }`,
};
