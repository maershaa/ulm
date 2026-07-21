import{s as e,L as i}from"./index-Dn3ADNMV.js";const a=e.section`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 40px 0;
`,r=e.div`
  background-image: url(${t=>t.$bgImageAboutUsPage});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${({theme:t})=>t.colors.textInverse};

  background-position: center center;

  width: 100%;
  min-height: 400px;
  padding: 20px;

  border-radius: ${({theme:t})=>t.radius.lg};

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    padding: 40px;
  }
`,n=e.div`
  width: 100%;
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  gap: 20px;

  justify-content: center;
  align-items: center;

  border-radius: ${({theme:t})=>t.radius.md};

  background-color: ${({theme:t})=>t.colors.textInverse};

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    max-width: 500px;
    padding: 60px 40px;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    max-width: 650px;
  }
`,s=e.p`
  text-align: left;

  color: ${({theme:t})=>t.colors.brand};
  background-color: ${({theme:t})=>t.colors.textInverse};

  font-size: 0.9rem;
  line-height: 1.2;

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    font-size: 1rem;
    padding: 0 10px 0 0;
  }
`,d=e.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;

  padding: 56px 20px;

  border-bottom-left-radius: ${({theme:t})=>t.radius.lg};
  border-bottom-right-radius: ${({theme:t})=>t.radius.lg};

  background-color: rgb(3, 37, 65);
  background-image: linear-gradient(
      to right,
      rgba(3, 37, 65, 0.9) 0%,
      rgba(3, 37, 65, 0) 100%
    ),
    url(${t=>t.$heroImageTablet});

  @media (min-width: ${({theme:t})=>t.breakpoints.mobileLg}) {
    background-size: cover;
    background-repeat: no-repeat;

    background-image: linear-gradient(
        to right,
        rgba(3, 37, 65, 0.9) 0%,
        rgba(3, 37, 65, 0) 100%
      ),
      url(${t=>t.$heroImageMobile});
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: 72px 40px;
  }
  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    background-image: linear-gradient(
        to right,
        rgba(3, 37, 65, 0.9) 0%,
        rgba(3, 37, 65, 0) 100%
      ),
      url(${t=>t.$heroImage});
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;

    justify-items: stretch;
    gap: 60px;

    padding: 90px 60px;
  }
`,p=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;

  margin-bottom: 20px;
  padding: 0;

  @media (min-width: ${({theme:t})=>t.breakpoints.tablet}) {
    gap: 28px;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    align-items: flex-start;
    text-align: left;
  }
`,l=e.h1`
  color: ${({theme:t})=>t.colors.textInverse};

  font-size: 1.7rem;
  font-weight: 600;
  line-height: 1.3;

  text-align: left;

  margin-bottom: 16px;

  @media (min-width: ${({theme:t})=>t.breakpoints.tablet}) {
    font-size: 2.2rem;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    font-size: 3rem;
  }

  /*Декоративная полоска */
  &::after {
    content: '';
    display: block;
    border-top: 6px solid ${({theme:t})=>t.colors.accentLight};

    width: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`,c=e.h2`
  color: ${({theme:t})=>t.colors.textInverse};

  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.2;

  text-align: left;

  margin-bottom: 35px;
  max-width: 600px;

  @media (min-width: ${({theme:t})=>t.breakpoints.tablet}) {
    font-size: 1.8rem;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    font-size: 2.2rem;
  }
`,m=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;

  padding: 12px 20px;
  font-size: 0.95rem;

  svg {
    font-size: 20px;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.tablet}) {
    flex-direction: row;
    width: auto;

    padding: 14px 28px;
    font-size: 1rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    width: 100%;
    white-space: nowrap; //чтобы на 2 строки "про нас" не разделялось
    margin-top: 20px;

    font-weight: 600;
    font-size: 1rem;
    padding: 14px 28px;
    border-radius: ${({theme:t})=>t.radius.lg};

    background-color: ${({theme:t})=>t.colors.accentLight};

    opacity: 0.8;
    color: ${({theme:t})=>t.colors.textInverse};

    transition: ${({theme:t})=>t.transitions.base};

    @media (min-width: ${({theme:t})=>t.breakpoints.tablet}) {
      width: auto;
    }

    @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
      font-size: 1.1rem;
    }

    &:hover {
      transform: translateY(-2px);
      opacity: 1;
      box-shadow: 0 4px 12px var(--glow-color);
    }
  }
`,g=e.p`
  font-size: 1rem;
  letter-spacing: 0.15em;
  font-weight: 700;

  text-transform: uppercase;

  color: ${({theme:t})=>t.colors.textInverse};

  opacity: 0.75;

  margin-bottom: 10px;
