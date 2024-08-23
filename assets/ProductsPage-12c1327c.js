import{n as e,j as t}from"./index-706cd0d7.js";import{T as s}from"./Title-caa435ae.js";const n=e.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  margin-right: auto;
  margin-left: auto;

  padding: 40px 20px; 

`,r=e.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 10px;

  align-items: stretch; //! Устанавливает одинаковую высоту для всех элементов

  @media (min-width: 768px) {
    gap: 20px;
  }

  @media (min-width: 1280px) {
    gap: 30px;
  }
`,c=e.li`
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
`,l=e.div`
  width: 100%;
`,o=e.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1 / 1;

  border-radius: 50%;
`,m=e.h3`
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
`,d=e.p`
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
`,p="/ulm/assets/can_drawn-f63c393c.jpg",x="/ulm/assets/metal_lids-a0b30bed.jpeg",g="/ulm/assets/glass_can_lids-d13d283e.jpeg",f="/ulm/assets/aluminum_packaging-7f38eb59.jpg",u="/ulm/assets/metal_trays-e81faa67.jpeg",a={can_drawn:p,metal_lids:x,glass_can_lids:g,aluminum_packaging:f,metal_trays:u},h=[{id:1,title:"Цельнотянуті банки",description:"№21, 1, 2, 3, 38, 5, 6, 8.",imageSrc:a.can_drawn,alt:"Цельнотянуті банки"},{id:2,title:"Металеві кришки",description:"72,4мм, 83,4мм, 99мм.",imageSrc:a.metal_lids,alt:"Металеві кришки"},{id:3,title:"Металеві кришки для скляних консервних банок",description:"СКО 1-82, 1-63, 1-58.",imageSrc:a.glass_can_lids,alt:"Металеві кришки для скляних консервних банок"},{id:4,title:"Алюмінієва тара для їжі швидкого приготування",description:"ТУТ ДОЛЖЕН БЫТЬ ТЕКСТ!!!!!!!!!!",imageSrc:a.aluminum_packaging,alt:"Алюмінієва тара для їжі швидкого приготування"},{id:5,title:"Металеві підноси різних розмірів",description:"ТУТ ДОЛЖЕН БЫТЬ ТЕКСТ!!!!!!!!!!",imageSrc:a.metal_trays,alt:"Металеві підноси різних розмірів"}],_=()=>t.jsxs(n,{className:"container",children:[t.jsx(s,{title:"ПРОДУКЦІЯ"}),t.jsx(r,{children:h.map(i=>t.jsx(c,{children:t.jsxs(l,{children:[t.jsx(o,{src:i.imageSrc,alt:i.alt}),t.jsx(m,{children:i.title}),t.jsx(d,{children:i.description})]})},i.id))})]});export{_ as default};
