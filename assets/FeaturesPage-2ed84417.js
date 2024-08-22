import{n as i,s as o,j as e,r as m}from"./index-78004976.js";const p=i.div`
  max-width: 1200px;
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`,x=i.h1`
  display: inline;
  margin: 0;
  margin-right: 10px;
  color: #000000;

  font-family: 'Caladea', Arial, sans-serif;

  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  line-height: 1.25;

  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }

  /* Псевдоэлемент для разделительной полоски */
  &::after {
    content: '';
    display: block;
    border-top: 6px solid #1274a2; /* Цвет полоски */
    width: 100px; /* Ширина полоски */
    margin-top: 20px; /* Отступ сверху */
    margin-bottom: 20px; /* Отступ снизу */
  }
`,h=i.ul`
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
`,g=i.li`
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

  @media (min-width: 1024px) {
    max-height: 730px;
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
  padding: 16px;
  margin: 0;
  gap: 1.5rem;

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

  font-size: 1.7rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`,b=i.p`
  position: relative;
  padding: 0 30px;
  height: 84px;
  font-size: 1.4rem;
  line-height: 1.2;
  text-align: justify;

  @media (min-width: 768px) {
    font-size: 0.8rem;
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

  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
`,y=o.div`

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

`,j=o.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  position: relative;

  
`,v=o.button`
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
`,k=o.img`
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
`,z=o.p`
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
`,S=({show:s,onClose:r,text:d,imageSrc:l})=>{if(!s)return null;const c=n=>{n.target===n.currentTarget&&r()};return e.jsx(y,{onClick:c,children:e.jsxs(j,{onClick:n=>n.stopPropagation(),children:[e.jsx(v,{onClick:r,children:"×"}),e.jsx(k,{src:l,alt:"Expanded view"}),e.jsx(z,{children:d})]})})},C="/ulm/assets/team-edae2c4d.jpeg",F="/ulm/assets/obsessions-9c02b3a3.jpg",M="/ulm/assets/price2-8dc70092.jpeg",T="/ulm/assets/delivery5-83ddad4b.jpg",I="/ulm/assets/quality-9d5289cc.jpeg",D="/ulm/assets/paymentDeferral-d32b33c7.jpeg",a={team:C,volumes:F,delivery:T,price:M,paymentDeferral:D,quality:I},q=[{id:1,title:"Колектив",description:"Колектив нашого підприємства складається з високопрофесійних працівників із величезним досвідом роботи у жестетарному виробництві. Стаж провідних спеціалістів коливається від 15 до 40 років. Завдяки їхньому досвіду наше підприємство розробило та впровадило унікальне виробництво, здатне випускати високоякісну продукцію.",imageSrc:a.team,alt:"Колектив працівників"},{id:2,title:"Ціна",description:"За допомогою нестандартних рішень використання жерсті та допоміжних матеріалів, а також скорочуючи свої накладні витрати, ми добиваємося цині на наш виріб нижче за інших виробників зі збереженням високої якості.",imageSrc:a.price,alt:"Ціна продукції"},{id:3,title:"Обсяги",description:"Потужність нашого виробництва дозволяє забезпечити будь-який обсяг продукції найбільших виробників консервів.",imageSrc:a.volumes,alt:"Обсяги виробництва"},{id:4,title:"Доставка",description:"Для зручності споживачів ми надаємо послуги з доставки нашого товару.",imageSrc:a.delivery,alt:"Послуги з доставки"},{id:5,title:"Якість",description:"Жорсткий контроль стосується не тільки продукції, що випускається, але і вхідної жерсті, лаків, емалей, фарб. У своєму виробництві ми використовуємо складові від перевірених постачальників, які відповідають якості європейських стандартів.",imageSrc:a.quality,alt:"Контроль якості"},{id:6,title:"Відстрочка платежу",description:"Для перевірених клієнтів нашому підприємстві існує система гнучких відстрочок від 30 до 90 днів /факторинг/.",imageSrc:a.paymentDeferral,alt:"Відстрочка платежу"}],B=()=>{const[s,r]=m.useState(!1),[d,l]=m.useState({}),c=t=>{l(t),r(!0)},n=()=>{r(!1)};return e.jsxs(p,{className:"container",children:[e.jsx(x,{children:"ПЕРЕВАГИ"}),e.jsx(h,{children:q.map(t=>e.jsxs(g,{onClick:()=>c(t),children:[e.jsx(u,{src:t.imageSrc,alt:t.alt}),e.jsxs(f,{children:[e.jsx(w,{children:t.title}),e.jsx(b,{children:t.description})]})]},t.id))}),s&&e.jsx(S,{show:s,onClose:n,text:d.description,imageSrc:d.imageSrc})]})};export{B as default};
