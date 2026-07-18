import{j as i,T as o,s as e}from"./index-EkST_Q1r.js";const n=({title:t})=>i.jsx(o,{children:t}),r=e.section`
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
`,d=e.div`
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
`,s=e.div`
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
`,p=e.p`
  text-align: left;

  color: ${({theme:t})=>t.colors.brand};
  background-color: ${({theme:t})=>t.colors.textInverse};

  font-size: 0.9rem;
  line-height: 1.2;

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    font-size: 1rem;
    padding: 0 10px 0 0;
  }
`,l=e.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;

  padding: 40px 10px;

  background-color: rgb(3, 37, 65);
  background-image: linear-gradient(
      to right,
      rgba(3, 37, 65, 0.9) 0%,
      rgba(3, 37, 65, 0) 100%
    ),
    url(${t=>t.$heroImageTablet});

  @media (min-width: ${({theme:t})=>t.breakpoints.mobileLg}) {
    background-image: linear-gradient(
        to right,
        rgba(3, 37, 65, 0.9) 0%,
        rgba(3, 37, 65, 0) 100%
      ),
      url(${t=>t.$heroImageMobile});
    background-size: cover;
    background-repeat: no-repeat;
    background-color: rgb(3, 37, 65);
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
`,m=e.div`
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
`,c=e.h1`
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
`,g=e.h2`
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
`,x=e.div`
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
`,b=e.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  padding: 40px 20px;
`,h=e.ul`
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
`,f=e.li`
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
`,u=e.div`
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
`,$=e.p`
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
`,v=e.div`
  visibility: hidden; //!!! временное решение чтобы не обображать модалку на телефонах

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    visibility: visible; //!!! временное решение чтобы не обображать модалку на телефонах

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1001; //! так как у header 1000
  }
`,y=e.div`
  background: white;
  padding: 20px;
  border-radius: ${({theme:t})=>t.radius.md};
  max-width: 500px;
  width: 100%;
  position: relative;
`,z=e.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(200, 200, 200, 0.8);
  border: none;
  border-radius: ${({theme:t})=>t.radius.round};
  width: 30px;
  height: 30px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(
      150,
      150,
      150,
      0.8
    ); /* Более темный фон при наведении */
  }
`,L=e.img`
  width: 100%;
  max-width: 400px;
  height: auto;

  margin-bottom: 20px;

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    max-width: 500px;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    max-width: 600px;
  }
`,I=e.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;

  margin: 0;

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    font-size: 1.1rem;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    font-size: 1.2rem;
  }
`,j=e.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;

  text-align: left;

  address {
    margin-bottom: 20px;
  }
`,C=e.div`
  margin-bottom: 20px;
`,T=e.div`
  margin-bottom: 5px;

  display: flex;
  align-items: center;
  font-size: 1rem;

  line-height: 1.2;

  color: ${({theme:t})=>t.colors.textPrimary};

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    font-size: 1.1rem;
  }
`,P=e.div`
  margin-right: 8px;

  svg {
    width: 22px;
    height: 22px;
    fill: ${({theme:t})=>t.colors.accentLight};
  }
`,M=e.a`
  color: ${({theme:t})=>t.colors.accentLight};

  text-decoration: none;

  display: flex;
  align-items: center;
  font-size: 1rem;

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    font-size: 1.1rem;
  }
  &:hover {
    text-decoration: underline;
  }
`,B=e.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 10px;

  align-items: stretch; //! Устанавливает одинаковую высоту для всех элементов

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    gap: 20px;
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktopLg}) {
    gap: 30px;
  }
`,F=e.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  border: 1px solid ${({theme:t})=>t.colors.borderSubtle};

  border-radius: ${({theme:t})=>t.radius.lg};

  border-bottom-color: ${({theme:t})=>t.colors.accent};

  background-color: ${({theme:t})=>t.colors.card};

  // !Устанавливает базовый размер элемента равный 100% ширины контейнера, за вычетом 20 пикселей.
  // Это позволяет элементу занимать всю ширину контейнера, но оставляет небольшой отступ.
  flex-basis: calc(100% - 20px);
  margin-bottom: 15px;
  padding: 22px;

  @media (min-width: ${({theme:t})=>t.breakpoints.tabletLg}) {
    // !Элемент занимает 50% ширины контейнера, минус 20 пикселей. Это делит экран на два столбца.
    flex-basis: calc(50% - 20px);
  }

  @media (min-width: ${({theme:t})=>t.breakpoints.desktop}) {
    // !Элемент занимает 33.3333% ширины контейнера, минус 30 пикселей. Это делит экран на три столбца.
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
`;export{p as A,d as B,z as C,h as F,l as H,s as I,v as M,B as P,r as S,n as T,m as a,c as b,g as c,x as d,y as e,L as f,I as g,b as h,f as i,w as j,u as k,k as l,$ as m,F as n,j as o,T as p,C as q,P as r,M as s};
