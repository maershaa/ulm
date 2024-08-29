import{n as r,j as e,a as s}from"./index-744fe5f2.js";import{T as l}from"./Title-1f6a9567.js";const m=r.div`
 max-width: 100%;
  /* width: 370px;  */
  margin: 0 auto; 
    padding: 50px 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 625px) {
    width: 370px; 
  }

  @media (min-width: 768px) {
    width: 400px; 
  }

  @media (min-width: 1024px) {
    width: 420px; 
  }
`,o=r.div`
  margin-bottom: 15px;
`,n=r.label`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: #333;

  @media (min-width: 625px) {
    font-size: 1rem;
  }
`,d=r.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  box-sizing: border-box;

  @media (min-width: 625px) {
    font-size: 1rem;
  }

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`,c=r.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  box-sizing: border-box;

  @media (min-width: 625px) {
    font-size: 1rem;
  }

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`,x=r.button`
    cursor: pointer;

    padding: 0.75rem 1.10rem;
  text-transform: uppercase;
  border-radius: 4px;
  border: none; 
  
  font-size: 0.9rem; 



  background-color: var(--accent-color);
  color: #fff; 


  transition: background-color 0.3s ease; 

  @media (min-width: 625px) {
    font-size: 1rem;
  }

  &:hover {
    background-color: #196f97;
  }
`,p=()=>e.jsx(m,{children:e.jsxs("form",{children:[e.jsxs(o,{children:[e.jsx(n,{htmlFor:"fullName",children:"Повне Ім'я"}),e.jsx(d,{type:"text",id:"fullName",name:"fullName",placeholder:"Ваше повне ім'я",required:!0})]}),e.jsxs(o,{children:[e.jsx(n,{htmlFor:"phone",children:"Телефон"}),e.jsx(d,{type:"tel",id:"phone",name:"phone",placeholder:"Ваш телефон",required:!0})]}),e.jsxs(o,{children:[e.jsx(n,{htmlFor:"email",children:"Електронна Адреса"}),e.jsx(d,{type:"email",id:"email",name:"email",placeholder:"Ваш email",required:!0})]}),e.jsxs(o,{children:[e.jsx(n,{htmlFor:"message",children:"Текст повідомлення"}),e.jsx(c,{id:"message",name:"message",rows:"4",placeholder:"Ваше повідомлення",required:!0})]}),e.jsx(x,{type:"submit",children:"Зв'яжіться з нами"})]})}),h=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 20px;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`,f=r.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;

  text-align: left;
`,u=r.address`
  margin-bottom: 20px;
`,j=r.div`
  margin-bottom: 20px;
`,i=r.p`
  margin-bottom: 5px;

  display: flex;
  align-items: center;
  font-size: 1rem;

  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`,a=r.div`
  margin-right: 8px;

  svg {
    width: 22px;
    height: 22px;
    fill: var(--accent-color);
  }
`,t=r.a`
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
`,g=()=>e.jsx("div",{style:{width:"100%",height:"0",paddingBottom:"56.25%",position:"relative",marginTop:"20px"},children:e.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.9638833563745!2d30.732149175623242!3d46.46922336582478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631819e476067%3A0xc4fd19d8ea7b11a5!2z0K7QltCb0JjQotCe0JPQoNCQ0KTQnNCV0KLQkNCb0Js!5e0!3m2!1sru!2sua!4v1724351010579!5m2!1sru!2sua",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),b=()=>e.jsxs(h,{className:"container",children:[e.jsxs(f,{children:[e.jsx(l,{title:"Контакти"}),e.jsxs(u,{children:[e.jsx(i,{children:'ТОВ "Южлитографметалл"'}),e.jsx(i,{children:"Застава II, вул. Привозна, 1"}),e.jsx(i,{children:"Одеса, 65098, Україна"})]}),e.jsxs(j,{children:[e.jsxs(i,{children:[e.jsx(a,{children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:`${s}#icon-phone`})})}),e.jsx(t,{href:"tel:+380487151660",children:"+38 (048) 715-16-60"})]}),e.jsxs(i,{children:["факс.",e.jsx(t,{href:"tel:+380487145509",children:"+38 (048) 714-55-09"})]})]}),e.jsxs(i,{children:["З питань комерції:"," ",e.jsxs(t,{href:"mailto:info@ulm.com.ua",children:[e.jsx(a,{children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:`${s}#icon-mail`})})}),"info@ulm.com.ua"]})]}),e.jsxs(i,{children:["З питань виробництва:"," ",e.jsxs(t,{href:"mailto:factory@ulm.com.ua",children:[e.jsx(a,{children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:`${s}#icon-mail`})})}),"factory@ulm.com.ua"]})]}),e.jsx(g,{})]}),e.jsx(p,{})]}),y=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"}));export{p as C,b as a,y as b};
