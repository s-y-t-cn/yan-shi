import{s as De,E as le,a as be,e as Pe}from"./index-BfPsAHeW.js";import{bx as ce,a0 as ee,a8 as je,bu as Ve,_ as de,d as H,a as U,j as q,a1 as X,f as we,p as J,r as S,Y as ae,X as Re,E as He,b_ as Ue,L as D,R,ch as We,N as B,C as he,I as ue,c as A,e as j,k as fe,l as P,w as re,m as Ye,n as T,F as L,G,B as ie,z as Ge,W as xe,ac as Se,q as Ce,bf as Ae,a2 as Qe,an as Ke,o as Oe,ba as Xe,M as Je,Q as M,i as Ze,u as _e,y as $,t as et,s as Te,be as Ie,b6 as tt}from"./index-C_YbkAKH.js";import{E as nt}from"./index-D-HAntrQ.js";import{a as ot}from"./index-DS4oIYo5.js";import{h as dt}from"./index-CYVqnvBV.js";import{p as oe,U as te}from"./index-QOiVHojV.js";import{i as st}from"./isEqual-DES_174l.js";const V="$treeNodeId",Ee=function(e,t){!t||t[V]||Object.defineProperty(t,V,{value:e.id,enumerable:!1,configurable:!1,writable:!1})},ve=function(e,t){return e?t[e]:t[V]},ye=(e,t,n)=>{const d=e.value.currentNode;n();const o=e.value.currentNode;d!==o&&t("current-change",o?o.data:null,o)},pe=e=>{let t=!0,n=!0,d=!0;for(let o=0,s=e.length;o<s;o++){const i=e[o];(i.checked!==!0||i.indeterminate)&&(t=!1,i.disabled||(d=!1)),(i.checked!==!1||i.indeterminate)&&(n=!1)}return{all:t,none:n,allWithoutDisable:d,half:!t&&!n}},Q=function(e){if(e.childNodes.length===0||e.loading)return;const{all:t,none:n,half:d}=pe(e.childNodes);t?(e.checked=!0,e.indeterminate=!1):d?(e.checked=!1,e.indeterminate=!0):n&&(e.checked=!1,e.indeterminate=!1);const o=e.parent;!o||o.level===0||e.store.checkStrictly||Q(o)},_=function(e,t){const n=e.store.props,d=e.data||{},o=n[t];if(typeof o=="function")return o(d,e);if(typeof o=="string")return d[o];if(typeof o>"u"){const s=d[t];return s===void 0?"":s}};let at=0;class z{constructor(t){this.id=at++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const n in t)ce(t,n)&&(this[n]=t[n]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const t=this.store;if(!t)throw new Error("[Node]store is required!");t.registerNode(this);const n=t.props;if(n&&typeof n.isLeaf<"u"){const s=_(this,"isLeaf");typeof s=="boolean"&&(this.isLeafByUser=s)}if(t.lazy!==!0&&this.data?(this.setData(this.data),t.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&t.lazy&&t.defaultExpandAll&&!this.isLeafByUser&&this.expand(),Array.isArray(this.data)||Ee(this,this.data),!this.data)return;const d=t.defaultExpandedKeys,o=t.key;o&&d&&d.includes(this.key)&&this.expand(null,t.autoExpandParent),o&&t.currentNodeKey!==void 0&&this.key===t.currentNodeKey&&(t.currentNode=this,t.currentNode.isCurrent=!0),t.lazy&&t._initDefaultCheckedNode(this),this.updateLeafState(),this.parent&&(this.level===1||this.parent.expanded===!0)&&(this.canFocus=!0)}setData(t){Array.isArray(t)||Ee(this,t),this.data=t,this.childNodes=[];let n;this.level===0&&Array.isArray(this.data)?n=this.data:n=_(this,"children")||[];for(let d=0,o=n.length;d<o;d++)this.insertChild({data:n[d]})}get label(){return _(this,"label")}get key(){const t=this.store.key;return this.data?this.data[t]:null}get disabled(){return _(this,"disabled")}get nextSibling(){const t=this.parent;if(t){const n=t.childNodes.indexOf(this);if(n>-1)return t.childNodes[n+1]}return null}get previousSibling(){const t=this.parent;if(t){const n=t.childNodes.indexOf(this);if(n>-1)return n>0?t.childNodes[n-1]:null}return null}contains(t,n=!0){return(this.childNodes||[]).some(d=>d===t||n&&d.contains(t))}remove(){const t=this.parent;t&&t.removeChild(this)}insertChild(t,n,d){if(!t)throw new Error("InsertChild error: child is required.");if(!(t instanceof z)){if(!d){const o=this.getChildren(!0);o.includes(t.data)||(typeof n>"u"||n<0?o.push(t.data):o.splice(n,0,t.data))}Object.assign(t,{parent:this,store:this.store}),t=ee(new z(t)),t instanceof z&&t.initialize()}t.level=this.level+1,typeof n>"u"||n<0?this.childNodes.push(t):this.childNodes.splice(n,0,t),this.updateLeafState()}insertBefore(t,n){let d;n&&(d=this.childNodes.indexOf(n)),this.insertChild(t,d)}insertAfter(t,n){let d;n&&(d=this.childNodes.indexOf(n),d!==-1&&(d+=1)),this.insertChild(t,d)}removeChild(t){const n=this.getChildren()||[],d=n.indexOf(t.data);d>-1&&n.splice(d,1);const o=this.childNodes.indexOf(t);o>-1&&(this.store&&this.store.deregisterNode(t),t.parent=null,this.childNodes.splice(o,1)),this.updateLeafState()}removeChildByData(t){let n=null;for(let d=0;d<this.childNodes.length;d++)if(this.childNodes[d].data===t){n=this.childNodes[d];break}n&&this.removeChild(n)}expand(t,n){const d=()=>{if(n){let o=this.parent;for(;o.level>0;)o.expanded=!0,o=o.parent}this.expanded=!0,t&&t(),this.childNodes.forEach(o=>{o.canFocus=!0})};this.shouldLoadData()?this.loadData(o=>{Array.isArray(o)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||Q(this),d())}):d()}doCreateChildren(t,n={}){t.forEach(d=>{this.insertChild(Object.assign({data:d},n),void 0,!0)})}collapse(){this.expanded=!1,this.childNodes.forEach(t=>{t.canFocus=!1})}shouldLoadData(){return this.store.lazy===!0&&this.store.load&&!this.loaded}updateLeafState(){if(this.store.lazy===!0&&this.loaded!==!0&&typeof this.isLeafByUser<"u"){this.isLeaf=this.isLeafByUser;return}const t=this.childNodes;if(!this.store.lazy||this.store.lazy===!0&&this.loaded===!0){this.isLeaf=!t||t.length===0;return}this.isLeaf=!1}setChecked(t,n,d,o){if(this.indeterminate=t==="half",this.checked=t===!0,this.store.checkStrictly)return;if(!(this.shouldLoadData()&&!this.store.checkDescendants)){const{all:i,allWithoutDisable:c}=pe(this.childNodes);!this.isLeaf&&!i&&c&&(this.checked=!1,t=!1);const r=()=>{if(n){const g=this.childNodes;for(let l=0,f=g.length;l<f;l++){const y=g[l];o=o||t!==!1;const N=y.disabled?y.checked:o;y.setChecked(N,n,!0,o)}const{half:h,all:a}=pe(g);a||(this.checked=a,this.indeterminate=h)}};if(this.shouldLoadData()){this.loadData(()=>{r(),Q(this)},{checked:t!==!1});return}else r()}const s=this.parent;!s||s.level===0||d||Q(s)}getChildren(t=!1){if(this.level===0)return this.data;const n=this.data;if(!n)return null;const d=this.store.props;let o="children";return d&&(o=d.children||"children"),n[o]===void 0&&(n[o]=null),t&&!n[o]&&(n[o]=[]),n[o]}updateChildren(){const t=this.getChildren()||[],n=this.childNodes.map(s=>s.data),d={},o=[];t.forEach((s,i)=>{const c=s[V];!!c&&n.findIndex(g=>g[V]===c)>=0?d[c]={index:i,data:s}:o.push({index:i,data:s})}),this.store.lazy||n.forEach(s=>{d[s[V]]||this.removeChildByData(s)}),o.forEach(({index:s,data:i})=>{this.insertChild({data:i},s)}),this.updateLeafState()}loadData(t,n={}){if(this.store.lazy===!0&&this.store.load&&!this.loaded&&(!this.loading||Object.keys(n).length)){this.loading=!0;const d=s=>{this.childNodes=[],this.doCreateChildren(s,n),this.loaded=!0,this.loading=!1,this.updateLeafState(),t&&t.call(this,s)},o=()=>{this.loading=!1};this.store.load(this,d,o)}else t&&t.call(this)}eachNode(t){const n=[this];for(;n.length;){const d=n.shift();n.unshift(...d.childNodes),t(d)}}reInitChecked(){this.store.checkStrictly||Q(this)}}class rt{constructor(t){this.currentNode=null,this.currentNodeKey=null;for(const n in t)ce(t,n)&&(this[n]=t[n]);this.nodesMap={}}initialize(){if(this.root=new z({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){const t=this.load;t(this.root,n=>{this.root.doCreateChildren(n),this._initDefaultCheckedNodes()})}else this._initDefaultCheckedNodes()}filter(t){const n=this.filterNodeMethod,d=this.lazy,o=function(s){const i=s.root?s.root.childNodes:s.childNodes;if(i.forEach(c=>{c.visible=n.call(c,t,c.data,c),o(c)}),!s.visible&&i.length){let c=!0;c=!i.some(r=>r.visible),s.root?s.root.visible=c===!1:s.visible=c===!1}t&&s.visible&&!s.isLeaf&&(!d||s.loaded)&&s.expand()};o(this)}setData(t){t!==this.root.data?(this.root.setData(t),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(t){if(t instanceof z)return t;const n=je(t)?ve(this.key,t):t;return this.nodesMap[n]||null}insertBefore(t,n){const d=this.getNode(n);d.parent.insertBefore({data:t},d)}insertAfter(t,n){const d=this.getNode(n);d.parent.insertAfter({data:t},d)}remove(t){const n=this.getNode(t);n&&n.parent&&(n===this.currentNode&&(this.currentNode=null),n.parent.removeChild(n))}append(t,n){const d=Ve(n)?this.root:this.getNode(n);d&&d.insertChild({data:t})}_initDefaultCheckedNodes(){const t=this.defaultCheckedKeys||[],n=this.nodesMap;t.forEach(d=>{const o=n[d];o&&o.setChecked(!0,!this.checkStrictly)})}_initDefaultCheckedNode(t){(this.defaultCheckedKeys||[]).includes(t.key)&&t.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(t){t!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=t,this._initDefaultCheckedNodes())}registerNode(t){const n=this.key;!t||!t.data||(n?t.key!==void 0&&(this.nodesMap[t.key]=t):this.nodesMap[t.id]=t)}deregisterNode(t){!this.key||!t||!t.data||(t.childNodes.forEach(d=>{this.deregisterNode(d)}),delete this.nodesMap[t.key])}getCheckedNodes(t=!1,n=!1){const d=[],o=function(s){(s.root?s.root.childNodes:s.childNodes).forEach(c=>{(c.checked||n&&c.indeterminate)&&(!t||t&&c.isLeaf)&&d.push(c.data),o(c)})};return o(this),d}getCheckedKeys(t=!1){return this.getCheckedNodes(t).map(n=>(n||{})[this.key])}getHalfCheckedNodes(){const t=[],n=function(d){(d.root?d.root.childNodes:d.childNodes).forEach(s=>{s.indeterminate&&t.push(s.data),n(s)})};return n(this),t}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map(t=>(t||{})[this.key])}_getAllNodes(){const t=[],n=this.nodesMap;for(const d in n)ce(n,d)&&t.push(n[d]);return t}updateChildren(t,n){const d=this.nodesMap[t];if(!d)return;const o=d.childNodes;for(let s=o.length-1;s>=0;s--){const i=o[s];this.remove(i.data)}for(let s=0,i=n.length;s<i;s++){const c=n[s];this.append(c,d.data)}}_setCheckedKeys(t,n=!1,d){const o=this._getAllNodes().sort((r,g)=>r.level-g.level),s=Object.create(null),i=Object.keys(d);o.forEach(r=>r.setChecked(!1,!1));const c=r=>{r.childNodes.forEach(g=>{var h;s[g.data[t]]=!0,(h=g.childNodes)!=null&&h.length&&c(g)})};for(let r=0,g=o.length;r<g;r++){const h=o[r],a=h.data[t].toString();if(!i.includes(a)){h.checked&&!s[a]&&h.setChecked(!1,!1);continue}if(h.childNodes.length&&c(h),h.isLeaf||this.checkStrictly){h.setChecked(!0,!1);continue}if(h.setChecked(!0,!0),n){h.setChecked(!1,!1);const f=function(y){y.childNodes.forEach(C=>{C.isLeaf||C.setChecked(!1,!1),f(C)})};f(h)}}}setCheckedNodes(t,n=!1){const d=this.key,o={};t.forEach(s=>{o[(s||{})[d]]=!0}),this._setCheckedKeys(d,n,o)}setCheckedKeys(t,n=!1){this.defaultCheckedKeys=t;const d=this.key,o={};t.forEach(s=>{o[s]=!0}),this._setCheckedKeys(d,n,o)}setDefaultExpandedKeys(t){t=t||[],this.defaultExpandedKeys=t,t.forEach(n=>{const d=this.getNode(n);d&&d.expand(null,this.autoExpandParent)})}setChecked(t,n,d){const o=this.getNode(t);o&&o.setChecked(!!n,d)}getCurrentNode(){return this.currentNode}setCurrentNode(t){const n=this.currentNode;n&&(n.isCurrent=!1),this.currentNode=t,this.currentNode.isCurrent=!0}setUserCurrentNode(t,n=!0){const d=t[this.key],o=this.nodesMap[d];this.setCurrentNode(o),n&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(t,n=!0){if(t==null){this.currentNode&&(this.currentNode.isCurrent=!1),this.currentNode=null;return}const d=this.getNode(t);d&&(this.setCurrentNode(d),n&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}const it=H({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(e){const t=U("tree"),n=q("NodeInstance"),d=q("RootTree");return()=>{const o=e.node,{data:s,store:i}=o;return e.renderContent?e.renderContent(X,{_self:n,node:o,data:s,store:i}):we(d.ctx.slots,"default",{node:o,data:s},()=>[X("span",{class:t.be("node","label")},[o.label])])}}});var lt=de(it,[["__file","tree-node-content.vue"]]);function Le(e){const t=q("TreeNodeMap",null),n={treeNodeExpand:d=>{e.node!==d&&e.node.collapse()},children:[]};return t&&t.children.push(n),J("TreeNodeMap",n),{broadcastExpanded:d=>{if(e.accordion)for(const o of n.children)o.treeNodeExpand(d)}}}const Me=Symbol("dragEvents");function ct({props:e,ctx:t,el$:n,dropIndicator$:d,store:o}){const s=U("tree"),i=S({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return J(Me,{treeNodeDragStart:({event:h,treeNode:a})=>{if(typeof e.allowDrag=="function"&&!e.allowDrag(a.node))return h.preventDefault(),!1;h.dataTransfer.effectAllowed="move";try{h.dataTransfer.setData("text/plain","")}catch{}i.value.draggingNode=a,t.emit("node-drag-start",a.node,h)},treeNodeDragOver:({event:h,treeNode:a})=>{const l=a,f=i.value.dropNode;f&&f.node.id!==l.node.id&&ae(f.$el,s.is("drop-inner"));const y=i.value.draggingNode;if(!y||!l)return;let N=!0,C=!0,b=!0,w=!0;typeof e.allowDrop=="function"&&(N=e.allowDrop(y.node,l.node,"prev"),w=C=e.allowDrop(y.node,l.node,"inner"),b=e.allowDrop(y.node,l.node,"next")),h.dataTransfer.dropEffect=C||N||b?"move":"none",(N||C||b)&&(f==null?void 0:f.node.id)!==l.node.id&&(f&&t.emit("node-drag-leave",y.node,f.node,h),t.emit("node-drag-enter",y.node,l.node,h)),N||C||b?i.value.dropNode=l:i.value.dropNode=null,l.node.nextSibling===y.node&&(b=!1),l.node.previousSibling===y.node&&(N=!1),l.node.contains(y.node,!1)&&(C=!1),(y.node===l.node||y.node.contains(l.node))&&(N=!1,C=!1,b=!1);const v=l.$el.querySelector(`.${s.be("node","content")}`).getBoundingClientRect(),O=n.value.getBoundingClientRect();let E;const x=N?C?.25:b?.45:1:-1,Z=b?C?.75:N?.55:0:1;let F=-9999;const p=h.clientY-v.top;p<v.height*x?E="before":p>v.height*Z?E="after":C?E="inner":E="none";const m=l.$el.querySelector(`.${s.be("node","expand-icon")}`).getBoundingClientRect(),K=d.value;E==="before"?F=m.top-O.top:E==="after"&&(F=m.bottom-O.top),K.style.top=`${F}px`,K.style.left=`${m.right-O.left}px`,E==="inner"?Re(l.$el,s.is("drop-inner")):ae(l.$el,s.is("drop-inner")),i.value.showDropIndicator=E==="before"||E==="after",i.value.allowDrop=i.value.showDropIndicator||w,i.value.dropType=E,t.emit("node-drag-over",y.node,l.node,h)},treeNodeDragEnd:h=>{const{draggingNode:a,dropType:l,dropNode:f}=i.value;if(h.preventDefault(),h.dataTransfer.dropEffect="move",a&&f){const y={data:a.node.data};l!=="none"&&a.node.remove(),l==="before"?f.node.parent.insertBefore(y,f.node):l==="after"?f.node.parent.insertAfter(y,f.node):l==="inner"&&f.node.insertChild(y),l!=="none"&&(o.value.registerNode(y),o.value.key&&a.node.eachNode(N=>{var C;(C=o.value.nodesMap[N.data[o.value.key]])==null||C.setChecked(N.checked,!o.value.checkStrictly)})),ae(f.$el,s.is("drop-inner")),t.emit("node-drag-end",a.node,f.node,l,h),l!=="none"&&t.emit("node-drop",a.node,f.node,l,h)}a&&!f&&t.emit("node-drag-end",a.node,null,l,h),i.value.showDropIndicator=!1,i.value.draggingNode=null,i.value.dropNode=null,i.value.allowDrop=!0}}),{dragState:i}}const ht=H({name:"ElTreeNode",components:{ElCollapseTransition:nt,ElCheckbox:ot,NodeContent:lt,ElIcon:He,Loading:Ue},props:{node:{type:z,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(e,t){const n=U("tree"),{broadcastExpanded:d}=Le(e),o=q("RootTree"),s=S(!1),i=S(!1),c=S(null),r=S(null),g=S(null),h=q(Me),a=Ce();J("NodeInstance",a),e.node.expanded&&(s.value=!0,i.value=!0);const l=o.props.props.children||"children";D(()=>{const p=e.node.data[l];return p&&[...p]},()=>{e.node.updateChildren()}),D(()=>e.node.indeterminate,p=>{N(e.node.checked,p)}),D(()=>e.node.checked,p=>{N(p,e.node.indeterminate)}),D(()=>e.node.childNodes.length,()=>e.node.reInitChecked()),D(()=>e.node.expanded,p=>{R(()=>s.value=p),p&&(i.value=!0)});const f=p=>ve(o.props.nodeKey,p.data),y=p=>{const m=e.props.class;if(!m)return{};let K;if(Ae(m)){const{data:se}=p;K=m(se,p)}else K=m;return Qe(K)?{[K]:!0}:K},N=(p,m)=>{(c.value!==p||r.value!==m)&&o.ctx.emit("check-change",e.node.data,p,m),c.value=p,r.value=m},C=p=>{ye(o.store,o.ctx.emit,()=>o.store.value.setCurrentNode(e.node)),o.currentNode.value=e.node,o.props.expandOnClickNode&&w(),o.props.checkOnClickNode&&!e.node.disabled&&v(null,{target:{checked:!e.node.checked}}),o.ctx.emit("node-click",e.node.data,e.node,a,p)},b=p=>{o.instance.vnode.props.onNodeContextmenu&&(p.stopPropagation(),p.preventDefault()),o.ctx.emit("node-contextmenu",p,e.node.data,e.node,a)},w=()=>{e.node.isLeaf||(s.value?(o.ctx.emit("node-collapse",e.node.data,e.node,a),e.node.collapse()):(e.node.expand(),t.emit("node-expand",e.node.data,e.node,a)))},v=(p,m)=>{e.node.setChecked(m.target.checked,!o.props.checkStrictly),R(()=>{const K=o.store.value;o.ctx.emit("check",e.node.data,{checkedNodes:K.getCheckedNodes(),checkedKeys:K.getCheckedKeys(),halfCheckedNodes:K.getHalfCheckedNodes(),halfCheckedKeys:K.getHalfCheckedKeys()})})};return{ns:n,node$:g,tree:o,expanded:s,childNodeRendered:i,oldChecked:c,oldIndeterminate:r,getNodeKey:f,getNodeClass:y,handleSelectChange:N,handleClick:C,handleContextMenu:b,handleExpandIconClick:w,handleCheckChange:v,handleChildNodeExpand:(p,m,K)=>{d(m),o.ctx.emit("node-expand",p,m,K)},handleDragStart:p=>{o.props.draggable&&h.treeNodeDragStart({event:p,treeNode:e})},handleDragOver:p=>{p.preventDefault(),o.props.draggable&&h.treeNodeDragOver({event:p,treeNode:{$el:g.value,node:e.node}})},handleDrop:p=>{p.preventDefault()},handleDragEnd:p=>{o.props.draggable&&h.treeNodeDragEnd(p)},CaretRight:We}}});function ut(e,t,n,d,o,s){const i=B("el-icon"),c=B("el-checkbox"),r=B("loading"),g=B("node-content"),h=B("el-tree-node"),a=B("el-collapse-transition");return he((A(),j("div",{ref:"node$",class:T([e.ns.b("node"),e.ns.is("expanded",e.expanded),e.ns.is("current",e.node.isCurrent),e.ns.is("hidden",!e.node.visible),e.ns.is("focusable",!e.node.disabled),e.ns.is("checked",!e.node.disabled&&e.node.checked),e.getNodeClass(e.node)]),role:"treeitem",tabindex:"-1","aria-expanded":e.expanded,"aria-disabled":e.node.disabled,"aria-checked":e.node.checked,draggable:e.tree.props.draggable,"data-key":e.getNodeKey(e.node),onClick:L(e.handleClick,["stop"]),onContextmenu:e.handleContextMenu,onDragstart:L(e.handleDragStart,["stop"]),onDragover:L(e.handleDragOver,["stop"]),onDragend:L(e.handleDragEnd,["stop"]),onDrop:L(e.handleDrop,["stop"])},[fe("div",{class:T(e.ns.be("node","content")),style:Ge({paddingLeft:(e.node.level-1)*e.tree.props.indent+"px"})},[e.tree.props.icon||e.CaretRight?(A(),P(i,{key:0,class:T([e.ns.be("node","expand-icon"),e.ns.is("leaf",e.node.isLeaf),{expanded:!e.node.isLeaf&&e.expanded}]),onClick:L(e.handleExpandIconClick,["stop"])},{default:re(()=>[(A(),P(Ye(e.tree.props.icon||e.CaretRight)))]),_:1},8,["class","onClick"])):G("v-if",!0),e.showCheckbox?(A(),P(c,{key:1,"model-value":e.node.checked,indeterminate:e.node.indeterminate,disabled:!!e.node.disabled,onClick:L(()=>{},["stop"]),onChange:e.handleCheckChange},null,8,["model-value","indeterminate","disabled","onClick","onChange"])):G("v-if",!0),e.node.loading?(A(),P(i,{key:2,class:T([e.ns.be("node","loading-icon"),e.ns.is("loading")])},{default:re(()=>[ie(r)]),_:1},8,["class"])):G("v-if",!0),ie(g,{node:e.node,"render-content":e.renderContent},null,8,["node","render-content"])],6),ie(a,null,{default:re(()=>[!e.renderAfterExpand||e.childNodeRendered?he((A(),j("div",{key:0,class:T(e.ns.be("node","children")),role:"group","aria-expanded":e.expanded},[(A(!0),j(xe,null,Se(e.node.childNodes,l=>(A(),P(h,{key:e.getNodeKey(l),"render-content":e.renderContent,"render-after-expand":e.renderAfterExpand,"show-checkbox":e.showCheckbox,node:l,accordion:e.accordion,props:e.props,onNodeExpand:e.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"]))),128))],10,["aria-expanded"])),[[ue,e.expanded]]):G("v-if",!0)]),_:1})],42,["aria-expanded","aria-disabled","aria-checked","draggable","data-key","onClick","onContextmenu","onDragstart","onDragover","onDragend","onDrop"])),[[ue,e.node.visible]])}var ft=de(ht,[["render",ut],["__file","tree-node.vue"]]);function yt({el$:e},t){const n=U("tree"),d=Ke([]),o=Ke([]);Oe(()=>{i()}),Xe(()=>{d.value=Array.from(e.value.querySelectorAll("[role=treeitem]")),o.value=Array.from(e.value.querySelectorAll("input[type=checkbox]"))}),D(o,c=>{c.forEach(r=>{r.setAttribute("tabindex","-1")})}),Je(e,"keydown",c=>{const r=c.target;if(!r.className.includes(n.b("node")))return;const g=c.code;d.value=Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));const h=d.value.indexOf(r);let a;if([M.up,M.down].includes(g)){if(c.preventDefault(),g===M.up){a=h===-1?0:h!==0?h-1:d.value.length-1;const f=a;for(;!t.value.getNode(d.value[a].dataset.key).canFocus;){if(a--,a===f){a=-1;break}a<0&&(a=d.value.length-1)}}else{a=h===-1?0:h<d.value.length-1?h+1:0;const f=a;for(;!t.value.getNode(d.value[a].dataset.key).canFocus;){if(a++,a===f){a=-1;break}a>=d.value.length&&(a=0)}}a!==-1&&d.value[a].focus()}[M.left,M.right].includes(g)&&(c.preventDefault(),r.click());const l=r.querySelector('[type="checkbox"]');[M.enter,M.space].includes(g)&&l&&(c.preventDefault(),l.click())});const i=()=>{var c;d.value=Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)),o.value=Array.from(e.value.querySelectorAll("input[type=checkbox]"));const r=e.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);if(r.length){r[0].setAttribute("tabindex","0");return}(c=d.value[0])==null||c.setAttribute("tabindex","0")}}const pt=H({name:"ElTree",components:{ElTreeNode:ft},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:Ze}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(e,t){const{t:n}=_e(),d=U("tree"),o=q(De,null),s=S(new rt({key:e.nodeKey,data:e.data,lazy:e.lazy,props:e.props,load:e.load,currentNodeKey:e.currentNodeKey,checkStrictly:e.checkStrictly,checkDescendants:e.checkDescendants,defaultCheckedKeys:e.defaultCheckedKeys,defaultExpandedKeys:e.defaultExpandedKeys,autoExpandParent:e.autoExpandParent,defaultExpandAll:e.defaultExpandAll,filterNodeMethod:e.filterNodeMethod}));s.value.initialize();const i=S(s.value.root),c=S(null),r=S(null),g=S(null),{broadcastExpanded:h}=Le(e),{dragState:a}=ct({props:e,ctx:t,el$:r,dropIndicator$:g,store:s});yt({el$:r},s);const l=$(()=>{const{childNodes:u}=i.value,k=o?o.hasFilteredOptions!==0:!1;return(!u||u.length===0||u.every(({visible:I})=>!I))&&!k});D(()=>e.currentNodeKey,u=>{s.value.setCurrentNodeKey(u)}),D(()=>e.defaultCheckedKeys,u=>{s.value.setDefaultCheckedKey(u)}),D(()=>e.defaultExpandedKeys,u=>{s.value.setDefaultExpandedKeys(u)}),D(()=>e.data,u=>{s.value.setData(u)},{deep:!0}),D(()=>e.checkStrictly,u=>{s.value.checkStrictly=u});const f=u=>{if(!e.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");s.value.filter(u)},y=u=>ve(e.nodeKey,u.data),N=u=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const k=s.value.getNode(u);if(!k)return[];const I=[k.data];let W=k.parent;for(;W&&W!==i.value;)I.push(W.data),W=W.parent;return I.reverse()},C=(u,k)=>s.value.getCheckedNodes(u,k),b=u=>s.value.getCheckedKeys(u),w=()=>{const u=s.value.getCurrentNode();return u?u.data:null},v=()=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const u=w();return u?u[e.nodeKey]:null},O=(u,k)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");s.value.setCheckedNodes(u,k)},E=(u,k)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");s.value.setCheckedKeys(u,k)},x=(u,k,I)=>{s.value.setChecked(u,k,I)},Z=()=>s.value.getHalfCheckedNodes(),F=()=>s.value.getHalfCheckedKeys(),p=(u,k=!0)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");ye(s,t.emit,()=>{h(u),s.value.setUserCurrentNode(u,k)})},m=(u,k=!0)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");ye(s,t.emit,()=>{h(),s.value.setCurrentNodeKey(u,k)})},K=u=>s.value.getNode(u),se=u=>{s.value.remove(u)},Be=(u,k)=>{s.value.append(u,k)},$e=(u,k)=>{s.value.insertBefore(u,k)},ze=(u,k)=>{s.value.insertAfter(u,k)},qe=(u,k,I)=>{h(k),t.emit("node-expand",u,k,I)},Fe=(u,k)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");s.value.updateChildren(u,k)};return J("RootTree",{ctx:t,props:e,store:s,root:i,currentNode:c,instance:Ce()}),J(dt,void 0),{ns:d,store:s,root:i,currentNode:c,dragState:a,el$:r,dropIndicator$:g,isEmpty:l,filter:f,getNodeKey:y,getNodePath:N,getCheckedNodes:C,getCheckedKeys:b,getCurrentNode:w,getCurrentKey:v,setCheckedNodes:O,setCheckedKeys:E,setChecked:x,getHalfCheckedNodes:Z,getHalfCheckedKeys:F,setCurrentNode:p,setCurrentKey:m,t:n,getNode:K,remove:se,append:Be,insertBefore:$e,insertAfter:ze,handleNodeExpand:qe,updateKeyChildren:Fe}}});function gt(e,t,n,d,o,s){const i=B("el-tree-node");return A(),j("div",{ref:"el$",class:T([e.ns.b(),e.ns.is("dragging",!!e.dragState.draggingNode),e.ns.is("drop-not-allow",!e.dragState.allowDrop),e.ns.is("drop-inner",e.dragState.dropType==="inner"),{[e.ns.m("highlight-current")]:e.highlightCurrent}]),role:"tree"},[(A(!0),j(xe,null,Se(e.root.childNodes,c=>(A(),P(i,{key:e.getNodeKey(c),node:c,props:e.props,accordion:e.accordion,"render-after-expand":e.renderAfterExpand,"show-checkbox":e.showCheckbox,"render-content":e.renderContent,onNodeExpand:e.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"]))),128)),e.isEmpty?(A(),j("div",{key:0,class:T(e.ns.e("empty-block"))},[we(e.$slots,"empty",{},()=>{var c;return[fe("span",{class:T(e.ns.e("empty-text"))},et((c=e.emptyText)!=null?c:e.t("el.tree.emptyText")),3)]})],2)):G("v-if",!0),he(fe("div",{ref:"dropIndicator$",class:T(e.ns.e("drop-indicator"))},null,2),[[ue,e.dragState.showDropIndicator]])],2)}var Nt=de(pt,[["render",gt],["__file","tree.vue"]]);const ge=Te(Nt),kt=(e,{attrs:t,emit:n},{select:d,tree:o,key:s})=>{const i=U("tree-select");return D(()=>e.data,()=>{e.filterable&&R(()=>{var r,g;(g=o.value)==null||g.filter((r=d.value)==null?void 0:r.states.inputValue)})},{flush:"post"}),{...oe(Ie(e),Object.keys(le.props)),...t,"onUpdate:modelValue":r=>n(te,r),valueKey:s,popperClass:$(()=>{const r=[i.e("popper")];return e.popperClass&&r.push(e.popperClass),r.join(" ")}),filterMethod:(r="")=>{var g;e.filterMethod?e.filterMethod(r):e.remoteMethod?e.remoteMethod(r):(g=o.value)==null||g.filter(r)}}},Ct=H({extends:be,setup(e,t){const n=be.setup(e,t);delete n.selectOptionClick;const d=Ce().proxy;return R(()=>{n.select.states.cachedOptions.get(d.value)||n.select.onOptionCreate(d)}),D(()=>t.attrs.visible,o=>{n.states.visible=o},{immediate:!0}),n},methods:{selectOptionClick(){this.$el.parentElement.click()}}});function Ne(e){return e||e===0}function me(e){return Array.isArray(e)&&e.length}function Y(e){return Array.isArray(e)?e:Ne(e)?[e]:[]}function ne(e,t,n,d,o){for(let s=0;s<e.length;s++){const i=e[s];if(t(i,s,e,o))return d?d(i,s,e,o):i;{const c=n(i);if(me(c)){const r=ne(c,t,n,d,i);if(r)return r}}}}function ke(e,t,n,d){for(let o=0;o<e.length;o++){const s=e[o];t(s,o,e,d);const i=n(s);me(i)&&ke(i,t,n,s)}}const vt=(e,{attrs:t,slots:n,emit:d},{select:o,tree:s,key:i})=>{D(()=>e.modelValue,()=>{e.showCheckbox&&R(()=>{const a=s.value;a&&!st(a.getCheckedKeys(),Y(e.modelValue))&&a.setCheckedKeys(Y(e.modelValue))})},{immediate:!0,deep:!0});const c=$(()=>({value:i.value,label:"label",children:"children",disabled:"disabled",isLeaf:"isLeaf",...e.props})),r=(a,l)=>{var f;const y=c.value[a];return Ae(y)?y(l,(f=s.value)==null?void 0:f.getNode(r("value",l))):l[y]},g=Y(e.modelValue).map(a=>ne(e.data||[],l=>r("value",l)===a,l=>r("children",l),(l,f,y,N)=>N&&r("value",N))).filter(a=>Ne(a)),h=$(()=>{if(!e.renderAfterExpand&&!e.lazy)return[];const a=[];return ke(e.data.concat(e.cacheData),l=>{const f=r("value",l);a.push({value:f,currentLabel:r("label",l),isDisabled:r("disabled",l)})},l=>r("children",l)),a});return{...oe(Ie(e),Object.keys(ge.props)),...t,nodeKey:i,expandOnClickNode:$(()=>!e.checkStrictly&&e.expandOnClickNode),defaultExpandedKeys:$(()=>e.defaultExpandedKeys?e.defaultExpandedKeys.concat(g):g),renderContent:(a,{node:l,data:f,store:y})=>a(Ct,{value:r("value",f),label:r("label",f),disabled:r("disabled",f),visible:l.visible},e.renderContent?()=>e.renderContent(a,{node:l,data:f,store:y}):n.default?()=>n.default({node:l,data:f,store:y}):void 0),filterNodeMethod:(a,l,f)=>e.filterNodeMethod?e.filterNodeMethod(a,l,f):a?new RegExp(Pe(a),"i").test(r("label",l)||""):!0,onNodeClick:(a,l,f)=>{var y,N,C,b;if((y=t.onNodeClick)==null||y.call(t,a,l,f),!(e.showCheckbox&&e.checkOnClickNode)){if(!e.showCheckbox&&(e.checkStrictly||l.isLeaf)){if(!r("disabled",a)){const w=(N=o.value)==null?void 0:N.states.options.get(r("value",a));(C=o.value)==null||C.handleOptionSelect(w)}}else e.expandOnClickNode&&f.proxy.handleExpandIconClick();(b=o.value)==null||b.focus()}},onCheck:(a,l)=>{var f;if(!e.showCheckbox)return;const y=r("value",a),N={};ke([s.value.store.root],v=>N[v.key]=v,v=>v.childNodes);const C=l.checkedKeys,b=e.multiple?Y(e.modelValue).filter(v=>!(v in N)&&!C.includes(v)):[],w=b.concat(C);if(e.checkStrictly)d(te,e.multiple?w:w.includes(y)?y:void 0);else if(e.multiple)d(te,b.concat(s.value.getCheckedKeys(!0)));else{const v=ne([a],x=>!me(r("children",x))&&!r("disabled",x),x=>r("children",x)),O=v?r("value",v):void 0,E=Ne(e.modelValue)&&!!ne([a],x=>r("value",x)===e.modelValue,x=>r("children",x));d(te,O===e.modelValue||E?void 0:O)}R(()=>{var v;const O=Y(e.modelValue);s.value.setCheckedKeys(O),(v=t.onCheck)==null||v.call(t,a,{checkedKeys:s.value.getCheckedKeys(),checkedNodes:s.value.getCheckedNodes(),halfCheckedKeys:s.value.getHalfCheckedKeys(),halfCheckedNodes:s.value.getHalfCheckedNodes()})}),(f=o.value)==null||f.focus()},cacheOptions:h}};var mt=H({props:{data:{type:Array,default:()=>[]}},setup(e){const t=q(De);return D(()=>e.data,()=>{var n;e.data.forEach(o=>{t.states.cachedOptions.has(o.value)||t.states.cachedOptions.set(o.value,o)});const d=((n=t.selectRef)==null?void 0:n.querySelectorAll("input"))||[];tt&&!Array.from(d).includes(document.activeElement)&&t.setSelected()},{flush:"post",immediate:!0}),()=>{}}});const bt=H({name:"ElTreeSelect",inheritAttrs:!1,props:{...le.props,...ge.props,cacheData:{type:Array,default:()=>[]}},setup(e,t){const{slots:n,expose:d}=t,o=S(),s=S(),i=$(()=>e.nodeKey||e.valueKey||"value"),c=kt(e,t,{select:o,tree:s,key:i}),{cacheOptions:r,...g}=vt(e,t,{select:o,tree:s,key:i}),h=ee({});return d(h),Oe(()=>{Object.assign(h,{...oe(s.value,["filter","updateKeyChildren","getCheckedNodes","setCheckedNodes","getCheckedKeys","setCheckedKeys","setChecked","getHalfCheckedNodes","getHalfCheckedKeys","getCurrentKey","getCurrentNode","setCurrentKey","setCurrentNode","getNode","remove","append","insertBefore","insertAfter"]),...oe(o.value,["focus","blur"])})}),()=>X(le,ee({...c,ref:a=>o.value=a}),{...n,default:()=>[X(mt,{data:r.value}),X(ge,ee({...g,ref:a=>s.value=a}))]})}});var Kt=de(bt,[["__file","tree-select.vue"]]);const Tt=Te(Kt);export{ge as E,Tt as a};