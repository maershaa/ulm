import{s as e,L as i}from"./index-DO5OmBdR.js";const a=e.section`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 40px 0;

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    /* padding-left: 32px;
    padding-right: 32px; */
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    /* padding-left: 20px;
    padding-right: 20px; */
  }
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
    max-width: 600px;
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

  padding: 40px 10px;

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
  }
`,p=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  text-align: center;

  margin-bottom: 20px;
  padding: 20px;

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

  @media (min-width: ${({theme:t})=>t.breakpoints.tablet}) {
    flex-direction: row;
    width: auto;
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
  margin: 0 auto;
  gap: 22px;

  width: 430px;
  padding: 30px;

  border-radius: ${({theme:t})=>t.radius.lg};

  background: rgba(3, 37, 65, 0.7);

  backdrop-filter: blur(16px);

  border: 1px solid rgba(255, 255, 255, 0.12);

  box-shadow: ${({theme:t})=>t.shadows.lg};
`,b=e.li`
  display: flex;
  align-items: center;
  gap: 18px;

  padding-bottom: 18px;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  svg {
    font-size: 1.7rem;
    color: ${({theme:t})=>t.colors.accentLight};
  }

  span {
    color: ${({theme:t})=>t.colors.textInverse};

    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.4;
  }
`,h=e.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  padding: 40px 20px;
`,f=e.ul`
  display: grid;
  grid-template-columns: 1fr;

  grid-gap: 5px;

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    grid-template-columns: 1fr 1fr;

    grid-gap: 15px;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`,u=e.li`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    flex-direction: column;

    // Для нечётных элементов (1, 3, 5...)
    &:nth-of-type(odd) {
      flex-direction: column;
    }

    // Для чётных элементов (2, 4, 6...)
    &:nth-of-type(even) {
      flex-direction: column-reverse;
    }
  }
`,w=e.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    max-width: 300px;
    margin-bottom: 0;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    max-width: 500px;
  }
`,$=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  background-color: ${({theme:t})=>t.colors.accent};

  color: ${({theme:t})=>t.colors.textInverse};

  width: 100%;
  aspect-ratio: 1 / 1;

  margin: 0;
  gap: 1.5rem;

  @media (min-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: 16px;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    text-align: left;
    padding: 24px;
    max-width: 300px;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    max-width: 500px;
    padding: 32px;
  }
`,k=e.h4`
  text-transform: uppercase;
  margin: 0;
  font-weight: 700;

  font-size: 1.3rem;

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    font-size: 1rem;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    font-size: 1.2rem;
  }
`,v=e.p`
  position: relative;
  padding: 0 30px;
  font-size: 0.9rem;
  line-height: 1.2;
  text-align: justify;

  @media (min-width: ${({theme:t})=>t.breakpoints.mobileLg}) {
    font-size: 1rem;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    padding: 0 10px 0 0;

    //! Делаем (...) троеточиеи обрезаем текст
    display: -webkit-box;
    -webkit-line-clamp: 5; /* Ограничивает количество строк до 5 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis; /* добавляет многоточие, если текст не помещается в выделенные строки. */
    max-height: calc(
      1.2em * 5
    ); /* Устанавливает максимальную высоту для 5 строк */
  }
`,y=e.div`
  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    padding: 24px;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    /* запрет прокрутки странички при открытой модалке */
    overflow: hidden;
    overscroll-behavior: none;

    background: rgba(3, 37, 65, 0.65);
    backdrop-filter: blur(5px);

    z-index: ${({theme:t})=>t.zIndex.modalBackdrop};
  }
`,z=e.div`
  position: relative;
  width: 100%;
  max-width: 680px;
  padding: 28px;

  background: ${({theme:t})=>t.colors.elevated};
  border: 1px solid ${({theme:t})=>t.colors.borderDefault};
  border-radius: ${({theme:t})=>t.radius.lg};
  box-shadow: ${({theme:t})=>t.shadows.lg};

  z-index: ${({theme:t})=>t.zIndex.modalContent};
`,L=e.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 36px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;

  background: ${({theme:t})=>t.colors.elevated};
  color: ${({theme:t})=>t.colors.textSecondary};
  border: 1px solid ${({theme:t})=>t.colors.borderDefault};
  border-radius: ${({theme:t})=>t.radius.round};

  transition: ${({theme:t})=>t.transitions.fast};

  &:hover {
    background: ${({theme:t})=>t.colors.accent};
    color: ${({theme:t})=>t.colors.textInverse};
  }
`,I=e.img`
  object-fit: cover;
  width: 100%;
  border-radius: ${({theme:t})=>t.radius.md};
  margin-bottom: 24px;
`,j=e.p`
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;

  color: ${({theme:t})=>t.colors.textInverse};
`,B=e.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 24px;

  padding: 80px 0;
`,C=e.p`
  max-width: 760px;

  color: ${({theme:t})=>t.colors.textSecondary};

  font-size: 1.05rem;
  line-height: 1.8;
  text-align: center;

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    font-size: 1.15rem;
  }
`,F=e.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
`,P=e.div`
  margin-top: 24px;
`,T=e(i)`
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
`,S=e.li`
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
`,H=e.ul`
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
`;export{s as A,r as B,L as C,g as F,d as H,n as I,y as M,B as P,a as S,$ as T,p as a,l as b,c,m as d,x as e,b as f,z as g,I as h,j as i,h as j,f as k,u as l,w as m,k as n,v as o,C as p,F as q,P as r,T as s,H as t,S as u};
