import{u as i,j as s,s as l}from"./index-1Cl8fMUY.js";import{T as r,P as c,n as m}from"./ProductsContent.styled-f5ADPYEx.js";const d="/ulm/assets/can_drawn-CPPPFwlM.jpg",g="/ulm/assets/metal_lids-9yz-zHxD.jpeg",u="/ulm/assets/glass_can_lids---pqAhFf.jpeg",o="/ulm/assets/aluminum_packaging-CGQHvHKH.jpg",p="/ulm/assets/metal_trays-BkpJXECt.jpeg",x="/ulm/assets/candy-CgtOrS-3.png",_="/ulm/assets/paintBrush-vl9q5u8x.png",h="/ulm/assets/trenchCandles-CrU_uwHx.png",a={can_drawn:d,metal_lids:g,glass_can_lids:u,aluminum_packaging:o,metal_trays:p,candy:x,paintBrush:_,trenchCandles:h},j=[{id:"monpensier-tins",imageSrc:a.candy},{id:"drawn-cans",imageSrc:a.can_drawn},{id:"metal-lids",imageSrc:a.metal_lids},{id:"glass-can-lids",imageSrc:a.glass_can_lids},{id:"aluminum-packaging",imageSrc:a.aluminum_packaging},{id:"trench-candle-cans",imageSrc:a.trenchCandles},{id:"brush-ferrules",imageSrc:a.paintBrush},{id:"metal-trays",imageSrc:a.metal_trays}],y=({productsData:e})=>{const{t:n}=i("products");return s.jsxs(s.Fragment,{children:[s.jsx(r,{title:n("title")}),s.jsx(c,{children:e.map(t=>s.jsx(m,{children:s.jsxs("div",{children:[s.jsx("img",{src:t.imageSrc,alt:n(`items.${t.id}.alt`),loading:"lazy"}),s.jsx("h3",{children:n(`items.${t.id}.title`)}),s.jsx("p",{children:n(`items.${t.id}.description`)})]})},t.id))})]})},f=l.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  margin-right: auto;
  margin-left: auto;

  padding: 40px 20px;
`,P=()=>s.jsx(f,{children:s.jsx(y,{productsData:j})});export{P as default};
