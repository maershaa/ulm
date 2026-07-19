import{s as e,u as n,j as o,n as a}from"./index-DO5OmBdR.js";import{T as c}from"./Title-C-z2hMaI.js";const l=e.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 40px 20px 60px;
`,p=e.p`
  margin-top: 8px;
  margin-bottom: 32px;

  font-size: 0.9rem;
  color: ${({theme:t})=>t.colors.textMuted};
`,x=e.section`
  margin-bottom: 28px;
`,d=e.h2`
  margin-bottom: 8px;

  font-size: 1.15rem;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.textPrimary};
`,m=e.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({theme:t})=>t.colors.textSecondary};
`,j=()=>{const{t}=n("legal"),r=t("privacyPolicy.sections",{returnObjects:!0});return o.jsx(a,{children:o.jsxs(l,{children:[o.jsx(c,{title:t("privacyPolicy.title")}),o.jsx(p,{children:t("privacyPolicy.lastUpdated")}),r.map((i,s)=>o.jsxs(x,{children:[o.jsx(d,{children:i.heading}),o.jsx(m,{children:i.text})]},s))]})})};export{j as default};
