import{u as n,j as s,s as l}from"./index-C231R8L4.js";import{T as r,P as c,m}from"./ProductsContent.styled-ezrHDHpv.js";const d="/ulm/assets/can_drawn-CPPPFwlM.jpg",g="/ulm/assets/metal_lids-9yz-zHxD.jpeg",o="/ulm/assets/glass_can_lids---pqAhFf.jpeg",u="/ulm/assets/aluminum_packaging-CGQHvHKH.jpg",p="/ulm/assets/metal_trays-BkpJXECt.jpeg",t={can_drawn:d,metal_lids:g,glass_can_lids:o,aluminum_packaging:u,metal_trays:p},x=[{id:"drawn-cans",imageSrc:t.can_drawn},{id:"metal-lids",imageSrc:t.metal_lids},{id:"glass-can-lids",imageSrc:t.glass_can_lids},{id:"aluminum-packaging",imageSrc:t.aluminum_packaging},{id:"metal-trays",imageSrc:t.metal_trays}],j=({productsData:e})=>{const{t:i}=n("products");return s.jsxs(s.Fragment,{children:[s.jsx(r,{title:i("title")}),s.jsx(c,{children:e.map(a=>s.jsx(m,{children:s.jsxs("div",{children:[s.jsx("img",{src:a.imageSrc,alt:i(`items.${a.id}.alt`),loading:"lazy"}),s.jsx("h3",{children:i(`items.${a.id}.title`)}),s.jsx("p",{children:i(`items.${a.id}.description`)})]})},a.id))})]})},_=l.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  margin-right: auto;
  margin-left: auto;

  padding: 40px 20px;
`,P=()=>s.jsx(_,{children:s.jsx(j,{productsData:x})});export{P as default};
