import{f as r}from"./index-fRFe1AOP.js";import{x as t}from"./lit-element-BjFAGNZS.js";import{B as s}from"./Button-DR5q-tht.js";const v=({user:a,onLogin:m,onLogout:p,onCreateAccount:u})=>t`
  <header>
    <div class="storybook-header">
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        ${a?s({size:"small",onClick:p,label:"Log out"}):t`${s({size:"small",onClick:m,label:"Log in"})}
            ${s({primary:!0,size:"small",onClick:u,label:"Sign up"})}`}
      </div>
    </div>
  </header>
`,f={title:"Example/Header",tags:["autodocs"],render:a=>v(a),args:{onLogin:r(),onLogout:r(),onCreateAccount:r()}},e={args:{user:{name:"Jane Doe"}}},o={};var l,n,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}`,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var i,c,g;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const h=["LoggedIn","LoggedOut"],_=Object.freeze(Object.defineProperty({__proto__:null,LoggedIn:e,LoggedOut:o,__namedExportsOrder:h,default:f},Symbol.toStringTag,{value:"Module"}));export{v as H,e as L,o as a,_ as b};
