import{ab as u,c1 as i}from"./index-DS8UErgR.js";const r=u("menus",{state:()=>({menusRoutes:[]}),getters:{menus(){return n(this.menusRoutes)}},actions:{SAVE_MENUS(t){localStorage.setItem("authMenus",JSON.stringify(t)),this.INIT_MENUS()},INIT_MENUS(){this.menusRoutes=i()}}});function n(t){return t.filter(e=>{var s;return e.children&&(e.children=n(e.children)),(s=e.meta)==null?void 0:s.showLink})}export{r as u};