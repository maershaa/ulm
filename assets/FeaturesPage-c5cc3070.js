import{n as i,j as e}from"./index-f7c36f78.js";const x=i.div`
  max-width: 1200px;
  width: 100%;
  min-height: 100vh;

  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`,l=i.h1`
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
`,m=i.ul`
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
`,t=i.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* margin-bottom: 1.5rem; */

  height: 500px;

  @media (min-width: 768px) {
    flex-direction: column;

    max-height: 650px;

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
`,n=i.img`
  width: 250px;
  max-width: 100%;

  height: 250px;
  object-fit: cover;

  @media (min-width: 768px) {
    max-width: 250px;
    margin-bottom: 0;
  }
`,s=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 250px;
  text-align: center;
  background-color: #045174;
  color: #ffffff;
  height: 250px; //!

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

    max-width: 370px;

    padding: 32px;
  }
`,r=i.h4`
  text-transform: uppercase;
  margin: 0;
  font-weight: 700;

  font-size: 0.9rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`,d=i.p`
  cursor: pointer;
  position: relative;
  padding: 0 10px 0 0;
  height: 84px;
  font-size: 0.7rem;
  line-height: 1.2;

  display: -webkit-box;
  -webkit-line-clamp: 5; /* Ограничивает количество строк до 5 */
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis; /* добавляет многоточие, если текст не помещается в выделенные строки. */

  max-height: calc(
    1.2em * 5
  ); /* Устанавливает максимальную высоту для 5 строк */

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
`,c="/ulm/assets/team-edae2c4d.jpeg",o="/ulm/assets/obsessions-9c02b3a3.jpg",p="/ulm/assets/заглушка-2dc6335a.jpeg",h="/ulm/assets/price2-8dc70092.jpeg",g="/ulm/assets/delivery-919fef28.jpeg",a={team:c,volumes:o,ttt:p,delivery:g,price:h},j=()=>e.jsxs(x,{children:[e.jsx(l,{children:"ПЕРЕВАГИ"}),e.jsxs(m,{children:[" ",e.jsxs(t,{children:[e.jsx(n,{src:a.team,alt:"Колектив працівників"}),e.jsxs(s,{children:[e.jsx(r,{children:"Колектив"}),e.jsx(d,{children:"Колектив нашого підприємства складається з високопрофесійних працівників із величезним досвідом роботи у жестетарному виробництві. Стаж провідних спеціалістів коливається від 15 до 40 років. Завдяки їхньому досвіду наше підприємство розробило та впровадило унікальне виробництво, здатне випускати високоякісну продукцію."})]})]}),e.jsxs(t,{children:[e.jsx(n,{src:a.price,alt:"Ціна продукції"}),e.jsxs(s,{children:[e.jsx(r,{children:"Ціна"}),e.jsx(d,{children:"За допомогою нестандартних рішень використання жерсті та допоміжних матеріалів, а також скорочуючи свої накладні витрати, ми добиваємося ЦІНИ на наш виріб нижче за інших виробників зі збереженням високої якості."})]})]}),e.jsxs(t,{children:[e.jsx(n,{src:a.volumes,alt:"Обсяги виробництва"}),e.jsxs(s,{children:[e.jsx(r,{children:"Обсяги"}),e.jsx(d,{children:"Потужність нашого виробництва дозволяє забезпечити будь-який обсяг продукції найбільших виробників консервів."})]})]}),e.jsxs(t,{children:[e.jsx(n,{src:a.delivery,alt:"Послуги з доставки"}),e.jsxs(s,{children:[e.jsx(r,{children:"Доставка"}),e.jsx(d,{children:"Для зручності споживачів ми надаємо послуги з доставки нашого товару."})]})]}),e.jsxs(t,{children:[e.jsx(n,{src:a.ttt,alt:"Контроль якості"}),e.jsxs(s,{children:[e.jsx(r,{children:"Якість"}),e.jsx(d,{children:"Жорсткий контроль стосується не тільки продукції, що випускається, але і вхідної жерсті, лаків, емалей, фарб. У своєму виробництві ми використовуємо складові від перевірених постачальників, які відповідають якості європейських стандартів."})]})]}),e.jsxs(t,{children:[e.jsx(n,{src:a.ttt,alt:"Відстрочка платежу"}),e.jsxs(s,{children:[e.jsx(r,{children:"Відстрочка платежу"}),e.jsx(d,{children:"Для перевірених клієнтів нашому підприємстві існує система гнучких відстрочок від 30 до 90 днів /факторинг/."})]})]})]})]});export{j as default};
