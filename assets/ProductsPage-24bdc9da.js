import{n as i,j as t}from"./index-90748662.js";import{T as n}from"./Title-9bfc67e9.js";const r=i.div`
  max-width: 1200px;
  width: 100%;
  min-height: 100vh; //! vh обозначает "viewport height", что означает "процент от высоты окна просмотра". 100vh означает 100% от высоты видимого окна браузера */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  margin-right: auto;
  margin-left: auto;
  padding-top: 20px;
`,s=i.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  padding: 20px;
  margin-bottom: 30px;
  gap: 10px;

  align-items: stretch; //! Устанавливает одинаковую высоту для всех элементов

  @media (min-width: 768px) {
    margin-bottom: 80px;
    gap: 20px;
  }

  @media (min-width: 1280px) {
    gap: 30px;
  }
`,o=i.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  border: 1px solid #e0e0e0;
  border-radius: 0.3rem;
  border-bottom-color: var(--accent-color);

  // !Устанавливает базовый размер элемента равный 100% ширины контейнера, за вычетом 20 пикселей.
  // Это позволяет элементу занимать всю ширину контейнера, но оставляет небольшой отступ.
  flex-basis: calc(100% - 20px);
  margin-bottom: 15px;
  padding: 22px;

  @media (min-width: 768px) {
    // !Элемент занимает 50% ширины контейнера, минус 20 пикселей. Это делит экран на два столбца.
    flex-basis: calc(50% - 20px);
  }

  @media (min-width: 1024px) {
    // !Элемент занимает 33.3333% ширины контейнера, минус 30 пикселей. Это делит экран на три столбца.
    flex-basis: calc(33.3333% - 30px);
  }
`,c=i.div`
  width: 100%;
`,d=i.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1 / 1;

  border-radius: 50%;
`,m=i.h3`
  margin-top: 10px;
  color: var(--accent-color);

  font-weight: 700;
  font-size: 1.7rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`,l=i.p`
  margin-top: 10px;
  color: var(--accent-color);


  font-weight: 500;
  font-size: 1.2rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
`,p="/ulm/assets/can_drawn-f63c393c.jpg",x="/ulm/assets/metal_lids-a0b30bed.jpeg",a={can_drawn:p,metal_lids:x},g=[{id:1,title:"Цельнотянуті банки",description:"№21, 1, 2, 3, 38, 5, 6, 8.",imageSrc:a.can_drawn,alt:"Цельнотянуті банки"},{id:2,title:"Металеві кришки",description:"72,4мм, 83,4мм, 99мм.",imageSrc:a.metal_lids,alt:"Металеві кришки"},{id:3,title:"Металеві кришки для скляних консервних банок",description:"СКО 1-82, 1-63, 1-58.",imageSrc:a.can_drawn,alt:"Металеві кришки для скляних консервних банок"},{id:4,title:"Алюмінієва тара для їжі швидкого приготування",description:"Алюмінієва тара для швидкого приготування їжі.",imageSrc:a.can_drawn,alt:"Алюмінієва тара для їжі швидкого приготування"},{id:5,title:"Металеві підноси різних розмірів",description:"Металеві підноси різних розмірів.",imageSrc:a.can_drawn,alt:"Металеві підноси різних розмірів"}],w=()=>t.jsxs(r,{className:"container",children:[t.jsx(n,{title:"ПРОДУКЦІЯ"}),t.jsx(s,{children:g.map(e=>t.jsx(o,{children:t.jsxs(c,{children:[t.jsx(d,{src:e.imageSrc,alt:e.alt}),t.jsx(m,{children:e.title}),t.jsx(l,{children:e.description})]})},e.id))})]});export{w as default};
