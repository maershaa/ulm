import{n as r,j as e}from"./index-89fa548e.js";import s from"./AboutUsPage-25c7dd2a.js";import d from"./FeaturesPage-55e8aacf.js";import a from"./ProductsPage-8f077c4f.js";import l from"./ContactsPage-046313ae.js";const c=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 500px; */
`,x=r.div`
  text-align: center;
`,p=r.div`
  background-image: linear-gradient(
      to right,
      rgba(3, 37, 65, 0.9) 0%,
      rgba(3, 37, 65, 0) 100%
    ),
    url(${i=>i.heroImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgb(3, 37, 65);

  padding: 40px;
  height: 600px;

  display: flex;
  justify-content: center;
  align-items: center;
`,m=r.div`
  text-align: center;
  width: 50%;
`,h=r.h2`
  color: #ffffff;

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
`,f=r.h3`
  color: #ffffff;

  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;

  text-align: left;
`,g=r.div`
 max-width: 100%;
  width: 370px; 
  margin: 0 auto; 
    padding: 50px 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 400px; /* For tablets */
  }

  @media (min-width: 1024px) {
    width: 420px; /* For desktops */
  }
`,o=r.div`
  margin-bottom: 15px;
`,t=r.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 5px;
  color: #333;
`,n=r.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`,u=r.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`,b=r.button`
    cursor: pointer;

    padding: 0.75rem 1.10rem;
  text-transform: uppercase;
  border-radius: 4px;
  border: none; 
  
  font-size: 16px; 



  background-color: #045174;
  color: #fff; 


  transition: background-color 0.3s ease; 
  &:hover {
    background-color: #196f97;
  }
`,j="/ulm/assets/hero-4c7cc523.jpeg",w=()=>e.jsxs(p,{heroImage:j,children:[e.jsxs(m,{children:[e.jsx(h,{children:" Виробник металевих рішень, що відповідають вашим стандартам "}),e.jsx(f,{children:"Здійснюємо виробництво металевої продукції з 1994 року. Наші банки, підноси та кришки – це поєднання надійності, функціональності та високих стандартів."})]}),e.jsx(g,{children:e.jsxs("form",{children:[e.jsxs(o,{children:[e.jsx(t,{htmlFor:"fullName",children:"Повне Ім'я"}),e.jsx(n,{type:"text",id:"fullName",name:"fullName",placeholder:"Ваше повне ім'я",required:!0})]}),e.jsxs(o,{children:[e.jsx(t,{htmlFor:"phone",children:"Телефон"}),e.jsx(n,{type:"tel",id:"phone",name:"phone",placeholder:"Ваш телефон",required:!0})]}),e.jsxs(o,{children:[e.jsx(t,{htmlFor:"email",children:"Електронна Адреса"}),e.jsx(n,{type:"email",id:"email",name:"email",placeholder:"Ваш email",required:!0})]}),e.jsxs(o,{children:[e.jsx(t,{htmlFor:"message",children:"Текст повідомлення"}),e.jsx(u,{id:"message",name:"message",rows:"4",placeholder:"Ваше повідомлення",required:!0})]}),e.jsx(b,{type:"submit",children:"Зв'яжіться з нами"})]})})]}),P=()=>e.jsx(c,{children:e.jsxs(x,{children:[e.jsx(w,{}),e.jsx(s,{}),e.jsx(d,{}),e.jsx(a,{}),e.jsx(l,{})]})});export{P as default};
