import{j as s,s as e}from"./index-eb1714af.js";import{T as n,P as l,n as r}from"./ProductsContent.styled-c01fc79e.js";const c="/ulm/assets/can_drawn-f63c393c.jpg",d="/ulm/assets/metal_lids-a0b30bed.jpeg",m="/ulm/assets/glass_can_lids-d13d283e.jpeg",g="/ulm/assets/aluminum_packaging-7f38eb59.jpg",o="/ulm/assets/metal_trays-e81faa67.jpeg",a={can_drawn:c,metal_lids:d,glass_can_lids:m,aluminum_packaging:g,metal_trays:o},p=[{id:1,title:"Цельнотянуті банки",description:"№21, 1, 2, 3, 38, 5, 6, 8.",imageSrc:a.can_drawn,alt:"Цельнотянуті банки"},{id:2,title:"Металеві кришки",description:"72,4мм, 83,4мм, 99мм.",imageSrc:a.metal_lids,alt:"Металеві кришки"},{id:3,title:"Металеві кришки для скляних консервних банок",description:"СКО 1-82, 1-63, 1-58.",imageSrc:a.glass_can_lids,alt:"Металеві кришки для скляних консервних банок"},{id:4,title:"Алюмінієва тара для їжі швидкого приготування",description:"ТУТ ДОЛЖЕН БЫТЬ ТЕКСТ!!!!!!!!!!",imageSrc:a.aluminum_packaging,alt:"Алюмінієва тара для їжі швидкого приготування"},{id:5,title:"Металеві підноси різних розмірів",description:"ТУТ ДОЛЖЕН БЫТЬ ТЕКСТ!!!!!!!!!!",imageSrc:a.metal_trays,alt:"Металеві підноси різних розмірів"}],u=({productsData:i})=>s.jsxs(s.Fragment,{children:[s.jsx(n,{title:"ПРОДУКЦІЯ"}),s.jsx(l,{children:i.map(t=>s.jsx(r,{children:s.jsxs("div",{children:[s.jsx("img",{src:t.imageSrc,alt:t.alt,loading:"lazy"}),s.jsx("h3",{children:t.title}),s.jsx("p",{children:t.description})]})},t.id))})]}),j=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  margin-right: auto;
  margin-left: auto;

  padding: 40px 20px;
`,f=()=>s.jsx(j,{children:s.jsx(u,{productsData:p})});export{f as default};
