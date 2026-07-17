import{j as a,T as o,b as t,s as i}from"./index-Bf3vrEMC.js";const n=({title:e})=>a.jsx(o,{children:e}),d=i.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 40px 0;

  @media (min-width: ${t.tabletLg}) {
    /* padding-left: 32px;
    padding-right: 32px; */
  }

  @media (min-width: ${t.desktop}) {
    /* padding-left: 20px;
    padding-right: 20px; */
  }
`,l=i.div`
  background-image: url(${e=>e.$bgImageAboutUsPage});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: var(--primary-text-color-light);
  background-position: center center;

  width: 100%;
  min-height: 400px;
  padding: 20px;

  border-radius: var(--radius-lg);

  @media (min-width: ${t.tabletLg}) {
    padding: 40px;
  }
`,m=i.div`
  width: 100%;
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  gap: 20px;

  justify-content: center;
  align-items: center;

  border-radius: var(--radius-md);
  background-color: var(--primary-text-color-light);

  @media (min-width: ${t.tabletLg}) {
    max-width: 500px;
    padding: 60px 40px;
  }

  @media (min-width: ${t.desktop}) {
    max-width: 600px;
  }
`,s=i.p`
  text-align: left;

  color: var(--primary-bg-dark-color);
  background-color: var(--primary-text-color-light);

  font-size: 0.9rem;
  line-height: 1.2;

  @media (min-width: ${t.tabletLg}) {
    font-size: 1rem;
    padding: 0 10px 0 0;
  }
`,g=i.div`
  background-color: rgb(3, 37, 65);

  padding: 40px 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
  flex-direction: column;

  background-image: linear-gradient(
      to right,
      rgba(3, 37, 65, 0.9) 0%,
      rgba(3, 37, 65, 0) 100%
    ),
    url(${e=>e.$heroImageTablet});

  @media (min-width: ${t.mobileLg}) {
    background-image: linear-gradient(
        to right,
        rgba(3, 37, 65, 0.9) 0%,
        rgba(3, 37, 65, 0) 100%
      ),
      url(${e=>e.$heroImageMobile});
    background-size: cover;
    background-repeat: no-repeat;
    background-color: rgb(3, 37, 65);
  }

  @media (min-width: ${t.tablet}) {
    padding: 40px;
  }

  @media (min-width: ${t.tabletLg}) {
    flex-wrap: nowrap;
    flex-direction: row;
    /* height: 600px; */

    background-image: linear-gradient(
        to right,
        rgba(3, 37, 65, 0.9) 0%,
        rgba(3, 37, 65, 0) 100%
      ),
      url(${e=>e.$heroImage});
  }
`,c=i.div`
  text-align: center;
  width: 90%;
  text-align: center;

  margin-bottom: 20px;

  @media (min-width: ${t.tabletLg}) {
    width: 50%;
    margin-bottom: 0;
  }
