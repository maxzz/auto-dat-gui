(function(e){function t(t){for(var r,a,c=t[0],u=t[1],i=t[2],b=0,d=[];b<c.length;b++)a=c[b],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&d.push(l[a][0]),l[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==l[u]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},l={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/auto-dat-gui/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"046a":function(e,t,n){},"17e2":function(e,t,n){},5774:function(e,t,n){"use strict";n("17e2")},"6fa6":function(e,t,n){"use strict";n("8635")},8635:function(e,t,n){},"9cdc":function(e,t,n){"use strict";n("c701")},c701:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),l={class:"results"};function o(e,t,n,o,a,c){var u=Object(r["q"])("RowTitle"),i=Object(r["q"])("RowColor"),s=Object(r["q"])("RowSelect"),b=Object(r["q"])("RowBoolean"),d=Object(r["q"])("RowString"),f=Object(r["q"])("RowNumber"),v=Object(r["q"])("RowButton"),p=Object(r["q"])("RowFolder"),j=Object(r["q"])("DatGui");return Object(r["j"])(),Object(r["d"])(r["a"],null,[Object(r["f"])(j,{foldPosition:"top"},{default:Object(r["w"])((function(){return[Object(r["f"])(u,{label:"Title",background:"olivedrab",color:e.testBoolean?"#f5dd05":e.testColor},null,8,["color"]),Object(r["f"])(i,{label:"Color",color:e.testColor,"onUpdate:color":t[1]||(t[1]=function(t){return e.testColor=t}),"onUpdate:selectColor":e.selectColor},null,8,["color","onUpdate:selectColor"]),Object(r["f"])(i,{label:"Color",color:e.testColor,"onUpdate:color":t[2]||(t[2]=function(t){return e.testColor=t})},null,8,["color"]),Object(r["f"])(s,{label:"Select",items:e.testItems,value:e.testSelect,"onUpdate:value":t[3]||(t[3]=function(t){return e.testSelect=t})},null,8,["items","value"]),Object(r["f"])(b,{checked:e.testBoolean,"onUpdate:checked":t[4]||(t[4]=function(t){return e.testBoolean=t}),label:"Boolean",title:"I can explain that"},null,8,["checked"]),Object(r["f"])(d,{value:e.testString,"onUpdate:value":t[5]||(t[5]=function(t){return e.testString=t}),label:"Text",title:"... or not"},null,8,["value"]),Object(r["f"])(f,{value:e.testNumber,"onUpdate:value":t[6]||(t[6]=function(t){return e.testNumber=t}),label:"Number slider slider",min:-100,max:100,step:1,title:"Here is how it works"},null,8,["value"]),Object(r["f"])(f,{value:e.testNumber,"onUpdate:value":t[7]||(t[7]=function(t){return e.testNumber=t}),label:"Number"},null,8,["value"]),Object(r["f"])(v,{label:"Button",title:"This handler invoked with isTrusted = true",onClicked:e.buttonClicked},null,8,["onClicked"]),Object(r["f"])(p,{label:"Folder",closed:""},{default:Object(r["w"])((function(){return[Object(r["f"])(f,{value:e.testNumber,"onUpdate:value":t[8]||(t[8]=function(t){return e.testNumber=t}),label:"Number slider",min:-100,max:100,step:1,title:"Here is how it works"},null,8,["value"]),Object(r["f"])(f,{value:e.testNumber,"onUpdate:value":t[9]||(t[9]=function(t){return e.testNumber=t}),label:"Number slider",min:-100,max:100,step:1,title:"Here is how it works"},null,8,["value"]),Object(r["f"])(p,{label:"Nested Folder",closed:""},{default:Object(r["w"])((function(){return[Object(r["f"])(f,{value:e.testNumber,"onUpdate:value":t[10]||(t[10]=function(t){return e.testNumber=t}),label:"Number slider",min:-100,max:100,step:1,title:"Here is how it works"},null,8,["value"]),Object(r["f"])(f,{value:e.testNumber,"onUpdate:value":t[11]||(t[11]=function(t){return e.testNumber=t}),label:"Number slider",min:-100,max:100,step:1,title:"Here is how it works"},null,8,["value"]),Object(r["f"])(p,{label:"Nested Folder",closed:""},{default:Object(r["w"])((function(){return[Object(r["f"])(f,{value:e.testNumber,"onUpdate:value":t[12]||(t[12]=function(t){return e.testNumber=t}),label:"Number slider",min:-100,max:100,step:1,title:"Here is how it works"},null,8,["value"]),Object(r["f"])(f,{value:e.testNumber,"onUpdate:value":t[13]||(t[13]=function(t){return e.testNumber=t}),label:"Number slider",min:-100,max:100,step:1,title:"Here is how it works"},null,8,["value"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["f"])("div",l,[Object(r["f"])("pre",null,"Test results:\n    Number : "+Object(r["r"])(e.testNumber)+"\n    Boolean: "+Object(r["r"])(e.testBoolean)+"\n    Text   : "+Object(r["r"])(e.testString)+"\n    Select : "+Object(r["r"])(e.testSelect)+" -> "+Object(r["r"])(e.findSelectedValue())+"\n    Color  : "+Object(r["r"])(e.testColor)+"\n",1),Object(r["f"])("span",{class:"results-color",style:{color:e.color4Background(e.testColor),"background-color":e.testColor}},"  "+Object(r["r"])(e.testColor)+"  ",5)])],64)}n("99af"),n("7db0"),n("b0c0");var a=n("5530"),c={class:"group--main group"};function u(e,t,n,l,o,a){return Object(r["j"])(),Object(r["d"])("div",{ref:"root",class:["dat-gui",{closed:e.folded}]},["top"===e.foldPosition?(Object(r["j"])(),Object(r["d"])("div",{key:0,class:"fold-ui",onClick:t[1]||(t[1]=function(t){return e.folded=!e.folded})},Object(r["r"])(e.closeButtonText),1)):Object(r["e"])("",!0),Object(r["f"])("div",c,[Object(r["f"])("ul",null,[Object(r["p"])(e.$slots,"default")])]),"bottom"===e.foldPosition?(Object(r["j"])(),Object(r["d"])("div",{key:1,class:"fold-ui",onClick:t[2]||(t[2]=function(t){return e.folded=!e.folded})},Object(r["r"])(e.closeButtonText),1)):Object(r["e"])("",!0)],2)}n("046a");var i=Object(r["g"])({name:"DatGui",props:{foldPosition:{type:String,default:"bottom"}},setup:function(){var e=Object(r["n"])(null),t=Object(r["n"])(!1),n=Object(r["b"])((function(){return t.value?"Show controls":"Hide controls"})),l=null;function o(){l&&(console.log("GUI: activePicker() before"),l(),console.log("GUI: activePicker() done"),l=null)}var a=function(e){o(),l=e};return Object(r["k"])("pickColor",a),Object(r["k"])("uiRoot",Object(r["m"])(e)),{root:e,folded:t,closeButtonText:n}}});i.render=u;var s=i;function b(e,t,n,l,o,a){return Object(r["j"])(),Object(r["d"])("li",{class:"control-row title",style:{backgroundColor:e.currentValue,color:e.color}},[Object(r["f"])("label",null,[Object(r["f"])("span",{class:"ctrl-label",title:e.title},Object(r["r"])(e.label),9,["title"])])],4)}var d=Object(r["g"])({name:"RowTitle",props:{color:String,background:String,label:String,title:String},setup:function(e,t){t.emit;var n=Object(r["n"])(e.background);return Object(r["v"])((function(){return e.background}),(function(){return n.value=e.background||""})),{currentValue:n}}});d.render=b;var f=d,v={class:"group"};function p(e,t,n,l,o,a){return Object(r["j"])(),Object(r["d"])("li",{class:["folder",{closed:e.currentValue}]},[Object(r["f"])("div",v,[Object(r["f"])("div",{class:"folder-text",title:e.title,onClick:t[1]||(t[1]=function(){return e.handleClick.apply(e,arguments)})},Object(r["r"])(e.label),9,["title"]),Object(r["f"])("ul",null,[Object(r["p"])(e.$slots,"default")])])],2)}var j=Object(r["g"])({name:"RowFolder",props:{closed:Boolean,label:String,title:String},setup:function(e,t){var n=t.emit,l=Object(r["n"])(e.closed);function o(){l.value=!l.value,n("update:folded",l.value)}return Object(r["v"])((function(){return e.closed}),(function(){return l.value=e.closed})),{currentValue:l,handleClick:o}}});j.render=p;var h=j,O={class:"control-row number"},m={class:"ctrl-value"};function g(e,t,n,l,o,a){var c=Object(r["q"])("Slider");return Object(r["j"])(),Object(r["d"])("li",O,[Object(r["f"])("label",null,[Object(r["f"])("span",{class:"ctrl-label",title:e.title},Object(r["r"])(e.label),9,["title"]),Object(r["f"])("div",m,[Object(r["x"])(Object(r["f"])(c,{class:"slider",min:e.minValue,max:e.maxValue,value:e.currentValue,"onUpdate:value":e.sanitizeNumber},null,8,["min","max","value","onUpdate:value"]),[[r["u"],e.hasSlider]]),Object(r["x"])(Object(r["f"])("input",{class:"row-input",type:"number",min:e.minValue,max:e.maxValue,step:e.stepValue,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.currentValue=t}),onChange:t[2]||(t[2]=function(){return e.handleChange.apply(e,arguments)})},null,40,["min","max","step"]),[[r["t"],e.currentValue]])])])])}n("a9e3"),n("f00c"),n("c975"),n("a15b"),n("d81d"),n("b64b"),n("d3b7"),n("ac1f"),n("25f0"),n("5319");var w=n("0ed4"),y=n.n(w),k=n("929f"),x=n.n(k),C=n("1bb7"),_=n.n(C),N=n("dd00"),S=n.n(N),M=n("359a"),R=n.n(M),V=n("e4bb"),T=n.n(V),B={parse2rgb:y.a,rgb2hsv:x.a,rgb2hex:_.a,hsv2hsl:S.a,hsv2rgb:R.a,hsl2rgb:T.a};function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=(100*e).toPrecision(0|t);return"".concat(n,"%")}function I(e){return"#"===e[0]?"hex":0===e.indexOf("rgb")?"rgba":0===e.indexOf("hsl")?"hsla":(e&&console.log("".concat(e," is not valid color value!")),"hex")}function U(e){return e.replace(/#([0-9a-f])\1([0-9a-f])\2([0-9a-f])\3([0-9a-f]?)\4$/,"#$1$2$3$4")}function P(e,t,n){return Math.min(Math.max(e,t),n)}function E(e){if("#"===e[0]){var t,n,r;if(7===e.length||9===e.length)t=e.substr(1,2),n=e.substr(3,2),r=e.substr(5,2);else{if(4!==e.length)return"black";t="".concat(e[1]).concat(e[1]),n="".concat(e[2]).concat(e[2]),r="".concat(e[3]).concat(e[3])}t=parseInt(t,16),n=parseInt(n,16),r=parseInt(r,16);var l=(299*t+587*n+114*r)/1e3;return l>=128?"black":"white"}return"black"}var F=Object(r["y"])("data-v-50f83d9f"),D=F((function(e,t,n,l,o,a){return Object(r["j"])(),Object(r["d"])("div",{ref:"slider",class:"slider",style:{"background-size":"".concat(e.progressWidth,"% 100%")},onMousedown:t[1]||(t[1]=function(){return e.handleMouseDown.apply(e,arguments)})},null,36)})),q=Object(r["g"])({name:"RowNumberSlider",props:{value:{type:[Number,String],default:0},min:{type:Number,default:0},max:{type:Number,default:100}},setup:function(e,t){var n=t.emit,l=Object(r["n"])(+e.value||0);function o(e){0===e.button&&(s(e.pageX),window.addEventListener("mousemove",c),window.addEventListener("mouseup",a))}function a(e){s(e.pageX),window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",a)}function c(e){s(e.pageX)}Object(r["v"])((function(){return e.value}),(function(){return l.value=+e.value||0}));var u=Object(r["b"])((function(){return P(100*(l.value-e.min)/(e.max-e.min),0,100)})),i=Object(r["n"])(null);function s(t){var r=i.value.getBoundingClientRect(),l=t-r.left,o=r.right-r.left,a=e.min+P(l/o,0,1)*(e.max-e.min);n("update:value",a)}return{slider:i,progressWidth:u,handleMouseDown:o}}});q.render=D,q.__scopeId="data-v-50f83d9f";var $=q,H=Object(r["g"])({name:"RowNumber",components:{Slider:$},props:{showSlider:{type:Boolean,default:!0},min:Number,max:Number,step:Number,value:{type:[Number,String],required:!0},label:String,title:String},setup:function(e,t){var n=t.emit,l="number"===typeof e.min?e.min:Number.NEGATIVE_INFINITY,o="number"===typeof e.max?e.max:Number.POSITIVE_INFINITY;if(l>o){var a=[o,l];l=a[0],o=a[1]}var c=Object(r["n"])(+e.value||0);Object(r["v"])((function(){return e.value}),(function(){return c.value=+e.value||0}));var u=Object(r["b"])((function(){return e.showSlider&&Number.isFinite(l)&&Number.isFinite(o)})),i=Object(r["b"])((function(){if(!e.step){var t=o-l;return Math.pow(10,Math.floor(Math.log(Math.abs(t))/Math.LN10))/10}return e.step}));function s(e){var t=P(+e||0,l,o),r=i.value;0!==r&&Number.isFinite(r)&&(t=Math.round(t/r)*r),c.value=t,n("update:value",t)}function b(e){s(+e.target.value)}return{currentValue:c,hasSlider:u,stepValue:i,minValue:l,maxValue:o,sanitizeNumber:s,handleChange:b}}});H.render=g;var A=H,G={class:"control-row string"},X={class:"ctrl-value"};function K(e,t,n,l,o,a){return Object(r["j"])(),Object(r["d"])("li",G,[Object(r["f"])("label",null,[Object(r["f"])("span",{class:"ctrl-label",title:e.title},Object(r["r"])(e.label),9,["title"]),Object(r["f"])("div",X,[Object(r["f"])("input",{class:"row-input",type:"text",value:e.currentValue,onInput:t[1]||(t[1]=function(){return e.handleChange.apply(e,arguments)})},null,40,["value"])])])])}var Y=Object(r["g"])({name:"RowString",props:{value:String,label:String,title:String},setup:function(e,t){var n=t.emit,l=Object(r["n"])(e.value||"");function o(e){l.value=e.target.value,n("update:value",l.value)}return Object(r["v"])((function(){return e.value}),(function(){return l.value=e.value})),{currentValue:l,handleChange:o}}});Y.render=K;var z=Y,W={class:"control-row boolean"},J={class:"ctrl-value"};function Z(e,t,n,l,o,a){return Object(r["j"])(),Object(r["d"])("li",W,[Object(r["f"])("label",null,[Object(r["f"])("span",{class:"ctrl-label",title:e.title},Object(r["r"])(e.label),9,["title"]),Object(r["f"])("div",J,[Object(r["f"])("input",{type:"checkbox",checked:e.currentValue,onChange:t[1]||(t[1]=function(){return e.handleChange.apply(e,arguments)})},null,40,["checked"])])])])}var Q=Object(r["g"])({name:"RowBoolean",props:{checked:Boolean,label:String,title:String},setup:function(e,t){var n=t.emit,l=Object(r["n"])(e.checked);function o(){l.value=!l.value,n("update:checked",l.value)}return Object(r["v"])((function(){return e.checked}),(function(){return l.value=e.checked})),{currentValue:l,handleChange:o}}});Q.render=Z;var ee=Q,te={class:"control-row button"};function ne(e,t,n,l,o,a){return Object(r["j"])(),Object(r["d"])("li",te,[Object(r["f"])("label",null,[Object(r["f"])("span",{class:"ctrl-label",title:e.title,onClick:t[1]||(t[1]=function(){return e.handleClick.apply(e,arguments)})},Object(r["r"])(e.label),9,["title"])])])}var re=Object(r["g"])({name:"RowBytton",props:{label:String,title:String},setup:function(e,t){var n=t.emit;function r(e){n("clicked",e)}return{handleClick:r}}});re.render=ne;var le=re,oe={class:"control-row select"},ae={class:"ctrl-value"};function ce(e,t,n,l,o,a){return Object(r["j"])(),Object(r["d"])("li",oe,[Object(r["f"])("label",null,[Object(r["f"])("span",{class:"ctrl-label",title:e.title},Object(r["r"])(e.label),9,["title"]),Object(r["f"])("div",ae,[Object(r["f"])("select",{value:e.currentValue,onChange:t[1]||(t[1]=function(){return e.handleChange.apply(e,arguments)})},[(Object(r["j"])(!0),Object(r["d"])(r["a"],null,Object(r["o"])(e.items,(function(e){return Object(r["j"])(),Object(r["d"])("option",{key:e.value,value:e.value},Object(r["r"])(e.name),9,["value"])})),128))],40,["value"])])])])}var ue=Object(r["g"])({name:"RowSelect",props:["value","items","label","title"],setup:function(e,t){var n=t.emit,l=Object(r["n"])(e.value);function o(e){l.value=e.target.value,n("update:value",l.value)}return Object(r["v"])((function(){return e.value}),(function(){return l.value=e.value||""})),{currentValue:l,handleChange:o}}});ue.render=ce;var ie=ue,se={class:"control-row color",ref:"elColorRow"},be={class:"ctrl-value"};function de(e,t,n,l,o,a){var c=Object(r["q"])("RowColorPicker");return Object(r["j"])(),Object(r["d"])("li",se,[Object(r["f"])("label",null,[Object(r["f"])("span",{class:"ctrl-label",title:e.title},Object(r["r"])(e.label),9,["title"]),Object(r["f"])("div",be,[Object(r["x"])(Object(r["f"])("input",{class:"row-input",type:"text",readonly:"","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.currentValue=t})},null,512),[[r["t"],e.currentValue]]),Object(r["f"])("div",{class:"picker-btn",style:{"background-color":e.currentValue,color:e.inputColor},onClick:t[2]||(t[2]=function(){return e.onShowPopup.apply(e,arguments)})},null,4),Object(r["x"])(Object(r["f"])(c,{ref:"elPopup",color:e.currentValue,"onUpdate:color":e.onColorChange,"onUpdate:pickerdown":e.onColorSelectorDown,onKeydown:e.onKeyDown},null,8,["color","onUpdate:color","onUpdate:pickerdown","onKeydown"]),[[r["u"],e.popupVisible]])])])],512)}var fe={class:"cp__wrapper"},ve={ref:"ref_s",class:"cp__v-ctrl cp__saturation"},pe=Object(r["f"])("div",{class:"msk-white"},null,-1),je=Object(r["f"])("div",{class:"msk-black"},null,-1),he={class:"cp__ctrl-pane"},Oe={class:"cp__previews"},me={class:"cp__preview"},ge={class:"cp__tracks"},we={ref:"ref_h",class:"cp__v-ctrl cp__ctrl-bar cp__ctrl-hue"},ye={ref:"ref_a",class:"cp__v-ctrl cp__ctrl-alpha"},ke={style:{"margin-top":"10px"}},xe={class:"cp__fm-fields"},Ce={style:{position:"relative"}},_e={class:"cp__fm-switcher"},Ne=Object(r["f"])("svg",{viewBox:"0 0 24 24"},[Object(r["f"])("path",{fill:"#333",d:"M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}),Object(r["f"])("path",{fill:"#333",d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15Z"})],-1);function Se(e,t,n,l,o,a){return Object(r["j"])(),Object(r["d"])("div",fe,[Object(r["f"])("div",ve,[Object(r["f"])("div",{class:"msk-hue",style:e.styles.saturationPane},null,4),pe,je,Object(r["f"])("p",{class:"cp__thumb",style:e.styles.saturationThumb},null,4)],512),Object(r["f"])("div",he,[Object(r["f"])("div",Oe,[Object(r["f"])("div",me,[Object(r["f"])("div",{style:e.styles.preview},null,4)]),Object(r["f"])("div",ge,[Object(r["f"])("div",we,[Object(r["f"])("div",{class:"cp__thumb",style:e.styles.hueThumb},null,4)],512),Object(r["f"])("div",ye,[Object(r["f"])("div",{class:"cp__thumb",style:e.styles.alphaThumb},null,4),Object(r["f"])("div",{class:"cp__ctrl-bar",style:e.styles.alphaTrack},null,4)],512)])]),Object(r["f"])("div",ke,[Object(r["f"])("div",xe,[(Object(r["j"])(!0),Object(r["d"])(r["a"],null,Object(r["o"])(e.colorModes[e.currentMode],(function(t){return Object(r["j"])(),Object(r["d"])("div",{key:t},[Object(r["f"])("div",Ce,[Object(r["f"])("input",{class:"cp__inp",onChange:function(n){return e.handleInput(t,n)},value:e.colorModel[t],type:e.constrains[t].type,maxlength:e.constrains[t].maxlength},null,40,["onChange","value","type","maxlength"]),Object(r["f"])("span",null,Object(r["r"])(t),1)])])})),128))]),Object(r["f"])("div",_e,[Object(r["f"])("div",{onClick:t[1]||(t[1]=function(t){return e.changecurrentMode()})},[Ne])])])])])}n("a623"),n("fb6a"),n("b680");var Me=n("3835");function Re(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(t<=0)return e;var r,l,o,a=0;function c(){r&&(clearTimeout(r),r=void 0)}function u(){c(),e.apply(l,o)}function i(){var i=Date.now()-a;c();for(var s=arguments.length,b=new Array(s),d=0;d<s;d++)b[d]=arguments[d];i>t?(a=Date.now(),e.apply(this,b)):n&&(o=b,l=this,r=setTimeout(u,t))}return i}var Ve=n("f678"),Te=n.n(Ve);function Be(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=0|t;return n>0?parseFloat(e.toFixed(n)):e}function Le(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:80,n=Object(r["n"])(e),l=Object(r["n"])(0),o=Object(r["n"])(0),a=Object(r["n"])(!1),c=function(){};return c=Object(r["v"])(n,(function(e,n,r){var c=2,u=Re(b,t);function i(e){e.preventDefault(),a.value=!0,document.addEventListener("mousemove",u),document.addEventListener("mouseup",s),d(e)}function s(e){a.value=!1,d(e),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",s)}function b(e){e.preventDefault(),d(e)}function d(t){var n=e.getBoundingClientRect();l.value=f((t.clientX-n.left)/n.width),o.value=f((t.clientY-n.top)/n.height)}function f(e){return Be(Te()(e,0,1),c)}e&&e.addEventListener("mousedown",i),r((function(){return e&&e.removeEventListener("mousedown",i)}))})),{pos:{x:l,y:o},down:a,stop:c}}function Ie(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;if(n<=0)return e;function r(){for(var r=this,l=arguments.length,o=new Array(l),a=0;a<l;a++)o[a]=arguments[a];var c=function(){return t=void 0,e.apply(r,o)};t&&clearTimeout(t),t=setTimeout(c,n)}return r}function Ue(){var e={type:"number",maxlength:3},t={type:"text",maxlength:4};return{r:e,g:e,b:e,h:e,s:t,l:t,a:{type:"number",maxlength:4},hex:{type:"text",maxlength:9}}}var Pe={rgba:["r","g","b","a"],hsla:["h","s","l","a"],hex:["hex"]};function Ee(e){var t=e?B.parse2rgb(e):[255,0,0,1],n=null==t[3]?1:t[3],r=B.rgb2hsv(t),l=Object(Me["a"])(r,3),o=l[0],a=l[1],c=l[2],u=parseFloat(n.toFixed(2));return{alpha:u,hue:o/360,saturation:{x:a/100,y:1-c/100}}}var Fe=Object(r["g"])({name:"RowColorPicker",props:{color:{type:String,default:"#ff0000"}},setup:function(e,t){var n=t.emit,l=Object(r["n"])(null),o=Object(r["n"])(null),a=Object(r["n"])(null),c=Le(l),u=c.pos,i=c.down,s=Le(o),b=s.pos,d=Le(a),f=d.pos;return Object(r["v"])(i,(function(){return n("update:pickerdown",i.value)})),{ref_s:l,ref_h:o,ref_a:a,pos_s:u,pos_h:b,pos_a:f}},data:function(){var e=this.color;return Object(a["a"])(Object(a["a"])({},Ee(e)),{},{currentMode:I(e),colorModel:{hex:"",r:0,g:0,b:0,h:0,s:"",l:"",a:0},constrains:Ue()})},watch:{color:{immediate:!0,handler:function(e,t){if(e!==t)try{var n=Ee(e);Object.assign(this,n)}catch(r){}}},rgba:{immediate:!0,handler:function(e,t){"".concat(e)!=="".concat(t)&&this.emitChange()}},pos_s:{handler:function(e){this.saturation={x:e.x.value,y:e.y.value}},deep:!0},pos_h:{handler:function(e){this.hue=1-e.x.value},deep:!0},pos_a:{handler:function(e){this.alpha=parseFloat(e.x.value.toFixed(2))},deep:!0}},computed:{hsva:function(){var e=this.hue,t=this.alpha,n=this.saturation,r=n.x,l=n.y;return[360*e,100*r,100*(1-l),t]},rgba:function(){var e=this.alpha,t=this.hsva,n=B.hsv2rgb(t),r=Object(Me["a"])(n,3),l=r[0],o=r[1],a=r[2];return[Math.round(l),Math.round(o),Math.round(a),e]},hsla:function(){var e=this.alpha,t=this.hsva,n=B.hsv2hsl(t),r=Object(Me["a"])(n,3),l=r[0],o=r[1],a=r[2];return[Math.round(l),"".concat(Math.round(o),"%"),"".concat(Math.round(a),"%"),e]},hex:function(){return B.rgb2hex(this.rgba)},previewBorderColor:function(){var e=Object(Me["a"])(this.rgba,3),t=e[0],n=e[1],r=e[2];return(t+n+r)/3>235?"rgba(160,160,160,0.8)":"transparent"},styles:function(){var e=this.rgba,t=this.alpha,n=this.hue,r=this.saturation,l=e.slice(0,3).join(", "),o=B.hsl2rgb([360*n,100,50]).map((function(e){return Math.round(e)})).join(", ");return{preview:{backgroundColor:"rgba(".concat(e.join(", "),")"),borderColor:this.previewBorderColor},saturationPane:{backgroundColor:"rgb(".concat(o,")")},saturationThumb:{left:L(r.x),top:L(r.y)},alphaTrack:{backgroundImage:"linear-gradient(to right, rgba(".concat(l,", 0) 0%, rgb(").concat(l,") 100%)")},alphaThumb:{left:L(t)},hueThumb:{left:L(1-n)}}},colorModes:function(){return Pe}},methods:{emitChange:function(){var e=this.alpha,t=this.hex,n=this.rgba,r=this.hsla,l=U(1===e?t.slice(0,7):t);this.$emit("update:color",{rgba:n,hsla:r,hex:l});var o=Object(Me["a"])(r,3),a=o[0],c=o[1],u=o[2],i=Object(Me["a"])(n,3),s=i[0],b=i[1],d=i[2];Object.assign(this.colorModel,{r:s,g:b,b:d,h:a,s:c,l:u,a:e,hex:l})},changecurrentMode:function(){var e=Object.keys(Pe),t=e.indexOf(this.currentMode);this.currentMode=e[(t+1)%e.length]},handleInput:function(e,t){var n=this.currentMode,r=this.colorModel,l=t.target.value,o=Number(l),a=!1;switch(e){case"a":r[e]===o||isNaN(o)||(r[e]=P(o,0,1),a=!0);break;case"r":case"g":case"b":r[e]===o||isNaN(o)||(r[e]=0|P(o,0,255),a=!0);break;case"h":r[e]===o||isNaN(o)||(r[e]=0|P(o,0,360),a=!0);break;case"s":case"l":"%"===l.slice(-1)&&r[e]!==l&&(o=parseFloat(l),r[e]="".concat(0|P(o,0,360),"%"),a=!0);break;case"hex":"#"===l[0]&&r[e]!==l&&B.parse2rgb(l).every((function(e){return!isNaN(e)}))&&(r[e]=U(l),a=!0);break}if(a){var c=r.h,u=r.s,i=r.l,s=r.r,b=r.g,d=r.b,f=r.a,v=r.hex,p=v;"rgba"===n?p="rgba(".concat([s,b,d,f],")"):"hsla"===n&&(p="hsla(".concat([c,u,i,f],")")),Object.assign(this,Ee(p))}}},created:function(){this.handleInput=Ie(this.handleInput.bind(this),50)}});n("6fa6");Fe.render=Se;var De=Fe,qe=Object(r["g"])({name:"RowColor",props:{color:{type:String,default:"#00f"},label:String,title:String},components:{RowColorPicker:De},setup:function(e,t){var n=t.emit,l=Object(r["n"])(e.color);Object(r["v"])((function(){return e.color}),(function(){return l.value=e.color}));var o=Object(r["h"])("pickColor"),a=Object(r["h"])("uiRoot"),c=Object(r["n"])(null),u=Object(r["n"])(null),i=Object(r["n"])(!1);function s(){i.value=!1,window.removeEventListener("keydown",d)}function b(){i.value=!i.value,i.value?(n("update:selectColor",{testColorSelectEvent:5}),window.addEventListener("keydown",d),o(s)):o(null)}function d(e){"Enter"!==e.key&&"Escape"!==e.key||o(null)}var f=function(e){l.value=e.hex,n("update:color",l.value)};function v(e){e}function p(e,t){return t.x<e.x&&e.x<t.x+t.width&&t.y<e.y&&e.y<t.y+t.height}function j(e){var t,n;if(i.value&&!(null===(t=e.target)||void 0===t||null===(n=t.classList)||void 0===n?void 0:n.contains("picker-btn"))){var r={x:e.clientX,y:e.clientY},l=!p(r,a.value.getBoundingClientRect()),c=p(r,u.value.$el.getBoundingClientRect());!l&&c||o(null)}}window.addEventListener("mouseup",j),Object(r["i"])((function(){return window.removeEventListener("mouseup",j)}));var h=Object(r["b"])((function(){return E(l.value)}));return{currentValue:l,onColorChange:f,popupVisible:i,onKeyDown:d,inputColor:h,onColorSelectorDown:v,onShowPopup:b,elColorRow:c,elPopup:u}}});n("5774");qe.render=de;var $e=qe,He=Object(r["g"])({name:"App",components:{DatGui:s,RowTitle:f,RowFolder:h,RowNumber:A,RowString:z,RowBoolean:ee,RowButton:le,RowSelect:ie,RowColor:$e},setup:function(){var e=Object(r["l"])({testNumber:70,testBoolean:!0,testString:"ABC",testSelect:"one",testItems:[{name:"First option",value:"one"},{name:"Second option",value:"two"}],testColor:""});function t(e){console.log("buttonClicked: What to do with trusted(".concat(e.isTrusted,") click event"),e)}function n(){var t=e.testItems.find((function(t){return t.value===e.testSelect}));return(null===t||void 0===t?void 0:t.name)||"none"}function l(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];(e=console).log.apply(e,["select"].concat(n))}return Object(a["a"])(Object(a["a"])({},Object(r["s"])(e)),{},{buttonClicked:t,findSelectedValue:n,color4Background:E,selectColor:l})}});n("9cdc");He.render=o;var Ae=He;Object(r["c"])(Ae).mount("#app")}});