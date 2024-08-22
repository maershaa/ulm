import{n as e,j as t}from"./index-142e6ed9.js";import{C as r,a as n}from"./ContactsPage-36e7604d.js";import i from"./AboutUsPage-51d67678.js";import a from"./FeaturesPage-29e5e14c.js";import s from"./ProductsPage-692a94d0.js";import"./Title-75bd282a.js";const c=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 500px; */
`,g=e.div`
  text-align: center;
`,l=e.div`
  background-image: linear-gradient(
      to right,
      rgba(3, 37, 65, 0.9) 0%,
      rgba(3, 37, 65, 0) 100%
    ),
    url(${o=>o.heroImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgb(3, 37, 65);

  padding: 40px;
  height: 600px;

  display: flex;
  justify-content: center;
  align-items: center;
`,x=e.div`
  text-align: center;
  width: 50%;
`,p=e.h2`
  color: var(--primary-text-color-light);

  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.3;

  text-align: left;

  /* Псевдоэлемент для разделительной полоски */
  &::after {
    content: '';
    display: block;
    border-top: 6px solid #1274a2; /* Цвет полоски */
    width: 100px; /* Ширина полоски */
    margin-top: 20px; /* Отступ сверху */
    margin-bottom: 20px; /* Отступ снизу */
  }
`,d=e.h3`
  color: #ffffff;

  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;

  text-align: left;
`,m="/ulm/assets/hero-4c7cc523.jpeg",f=()=>t.jsxs(l,{heroImage:m,children:[t.jsxs(x,{children:[t.jsx(p,{children:" Виробник металевих рішень, що відповідають вашим стандартам "}),t.jsx(d,{children:"Здійснюємо виробництво металевої продукції з 1994 року. Наші банки, підноси та кришки – це поєднання надійності, функціональності та високих стандартів."})]}),t.jsx(r,{})]}),P=()=>t.jsx(c,{children:t.jsxs(g,{children:[t.jsx(f,{}),t.jsx(i,{}),t.jsx(a,{}),t.jsx(s,{}),t.jsx(n,{})]})});export{P as default};
