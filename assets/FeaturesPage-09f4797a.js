import{n as i,s as r,j as e,r as m}from"./index-bbe7588d.js";import{T as p}from"./Title-8c4380dd.js";const x=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  padding: 40px 20px;
`,g=i.ul`
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
`,h=i.li`
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
`,u=i.img`
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
`,f=i.div`
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
`,w=i.h4`
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
`,b=i.p`
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
`,j=r.div`

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

`,y=r.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  position: relative;

  
`,v=r.button`
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
`,k=r.img`
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
`,S=r.p`
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
`,z=({show:d,onClose:o,text:s,imageSrc:l})=>{if(!d)return null;const c=n=>{n.target===n.currentTarget&&o()};return e.jsx(j,{onClick:c,children:e.jsxs(y,{onClick:n=>n.stopPropagation(),children:[e.jsx(v,{onClick:o,children:"×"}),e.jsx(k,{src:l,alt:"Expanded view"}),e.jsx(S,{children:s})]})})},C="/ulm/assets/team-edae2c4d.jpeg",F="/ulm/assets/obsessions-9c02b3a3.jpg",M="/ulm/assets/price2-8dc70092.jpeg",T="/ulm/assets/delivery5-83ddad4b.jpg",I="/ulm/assets/quality-9d5289cc.jpeg",D="/ulm/assets/paymentDeferral-d32b33c7.jpeg",a={team:C,volumes:F,delivery:T,price:M,paymentDeferral:D,quality:I},q=[{id:1,title:"Колектив",description:"Колектив нашого підприємства складається з високопрофесійних працівників із величезним досвідом роботи у жестетарному виробництві. Стаж провідних спеціалістів коливається від 15 до 40 років. Завдяки їхньому досвіду наше підприємство розробило та впровадило унікальне виробництво, здатне випускати високоякісну продукцію.",imageSrc:a.team,alt:"Колектив працівників"},{id:2,title:"Ціна",description:"За допомогою нестандартних рішень використання жерсті та допоміжних матеріалів, а також скорочуючи свої накладні витрати, ми добиваємося цині на наш виріб нижче за інших виробників зі збереженням високої якості.",imageSrc:a.price,alt:"Ціна продукції"},{id:3,title:"Обсяги",description:"Потужність нашого виробництва дозволяє забезпечити будь-який обсяг продукції найбільших виробників консервів.",imageSrc:a.volumes,alt:"Обсяги виробництва"},{id:4,title:"Доставка",description:"Для зручності споживачів ми надаємо послуги з доставки нашого товару.",imageSrc:a.delivery,alt:"Послуги з доставки"},{id:5,title:"Якість",description:"Жорсткий контроль стосується не тільки продукції, що випускається, але і вхідної жерсті, лаків, емалей, фарб. У своєму виробництві ми використовуємо складові від перевірених постачальників, які відповідають якості європейських стандартів.",imageSrc:a.quality,alt:"Контроль якості"},{id:6,title:"Відстрочка платежу",description:"Для перевірених клієнтів нашому підприємстві існує система гнучких відстрочок від 30 до 90 днів /факторинг/.",imageSrc:a.paymentDeferral,alt:"Відстрочка платежу"}],P=()=>{const[d,o]=m.useState(!1),[s,l]=m.useState({}),c=t=>{l(t),o(!0)},n=()=>{o(!1)};return e.jsxs(x,{className:"container",children:[e.jsx(p,{title:"ПЕРЕВАГИ"}),e.jsx(g,{children:q.map(t=>e.jsxs(h,{onClick:()=>c(t),children:[e.jsx(u,{src:t.imageSrc,alt:t.alt}),e.jsxs(f,{children:[e.jsx(w,{children:t.title}),e.jsx(b,{children:t.description})]})]},t.id))}),d&&e.jsx(z,{show:d,onClose:n,text:s.description,imageSrc:s.imageSrc})]})};export{P as default};
