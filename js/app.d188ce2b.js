(function(t){function e(e){for(var a,s,o=e[0],l=e[1],r=e[2],d=0,v=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&v.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(v.length)v.shift()();return c.push.apply(c,r||[]),i()}function i(){for(var t,e=0;e<c.length;e++){for(var i=c[e],a=!0,o=1;o<i.length;o++){var l=i[o];0!==n[l]&&(a=!1)}a&&(c.splice(e--,1),t=s(s.s=i[0]))}return t}var a={},n={app:0},c=[];function s(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=a,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(i,a,function(e){return t[e]}.bind(null,a));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var r=0;r<o.length;r++)e(o[r]);var u=l;c.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"08b1":function(t,e,i){},"2f73":function(t,e,i){"use strict";i("08b1")},"3a89":function(t,e,i){},4939:function(t,e,i){"use strict";i("6df8")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("NavMenu"),i("AboutMe"),i("Skills"),i("Education"),i("Portfolio"),i("Contact")],1)},c=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("img",{staticClass:"nav-icon",attrs:{src:i("87aa")},on:{click:function(e){return t.navMenu()}}}),t._m(0)])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"nav-menu"},[i("li",{staticClass:"nav-link"},[i("a",{attrs:{href:"#AboutMe"}},[t._v("Обо мне")])]),i("li",{staticClass:"nav-link"},[i("a",{attrs:{href:"#Skills"}},[t._v("Навыки")])]),i("li",{staticClass:"nav-link"},[i("a",{attrs:{href:"#Education"}},[t._v("Образование")])]),i("li",{staticClass:"nav-link"},[i("a",{attrs:{href:"#Portfolio"}},[t._v("Портфолио")])]),i("li",{staticClass:"nav-link"},[i("a",{attrs:{href:"#Contact"}},[t._v("Контакты")])])])}],l={name:"NavMenu",methods:{navMenu:function(){var t=document.querySelector(".nav-menu");t.classList.contains("responsive")?(t.classList.remove("responsive"),t.classList.add("hide"),setTimeout(this.disable,1e3,t)):(t.classList.remove("hidden"),t.classList.add("responsive"))},disable:function(t){t.classList.remove("hide"),t.classList.add("hidden")}}},r=l,u=(i("8d8b"),i("2877")),d=Object(u["a"])(r,s,o,!1,null,"4fb4e9da",null),v=d.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"AboutMe",attrs:{id:"AboutMe"}},[i("div",{staticClass:"img-container"},[i("div",{staticClass:"bg"}),i("div",{staticClass:"sprite"})]),i("div",{staticClass:"dialog"},[i("div",{staticClass:"dialog-inner"},[i("p",[t._v(" Привет, меня зовут Дарья и я начинающий разработчик в поисках стажировки и работы в области веб-разработки ")]),i("div",{staticClass:"triangle"})])])])}],h={name:"AboutMe"},b=h,f=(i("6861"),Object(u["a"])(b,p,m,!1,null,"26ec636c",null)),A=f.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"education",attrs:{id:"Education"}},[i("h1",[t._v("Образование")]),i("div",{staticClass:"edu-info"},[i("h2",[t._v("Информатика и вычислительная техника")]),i("p",[t._v(' Тема дипломного проекта: "Разработка мобильного приложения для планирования активности людей с умеренными расстройствами памяти" ')]),i("p",[t._v("Южно-Уральский Государственный Университет")]),i("p",[t._v("2020 г.")])])])}],I={name:"Education"},j=I,Z=(i("9baa"),Object(u["a"])(j,M,g,!1,null,"a062a49a",null)),y=Z.exports,N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"portfolio",attrs:{id:"Portfolio"}},[i("h1",[t._v("Портфолио")]),i("div",{staticClass:"container"},t._l(t.projects,(function(e){return i("div",{key:e.name,staticClass:"project-card"},[i("video",{on:{mouseenter:t.playVideo,mouseleave:t.stopVideo,click:t.videoToggle}},[e.video?i("source",{attrs:{src:e.video,type:"video/mp4"}}):t._e(),t._v(" Your browser does not support the video tag. ")]),i("div",{staticClass:"card-text"},[i("a",{attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.name))]),i("p",[t._v(t._s(e.text))])])])})),0)])},S=[],_={name:"Portfolio",methods:{playVideo:function(t){t.target.play(),this.videoStatus=!0},stopVideo:function(t){t.target.pause(),this.videoStatus=!1},videoToggle:function(t){0==this.videoStatus?(t.target.play(),this.videoStatus=!0):(t.target.pause(),this.videoStatus=!1)}},data:function(){return{videoStatus:!1,projects:[{name:"I can't remember my builds",text:"Справочник сборок для персонажей в ESO. React",image:"https://source.unsplash.com/random/420x200",href:"https://github.com/Mauhwi/char-info",video:"https://i.gyazo.com/e4df4569fe7dfd25389ac7fa08b8bb88.mp4"},{name:"Hello, it's me",text:"Интерактивная версия портфолио. React. WIP",image:"https://source.unsplash.com/random/420x200",href:"https://github.com/Mauhwi/react-portfolio",video:"https://i.gyazo.com/d145df35ad1d193e5be9d334dcfde034.mp4"},{name:"Portfolio",text:"Dev build этого сайта. Vue.js",image:"https://source.unsplash.com/random/420x200",href:"https://github.com/Mauhwi/simon",video:"https://i.gyazo.com/0795748dbbfa7d0639e2d3686eee9a8c.mp4"},{name:"Blast Game",text:"Игра Blast. Javascript, Canvas",image:"https://source.unsplash.com/random/420x200",href:"https://github.com/Mauhwi/blast-game",video:"https://i.gyazo.com/e19ff25b0e32a92cd8c1cf0f7bf5acf3.mp4"},{name:"Simon",text:"Игра Саймон говорит. Vue.js",image:"https://source.unsplash.com/random/420x200",href:"https://github.com/Mauhwi/simon",video:"https://i.gyazo.com/d6c88e6a3eb932f756bc8db70d228fcd.mp4"},{name:"Дипломный проект",text:"Android приложение. Java",image:"https://source.unsplash.com/random/420x200",href:"https://github.com/Mauhwi/DailyApp",video:"https://i.gyazo.com/37eac5bc91b6fe090da20bb8f3069bdf.mp4"}]}}},G=_,w=(i("a31f"),Object(u["a"])(G,N,S,!1,null,null,null)),O=w.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contact",attrs:{id:"Contact"}},[i("h1",[t._v("Контакты")]),i("div",[i("p",[t._v("Россия, г. Челябинск. Возможен переезд в Новосибирск, а также удаленный формат работы.")]),i("div",{staticClass:"divider"}),i("div",{staticClass:"contact-info"},[i("p",[t._v("+7 (951) 450-66-56")]),i("p",[t._v("darmit074@gmail.com")])])])])}],z={name:"Contact"},E=z,D=(i("4939"),Object(u["a"])(E,C,R,!1,null,"a1def7ca",null)),k=D.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"skills",attrs:{id:"Skills"}},[i("h1",[t._v("Навыки")]),i("div",[i("ul",[i("li",[t._v("JavaScript")]),i("li",[t._v("HTML")]),i("li",[t._v("CSS")])]),i("ul",[i("li",[t._v("React")]),i("li",[t._v("Vue.js")])]),i("ul",[i("li",[t._v("Android (Java)")]),i("li",[t._v("MySQL, SQLite")])])])])}],L={name:"Skills"},W=L,Y=(i("2f73"),Object(u["a"])(W,x,T,!1,null,null,null)),P=Y.exports,V={name:"App",components:{NavMenu:v,AboutMe:A,Education:y,Portfolio:O,Contact:k,Skills:P}},Q=V,J=(i("034f"),Object(u["a"])(Q,n,c,!1,null,null,null)),B=J.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(B)}}).$mount("#app")},"5c5b":function(t,e,i){},6861:function(t,e,i){"use strict";i("994a")},"6df8":function(t,e,i){},"85ec":function(t,e,i){},8720:function(t,e,i){},"87aa":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAcEAQAAAAYh7KTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGuWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA1LTIzVDAzOjAzOjI1KzA1OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNS0yM1QwMzoyMDo0OCswNTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNS0yM1QwMzoyMDo0OCswNTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjEiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJEb3QgR2FpbiAyMCUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDVmOGVjMjQtMGJiZi01MzQ2LTg4YzgtZmEzZDc3ZjA5NDE1IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6N2FjOGM1NjktN2JmMC1hOTQyLWFjN2EtMmNjY2ZkYzUwODkyIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZDFiYjRiNmQtYWE5ZS0xZTQ2LThiNTctODg3ZjdlNjIzZWZhIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkMWJiNGI2ZC1hYTllLTFlNDYtOGI1Ny04ODdmN2U2MjNlZmEiIHN0RXZ0OndoZW49IjIwMjEtMDUtMjNUMDM6MDM6MjUrMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzM0N2Y0NjItYWI1Yi1lZDRjLTgzZWYtNjYxNzc0YTI1NjAzIiBzdEV2dDp3aGVuPSIyMDIxLTA1LTIzVDAzOjA3OjUzKzA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjA1ZjhlYzI0LTBiYmYtNTM0Ni04OGM4LWZhM2Q3N2YwOTQxNSIgc3RFdnQ6d2hlbj0iMjAyMS0wNS0yM1QwMzoyMDo0OCswNTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pqq1gPAAAACgSURBVFgJY/j/n4FhsGJUDhDcrxYTe3DU2eWRcGTUw/uhYbTGj1Qjox5EOznd2ykqhtdx9/31De7/nD//we3//x88BeL7dMAge97//39/8fz592bq6Q1Nx4HAvbkiIvcPOjk9sqRTtALtuX8VGK3uIiJ4o3VQZ4hRx406btRxQ8lxo9XXsKu+QHi0+hotSkYdN+q40eprtPoarb6Gb/UFAGeV7He7WK/pAAAAAElFTkSuQmCC"},"8d8b":function(t,e,i){"use strict";i("8720")},"994a":function(t,e,i){},"9baa":function(t,e,i){"use strict";i("3a89")},a31f:function(t,e,i){"use strict";i("5c5b")}});
//# sourceMappingURL=app.d188ce2b.js.map