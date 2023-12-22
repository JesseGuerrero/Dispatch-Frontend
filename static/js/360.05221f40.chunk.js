"use strict";(self.webpackChunkfrontend_email_service=self.webpackChunkfrontend_email_service||[]).push([[360],{6526:(e,n,t)=>{t.d(n,{Z:()=>v,n:()=>y});var r,l=t(168),a=t(1614),o=t(1889),s=t(4554),i=t(890),c=t(5523),d=t(4454),m=t(3767),p=t(3504),b=t(6934),u=t(3967),x=t(1134),h=t(9709),f=t(848),Z=t(874),g=t(8550),j=t(184);const y=(0,b.ZP)(p.rU)(r||(r=(0,l.Z)(["\n  text-decoration: none;\n  color: #3683dc;\n  &:hover {\n    text-decoration: underline;\n    color: #5ea1b6;\n  }\n"]))),P=(0,Z.Ry)({email:(0,Z.Z_)().min(1,"Email is required").email("Email is invalid"),password:(0,Z.Z_)().min(1,"Password is required").min(8,"Password must be more than 8 characters").max(32,"Password must be less than 32 characters"),persistUser:(0,Z.i0)(!0).optional()});const v=function(){const e=(0,u.Z)(),n=(0,x.cI)({resolver:(0,f.F)(P),defaultValues:{email:"",password:""}});return(0,j.jsx)(a.Z,{maxWidth:"lg",sx:{textAlign:"center"},children:(0,j.jsx)(o.ZP,{spacing:{xs:6,md:10},justifyContent:"center",alignItems:"center",container:!0,children:(0,j.jsx)(o.ZP,{item:!0,md:10,lg:8,mx:"auto",children:(0,j.jsx)(x.RV,{...n,children:(0,j.jsxs)(o.ZP,{container:!0,sx:{boxShadow:{sm:"0 0 5px #ddd"},py:"6rem",px:"1rem",backgroundColor:e.palette.background.paper},children:[(0,j.jsx)(o.ZP,{item:!0,container:!0,justifyContent:"center",rowSpacing:5,sx:{maxWidth:{sm:"45rem"},marginInline:"auto"},children:(0,j.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,j.jsxs)(s.Z,{display:"flex",flexDirection:"column",component:"form",noValidate:!0,autoComplete:"off",onSubmit:n.handleSubmit((e=>{console.log(e)})),children:[(0,j.jsx)(i.Z,{variant:"h6",component:"h1",sx:{textAlign:"center",mb:"1.5rem"},children:"Log into your account"}),(0,j.jsx)(g.Z,{required:!0,type:"email",name:"email",label:"Email",variant:"filled",sx:{mb:"1rem"}}),(0,j.jsx)(g.Z,{label:"Password",type:"password",variant:"filled"}),(0,j.jsx)(c.Z,{control:(0,j.jsx)(d.Z,{size:"small","aria-label":"trust this device checkbox",required:!0,...n.register("persistUser")}),label:(0,j.jsx)(i.Z,{variant:"body2",sx:{fontSize:"0.8rem",fontWeight:400,color:"#5e5b5d"},children:"Trust this device"})}),(0,j.jsx)(h.Z,{loading:!1,type:"submit",variant:"contained",sx:{py:"0.8rem",mt:2,width:"80%",marginInline:"auto"},href:"dashboard",children:"Login"})]})})}),(0,j.jsx)(o.ZP,{container:!0,justifyContent:"center",children:(0,j.jsxs)(m.Z,{sx:{mt:"3rem",textAlign:"center"},children:[(0,j.jsxs)(i.Z,{sx:{fontSize:"0.9rem",mb:"1rem"},children:["Need an account?"," ",(0,j.jsx)(y,{to:"/Dispatch/signup",children:"Sign up here"})]}),(0,j.jsxs)(i.Z,{sx:{fontSize:"0.9rem"},children:["Forgot your"," ",(0,j.jsx)(y,{to:"/Dispatch/forgot-password",children:"password?"})]})]})})]})})})})})}},360:(e,n,t)=>{t.r(n),t.d(n,{default:()=>b});var r=t(4554),l=t(1614),a=t(7621),o=t(6907),s=t(6934),i=t(3967),c=t(7845),d=t(6526),m=t(184);const p=(0,s.ZP)(r.Z)((()=>"\n    overflow: auto;\n    flex: 1;\n    overflow-x: hidden;\n    align-items: center;\n"));const b=function(){const e=(0,i.Z)();return(0,m.jsxs)(p,{children:[(0,m.jsx)(o.ql,{children:(0,m.jsx)("title",{children:"Tokyo Free Black React Typescript Admin Dashboard"})}),(0,m.jsxs)(l.Z,{maxWidth:"lg",children:[(0,m.jsx)(r.Z,{display:"flex",justifyContent:"center",py:5,alignItems:"center",children:(0,m.jsx)(c.Z,{})}),(0,m.jsx)(a.Z,{sx:{p:10,mb:10,boxShadow:"none",backgroundColor:e.palette.background.default,pt:"5px"},children:(0,m.jsx)(d.Z,{})})]})]})}},5523:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(3366),l=t(7462),a=t(2791),o=t(8182),s=t(4419),i=t(2930),c=t(890),d=t(4036),m=t(6934),p=t(1402),b=t(1217);function u(e){return(0,b.Z)("MuiFormControlLabel",e)}const x=(0,t(5878).Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]);var h=t(6147),f=t(184);const Z=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],g=(0,m.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[{["& .".concat(x.label)]:n.label},n.root,n["labelPlacement".concat((0,d.Z)(t.labelPlacement))]]}})((e=>{let{theme:n,ownerState:t}=e;return(0,l.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,["&.".concat(x.disabled)]:{cursor:"default"}},"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},{["& .".concat(x.label)]:{["&.".concat(x.disabled)]:{color:(n.vars||n).palette.text.disabled}}})})),j=a.forwardRef((function(e,n){const t=(0,p.Z)({props:e,name:"MuiFormControlLabel"}),{className:m,componentsProps:b={},control:x,disabled:j,disableTypography:y,label:P,labelPlacement:v="end"}=t,w=(0,r.Z)(t,Z),C=(0,i.Z)();let k=j;"undefined"===typeof k&&"undefined"!==typeof x.props.disabled&&(k=x.props.disabled),"undefined"===typeof k&&C&&(k=C.disabled);const S={disabled:k};["checked","name","onChange","value","inputRef"].forEach((e=>{"undefined"===typeof x.props[e]&&"undefined"!==typeof t[e]&&(S[e]=t[e])}));const L=(0,h.Z)({props:t,muiFormControl:C,states:["error"]}),R=(0,l.Z)({},t,{disabled:k,labelPlacement:v,error:L.error}),F=(e=>{const{classes:n,disabled:t,labelPlacement:r,error:l}=e,a={root:["root",t&&"disabled","labelPlacement".concat((0,d.Z)(r)),l&&"error"],label:["label",t&&"disabled"]};return(0,s.Z)(a,u,n)})(R);let D=P;return null==D||D.type===c.Z||y||(D=(0,f.jsx)(c.Z,(0,l.Z)({component:"span",className:F.label},b.typography,{children:D}))),(0,f.jsxs)(g,(0,l.Z)({className:(0,o.Z)(F.root,m),ownerState:R,ref:n},w,{children:[a.cloneElement(x,S),D]}))}))}}]);
//# sourceMappingURL=360.05221f40.chunk.js.map