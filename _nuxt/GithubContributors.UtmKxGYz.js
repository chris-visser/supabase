import{d as n,aM as s,aR as o,a$ as i}from"./entry.L8aXr2se.js";import{u as c}from"./useGithub.PIZR5Ksg.js";const b=n({props:{query:{type:Object,required:!1,default:()=>({})}},async setup(e){const{fetchContributors:a}=c(),{data:u,refresh:t,pending:r}=await s(`github-contributors-${o(e.query)}`,()=>a(e.query));return{contributors:u,refresh:t,pending:r}},render({contributors:e,refresh:a,pending:u}){var r;const t=i();return(r=t==null?void 0:t.default)==null?void 0:r.call(t,{contributors:e,refresh:a,pending:u})}});export{b as default};