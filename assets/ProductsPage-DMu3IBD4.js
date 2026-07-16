import{j as t,s as e}from"./index-DxjZWMtk.js";import{T as l,P as n,m as r}from"./ProductsContent.styled-yOxDO7nj.js";const c="/ulm/assets/can_drawn-CPPPFwlM.jpg",m="/ulm/assets/metal_lids-9yz-zHxD.jpeg",d="/ulm/assets/glass_can_lids---pqAhFf.jpeg",g="/ulm/assets/aluminum_packaging-CGQHvHKH.jpg",o="/ulm/assets/metal_trays-BkpJXECt.jpeg",a={can_drawn:c,metal_lids:m,glass_can_lids:d,aluminum_packaging:g,metal_trays:o},p=[{id:1,title:"Цельнотянуті банки",description:"№21, 1, 2, 3, 38, 5, 6, 8.",imageSrc:a.can_drawn,alt:"Цельнотянуті банки"},{id:2,title:"Металеві кришки",description:"72,4мм, 83,4мм, 99мм.",imageSrc:a.metal_lids,alt:"Металеві кришки"},{id:3,title:"Металеві кришки для скляних консервних банок",description:"СКО 1-82, 1-63, 1-58.",imageSrc:a.glass_can_lids,alt:"Металеві кришки для скляних консервних банок"},{id:4,title:"Алюмінієва тара для їжі швидкого приготування",description:"ТУТ ДОЛЖЕН БЫТЬ ТЕКСТ!!!!!!!!!!",imageSrc:a.aluminum_packaging,alt:"Алюмінієва тара для їжі швидкого приготування"},{id:5,title:"Металеві підноси різних розмірів",description:"ТУТ ДОЛЖЕН БЫТЬ ТЕКСТ!!!!!!!!!!",imageSrc:a.metal_trays,alt:"Металеві підноси різних розмірів"}],u=({productsData:i})=>t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"ПРОДУКЦІЯ"}),t.jsx(n,{children:i.map(s=>t.jsx(r,{children:t.jsxs("div",{children:[t.jsx("img",{src:s.imageSrc,alt:s.alt,loading:"lazy"}),t.jsx("h3",{children:s.title}),t.jsx("p",{children:s.description})]})},s.id))})]}),x=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  margin-right: auto;
  margin-left: auto;

  padding: 40px 20px;
`,h=()=>t.jsx(x,{children:t.jsx(u,{productsData:p})});export{h as default};
