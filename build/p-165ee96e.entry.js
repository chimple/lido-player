import{r as t,h as i,H as e,g as n,a as s}from"./p-160313d2.js";import{i as o,S as d,D as r,d as a,a as h,N as l,c,T as f,t as u}from"./p-345bd5ca.js";const p=".lido-col{top:var(--y, 0);left:var(--x, 0);height:var(--height, 100%);width:var(--width, 100%);background-color:var(--bgColor, #eeeeee);padding:15px;border-radius:10px;display:flex;justify-content:space-around;flex-direction:column;align-items:center}.lido-col>*{}";const g=p;const b=class{constructor(i){t(this,i);this.id=undefined;this.value=undefined;this.height=undefined;this.width=undefined;this.ariaLabel=undefined;this.ariaHidden=undefined;this.x=undefined;this.y=undefined;this.z=undefined;this.bgColor=undefined;this.type=undefined;this.tabIndex=undefined;this.visible=undefined;this.audio=undefined;this.onTouch=undefined;this.onInCorrect=undefined;this.onCorrect=undefined;this.onEntry=undefined}componentDidLoad(){o(this.el,this.type)}render(){const t={height:this.height,width:this.width,backgroundColor:this.bgColor,top:this.y,left:this.x,display:this.visible?"flex":"none",zIndex:this.z};return i(e,{key:"ccbb0b6da97e466c29de42a82c5c694ce6a4c6ef",id:this.id,class:"lido-col",type:this.type,tabindex:this.tabIndex,value:this.value,style:t,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,audio:this.audio,onTouch:this.onTouch,onCorrect:this.onCorrect,onInCorrect:this.onInCorrect,onEntry:this.onEntry},i("slot",{key:"66260c4d04bdeac0e756d569509e3f6d12eedd2b"}))}get el(){return n(this)}};b.style=g;const v=".lido-container{position:relative;height:100%;width:100%;background-color:var(--bgColor, #ffffff);display:flex;flex-direction:column;justify-content:center;align-items:center}";const x=v;const y=class{constructor(i){t(this,i);this.id=undefined;this.objective=undefined;this.value=undefined;this.height=undefined;this.width=undefined;this.ariaLabel=undefined;this.ariaHidden=undefined;this.x=undefined;this.y=undefined;this.z=undefined;this.bgColor=undefined;this.type=undefined;this.tabIndex=undefined;this.visible=undefined;this.audio=undefined;this.onTouch=undefined;this.onInCorrect=undefined;this.onCorrect=undefined;this.onEntry=undefined;this.canplay=true;this.showCheck=undefined;this.isContinueOnCorrect=undefined;this.baseUrl=""}scaleContainer(t){var i;const e=[window.innerWidth];if((i=window.screen)===null||i===void 0?void 0:i.width){e.push(window.screen.width)}const n=Math.min(...e);const s=document.documentElement.clientHeight;const o=n/1600;const d=s/900;const r=Math.min(o,d);t.style.transform=`translate(-50%, -50%) scale(${r})`}componentDidLoad(){this.scaleContainer(this.el);document.body.style.backgroundColor=this.bgColor;window.addEventListener("resize",(()=>this.scaleContainer(this.el)));window.addEventListener("load",(()=>this.scaleContainer(this.el)));o(this.el,this.type)}render(){const t={backgroundColor:this.bgColor,width:"1600px",height:"900px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"};console.log("🚀 ~ AppContainer ~ canplay:",this.canplay);return i(e,{key:"4a3b0aec89b9d9123b21194b8125351226625ee9",id:"lido-container",tabindex:0,class:"lido-container",objective:this.objective,style:t,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,onTouch:this.onTouch,onInCorrect:this.onInCorrect,onCorrect:this.onCorrect,onEntry:this.onEntry,showCheck:this.showCheck,isContinueOnCorrect:this.isContinueOnCorrect},i("slot",{key:"884ede9298128de36fc124fc8c2c003e357f2c06"}))}get el(){return n(this)}};y.style=x;const m="@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); body{overflow:hidden}.lido-disable-check-button{pointer-events:none;background-color:#9393935c !important;color:white}";const w=m;const k="@keyframes rightToPlace{from{transform:translateX(2000px)}to{left:0}}@keyframes placeToLeft{from{}to{transform:translateX(-2000px)}}@keyframes shake{0%{transform:translateX(0)}10%{transform:translateX(-5px)}20%{transform:translateX(5px)}30%{transform:translateX(-5px)}40%{transform:translateX(5px)}50%{transform:translateX(-5px)}60%{transform:translateX(5px)}70%{transform:translateX(-5px)}80%{transform:translateX(5px)}90%{transform:translateX(-5px)}100%{transform:translateX(0)}}@keyframes fallAndBounce{0%{transform:translateY(-1000px)}25%{transform:translateY(0px)}50%{transform:translateY(-200px)}75%{transform:translateY(0)}90%{transform:translateY(-100px)}100%{transform:translateY(0)}}@keyframes placeToDown{0%{transform:translateY(0)}100%{transform:translateY(1000px)}}";const C=k;const I=".lido-snackbar{visibility:visible;min-width:250px;background-color:#333;color:#fff;text-align:center;border-radius:2px;padding:16px;position:fixed;z-index:1;bottom:30px;left:50%;transform:translateX(-50%);font-size:17px}.lido-dot-container{text-align:center;position:fixed;z-index:1;width:fit-content;top:1%;left:50%;transform:translate(-50%)}.lido-dot{height:15px;width:15px;margin:0 4px;background-color:#bbb;border-radius:50%;display:inline-block;transition:background-color 0.3s;cursor:pointer}.lido-dot.completed{background-color:grey}.lido-dot.current{background-color:green}.lido-dot:not(.completed):not(.current){background-color:#bbb}";const L=I;const j=class{constructor(i){t(this,i);this.NextContainerKey=t=>{if(t!=undefined&&t==this.currentContainerIndex)return;localStorage.removeItem(d);localStorage.removeItem(r);if(t!=undefined&&t<this.containers.length){this.currentContainerIndex=t;a(this.currentContainerIndex)}else if(this.currentContainerIndex<this.containers.length-1){this.currentContainerIndex++;a(this.currentContainerIndex)}else if(this.currentContainerIndex>=this.containers.length-1){this.showCompletionMessage=true;h();this.currentContainerIndex=0;setTimeout((()=>{this.showCompletionMessage=false}),3e3)}this.containers=[...this.containers]};this.xmlData=undefined;this.initialIndex=0;this.canplay=true;this.baseUrl="";this.currentContainerIndex=this.initialIndex;this.showCompletionMessage=false;this.containers=[]}componentWillLoad(){window.addEventListener(l,(()=>{this.NextContainerKey()}));window.addEventListener("changeContainer",(t=>{this.NextContainerKey(t.detail.index)}));this.parseXMLData(this.xmlData);window.addEventListener("beforeunload",(()=>{localStorage.removeItem(d);localStorage.removeItem(r)}))}disconnectedCallback(){window.removeEventListener(l,(()=>{this.NextContainerKey()}));window.removeEventListener("changeContainer",(t=>{this.NextContainerKey(t.detail.index)}))}parseXMLData(t){if(t){const i=new DOMParser;const e=i.parseFromString(t,"text/xml");const n=e.documentElement;this.parseContainers(n)}}parseElement(t){const e=t.nodeName.toLowerCase();const n={};Array.from(t.attributes).forEach((t=>{n[t.name]=t.value}));const s=Array.from(t.childNodes).map((t=>{if(t.nodeType===1){return this.parseElement(t)}else if(t.nodeType===3&&t.textContent.trim()!==""){return t.textContent}return null})).filter(Boolean);const o={"lido-container":i("lido-container",Object.assign({},n,{canplay:this.canplay,baseUrl:this.baseUrl}),s),"lido-col":i("lido-col",Object.assign({},n),s),"lido-trace":i("lido-trace",Object.assign({},n),s),"lido-image":i("lido-image",Object.assign({},n),s),"lido-row":i("lido-row",Object.assign({},n),s),"lido-text":i("lido-text",Object.assign({},n),s),"lido-pos":i("lido-pos",Object.assign({},n),s),"lido-shape":i("lido-shape",Object.assign({},n),s),"lido-wrap":i("lido-wrap",Object.assign({},n),s),"lido-random":i("lido-random",Object.assign({},n),s)};if(o[e]){return o[e]}else{console.warn(`Unknown tag: ${e}`);return null}}parseContainers(t){const i=[];const e=t.querySelectorAll("lido-container");e.forEach((t=>{const e=this.parseElement(t);if(e){i.push(e)}}));this.containers=i}renderDots(){return i("div",{id:"lido-dot-indicator",class:"lido-dot-container"},this.containers.map(((t,e)=>i("span",{class:`lido-dot ${e<this.currentContainerIndex?"completed":e===this.currentContainerIndex?"current":""}`,onClick:()=>this.jumpToContainer(e)}))))}jumpToContainer(t){this.NextContainerKey(t)}render(){if(!this.xmlData){return i("div",null,"Please provide XML data.")}return i(e,{index:this.currentContainerIndex,totalIndex:this.containers.length},i("div",{key:this.currentContainerIndex},this.containers[this.currentContainerIndex]),this.renderDots(),this.showCompletionMessage&&i("div",{class:"lido-snackbar"},"All containers have been displayed!"))}};j.style=w+(C+L);const T=".lido-image{user-select:none;-webkit-user-drag:none;object-fit:contain;max-width:100%;max-height:100%;aspect-ratio:1 / 1;}";const $=T;const D=class{constructor(i){t(this,i);this.value=undefined;this.height=undefined;this.width=undefined;this.ariaLabel=undefined;this.ariaHidden=undefined;this.x=undefined;this.y=undefined;this.z=undefined;this.bgColor=undefined;this.type=undefined;this.tabIndex=undefined;this.visible=undefined;this.audio=undefined;this.onTouch=undefined;this.onInCorrect=undefined;this.onCorrect=undefined;this.onEntry=undefined;this.src=undefined}componentDidLoad(){o(this.el,this.type)}render(){const t={height:this.height,width:this.width,backgroundColor:this.bgColor,top:this.y,left:this.x,zIndex:this.z,display:this.visible?"flex":"none",alignItems:"center",justifyContent:"center"};return i(e,{key:"ff3d71fa943dd20ff1ac1428f793749dce767ff5",type:this.type,tabindex:this.tabIndex,style:t,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,value:this.value,audio:this.audio,onTouch:this.onTouch,onCorrect:this.onCorrect,onInCorrect:this.onInCorrect,onEntry:this.onEntry},i("img",{key:"a0c4126354488de86d6ea331c6d223f1bacbc539",class:"lido-image",src:c(this.src),alt:"",style:t}))}get el(){return n(this)}};D.style=$;const P=".lido-pos{top:var(--y, 0);left:var(--x, 0);height:var(--height, 100%);width:var(--width, 100%);background-color:var(--bgColor, #eeeeee);display:flex;justify-content:space-around;flex-direction:column;position:fixed}.lido-pos>*{position:absolute}";const X=P;const z=class{constructor(i){t(this,i);this.id=undefined;this.value=undefined;this.height=undefined;this.width=undefined;this.ariaLabel=undefined;this.ariaHidden=undefined;this.x=undefined;this.y=undefined;this.z=undefined;this.bgColor=undefined;this.type=undefined;this.tabIndex=undefined;this.visible=undefined;this.audio=undefined;this.onTouch=undefined;this.onInCorrect=undefined;this.onCorrect=undefined;this.onEntry=undefined}componentDidLoad(){o(this.el,this.type)}render(){const t={height:this.height,width:this.width,backgroundColor:this.bgColor,top:this.y,left:this.x,zIndex:this.z,display:this.visible?"block":"none"};return i(e,{key:"4ad645ed4f75108e782857d3159ba532d6619119",id:this.id,class:"lido-pos",type:this.type,tabindex:this.tabIndex,style:t,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,value:this.value,audio:this.audio,onTouch:this.onTouch,onCorrect:this.onCorrect,onInCorrect:this.onInCorrect,onEntry:this.onEntry},i("slot",{key:"311ad650f72434c0cab890cf0813074a0e10592d"}))}get el(){return n(this)}};z.style=X;const M=".lido-random{display:flex;justify-content:space-between;align-items:center;position:absolute;}.lido-random>*{position:absolute}";const E=M;const W=class{constructor(i){t(this,i);this.id=undefined;this.value=undefined;this.height=undefined;this.width=undefined;this.ariaLabel=undefined;this.ariaHidden=undefined;this.x=undefined;this.y=undefined;this.z=undefined;this.bgColor=undefined;this.type=undefined;this.tabIndex=undefined;this.visible=undefined;this.audio=undefined;this.onTouch=undefined;this.onInCorrect=undefined;this.onCorrect=undefined;this.onEntry=undefined}componentDidLoad(){const t=this.el.querySelectorAll(".lido-random > *");t.forEach((t=>{const i=Math.random()*100;const e=Math.random()*100;t.style.top=`${i}%`;t.style.left=`${e}%`}))}render(){const t={height:this.height,width:this.width,top:this.y,left:this.x,display:this.visible?"block":"none",zIndex:this.z,backgroundColor:this.bgColor};return i(e,{key:"277e9b35405ed1be3c83180936409f782a15fc6f",class:"lido-random",type:this.type,tabindex:this.tabIndex,value:this.value,style:t,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,audio:this.audio,onTouch:this.onTouch,onCorrect:this.onCorrect,onInCorrect:this.onInCorrect,onEntry:this.onEntry},i("slot",{key:"1641a2f7d8fe53dd1c97de9bfd28cfcca3c1f7ae"}))}get el(){return n(this)}};W.style=E;const S=class{constructor(i){t(this,i);this.xmlPath=undefined;this.initialIndex=0;this.canplay=true;this.baseUrl="";this.xmlData=undefined}async componentWillLoad(){var t;const i=(t=this.xmlPath)!==null&&t!==void 0?t:this.baseUrl+"/index.xml";console.log("🚀 ~ AppRoot ~ componentWillLoad ~ this.baseUrl:",this.baseUrl);console.log("🚀 ~ AppRoot ~ componentWillLoad ~ this.xmlPath:",this.xmlPath);console.log("🚀 ~ AppRoot ~ componentWillLoad ~ xmlPath:",i);try{const t=i.startsWith("http")?i:s(i);const e=await fetch(t);if(!e.ok){throw new Error(`Failed to fetch XML data: ${e.statusText}`)}const n=await e.text();this.xmlData=n}catch(t){console.error("Error fetching XML data:",t);this.xmlData=null}}render(){if(this.xmlData===undefined){return i("div",null,"Loading...")}if(this.xmlData===null){return i("div",null,"Error loading XML data. Please check the path or URL.")}return i("lido-home",{initialIndex:this.initialIndex,canplay:this.canplay,xmlData:this.xmlData,baseUrl:this.baseUrl})}static get assetsDirs(){return["assets"]}};const O=".lido-row{display:flex;justify-content:space-between;align-items:center;}.lido-row>*{}";const A=O;const B=class{constructor(i){t(this,i);this.value=undefined;this.height=undefined;this.width=undefined;this.ariaLabel=undefined;this.ariaHidden=undefined;this.x=undefined;this.y=undefined;this.z=undefined;this.bgColor=undefined;this.type=undefined;this.tabIndex=undefined;this.visible=undefined;this.audio=undefined;this.onTouch=undefined;this.onInCorrect=undefined;this.onCorrect=undefined;this.onEntry=undefined}componentDidLoad(){o(this.el,this.type)}render(){const t={height:this.height,width:this.width,top:this.y,left:this.x,display:this.visible?"flex":"none",zIndex:this.z,backgroundColor:this.bgColor};return i(e,{key:"c5ad6aa8ce4f1bc590c27e094573cb4cb582b688",class:"lido-row",type:this.type,tabindex:this.tabIndex,value:this.value,style:t,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,audio:this.audio,onTouch:this.onTouch,onCorrect:this.onCorrect,onInCorrect:this.onInCorrect,onEntry:this.onEntry},i("slot",{key:"ddbf60dbecbb997aaaede64b3d5f6ebe68fd8d46"}))}get el(){return n(this)}};B.style=A;const F=".lido-shape{position:absolute;top:var(--y);left:var(--x);display:var(--display);z-index:var(--z)}.lido-rectangle{border-radius:0}.lido-circle{width:var(--width);height:var(--width);border-radius:50%;background-color:var(--bgColor)}.lido-ellipse{width:var(--width);height:var(--height);border-radius:50%;background-color:var(--bgColor)}.lido-triangle{width:var(--triangleWidth);height:var(--triangleHeight);background-color:var(--bgColor);clip-path:polygon(50% 0%, 100% 100%, 0% 100%)}.lido-rightTriangle{width:var(--triangleWidth);height:var(--triangleHeight);background-color:var(--bgColor);clip-path:polygon(100% 0%, 100% 100%, 0% 100%)}.lido-leftTriangle{width:var(--triangleWidth);height:var(--triangleHeight);background-color:var(--triangleBgColor);clip-path:polygon(0% 0%, 100% 100%, 0% 100%)}.lido-parallelogram{width:var(--paralleWidth);height:var(--paralleHeight);transform:skew(20deg)}.lido-star{width:var(--starWidth);height:var(--starHeight);background-color:var(--starBgColor);clip-path:polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)}.lido-pentagon{width:var(--pentagonWidth);height:var(--pentagonHeight);background-color:var(--pentagonBgColor);clip-path:polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)}.lido-heptagon{width:var(--heptagonWidth);height:var(--heptagonHeight);background-color:var(--heptagonBgColor);clip-path:polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)}.lido-octagon{width:var(--octagonWidth);height:var(--octagonHeight);background-color:var(--octagonBgColor);clip-path:polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)}.lido-rhombus{width:var(--rhombusWidth);height:var(--rhombusHeight);background-color:var(--rhombusBgColor);clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)}.lido-heart{height:var(--heartHeight);width:var(--heartWidth);border-image:radial-gradient(var(--heartBgColor) 69%, #0000 70%) 84.5%/50%;clip-path:polygon(-41% 0, 50% 91%, 141% 0)}";const _=F;const H=class{constructor(i){t(this,i);this.id=undefined;this.value=undefined;this.height=undefined;this.width=undefined;this.ariaLabel=undefined;this.ariaHidden=undefined;this.x=undefined;this.y=undefined;this.z=undefined;this.bgColor=undefined;this.type=undefined;this.tabIndex=undefined;this.shapeType=undefined;this.visible=undefined;this.audio=undefined;this.onTouch=undefined;this.onInCorrect=undefined;this.onCorrect=undefined;this.onEntry=undefined}componentDidLoad(){o(this.el,this.type)}render(){const t={height:this.shapeType!=="polygon"?this.height:undefined,width:this.shapeType!=="polygon"?this.width:undefined,top:this.y,left:this.x,display:this.visible?"block":"none",zIndex:this.z,backgroundColor:this.shapeType!=="polygon"?this.bgColor:"transparent"};return i(e,{key:"68fe120bb1c9aad7e0378a08e3054befa8594552",class:`lido-shape ${this.shapeType}`,value:this.value,type:this.type,tabindex:this.tabIndex,style:t,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,audio:this.audio,onTouch:this.onTouch,onCorrect:this.onCorrect,onInCorrect:this.onInCorrect,onEntry:this.onEntry})}get el(){return n(this)}};H.style=_;const Y=".lido-text{background-color:#fff;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);transition:background-color 0.3s ease;user-select:none;align-items:center;justify-content:center;text-align:center;border-radius:8px;color:#333;cursor:pointer}.lido-text:hover{background-color:#f0f0f0}";const G=Y;const V=class{constructor(i){t(this,i);this.id=undefined;this.value=undefined;this.string=undefined;this.font=undefined;this.fontSize=undefined;this.fontColor=undefined;this.highlightWhileSpeaking=undefined;this.height=undefined;this.width=undefined;this.ariaLabel=undefined;this.ariaHidden=undefined;this.x=undefined;this.y=undefined;this.z=undefined;this.bgColor=undefined;this.type=undefined;this.tabIndex=undefined;this.visible=undefined;this.audio=undefined;this.onTouch=undefined;this.onInCorrect=undefined;this.onCorrect=undefined;this.onEntry=undefined}componentDidLoad(){o(this.el,this.type)}render(){const t={height:this.height,width:this.width,backgroundColor:this.bgColor,top:this.y,left:this.x,zIndex:this.z,fontSize:this.fontSize,fontFamily:this.font,color:this.fontColor,display:this.visible?"flex":"none"};return i(e,{key:"a33b6e5bb0901d47bf3a8dca283588bf696ebc99",class:"lido-text",value:this.value,type:this.type,tabindex:this.tabIndex,audio:this.audio,onTouch:this.onTouch,onCorrect:this.onCorrect,onInCorrect:this.onInCorrect,onEntry:this.onEntry,id:this.id,style:t,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden},this.string)}get el(){return n(this)}};V.style=G;const U=":host{display:block;position:relative}#lido-svgContainer{position:absolute;top:0;left:0;right:0;bottom:50px;display:flex;justify-content:center;align-items:center;overflow:hidden}svg{width:100%;height:100%;max-height:calc(100vh - 50px);touch-action:none}#lido-draggableCircle{cursor:pointer;fill:red;transition:fill 0.2s, r 0.2s}.lido-blindTracing{stroke:none !important}.lido-blindFreeTrace{stroke:none !important}.lido-hovered{cursor:grab;fill:darkred}#lido-controls{position:fixed;bottom:0;left:0;right:0;display:flex;justify-content:space-between;padding:10px;background-color:#f0f0f0;border-top:1px solid #ccc}button{padding:10px;font-size:16px}@media (max-width: 600px){button{padding:8px;font-size:14px}}.lido-trace-path-green{stroke:green !important}";const N=U;const R=class{constructor(i){t(this,i);this.id=undefined;this.svgSource=undefined;this.value=undefined;this.height=undefined;this.width=undefined;this.x=undefined;this.y=undefined;this.z=undefined;this.ariaLabel=undefined;this.ariaHidden=undefined;this.tabIndex=undefined;this.mode=undefined;this.fileIndex=-1;this.isDragging=false;this.activePointerId=null}async initializeSVG(){let t={fileIndex:-1,currentPathIndex:0,lastLength:0,totalPathLength:0,isDragging:false,circle:null,paths:[],svg:null,proximityThreshold:100,freeTraceProximityThreshold:50,rafId:null,pointerMoveEvent:null,activePointerId:null,mode:this.mode,flowMarkers:[],freeTraceLines:[]};await this.loadAnotherSVG(t,true)}componentWillLoad(){this.initializeSVG()}async fetchSVG(t){const i=await fetch(t);if(!i.ok){throw new Error(`Failed to fetch SVG (${t}): ${i.statusText}`)}return await i.text()}calculateBoundingBox(t,i=22){let e=Infinity,n=Infinity,s=-Infinity,o=-Infinity;t.forEach((t=>{const i=t.getTotalLength();const d=100;for(let r=0;r<=d;r++){const a=t.getPointAtLength(r/d*i);if(a.x<e)e=a.x;if(a.y<n)n=a.y;if(a.x>s)s=a.x;if(a.y>o)o=a.y}}));e-=i;n-=i;s+=i;o+=i;return{minX:e,minY:n,maxX:s,maxY:o}}insertSVG(t){const i=document.getElementById("svgContainer");i.innerHTML=t;const e=i.querySelector("svg");e.removeAttribute("width");e.removeAttribute("height");const n=e.querySelectorAll("path, line");const s=this.calculateBoundingBox(Array.from(n));const o=s.maxX-s.minX;const d=s.maxY-s.minY;e.setAttribute("viewBox",`${s.minX} ${s.minY} ${o} ${d}`)}getSVGElement(){const t=document.getElementById("svgContainer");return t.querySelector("svg")}getPaths(t){return Array.from(t.querySelectorAll("path, line"))}createFlowMarkersForPath(t,i=10){var e;const n=t.getTotalLength();const s=n/(i+1);const o=[];for(let n=1;n<=i;n++){const i=t.getPointAtLength(n*s);const d=t.getPointAtLength((n+.5)*s);const r=Math.atan2(d.y-i.y,d.x-i.x);const a=document.createElementNS("http://www.w3.org/2000/svg","polygon");a.setAttribute("points","-5,-5 0,0 -5,5");a.setAttribute("fill","blue");a.setAttribute("transform",`translate(${i.x},${i.y}) rotate(${r*180/Math.PI})`);a.setAttribute("class","lido-flow-indicator");o.push(a);(e=t.parentNode)===null||e===void 0?void 0:e.appendChild(a)}return o}updateFlowIndicators(t){const i=t.svg.querySelectorAll(".lido-flow-indicator");i.forEach((i=>{if(t.mode===f.NoFlow){i.style.display="none"}else if(t.mode===f.ShowFlow){i.style.display="block"}}))}setupDrawingPath(t){t.paths.forEach(((i,e)=>{const n=i.getTotalLength();const s=i.cloneNode();s.setAttribute("stroke","green");s.setAttribute("stroke-width","13");s.setAttribute("stroke-dasharray",n.toString());s.setAttribute("stroke-dashoffset",n.toString());i.parentNode.appendChild(s,i);i.setAttribute("class","lido-trace-path");s.setAttribute("class","lido-trace-path-green");i.greenPath=s;i.classList.add(t.mode);if(t.mode===f.BlindTracing||t.mode===f.BlindFreeTrace){i.setAttribute("stroke","none")}else{i.setAttribute("stroke","#000");i.setAttribute("stroke-width","10");i.setAttribute("fill","none");i.setAttribute("stroke-dasharray",n.toString());i.setAttribute("stroke-dashoffset","0")}if(e===t.currentPathIndex&&t.mode===f.ShowFlow){t.flowMarkers=this.createFlowMarkersForPath(i)}}));t.totalPathLength=t.paths[t.currentPathIndex].getTotalLength()}setupDraggableCircle(t){var i;const e=t.paths[0].getPointAtLength(0);const n=document.createElementNS("http://www.w3.org/2000/svg","circle");n.setAttribute("id","lido-draggableCircle");n.setAttribute("cx",e.x.toString());n.setAttribute("cy",e.y.toString());n.setAttribute("r","20");n.setAttribute("fill","red");(i=t.svg)===null||i===void 0?void 0:i.appendChild(n);t.circle=n}addEventListeners(t){var i,e,n,s;if(!t.circle||!t.paths||t.paths.length===0)return;t.circle.addEventListener("pointerdown",(i=>{i.preventDefault();const e=this.getPointerPosition(i,t.svg);const n={x:parseFloat(t.circle.getAttribute("cx")),y:parseFloat(t.circle.getAttribute("cy"))};const s=this.getDistanceSquared(e,n);if(s<=t.proximityThreshold*t.proximityThreshold){t.isDragging=true;t.activePointerId=i.pointerId;t.circle.setPointerCapture(i.pointerId)}}));(i=t.svg)===null||i===void 0?void 0:i.addEventListener("pointermove",(i=>{if(!t.isDragging||i.pointerId!==t.activePointerId)return;t.pointerMoveEvent=i;if(!t.rafId){t.rafId=requestAnimationFrame((()=>{this.handlePointerMove(t);t.rafId=null}))}}));(e=t.svg)===null||e===void 0?void 0:e.addEventListener("pointerup",(i=>{if(i.pointerId===t.activePointerId){t.isDragging=false;t.activePointerId=null}}));(n=t.svg)===null||n===void 0?void 0:n.addEventListener("pointercancel",(i=>{if(i.pointerId===t.activePointerId){t.isDragging=false;t.activePointerId=null}}));(s=t.svg)===null||s===void 0?void 0:s.addEventListener("contextmenu",(t=>{t.preventDefault()}))}handlePointerMove(t){var i,e,n,s;if(!t.isDragging)return;if(!t.circle||!t.paths||t.paths.length===0)return;const o=t.pointerMoveEvent;const d=this.getPointerPosition(o,t.svg);const r={x:parseFloat(t.circle.getAttribute("cx")),y:parseFloat(t.circle.getAttribute("cy"))};const a=t.paths[t.currentPathIndex];if(!a){console.error("No valid path found at the current index");return}let h;if(t.mode===f.FreeTrace||t.mode===f.BlindFreeTrace){h=t.freeTraceProximityThreshold*t.freeTraceProximityThreshold}else{h=t.proximityThreshold*t.proximityThreshold}const l=this.getDistanceSquared(d,r);if(l>h){return}const c=this.getClosestPointOnPath(a,d);const p=this.getDistanceSquared(d,c);if(p>h){return}if(t.mode===f.FreeTrace||t.mode===f.BlindFreeTrace){if(!t.currentFreePath){t.currentFreePath=[]}if(!t.currentFreePath[t.currentPathIndex]){const e=document.createElementNS("http://www.w3.org/2000/svg","path");e.setAttribute("stroke","green");e.setAttribute("stroke-width","8");e.setAttribute("fill","none");e.setAttribute("d",`M${d.x},${d.y}`);(i=t.svg)===null||i===void 0?void 0:i.appendChild(e);t.currentFreePath[t.currentPathIndex]=e;t.lastPointerPos=d}const n=t.lastPointerPos||d;const s=t.currentFreePath[t.currentPathIndex].getAttribute("d");const o=(n.x+d.x)/2;const r=(n.y+d.y)/2;const h=`${s} Q ${n.x},${n.y} ${o},${r}`;t.currentFreePath[t.currentPathIndex].setAttribute("d",h);t.circle.setAttribute("cx",d.x.toString());t.circle.setAttribute("cy",d.y.toString());(e=t.svg)===null||e===void 0?void 0:e.appendChild(t.circle);t.lastPointerPos=d;const l=a.getTotalLength();const f=l-c.length;if(f<5){this.moveToNextPath(t);t.currentFreePath[t.currentPathIndex]=null}return}if(t.isDragging&&c.length>=t.lastLength){t.lastLength=c.length;t.circle.setAttribute("cx",c.x.toString());t.circle.setAttribute("cy",c.y.toString());(n=t.svg)===null||n===void 0?void 0:n.appendChild(t.circle);(s=a.greenPath)===null||s===void 0?void 0:s.setAttribute("stroke-dashoffset",(t.totalPathLength-t.lastLength).toString())}if(t.totalPathLength-1-t.lastLength<5&&t.currentPathIndex<t.paths.length-1){this.moveToNextPath(t)}else if(t.totalPathLength-1-t.lastLength<5&&t.currentPathIndex===t.paths.length-1){u()}}getPointerPosition(t,i){var e;const n=i.createSVGPoint();n.x=t.clientX;n.y=t.clientY;const s=(e=i.getScreenCTM())===null||e===void 0?void 0:e.inverse();return s?n.matrixTransform(s):{x:t.clientX,y:t.clientY}}getDistanceSquared(t,i){const e=t.x-i.x;const n=t.y-i.y;return e*e+n*n}getClosestPointOnPath(t,i){const e=t.getTotalLength();let n={x:0,y:0,length:0};let s=Infinity;const o=20;let d={x:0,y:0,length:0};let r=Infinity;for(let n=0;n<=e;n+=o){const e=t.getPointAtLength(n);const s=this.getDistanceSquared(i,e);if(s<r){r=s;d={x:e.x,y:e.y,length:n}}}const a=2;const h=Math.max(d.length-o,0);const l=Math.min(d.length+o,e);for(let e=h;e<=l;e+=a){const o=t.getPointAtLength(e);const d=this.getDistanceSquared(i,o);if(d<s){s=d;n={x:o.x,y:o.y,length:e}}}return n}async loadAnotherSVG(t,i){t.isDragging=false;try{if(t.svg){this.cleanupPreviousSVG(t)}const i=await this.fetchSVG(this.svgSource);this.insertSVG(i);t.svg=this.getSVGElement();t.paths=this.getPaths(t.svg);this.setupDrawingPath(t);this.setupDraggableCircle(t);this.addEventListeners(t)}catch(t){console.error(`Error loading SVG (${this.svgSource}):`,t)}}cleanupPreviousSVG(t){var i,e;if(t.circle){(i=t.svg)===null||i===void 0?void 0:i.removeChild(t.circle);t.circle=null}const n=(e=t.svg)===null||e===void 0?void 0:e.querySelectorAll(".lido-flow-indicator");n.forEach((t=>{t.remove()}));t.currentPathIndex=0;t.lastLength=0;t.totalPathLength=t.paths[0].getTotalLength()}moveToNextPath(t){var i,e;t.isDragging=false;t.currentPathIndex++;t.lastLength=0;if(t.currentPathIndex>=t.paths.length){u();return}const n=t.paths[t.currentPathIndex];if(!n){console.error("No valid path found at the next index");return}t.totalPathLength=n.getTotalLength();const s=n.getPointAtLength(0);(i=t.circle)===null||i===void 0?void 0:i.setAttribute("cx",s.x.toString());(e=t.circle)===null||e===void 0?void 0:e.setAttribute("cy",s.y.toString());if(t.mode===f.ShowFlow){t.flowMarkers=this.createFlowMarkersForPath(n)}}render(){const t={height:this.height,width:this.width,top:this.y,left:this.x,zIndex:this.z,position:"absolute"};return i(e,{key:"7b7eaeb2426aaf75f65722879584c23a4be62623",class:"lido-trace",id:this.id,style:t,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,tabindex:this.tabIndex},i("div",{key:"9cb2b9bde31b97bbeb4cdadb2b6b8ce78eb7ddde",id:"lido-svgContainer"}))}static get assetsDirs(){return["svg"]}};R.style=N;const q=".lido-wrap{display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fill, minmax(186px, auto))}.lido-wrap>*{padding:10px;background-color:var(--child-bg-color, #f0f0f0);box-sizing:border-box}";const Q=q;const J=class{constructor(i){t(this,i);this.id=undefined;this.value=undefined;this.height=undefined;this.width=undefined;this.ariaLabel=undefined;this.ariaHidden=undefined;this.x=undefined;this.y=undefined;this.z=undefined;this.bgColor=undefined;this.type=undefined;this.tabIndex=undefined;this.visible=undefined;this.audio=undefined;this.onTouch=undefined;this.onInCorrect=undefined;this.onCorrect=undefined;this.onEntry=undefined}componentDidLoad(){o(this.el,this.type)}render(){const t={height:this.height,width:this.width,top:this.y,left:this.x,display:this.visible?"grid":"none",zIndex:this.z,backgroundColor:this.bgColor};return i(e,{key:"5bc82944efc48405fab5a81a377a1f5d0b79421e",class:"lido-wrap",value:this.value,type:this.type,tabindex:this.tabIndex,style:t,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,audio:this.audio,onTouch:this.onTouch,onCorrect:this.onCorrect,onInCorrect:this.onInCorrect,onEntry:this.onEntry},i("slot",{key:"d2de6d0e236fcafe921e74955e640b576192fecc"}))}get el(){return n(this)}};J.style=Q;export{b as lido_col,y as lido_container,j as lido_home,D as lido_image,z as lido_pos,W as lido_random,S as lido_root,B as lido_row,H as lido_shape,V as lido_text,R as lido_trace,J as lido_wrap};
//# sourceMappingURL=p-165ee96e.entry.js.map