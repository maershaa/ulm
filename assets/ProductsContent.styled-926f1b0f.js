import{j as e,T as n,s as i,L as a}from"./index-13223bc0.js";const r=({title:t})=>e.jsx(n,{children:t}),d=i.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 40px 0;

  @media (min-width: 768px) {
    /* padding-left: 32px;
    padding-right: 32px; */
  }

  @media (min-width: 1024px) {
    /* padding-left: 20px;
    padding-right: 20px; */
  }
`,p=i.div`
  background-image: url(${t=>t.$bgImageAboutUsPage});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: var(--primary-text-color-light);
  background-position: center center;

  width: 100%;
  min-height: 400px;
  padding: 20px;

  border-radius: 10px;

  @media (min-width: 768px) {
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

  border-radius: 5px;
  background-color: var(--primary-text-color-light);

  @media (min-width: 768px) {
    max-width: 500px;
    padding: 60px 40px;
  }

  @media (min-width: 1024px) {
    max-width: 600px;
  }
`,x=i.p`
  text-align: left;

  color: var(--primary-bg-dark-color);
  background-color: var(--primary-text-color-light);

  font-size: 0.9rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 0 10px 0 0;
  }
`,l=i.div`
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
    url(${t=>t.$heroImageTablet});
  @media (min-width: 450px) {
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

  @media (min-width: 625px) {
    padding: 40px;
  }

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    flex-direction: row;
    /* height: 600px; */

    background-image: linear-gradient(
        to right,
        rgba(3, 37, 65, 0.9) 0%,
        rgba(3, 37, 65, 0) 100%
      ),
      url(${t=>t.$heroImage});
  }
`,c=i.div`
  text-align: center;
  width: 90%;
  text-align: center;

  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
`,s=i.h2`
  color: var(--primary-text-color-light);

  margin-bottom: 10px;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.3;

  text-align: left;

  @media (min-width: 625px) {
    font-size: 1.8rem;
  }

  @media (min-width: 768px) {
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
`,g=i.h3`
  color: #ffffff;

  margin-bottom: 10px;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.2;

  text-align: center;

  @media (min-width: 625px) {
    font-size: 1.1rem;
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`,h=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;

  @media (min-width: 450px) {
    flex-direction: row;
    width: auto;
  }
`,f=i(a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  font-weight: 600;
  font-size: 1rem;
  padding: 14px 28px;
  border-radius: 10px;

  transition: all 0.2s ease;

  width: 100%;
  margin-top: 20px;
  @media (min-width: 450px) {
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
`,w=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  padding: 40px 20px;
`,b=i.ul`
  display: grid;
  grid-template-columns: 1fr;

  grid-gap: 5px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

    grid-gap: 15px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`,u=i.li`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
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
`,v=i.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;

  @media (min-width: 768px) {
    max-width: 300px;
    margin-bottom: 0;
  }

  @media (min-width: 1024px) {
    max-width: 500px;
  }
`,y=i.div`
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

  @media (min-width: 625px) {
    padding: 16px;
  }

  @media (min-width: 768px) {
    text-align: left;
    padding: 24px;
    max-width: 300px;
  }

  @media (min-width: 1024px) {
    max-width: 500px;
    padding: 32px;
  }
`,k=i.h4`
  text-transform: uppercase;
  margin: 0;
  font-weight: 700;

  font-size: 1.3rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`,z=i.p`
  position: relative;
  padding: 0 30px;
  font-size: 0.9rem;
  line-height: 1.2;
  text-align: justify;

  @media (min-width: 450px) {
    font-size: 1rem;
  }

  @media (min-width: 500px) {
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
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
`,j=i.div`

visibility: hidden; //!!! временное решение чтобы не обображать модалку на телефонах

@media (min-width: 768px) {
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

`,I=i.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  position: relative;

  
`,C=i.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(200, 200, 200, 0.8);
  border: none;
  border-radius: 50%; 
  width: 30px; 
  height: 30px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333; 
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(150, 150, 150, 0.8); /* Более темный фон при наведении */
  }
`,$=i.img`
  width: 100%; 
  max-width: 400px; 
  height: auto; 
  
  margin-bottom: 20px;

  @media (min-width: 768px) {
    max-width: 500px;
  }

  @media (min-width: 1024px) {
    max-width: 600px;
  }
`,T=i.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;

  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`,M=i.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;

  text-align: left;

  address {
    margin-bottom: 20px;
  }
`,P=i.div`
  margin-bottom: 20px;
`,B=i.p`
  margin-bottom: 5px;

  display: flex;
  align-items: center;
  font-size: 1rem;

  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`,F=i.div`
  margin-right: 8px;

  svg {
    width: 22px;
    height: 22px;
    fill: var(--accent-color);
  }
`,L=i.a`
  color: #045174;
  text-decoration: none;

  display: flex;
  align-items: center;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
  &:hover {
    text-decoration: underline;
  }
`,H=i.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 10px;

  align-items: stretch; //! Устанавливает одинаковую высоту для всех элементов

  @media (min-width: 768px) {
    gap: 20px;
  }

  @media (min-width: 1280px) {
    gap: 30px;
  }
`,A=i.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  border: 1px solid #e0e0e0;
  border-radius: 0.3rem;
  border-bottom-color: var(--accent-color);

  // !Устанавливает базовый размер элемента равный 100% ширины контейнера, за вычетом 20 пикселей.
  // Это позволяет элементу занимать всю ширину контейнера, но оставляет небольшой отступ.
  flex-basis: calc(100% - 20px);
  margin-bottom: 15px;
  padding: 22px;

  @media (min-width: 768px) {
    // !Элемент занимает 50% ширины контейнера, минус 20 пикселей. Это делит экран на два столбца.
    flex-basis: calc(50% - 20px);
  }

  @media (min-width: 1024px) {
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

    border-radius: 50%;
  }

  h3 {
    margin-top: 10px;
    color: var(--accent-color);

    font-weight: 700;
    font-size: 1.7rem;

    @media (min-width: 768px) {
      font-size: 1rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.2rem;
    }
  }

  p {
    margin-top: 10px;
    color: var(--accent-color);

    font-weight: 500;
    font-size: 1.2rem;

    @media (min-width: 768px) {
      font-size: 1rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.1rem;
    }
  }
`;export{x as A,p as B,C,b as F,l as H,m as I,j as M,H as P,f as S,r as T,d as W,c as a,s as b,g as c,h as d,I as e,$ as f,T as g,w as h,u as i,v as j,y as k,k as l,z as m,A as n,M as o,B as p,P as q,F as r,L as s};
