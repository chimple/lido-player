const t="dragSelectedMap";const n="selectedValues";var o;(function(t){t["NoFlow"]="noFlow";t["ShowFlow"]="showFlow";t["FreeTrace"]="freeTrace";t["BlindTracing"]="blindTracing";t["BlindFreeTrace"]="blindFreeTrace"})(o||(o={}));function e(t,n,o){return(t||"")+(n?` ${n}`:"")+(o?` ${o}`:"")}const c=t=>{const n=window.getComputedStyle(t).transform;if(n==="none"){return 1}else{const t=n.match(/matrix\(([^)]+)\)/);if(t){const n=t[1].split(", ");const o=parseFloat(n[0]);return o}}return 1};function s(t){let n=false;let o=0;let e=0;let s=0;let r=0;const i=document.getElementById("container");if(!i){console.error(`Container with ID "container" not found.`);return}const l=c=>{w(t);n=true;if(c instanceof MouseEvent){o=c.clientX;e=c.clientY}else{o=c.touches[0].clientX;e=c.touches[0].clientY}t.style.opacity="0.8";t.style.cursor="grabbing";const a=window.getComputedStyle(t).transform;if(a!=="none"){const t=a.match(/matrix\(([^)]+)\)/);if(t){const n=t[1].split(", ");s=parseFloat(n[4]);r=parseFloat(n[5])}}else{s=0;r=0}document.addEventListener("mousemove",b);document.addEventListener("mouseup",x);document.addEventListener("touchmove",b);document.addEventListener("touchend",x)};const u=i.getBoundingClientRect();const f=t.getBoundingClientRect();let d=u.top-f.top;let h=u.left-f.left;const m=new MutationObserver((n=>{for(const o of n){if(o.type==="attributes"&&o.attributeName==="style"){const n=i.getBoundingClientRect();const o=t.getBoundingClientRect();d=n.top-o.top;h=n.left-o.left}}}));const g={attributes:true,attributeFilter:["style"]};m.observe(i,g);const b=a=>{if(!n)return;const l=c(i);let u=0;let f=0;if(a instanceof MouseEvent){u=(a.clientX-o)/l;f=(a.clientY-e)/l}else{u=(a.touches[0].clientX-o)/l;f=(a.touches[0].clientY-e)/l}const m=s+u;const g=r+f;const p=i.getBoundingClientRect();const w=t.getBoundingClientRect();const b=t.style.transform.match(/-?\d+(\.\d+)?/g);const x=b.map(Number);const y=w.left/l-x[0];const M=w.top-x[1];const v=p.width/l-Math.abs(h/l)-w.width/l;const k=p.left-y;const S=p.top-M;const T=p.height/l-Math.abs(d/l)-w.height/l;const N=m+y<=p.left?k:Math.min(m,v);const E=g+M<=p.top?S:Math.min(g,T);t.style.transform=`translate(${N}px, ${E}px)`;const C=document.querySelectorAll("[type='drop']");let $=null;let O=0;C.forEach((t=>{const n=t.getBoundingClientRect();const o=Math.max(0,Math.min(w.right,n.right)-Math.max(w.left,n.left));const e=Math.max(0,Math.min(w.bottom,n.bottom)-Math.max(w.top,n.top));const c=o*e;if(c>O){O=c;$=t}}));C.forEach((t=>{t.style.border="";t.style.backgroundColor=""}));if($){$.style.border="2px dashed #ff0000";$.style.backgroundColor="rgba(255, 0, 0, 0.1)"}};const x=o=>{n=false;document.removeEventListener("mousemove",b);document.removeEventListener("mouseup",x);document.removeEventListener("touchmove",b);document.removeEventListener("touchend",x);t.style.opacity="";t.style.cursor="move";const e=document.querySelectorAll("[type='drop']");e.forEach((t=>{t.style.border="";t.style.backgroundColor=""}));const c=t.getBoundingClientRect();let s=null;let r=0;e.forEach((t=>{const n=t.getBoundingClientRect();const o=Math.max(0,Math.min(c.right,n.right)-Math.max(c.left,n.left));const e=Math.max(0,Math.min(c.bottom,n.bottom)-Math.max(c.top,n.top));const a=o*e;if(a>r){r=a;s=t}}));a(t,s)};t.style.cursor="move";t.style.transform="translate(0, 0)";t.addEventListener("mousedown",l);t.addEventListener("touchstart",l);t.addEventListener("click",(n=>{p(t,"drag")}))}async function a(o,e){var c;if(!e)return;const s=e.getAttribute("onMatch");await r(s,e,o);let a=JSON.parse((c=localStorage.getItem(t))!==null&&c!==void 0?c:"{}");if(!a[e.getAttribute("tabindex")]){a[e.getAttribute("tabindex")]=[]}a[e.getAttribute("tabindex")]=[o["value"]];localStorage.setItem(t,JSON.stringify(a));const i=Object.keys(a).sort(((t,n)=>parseInt(t)-parseInt(n)));const f=i.reduce(((t,n)=>t.concat(a[n])),[]);localStorage.setItem(n,JSON.stringify(f));if(l(e["value"],[o["value"]])){const t=e.getAttribute("onCorrectMatch");if(t){await r(t,e,o)}}else{const t=e.getAttribute("onWrong");await r(t,e,o)}await u()}const r=async(t,n,o)=>{const e=i(t);for(let t=0;t<e.length;t++){const c=e[t];const s=c.actor==="this"?n:c.actor==="element"?o:document.getElementById(c.actor);if(s){switch(c.action){case"transform":{const t=window.getComputedStyle(s).transform;s.style.transform=t!=="none"?`${t} ${c.value}`:c.value;break}case"alignMatch":{const t=s;const n=o;if(t.childElementCount==0){n.style.transform="translate(0, 0)";t.appendChild(n)}else{n.style.transform="translate(0, 0)";n.parentElement.appendChild(t.firstChild);t.appendChild(n)}}case"speak":{{const t=s.getAttribute("audio");if(t){let n=document.getElementById("audio");if(!n){const t=document.createElement("audio");t.id="audio";document.body.appendChild(t);n=t}n.pause();n.currentTime=0;n.src=t;console.log("🚀 ~ executeActions ~ audioElement.src:",n.src);try{await n.play();b(s);while(!n.ended||n.error){await new Promise((t=>setTimeout(t,100)))}x(s)}catch(t){console.log("🚀 ~ executeActions ~ audioElement.src: error",t)}}break}}case"sleep":{const t=!isNaN(Number(c.value));if(t){await new Promise((t=>setTimeout(t,Number(c.value))))}break}default:{s.style[c.action]=c.value;break}}}}};const i=t=>{var n;const o=[];if(!t)return o;const e=(n=t.split(";"))===null||n===void 0?void 0:n.map((t=>t.trim()));e.forEach((t=>{if(t){const[n,e]=t.split("=").map((t=>t.trim()));const c=n.lastIndexOf(".");if(c!==-1){const t=n.substring(0,c).trim();const s=n.substring(c+1).trim();o.push({actor:t,action:s,value:e.replace(/['"]/g,"")})}}}));return o};const l=(t,n)=>{const o=t.split(",").map((t=>t.trim()));let e=0;let c=new Set;for(const t of o){if(t.startsWith("(")&&t.endsWith(")")){const o=t.slice(1,-1).split("|").map((t=>t.trim()));if(e>=n.length)return false;if(!o.includes(n[e]))return false;e++}else if(t.includes("|")){const n=t.split("|").map((t=>t.trim()));for(const t of n){c.add(t)}}else{if(e>=n.length||n[e]!==t)return false;e++}}while(e<n.length){if(!c.has(n[e])){return false}c.delete(n[e]);e++}return e===n.length};async function u(){var o;const e=document.querySelectorAll(`[type='drag']`);const c=document.querySelectorAll(`[type='drop']`);const s=document.getElementById("container");if(!s)return;const a=s["objective"];const i=JSON.parse((o=localStorage.getItem(n))!==null&&o!==void 0?o:"[]");const u=l(a,i);if(u){for(let t=0;t<c.length;t++){const n=c[t];const o=e[t];if(o){o.style.transform="translate(0, 0)";n.appendChild(o)}}const o=s.getAttribute("onCorrectMatch");console.log("onMatch,",s,o);if(o){await r(o,s)}localStorage.removeItem(n);localStorage.removeItem(t);await new Promise((t=>setTimeout(t,1500)));await new Promise((t=>setTimeout(t,2e3)));f()}else{const t=a.split(",").map((t=>t.trim()));if(i.length==t.length){const t=s.getAttribute("onWrong");await r(t,s)}}}const f=()=>{const t=new CustomEvent("nextContainer");console.log("🚀 ~ triggerNextContainer ~ event:",t);window.dispatchEvent(t)};const d=async(t,n)=>{const o=document.getElementById("container");if(!o)return;const e=o.getAttribute("canplay");if(e!=null&&e==="false")return;switch(n){case"drag":{s(t);break}case"click":{m(t);break}case"drop":{g(t);break}}const c=t.getAttribute("onEntry");await r(c,t);h(t)};function h(t){if(!t)return;const n=t.getAttribute("onTouch");console.log(n);if(!n)return;t.onclick=async()=>{console.log("🚀 ~ element.onclick= ~ onTouch:",n);if(!n)return;await r(n,t)}}function m(t){t.style.cursor="pointer";if(!t){console.error("No element provided.");return}const o=async()=>{console.log("Element clicked:",t);localStorage.setItem(n,JSON.stringify([t["value"]]));t.style.border="2px solid yellow";t.style.boxShadow="0px 0px 10px rgba(255, 255, 0, 0.7)";t.style.transition="transform 0.2s ease, border 0.5s ease";t.style.transform="scale(1.1)";t.style.transform="scale(1)";t.style.border="";t.style.boxShadow="";const o=document.getElementById("container");const e=o["objective"];if(l(e,[t["value"]])){const n=t.getAttribute("onCorrectTouch");await r(n,t);const e=o.getAttribute("onCorrectTouch");await r(e,t)}else{const n=o.getAttribute("onIncorrectTouch");await r(n,t);const e=t.getAttribute("onIncorrectTouch");await r(e,t)}await u()};t.addEventListener("click",o)}function g(t){t.onclick=()=>{p(t,"drop")}}async function p(t,n){const o=document.querySelectorAll(`[type='${n}']`);o.forEach((t=>{w(t)}));if(!document.getElementById("dynamic-highlight-style")){const t=document.createElement("style");t.id="dynamic-highlight-style";t.innerHTML=`\n      .highlight {\n        border: 4px solid #e74c3c; /* Thicker red border for more visibility */\n        border-radius: 12px; /* Larger rounded corners */\n        background-color: rgba(231, 76, 60, 0.3); /* Stronger, more noticeable background */\n        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.2); /* Stronger shadow */\n        outline: 4px solid rgba(231, 76, 60, 0.6); /* Glow effect */\n      }\n    `;document.head.appendChild(t)}t===null||t===void 0?void 0:t.classList.add("highlight");t.ariaPressed="true";const e=n==="drop"?t:document.querySelector("[type='drop'].highlight");const s=n==="drag"?t:document.querySelector("[type='drag'].highlight");if(e&&s){s.style.transition="transform 0.5s ease";s.style.transform="";const t=document.getElementById("container");const n=c(t);console.log("🚀 ~ onClickDropOrDragElement ~ containerScale:",n);const o=e.getBoundingClientRect();const r=s.getBoundingClientRect();const i=(o.left-r.left)/n;const l=(o.top-r.top)/n;s.style.transform=`translate(${i}px, ${l}px)`;const u=document.querySelectorAll(`*`);u.forEach((t=>{w(t)}));await new Promise((t=>setTimeout(t,500)));await a(s,e);await new Promise((t=>setTimeout(t,500)));s.style.transform="translate(0px, 0px)"}}function w(t){t.classList.remove("highlight");t.ariaPressed="false"}function b(t){if(!t)return;t.classList.add("speaking-highlight");const n="speaking-highlight-style";if(!document.getElementById(n)){const t=document.createElement("style");t.id=n;t.innerHTML=`\n      .speaking-highlight {\n        box-shadow: 0 0 20px 10px rgba(255, 165, 0, 0.9); /* Stronger orange glow effect */\n        border: 3px solid orange;\n        transition: box-shadow 0.5s ease-in-out, transform 0.5s ease-in-out;\n        transform: scale(1.05); /* Subtle scale effect to pop the element */\n        animation: pulseEffect 1.5s infinite; /* Pulsing animation */\n      }\n\n      @keyframes pulseEffect {\n        0% {\n          box-shadow: 0 0 20px 10px rgba(255, 165, 0, 0.9);\n          transform: scale(1.05);\n        }\n        50% {\n          box-shadow: 0 0 30px 15px rgba(255, 165, 0, 1);\n          transform: scale(1.1);\n        }\n        100% {\n          box-shadow: 0 0 20px 10px rgba(255, 165, 0, 0.9);\n          transform: scale(1.05);\n        }\n      }\n    `;document.head.appendChild(t)}}function x(t){if(!t)return;t.classList.remove("speaking-highlight");t.style.boxShadow="";t.style.border=""}export{t as D,n as S,o as T,e as f,d as i,f as t};
//# sourceMappingURL=p-4db699ee.js.map