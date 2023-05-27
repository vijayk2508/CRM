"use strict";(self.webpackChunkcrm=self.webpackChunkcrm||[]).push([[984],{3155:function(e,r,t){t.r(r);var a=t(1413),n=t(890),o=t(533),i=t(184);r.default=function(e){return(0,i.jsxs)(n.Z,(0,a.Z)((0,a.Z)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",(0,i.jsx)(o.Z,{color:"inherit",href:"#",children:"Your Website"})," ",(new Date).getFullYear(),"."]}))}},7984:function(e,r,t){t.r(r);var a=t(2791),n=t(3044),o=t(6151),i=t(4708),s=t(8415),l=t(533),c=t(1889),u=t(4554),d=t(403),f=t(890),m=t(1614),v=t(7689),h=t(7192),Z=t(3155),g=t(184);r.default=function(){var e=(0,v.s0)(),r=(0,a.useCallback)((function(){e(h.RZ.ForgetPassword)}),[e]);return(0,g.jsxs)(m.Z,{component:"main",maxWidth:"xs",children:[(0,g.jsx)(i.ZP,{}),(0,g.jsxs)(u.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,g.jsx)(n.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,g.jsx)(d.Z,{})}),(0,g.jsx)(f.Z,{component:"h1",variant:"h5",children:"Forget Password"}),(0,g.jsxs)(u.Z,{component:"form",onSubmit:function(e){e.preventDefault();var r=new FormData(e.currentTarget);console.log({email:r.get("email"),password:r.get("password")})},noValidate:!0,sx:{mt:1},children:[(0,g.jsx)(s.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),(0,g.jsx)(o.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Submit"}),(0,g.jsxs)(c.ZP,{container:!0,children:[(0,g.jsx)(c.ZP,{item:!0,xs:!0,children:(0,g.jsx)(l.Z,{href:"#",onClick:r,variant:"body2",children:"Sign in"})}),(0,g.jsx)(c.ZP,{item:!0,children:(0,g.jsx)(l.Z,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),(0,g.jsx)(Z.default,{sx:{mt:8,mb:4}})]})}},403:function(e,r,t){var a=t(4836);r.Z=void 0;var n=a(t(5649)),o=t(184),i=(0,n.default)((0,o.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");r.Z=i},3044:function(e,r,t){t.d(r,{Z:function(){return j}});var a=t(5987),n=t(9439),o=t(1413),i=t(2791),s=t(8182),l=t(4419),c=t(6934),u=t(1402),d=t(9201),f=t(184),m=(0,d.Z)((0,f.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),v=t(5878),h=t(1217);function Z(e){return(0,h.Z)("MuiAvatar",e)}(0,v.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],p=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})((function(e){var r=e.theme,t=e.ownerState;return(0,o.Z)((0,o.Z)((0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(r.vars||r).shape.borderRadius}),"square"===t.variant&&{borderRadius:0}),t.colorDefault&&(0,o.Z)({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]}))})),x=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,c.ZP)(m,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"75%",height:"75%"});var j=i.forwardRef((function(e,r){var t=(0,u.Z)({props:e,name:"MuiAvatar"}),c=t.alt,d=t.children,m=t.className,v=t.component,h=void 0===v?"div":v,j=t.imgProps,y=t.sizes,w=t.src,S=t.srcSet,k=t.variant,P=void 0===k?"circular":k,D=(0,a.Z)(t,g),R=null,z=function(e){var r=e.crossOrigin,t=e.referrerPolicy,a=e.src,o=e.srcSet,s=i.useState(!1),l=(0,n.Z)(s,2),c=l[0],u=l[1];return i.useEffect((function(){if(a||o){u(!1);var e=!0,n=new Image;return n.onload=function(){e&&u("loaded")},n.onerror=function(){e&&u("error")},n.crossOrigin=r,n.referrerPolicy=t,n.src=a,o&&(n.srcset=o),function(){e=!1}}}),[r,t,a,o]),c}((0,o.Z)((0,o.Z)({},j),{},{src:w,srcSet:S})),A=w||S,C=A&&"error"!==z,F=(0,o.Z)((0,o.Z)({},t),{},{colorDefault:!C,component:h,variant:P}),M=function(e){var r=e.classes,t={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,l.Z)(t,Z,r)}(F);return R=C?(0,f.jsx)(x,(0,o.Z)({alt:c,src:w,srcSet:S,sizes:y,ownerState:F,className:M.img},j)):null!=d?d:A&&c?c[0]:(0,f.jsx)(b,{ownerState:F,className:M.fallback}),(0,f.jsx)(p,(0,o.Z)((0,o.Z)({as:h,ownerState:F,className:(0,s.Z)(M.root,m),ref:r},D),{},{children:R}))}))}}]);
//# sourceMappingURL=984.57f3def3.chunk.js.map