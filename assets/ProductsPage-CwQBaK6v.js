import{u as e,j as s,s as r}from"./index-DUFdDDp8.js";import{P as l,m as c}from"./ProductsContent.styled-Oz6BumVh.js";import{T as m}from"./Title-Bt_5Ugbi.js";const d="/ulm/assets/can_drawn-CPPPFwlM.jpg",g="/ulm/assets/metal_lids-9yz-zHxD.jpeg",u="/ulm/assets/glass_can_lids---pqAhFf.jpeg",o="/ulm/assets/aluminum_packaging-CGQHvHKH.jpg",p="/ulm/assets/metal_trays-BkpJXECt.jpeg",x="/ulm/assets/candy-CgtOrS-3.png",_="/ulm/assets/paintBrush-vl9q5u8x.png",h="/ulm/assets/trenchCandles-CrU_uwHx.png",a={can_drawn:d,metal_lids:g,glass_can_lids:u,aluminum_packaging:o,metal_trays:p,candy:x,paintBrush:_,trenchCandles:h},j=[{id:"monpensier-tins",imageSrc:a.candy},{id:"drawn-cans",imageSrc:a.can_drawn},{id:"metal-lids",imageSrc:a.metal_lids},{id:"glass-can-lids",imageSrc:a.glass_can_lids},{id:"aluminum-packaging",imageSrc:a.aluminum_packaging},{id:"trench-candle-cans",imageSrc:a.trenchCandles},{id:"brush-ferrules",imageSrc:a.paintBrush},{id:"metal-trays",imageSrc:a.metal_trays}],f=({productsData:i})=>{const{t:n}=e("products");return s.jsxs(s.Fragment,{children:[s.jsx(m,{title:n("title")}),s.jsx(l,{children:i.map(t=>s.jsx(c,{children:s.jsxs("div",{children:[s.jsx("img",{src:t.imageSrc,alt:n(`items.${t.id}.alt`),loading:"lazy"}),s.jsx("h3",{children:n(`items.${t.id}.title`)}),s.jsx("p",{children:n(`items.${t.id}.description`)})]})},t.id))})]})},y=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  margin-right: auto;
  margin-left: auto;

  padding: 40px 20px;
`,w=()=>s.jsx(y,{children:s.jsx(f,{productsData:j})});export{w as default};
