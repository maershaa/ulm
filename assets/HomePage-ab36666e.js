import{n as r,j as e}from"./index-999f759d.js";import d from"./AboutUsPage-42e216db.js";const s=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 500px; */
`,a=r.div`
  text-align: center;
`,l=r.div`
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
`,c=r.div`
  text-align: center;
  width: 50%;
`,x=r.h2`
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
`,p=r.h3`
  color: #ffffff;

  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;

  text-align: left;
`,m=r.div`
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
`,h=r.textarea`
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
`,f=r.button`
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
`,g="/ulm/assets/hero-4c7cc523.jpeg",u=()=>e.jsxs(l,{heroImage:g,children:[e.jsxs(c,{children:[e.jsx(x,{children:" Виробник металевих рішень, що відповідають вашим стандартам "}),e.jsx(p,{children:"Здійснюємо виробництво металевої продукції з 1994 року. Наші банки, підноси та кришки – це поєднання надійності, функціональності та високих стандартів."})]}),e.jsx(m,{children:e.jsxs("form",{children:[e.jsxs(o,{children:[e.jsx(t,{htmlFor:"fullName",children:"Повне Ім'я"}),e.jsx(n,{type:"text",id:"fullName",name:"fullName",placeholder:"Ваше повне ім'я",required:!0})]}),e.jsxs(o,{children:[e.jsx(t,{htmlFor:"phone",children:"Телефон"}),e.jsx(n,{type:"tel",id:"phone",name:"phone",placeholder:"Ваш телефон",required:!0})]}),e.jsxs(o,{children:[e.jsx(t,{htmlFor:"email",children:"Електронна Адреса"}),e.jsx(n,{type:"email",id:"email",name:"email",placeholder:"Ваш email",required:!0})]}),e.jsxs(o,{children:[e.jsx(t,{htmlFor:"message",children:"Текст повідомлення"}),e.jsx(h,{id:"message",name:"message",rows:"4",placeholder:"Ваше повідомлення",required:!0})]}),e.jsx(f,{type:"submit",children:"Зв'яжіться з нами"})]})})]}),w=()=>e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(u,{}),e.jsx(d,{})]})});export{w as default};