`,p=i.h2`
  color: var(--primary-text-color-light);

  margin-bottom: 10px;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.3;

  text-align: left;

  @media (min-width: ${t.tablet}) {
    font-size: 1.8rem;
  }

  @media (min-width: ${t.tabletLg}) {
    width: 50%;
    margin-bottom: 0;
  }

  /* Псевдоэлемент для разделительной полоски */
  &::after {
    content: '';
    display: block;
    border-top: 6px solid var(--light-accent);
    width: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`,x=i.h3`
  color: var(--primary-text-color-light);

  margin-bottom: 10px;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.2;

  text-align: center;

  @media (min-width: ${t.tablet}) {
    font-size: 1.1rem;
  }

  @media (min-width: ${t.tabletLg}) {
    text-align: left;
  }
`,h=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;

  @media (min-width: ${t.mobileLg}) {
    flex-direction: row;
    width: auto;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    font-weight: 600;
    font-size: 1rem;
    padding: 14px 28px;
    border-radius: var(--radius-lg);

    transition: all 0.2s ease;

    width: 100%;
    margin-top: 20px;

    @media (min-width: ${t.mobileLg}) {
      width: auto;
    }

    background-color: var(--light-accent);
    opacity: 0.8;
    color: var(--primary-text-color-light);

    &:hover {
      transform: translateY(-2px);
      opacity: 1;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }
`,b=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  padding: 40px 20px;
`,f=i.ul`
  display: grid;
  grid-template-columns: 1fr;

  grid-gap: 5px;

  @media (min-width: ${t.tabletLg}) {
    grid-template-columns: 1fr 1fr;

    grid-gap: 15px;
  }

  @media (min-width: ${t.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`,w=i.li`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: ${t.tabletLg}) {
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
`,u=i.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;

  @media (min-width: ${t.tabletLg}) {
    max-width: 300px;
    margin-bottom: 0;
  }

  @media (min-width: ${t.desktop}) {
    max-width: 500px;
  }
`,v=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  background-color: var(--accent-color);
  color: var(--primary-text-color-light);

  width: 100%;
  aspect-ratio: 1 / 1;

  margin: 0;
  gap: 1.5rem;

  @media (min-width: ${t.tablet}) {
    padding: 16px;
  }

  @media (min-width: ${t.tabletLg}) {
    text-align: left;
    padding: 24px;
    max-width: 300px;
  }

  @media (min-width: ${t.desktop}) {
    max-width: 500px;
    padding: 32px;
  }
`,$=i.h4`
  text-transform: uppercase;
  margin: 0;
  font-weight: 700;

  font-size: 1.3rem;

  @media (min-width: ${t.tabletLg}) {
    font-size: 1rem;
  }

  @media (min-width: ${t.desktop}) {
    font-size: 1.2rem;
  }
`,k=i.p`
  position: relative;
  padding: 0 30px;
  font-size: 0.9rem;
  line-height: 1.2;
  text-align: justify;

  @media (min-width: ${t.mobileLg}) {
    font-size: 1rem;
  }

  @media (min-width: ${t.tabletLg}) {
    font-size: 1rem;
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
`,y=i.div`
  visibility: hidden; //!!! временное решение чтобы не обображать модалку на телефонах

  @media (min-width: ${t.tabletLg}) {
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
`,z=i.div`
  background: white;
  padding: 20px;
  border-radius: var(--radius-md);
  max-width: 500px;
  width: 100%;
  position: relative;
`,L=i.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(200, 200, 200, 0.8);
  border: none;
  border-radius: var(--radius-round);
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
`,j=i.img`
  width: 100%;
  max-width: 400px;
  height: auto;

  margin-bottom: 20px;

  @media (min-width: ${t.tabletLg}) {
    max-width: 500px;
  }

  @media (min-width: ${t.desktop}) {
    max-width: 600px;
  }
`,I=i.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;

  margin: 0;

  @media (min-width: ${t.tabletLg}) {
    font-size: 1.1rem;
  }

  @media (min-width: ${t.desktop}) {
    font-size: 1.2rem;
  }
`,C=i.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;

  text-align: left;

  address {
    margin-bottom: 20px;
  }
`,T=i.div`
  margin-bottom: 20px;
`,M=i.div`
  margin-bottom: 5px;

  display: flex;
  align-items: center;
  font-size: 1rem;

  line-height: 1.2;

  color: var(--text-color);

  @media (min-width: ${t.tabletLg}) {
    font-size: 1.1rem;
  }
`,P=i.div`
  margin-right: 8px;

  svg {
    width: 22px;
    height: 22px;
    fill: var(--light-accent);
  }
`,B=i.a`
  color: var(--light-accent);
  text-decoration: none;

  display: flex;
  align-items: center;
  font-size: 1rem;

  @media (min-width: ${t.tabletLg}) {
    font-size: 1.1rem;
  }
  &:hover {
    text-decoration: underline;
  }
`,F=i.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 10px;

  align-items: stretch; //! Устанавливает одинаковую высоту для всех элементов

  @media (min-width: ${t.tabletLg}) {
    gap: 20px;
  }

  @media (min-width: ${t.desktopLg}) {
    gap: 30px;
  }
`,H=i.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);

  border-bottom-color: var(--accent-color);
  background-color: var(--accent-color);

  // !Устанавливает базовый размер элемента равный 100% ширины контейнера, за вычетом 20 пикселей.
  // Это позволяет элементу занимать всю ширину контейнера, но оставляет небольшой отступ.
  flex-basis: calc(100% - 20px);
  margin-bottom: 15px;
  padding: 22px;

  @media (min-width: ${t.tabletLg}) {
    // !Элемент занимает 50% ширины контейнера, минус 20 пикселей. Это делит экран на два столбца.
    flex-basis: calc(50% - 20px);
  }

  @media (min-width: ${t.desktop}) {
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

    border-radius: var(--radius-round);
  }

  h3 {
    margin-top: 10px;
    color: var(--text-color);

    font-weight: 700;
    font-size: 1.7rem;

    @media (min-width: ${t.tabletLg}) {
      font-size: 1rem;
    }

    @media (min-width: ${t.desktop}) {
      font-size: 1.2rem;
    }
  }

  p {
    margin-top: 10px;
    color: var(--text-color);

    font-weight: 500;
    font-size: 1.2rem;

    @media (min-width: ${t.tabletLg}) {
      font-size: 1rem;
    }

    @media (min-width: ${t.desktop}) {
      font-size: 1.1rem;
    }
  }
`;export{s as A,l as B,L as C,f as F,g as H,m as I,y as M,F as P,u as S,n as T,d as W,c as a,p as b,x as c,h as d,z as e,j as f,I as g,b as h,w as i,v as j,$ as k,k as l,H as m,C as n,M as o,T as p,P as q,B as r};
