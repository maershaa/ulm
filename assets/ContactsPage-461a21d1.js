import{n as r,j as e,a as t}from"./index-66e463d6.js";import{T as l}from"./Title-f651ccbe.js";const c=r.div`
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
`,n=r.div`
  margin-bottom: 15px;
`,i=r.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 5px;
  color: #333;
`,s=r.input`
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
`,x=r.textarea`
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
`,m=r.button`
    cursor: pointer;

    padding: 0.75rem 1.10rem;
  text-transform: uppercase;
  border-radius: 4px;
  border: none; 
  
  font-size: 16px; 



  background-color: var(--accent-color);
  color: #fff; 


  transition: background-color 0.3s ease; 
  &:hover {
    background-color: #196f97;
  }
`,p=()=>e.jsx(c,{children:e.jsxs("form",{children:[e.jsxs(n,{children:[e.jsx(i,{htmlFor:"fullName",children:"Повне Ім'я"}),e.jsx(s,{type:"text",id:"fullName",name:"fullName",placeholder:"Ваше повне ім'я",required:!0})]}),e.jsxs(n,{children:[e.jsx(i,{htmlFor:"phone",children:"Телефон"}),e.jsx(s,{type:"tel",id:"phone",name:"phone",placeholder:"Ваш телефон",required:!0})]}),e.jsxs(n,{children:[e.jsx(i,{htmlFor:"email",children:"Електронна Адреса"}),e.jsx(s,{type:"email",id:"email",name:"email",placeholder:"Ваш email",required:!0})]}),e.jsxs(n,{children:[e.jsx(i,{htmlFor:"message",children:"Текст повідомлення"}),e.jsx(x,{id:"message",name:"message",rows:"4",placeholder:"Ваше повідомлення",required:!0})]}),e.jsx(m,{type:"submit",children:"Зв'яжіться з нами"})]})}),h=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 20px;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`,u=r.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`,f=r.address`
  margin-bottom: 20px;
`,o=r.p`
  margin-bottom: 5px;

  display: flex;
  align-items: center;
  font-size: 16px;
`,d=r.div`
  margin-right: 8px;

  svg {
    width: 22px;
    height: 22px;
    fill: var(--accent-color); 
  }
`,a=r.a`
  color: #045174;
  text-decoration: none;

  display: flex;
  align-items: center;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`,j=()=>e.jsxs(h,{children:[e.jsxs(u,{children:[e.jsx(l,{title:"Контакти"}),e.jsxs(f,{children:[e.jsx(o,{children:'ТОВ "Южлитографметалл"'}),e.jsx(o,{children:"Застава II, вул. Привозна, 1"}),e.jsx(o,{children:"Одеса 65098, Україна"}),e.jsxs(o,{children:[e.jsx(d,{children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:`${t}#icon-phone`})})}),"+38 (048) 715-16-60"]}),e.jsx(o,{children:"факс. +38 (048) 714-55-09"})]}),e.jsxs(o,{children:["З питань комерції:"," ",e.jsxs(a,{href:"mailto:info@ulm.com.ua",children:[e.jsx(d,{children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:`${t}#icon-mail`})})}),"info@ulm.com.ua"]})]}),e.jsxs(o,{children:["З питань виробництва:"," ",e.jsxs(a,{href:"mailto:factory@ulm.com.ua",children:[e.jsx(d,{children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:`${t}#icon-mail`})})}),"factory@ulm.com.ua"]})]})]}),e.jsx(p,{})]}),w=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));export{p as C,j as a,w as b};
