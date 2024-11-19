import{n as t,j as e}from"./index-b6216361.js";import{C as i,a as o}from"./ContactsPage-6c2cdf1e.js";import n from"./AboutUsPage-b44b8d1e.js";import a from"./FeaturesPage-45723a7f.js";import m from"./ProductsPage-f0291e99.js";import"./Title-0321666e.js";const s=t.div`
  display: flex;
  justify-content: center;
  align-items: center;  
`,g=t.div`
  text-align: center;
`,d=t.div`

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
    url(${r=>r.heroImageTablet});
    
  @media (min-width: 450px) {
    background-image: linear-gradient(
      to right,
      rgba(3, 37, 65, 0.9) 0%,
      rgba(3, 37, 65, 0) 100%
    ),
    url(${r=>r.heroImageMobile});
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
      url(${r=>r.heroImage});
  }
`,l=t.div`
  text-align: center;
  width: 90%;
  text-align: center;

  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
`,c=t.h2`
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
`,x=t.h3`
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
`,p="/ulm/assets/hero-4c7cc523.jpeg",h="/ulm/assets/lots_of_tins-b51adc3e.jpeg",f="/ulm/assets/lots_of_tins_mb-7041297b.jpeg",b=()=>e.jsxs(d,{heroImage:p,heroImageTablet:h,heroImageMobile:f,children:[e.jsxs(l,{children:[e.jsxs(c,{children:[" ","Виробник металевих рішень, що відповідають вашим стандартам"," "]}),e.jsx(x,{children:"Здійснюємо виробництво металевої продукції з 1994 року. Наші банки, підноси та кришки – це поєднання надійності, функціональності та високих стандартів."})]}),e.jsx(i,{})]}),P=()=>e.jsx(s,{children:e.jsxs(g,{children:[e.jsx(b,{}),e.jsx(n,{}),e.jsx(a,{}),e.jsx(m,{}),e.jsx(o,{})]})});export{P as default};
