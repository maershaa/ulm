import{n as e,j as t}from"./index-3b7a79a4.js";import{C as r,a as o}from"./ContactsPage-bbfb3b5f.js";import n from"./AboutUsPage-6c62eb94.js";import a from"./FeaturesPage-ed131d55.js";import m from"./ProductsPage-a02de8ff.js";import"./Title-137a5689.js";const s=e.div`
  display: flex;
  justify-content: center;
  align-items: center;  
`,d=e.div`
  text-align: center;
`,c=e.div`

  background-color: rgb(3, 37, 65);

  padding: 40px 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 450px) {
    background-image: linear-gradient(
      to right,
      rgba(3, 37, 65, 0.9) 0%,
      rgba(3, 37, 65, 0) 100%
    ),
    url(${i=>i.heroImageMobile});
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
    height: 600px;

    background-image: linear-gradient(
        to right,
        rgba(3, 37, 65, 0.9) 0%,
        rgba(3, 37, 65, 0) 100%
      ),
      url(${i=>i.heroImage});
  }
`,g=e.div`
  text-align: center;
  width: 90%;
  text-align: center;

  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
`,l=e.h2`
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
    border-top: 6px solid #1274a2; 
    width: 100px;
    margin-top: 20px; 
    margin-bottom: 20px; 
  }
`,x=e.h3`
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
`,p="/ulm/assets/hero-4c7cc523.jpeg",h="/ulm/assets/lots_of_tins-b51adc3e.jpeg",f=()=>t.jsxs(c,{heroImage:p,heroImageMobile:h,children:[t.jsxs(g,{children:[t.jsxs(l,{children:[" ","Виробник металевих рішень, що відповідають вашим стандартам"," "]}),t.jsx(x,{children:"Здійснюємо виробництво металевої продукції з 1994 року. Наші банки, підноси та кришки – це поєднання надійності, функціональності та високих стандартів."})]}),t.jsx(r,{})]}),P=()=>t.jsx(s,{children:t.jsxs(d,{children:[t.jsx(f,{}),t.jsx(n,{}),t.jsx(a,{}),t.jsx(m,{}),t.jsx(o,{})]})});export{P as default};