`,x=e.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;

  width: 100%;
  max-width: 430px;

  margin: 0 auto;
  padding: 20px;

  border-radius: ${({theme:t})=>t.radius.lg};
  border: 1px solid rgba(255, 255, 255, 0.12);

  background: rgba(3, 37, 65, 0.7);
  backdrop-filter: blur(16px);

  box-shadow: ${({theme:t})=>t.shadows.lg};

  @media (min-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: 28px;
    gap: 22px;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    margin-left: auto;
  }
`,b=e.li`
  display: flex;
  align-items: center;
  gap: 14px;

  padding-bottom: 16px;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  svg {
    flex-shrink: 0;

    font-size: 1.35rem;

    color: ${({theme:t})=>t.colors.accentLight};

    @media (min-width: ${({theme:t})=>t.breakpoints.tablet}) {
      font-size: 1.7rem;
    }
  }

  span {
    font-size: 1rem;
    line-height: 1.45;
    font-weight: 600;

    color: ${({theme:t})=>t.colors.textInverse};

    @media (min-width: ${({theme:t})=>t.breakpoints.tablet}) {
      font-size: 1.2rem;
    }
  }
`,h=e.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 24px;

  padding: 40px 0;
`,f=e.ul`
  display: grid;
  gap: 32px;

  margin-top: 48px;

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`,u=e.li`
  cursor: default;
  overflow: hidden;

  background: ${({theme:t})=>t.colors.card};
  border: 1px solid ${({theme:t})=>t.colors.borderDefault};
  border-radius: ${({theme:t})=>t.radius.lg};
  box-shadow: ${({theme:t})=>t.shadows.sm};

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    cursor: pointer;
    transition: ${({theme:t})=>t.transitions.base};

    &:hover {
      transform: translateY(-8px);
      box-shadow: ${({theme:t})=>t.shadows.lg};
      border-color: ${({theme:t})=>t.colors.accent};
    }
  }
`,$=e.div`
  position: relative;
  overflow: hidden;

  aspect-ratio: 16 / 10;
`,w=e.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`,k=e.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(
    to top,
    rgba(3, 37, 65, 0.45),
    rgba(3, 37, 65, 0.05)
  );
`,v=e.div`
  display: flex;
  flex-direction: column;

  padding: 28px;

  gap: 18px;
`,y=e.span`
  font-size: 0.8rem;

  font-weight: 700;

  color: ${({theme:t})=>t.colors.accent};

  letter-spacing: 0.25em;
`,z=e.h3`
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
`,L=e.p`
  line-height: 1.7;
  font-size: 1rem;

  color: ${({theme:t})=>t.colors.textSecondary};

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

    overflow: hidden;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    font-size: 1.1rem;
  }
`,I=e.div`
  display: none;

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: auto;

    font-size: 1rem;
    font-weight: 600;

    color: ${({theme:t})=>t.colors.accent};
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    font-size: 1.1rem;
  }
`,j=e.div`
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 32px;

  background: rgba(3, 37, 65, 0.75);
  backdrop-filter: blur(6px);

  z-index: ${({theme:t})=>t.zIndex.modalBackdrop};
`,B=e.div`
  position: relative;

  width: 100%;
  max-width: 760px;

  overflow: hidden;

  background: ${({theme:t})=>t.colors.card};
  border-radius: ${({theme:t})=>t.radius.lg};
  border: 1px solid ${({theme:t})=>t.colors.borderDefault};
  box-shadow: ${({theme:t})=>t.shadows.lg};
`,C=e.img`
  width: 100%;
  aspect-ratio: 16/9;

  object-fit: cover;
`,S=e.div`
  padding: 36px;
`,M=e.h2`
  font-size: 1.5rem;

  margin-bottom: 18px;

  color: ${({theme:t})=>t.colors.textPrimary};

  @media (min-width: ${({theme:t})=>t.breakpoints.tablet}) {
    font-size: 1.8rem;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    font-size: 2.2rem;
  }
`,P=e.div`
  width: 100px;
  height: 3px;

  margin-bottom: 26px;

  background: ${({theme:t})=>t.colors.accent};
`,D=e.p`
  line-height: 1.9;
  font-size: 1rem;

  color: ${({theme:t})=>t.colors.textSecondary};

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    font-size: 1.1rem;
  }
