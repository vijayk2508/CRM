"use strict";(self.webpackChunkcrm=self.webpackChunkcrm||[]).push([[155],{3155:function(r,n,o){o.r(n);var t=o(1413),e=o(890),a=o(533),i=o(184);n.default=function(r){return(0,i.jsxs)(e.Z,(0,t.Z)((0,t.Z)({variant:"body2",color:"text.secondary",align:"center"},r),{},{children:["Copyright \xa9 ",(0,i.jsx)(a.Z,{color:"inherit",href:"#",children:"Your Website"})," ",(new Date).getFullYear(),"."]}))}},533:function(r,n,o){o.d(n,{Z:function(){return M}});var t=o(3433),e=o(9439),a=o(5987),i=o(4942),c=o(1413),u=o(2791),s=o(8182),l=o(4419),p=o(4036),h=o(6934),d=o(1402),m=o(3031),Z=o(2071),v=o(890),g=o(5878),y=o(1217);function f(r){return(0,y.Z)("MuiLink",r)}var b=(0,g.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),x=o(8529),w=o(2065),B={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=function(r){var n=r.theme,o=r.ownerState,t=function(r){return B[r]||r}(o.color),e=(0,x.DW)(n,"palette.".concat(t),!1)||o.color,a=(0,x.DW)(n,"palette.".concat(t,"Channel"));return"vars"in n&&a?"rgba(".concat(a," / 0.4)"):(0,w.Fq)(e,.4)},W=o(184),k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],C=(0,h.ZP)(v.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(r,n){var o=r.ownerState;return[n.root,n["underline".concat((0,p.Z)(o.underline))],"button"===o.component&&n.button]}})((function(r){var n=r.theme,o=r.ownerState;return(0,c.Z)((0,c.Z)((0,c.Z)((0,c.Z)({},"none"===o.underline&&{textDecoration:"none"}),"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}}),"always"===o.underline&&(0,c.Z)((0,c.Z)({textDecoration:"underline"},"inherit"!==o.color&&{textDecorationColor:S({theme:n,ownerState:o})}),{},{"&:hover":{textDecorationColor:"inherit"}})),"button"===o.component&&(0,i.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(b.focusVisible),{outline:"auto"}))})),M=u.forwardRef((function(r,n){var o=(0,d.Z)({props:r,name:"MuiLink"}),i=o.className,h=o.color,v=void 0===h?"primary":h,g=o.component,y=void 0===g?"a":g,b=o.onBlur,x=o.onFocus,w=o.TypographyClasses,S=o.underline,M=void 0===S?"always":S,P=o.variant,A=void 0===P?"inherit":P,D=o.sx,R=(0,a.Z)(o,k),N=(0,m.Z)(),F=N.isFocusVisibleRef,T=N.onBlur,j=N.onFocus,V=N.ref,L=u.useState(!1),O=(0,e.Z)(L,2),z=O[0],H=O[1],Y=(0,Z.Z)(n,V),q=(0,c.Z)((0,c.Z)({},o),{},{color:v,component:y,focusVisible:z,underline:M,variant:A}),E=function(r){var n=r.classes,o=r.component,t=r.focusVisible,e=r.underline,a={root:["root","underline".concat((0,p.Z)(e)),"button"===o&&"button",t&&"focusVisible"]};return(0,l.Z)(a,f,n)}(q);return(0,W.jsx)(C,(0,c.Z)({color:v,className:(0,s.Z)(E.root,i),classes:w,component:y,onBlur:function(r){T(r),!1===F.current&&H(!1),b&&b(r)},onFocus:function(r){j(r),!0===F.current&&H(!0),x&&x(r)},ref:Y,ownerState:q,variant:A,sx:[].concat((0,t.Z)(Object.keys(B).includes(v)?[]:[{color:v}]),(0,t.Z)(Array.isArray(D)?D:[D]))},R))}))},890:function(r,n,o){o.d(n,{Z:function(){return b}});var t=o(5987),e=o(1413),a=o(2791),i=o(8182),c=o(8519),u=o(4419),s=o(6934),l=o(1402),p=o(4036),h=o(5878),d=o(1217);function m(r){return(0,d.Z)("MuiTypography",r)}(0,h.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var Z=o(184),v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(r,n){var o=r.ownerState;return[n.root,o.variant&&n[o.variant],"inherit"!==o.align&&n["align".concat((0,p.Z)(o.align))],o.noWrap&&n.noWrap,o.gutterBottom&&n.gutterBottom,o.paragraph&&n.paragraph]}})((function(r){var n=r.theme,o=r.ownerState;return(0,e.Z)((0,e.Z)((0,e.Z)((0,e.Z)((0,e.Z)({margin:0},o.variant&&n.typography[o.variant]),"inherit"!==o.align&&{textAlign:o.align}),o.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}),o.gutterBottom&&{marginBottom:"0.35em"}),o.paragraph&&{marginBottom:16})})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},f={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=a.forwardRef((function(r,n){var o=(0,l.Z)({props:r,name:"MuiTypography"}),a=function(r){return f[r]||r}(o.color),s=(0,c.Z)((0,e.Z)((0,e.Z)({},o),{},{color:a})),h=s.align,d=void 0===h?"inherit":h,b=s.className,x=s.component,w=s.gutterBottom,B=void 0!==w&&w,S=s.noWrap,W=void 0!==S&&S,k=s.paragraph,C=void 0!==k&&k,M=s.variant,P=void 0===M?"body1":M,A=s.variantMapping,D=void 0===A?y:A,R=(0,t.Z)(s,v),N=(0,e.Z)((0,e.Z)({},s),{},{align:d,color:a,className:b,component:x,gutterBottom:B,noWrap:W,paragraph:C,variant:P,variantMapping:D}),F=x||(C?"p":D[P]||y[P])||"span",T=function(r){var n=r.align,o=r.gutterBottom,t=r.noWrap,e=r.paragraph,a=r.variant,i=r.classes,c={root:["root",a,"inherit"!==r.align&&"align".concat((0,p.Z)(n)),o&&"gutterBottom",t&&"noWrap",e&&"paragraph"]};return(0,u.Z)(c,m,i)}(N);return(0,Z.jsx)(g,(0,e.Z)({as:F,ref:n,ownerState:N,className:(0,i.Z)(T.root,b)},R))}))},8519:function(r,n,o){o.d(n,{Z:function(){return l}});var t=o(1413),e=o(3433),a=o(5987),i=o(2466),c=o(7416),u=["sx"],s=function(r){var n,o,t={systemProps:{},otherProps:{}},e=null!=(n=null==r||null==(o=r.theme)?void 0:o.unstable_sxConfig)?n:c.Z;return Object.keys(r).forEach((function(n){e[n]?t.systemProps[n]=r[n]:t.otherProps[n]=r[n]})),t};function l(r){var n,o=r.sx,c=(0,a.Z)(r,u),l=s(c),p=l.systemProps,h=l.otherProps;return n=Array.isArray(o)?[p].concat((0,e.Z)(o)):"function"===typeof o?function(){var r=o.apply(void 0,arguments);return(0,i.P)(r)?(0,t.Z)((0,t.Z)({},p),r):p}:(0,t.Z)((0,t.Z)({},p),o),(0,t.Z)((0,t.Z)({},h),{},{sx:n})}}}]);
//# sourceMappingURL=155.bcac3191.chunk.js.map