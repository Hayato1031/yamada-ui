import{r as m}from"./index-4g5l5LRQ.js";import{b as B,C as X,n as I}from"./factory-d-SMqVb2.js";const Y=t=>{const e=K(t);return typeof e.PointerEvent<"u"&&t instanceof e.PointerEvent?t.pointerType==="mouse":t instanceof e.MouseEvent},O=t=>!!t.touches,j=t=>O(t)&&t.touches.length>1,K=t=>t.view??window,U=(t,e="page")=>{const n=t.touches[0]||t.changedTouches[0];return{x:n[`${e}X`],y:n[`${e}Y`]}},G=(t,e="page")=>({x:t[`${e}X`],y:t[`${e}Y`]}),V=(t,e="page")=>O(t)?U(t,e):G(t,e),J=(t,e,n,s)=>(t.addEventListener(e,n,s),()=>{t.removeEventListener(e,n,s)}),Q=t=>e=>{const n=Y(e);(!n||n&&e.button===0)&&t(e)},Z=(t,e=!1)=>{const n=r=>t(r,{point:V(r)});return e?Q(n):n},v=(t,e,n,s)=>J(t,e,Z(n,e==="pointerdown"),s),_=t=>{const e=m.useRef(null);return e.current=t,e},W=1/60*1e3,k=typeof performance<"u"?()=>performance.now():()=>Date.now(),$=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(k()),W);function tt(t){let e=[],n=[],s=0,r=!1,a=!1;const c=new WeakSet,f={schedule:(o,i=!1,u=!1)=>{const l=u&&r,h=l?e:n;return i&&c.add(o),h.indexOf(o)===-1&&(h.push(o),l&&r&&(s=e.length)),o},cancel:o=>{const i=n.indexOf(o);i!==-1&&n.splice(i,1),c.delete(o)},process:o=>{if(r){a=!0;return}if(r=!0,[e,n]=[n,e],n.length=0,s=e.length,s)for(let i=0;i<s;i++){const u=e[i];u(o),c.has(u)&&(f.schedule(u),t())}r=!1,a&&(a=!1,f.process(o))}};return f}const et=40;let S=!0,E=!1,T=!1;const g={delta:0,timestamp:0},y=["read","update","preRender","render","postRender"],b=y.reduce((t,e)=>(t[e]=tt(()=>E=!0),t),{}),nt=y.reduce((t,e)=>{const n=b[e];return t[e]=(s,r=!1,a=!1)=>(E||rt(),n.schedule(s,r,a)),t},{}),st=y.reduce((t,e)=>(t[e]=b[e].cancel,t),{});y.reduce((t,e)=>(t[e]=()=>b[e].process(g),t),{});const ot=t=>b[t].process(g),A=t=>{E=!1,g.delta=S?W:Math.max(Math.min(t-g.timestamp,et),1),g.timestamp=t,T=!0,y.forEach(ot),T=!1,E&&(S=!1,$(A))},rt=()=>{E=!0,S=!0,T||$(A)},L=()=>g,C=(t,e)=>({x:t.x-e.x,y:t.y-e.y}),M=(t,e)=>({point:t.point,delta:C(t.point,e[e.length-1]),offset:C(t.point,e[0]),velocity:ct(e,.1)}),it=t=>t*1e3,ct=(t,e)=>{if(t.length<2)return{x:0,y:0};let n=t.length-1,s=null;const r=t[t.length-1];for(;n>=0&&(s=t[n],!(r.timestamp-s.timestamp>it(e)));)n--;if(!s)return{x:0,y:0};const a=(r.timestamp-s.timestamp)/1e3;if(a===0)return{x:0,y:0};const c={x:(r.x-s.x)/a,y:(r.y-s.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c},ut=(...t)=>e=>t.reduce((n,s)=>s(n),e),R=(t,e)=>Math.abs(t-e),H=t=>"x"in t&&"y"in t,at=(t,e)=>{if(typeof t=="number"&&typeof e=="number")return R(t,e);if(H(t)&&H(e)){const n=R(t.x,e.x),s=R(t.y,e.y);return Math.sqrt(n**2+s**2)}return 0},ft=(t,e,n=3)=>{if(j(t))return;const s=t.view??window,r={point:V(t)},{timestamp:a}=L(),{onSessionStart:c}=e,f=[{...r.point,timestamp:a}];let o=null,i=null,u=null;t.stopPropagation(),t.preventDefault(),c==null||c(t,M(r,f));const l=()=>{if(!(i&&u))return;const p=M(u,f),w=o!==null,P=at(p.offset,{x:0,y:0})>=n;if(!w&&!P)return;const{timestamp:x}=L();f.push({...p.point,timestamp:x});const{onStart:d,onMove:D}=e;w||(d==null||d(i,p),o=i),D==null||D(i,p)},h=(p,w)=>{i=p,u=w,nt.update(l,!0)},F=(p,w)=>{const P=M(w,f),{onEnd:x,onSessionEnd:d}=e;d==null||d(p,P),N(),!(!x||!o)&&(x==null||x(p,P))},q=p=>{e=p};let z=ut(v(s,"pointermove",h),v(s,"pointerup",F),v(s,"pointercancel",F));const N=()=>{z==null||z(),st.update(l)};return{updateHandlers:q,end:N}},wt=(t,{onMove:e,onStart:n,onEnd:s,onSessionStart:r,onSessionEnd:a,threshold:c})=>{const f=!!e||!!n||!!s||!!r||!!a,o=m.useRef(null),i=_({onSessionStart:r,onSessionEnd:a,onStart:n,onMove:e,onEnd:(u,l)=>{o.current=null,s==null||s(u,l)}});m.useEffect(()=>{var u;(u=o.current)==null||u.updateHandlers(i.current)}),m.useEffect(()=>{const u=t.current;return!u||!f?void 0:v(u,"pointerdown",h=>{o.current=ft(h,i.current,c)})},[t,f,i,c]),m.useEffect(()=>()=>{var u;(u=o.current)==null||u.end(),o.current=null},[])},lt=(t,e)=>{if(!t){e(void 0);return}e({width:t.offsetWidth,height:t.offsetHeight});const n=t.ownerDocument.defaultView??window,s=new n.ResizeObserver(r=>{if(!I(r)||!r.length)return;const[a]=r;let c,f;if("borderBoxSize"in a){const o=a.borderBoxSize,i=I(o)?o[0]:o;c=i.inlineSize,f=i.blockSize}else c=t.offsetWidth,f=t.offsetHeight;e({width:c,height:f})});return s.observe(t,{box:"border-box"}),()=>s.unobserve(t)},pt=(t,e)=>{var r;if(!t||!t.parentElement)return;const n=((r=t.ownerDocument)==null?void 0:r.defaultView)??window,s=new n.MutationObserver(()=>{e()});return s.observe(t.parentElement,{childList:!0}),()=>{s.disconnect()}},dt=({getNodes:t,observeMutation:e=!0})=>{const[n,s]=m.useState([]),[r,a]=m.useState(0);return B(()=>{const c=t(),f=c.map((o,i)=>lt(o,u=>{s(l=>[...l.slice(0,i),u,...l.slice(i+1)])}));if(e){const o=c[0];f.push(pt(o,()=>{a(i=>i+1)}))}return()=>{f.forEach(o=>{o==null||o()})}},[r]),n},xt=t=>{const[e]=dt({observeMutation:!1,getNodes:()=>[X(t)?t.current:t]});return e};export{dt as a,wt as b,xt as c,_ as u};
