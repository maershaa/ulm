import{u as e,j as t,s as n}from"./index-DO5OmBdR.js";import{i as a,P as c}from"./ProductsItem-G41GK9TK.js";import{t as m}from"./ProductsContent.styled-Ct6jiIPq.js";import{T as d}from"./Title-C-z2hMaI.js";const l=[{id:"monpensier-tins",imageSrc:a.candy},{id:"drawn-cans",imageSrc:a.can_drawn},{id:"metal-lids",imageSrc:a.metal_lids},{id:"glass-can-lids",imageSrc:a.glass_can_lids},{id:"aluminum-packaging",imageSrc:a.aluminum_packaging},{id:"trench-candle-cans",imageSrc:a.trenchCandles},{id:"brush-ferrules",imageSrc:a.paintBrush},{id:"metal-trays",imageSrc:a.metal_trays}],o=({productsData:i})=>{const{t:r}=e("products");return t.jsxs(t.Fragment,{children:[t.jsx(d,{title:r("title")}),t.jsx(m,{children:i.map(s=>t.jsx(c,{product:s},s.id))})]})},g=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  margin-right: auto;
  margin-left: auto;

  padding: 40px 20px;
`,j=()=>t.jsx(g,{children:t.jsx(o,{productsData:l})});export{j as default};