`,F=e.button`
  position: absolute;

  top: 20px;
  right: 20px;

  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({theme:t})=>t.radius.round};

  background: rgba(255, 255, 255, 0.95);
  color: ${({theme:t})=>t.colors.brand};
  border: 1px solid ${({theme:t})=>t.colors.borderDefault};
  transition: ${({theme:t})=>t.transitions.fast};

  &:hover {
    background: ${({theme:t})=>t.colors.accent};
    color: white;
  }

  svg {
    width: 26px;
    height: 26px;
    flex-shrink: 0;
  }
`,T=e.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 24px;

  padding: 20px 0;
`,W=e.p`
  max-width: 760px;

  color: ${({theme:t})=>t.colors.textSecondary};

  font-size: 1.05rem;
  line-height: 1.8;
  text-align: center;

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    font-size: 1.15rem;
  }
`,H=e.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  gap: 16px;

  width: 100%;
  margin-top: 20px;

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    gap: 24px;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktopLg}) {
    gap: 32px;
  }
`,Y=e.div`
  margin-top: 24px;
`,A=e(i)`
  display: inline-flex;
  align-items: center;
  gap: 14px;

  padding: 18px 34px;

  border-radius: ${({theme:t})=>t.radius.round};

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
`,G=e.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  border: 1px solid ${({theme:t})=>t.colors.accent};
  border-radius: ${({theme:t})=>t.radius.lg};
  background-color: ${({theme:t})=>t.colors.card};

  flex-basis: calc(100% - 20px);
  margin-bottom: 15px;
  padding: 22px;

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    flex-basis: calc(50% - 20px);
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    flex-basis: calc(33.3333% - 30px);
  }

  div {
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 1 / 1;

    border-radius: ${({theme:t})=>t.radius.round};
  }

  h3 {
    margin-top: 10px;
    color: ${({theme:t})=>t.colors.textPrimary};

    font-weight: 700;
    font-size: 1.7rem;

    @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
      font-size: 1rem;
    }

    @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
      font-size: 1.2rem;
    }
  }

  p {
    margin-top: 10px;
    color: ${({theme:t})=>t.colors.textPrimary};

    font-weight: 500;
    font-size: 1.2rem;

    @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
      font-size: 1rem;
    }

    @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
      font-size: 1.1rem;
    }
  }
`,N=e.section`
  padding: 110px 0;
`,O=e.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 64px 32px;

  text-align: center;

  background: ${({theme:t})=>t.colors.section};

  border: 1px solid ${({theme:t})=>t.colors.borderDefault};
  border-radius: ${({theme:t})=>t.radius.lg};

  box-shadow: ${({theme:t})=>t.shadows.sm};
`,U=e.h2`
  margin-bottom: 20px;

  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;

  color: ${({theme:t})=>t.colors.accentLight};
`,q=e.p`
  max-width: 620px;

  margin: 0 auto 40px;

  font-size: 1.125rem;
  line-height: 1.7;

  color: ${({theme:t})=>t.colors.textSecondary};
`,E=e(i)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  padding: 18px 36px;

  border-radius: ${({theme:t})=>t.radius.round};

  background: linear-gradient(
    135deg,
    ${({theme:t})=>t.colors.accentLight},
    ${({theme:t})=>t.colors.accent}
  );

  color: ${({theme:t})=>t.colors.textInverse};

  font-size: 1rem;
  font-weight: 600;

  transition: ${({theme:t})=>t.transitions.base};

  &:hover,
  &:focus-visible {
    transform: translateY(-3px);

    box-shadow: ${({theme:t})=>t.shadows.md};
  }

  svg {
    flex-shrink: 0;
  }
`,J=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  margin-right: auto;
  margin-left: auto;

  padding: 40px 20px;
`,K=e.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 10px;

  align-items: stretch;

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    gap: 20px;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktopLg}) {
    gap: 30px;
  }
`,Q=e.p`
  max-width: 760px;

  color: ${({theme:t})=>t.colors.textSecondary};

  font-size: 1.05rem;
  line-height: 1.8;
  text-align: center;

  margin: 0 auto 20px auto;

  @media (min-width: ${({theme:t})=>t.breakpoints.tablet}) {
    margin: 0 auto 40px auto;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    font-size: 1.15rem;
  }
`;export{s as A,r as B,F as C,N as D,O as E,g as F,q as G,d as H,n as I,E as J,Q as K,K as L,j as M,G as N,k as O,T as P,a as S,U as T,J as W,p as a,l as b,c,m as d,x as e,b as f,B as g,C as h,S as i,M as j,P as k,D as l,h as m,f as n,u as o,$ as p,w as q,v as r,y as s,z as t,L as u,I as v,W as w,H as x,Y as y,A as z};
