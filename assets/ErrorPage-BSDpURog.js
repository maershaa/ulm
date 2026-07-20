import{s as i,G as r,u as n,j as e,L as o}from"./index-CS2fsqCD.js";import{a}from"./index-DgL55AY1.js";const s=i.div`
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
`,l=i.h1`
  text-align: center;

  color: ${({theme:t})=>t.colors.textInverse};

  font-size: 1.7rem;
  font-weight: 600;
  line-height: 1.3;

  margin-bottom: 16px;

  @media (min-width: ${({theme:t})=>t.breakpoints.tablet}) {
    font-size: 2.2rem;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    font-size: 3rem;
  }
`,c=i.h2`
  text-align: center;

  color: ${({theme:t})=>t.colors.textInverse};

  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.2;

  margin-bottom: 35px;
  max-width: 600px;

  @media (min-width: ${({theme:t})=>t.breakpoints.tablet}) {
    font-size: 1.8rem;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    font-size: 2.2rem;
  }
`,x=i.h3`
  text-align: center;

  font-size: 1.2rem;
  line-height: 1.3;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.textPrimary};

  @media (min-width: ${({theme:t})=>t.breakpoints.tablet}) {
    font-size: 1.3rem;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    font-size: 1.5rem;
  }
`,d=i.a`
  margin-top: 20px;

  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 10px 18px;

  border-radius: 10px;
  border: none;

  background: linear-gradient(
    135deg,
    ${({theme:t})=>t.colors.accentLight} 0%,
    ${({theme:t})=>t.colors.accent} 100%
  );

  color: ${({theme:t})=>t.colors.textInverse};

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
`;function p(t){return r({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"},child:[]}]})(t)}const g=()=>{const{t}=n("main");return e.jsxs(s,{children:[e.jsx(a,{}),e.jsx(l,{children:"404"}),e.jsx(c,{children:t("error.404.title")}),e.jsx(x,{children:t("error.404.description")}),e.jsxs(d,{as:o,to:"/",children:[e.jsx(p,{}),t("error.404.button")]})]})};export{g as default};
