(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(81),i=t.n(a),o=t(645),r=t.n(o),c=t(667),s=t.n(c),u=new URL(t(164),t.b),d=r()(i()),l=s()(u);d.push([e.id,"* {\n    color: white;\n    margin: 0;\n    padding: 0;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\nhtml { \n    background: url("+l+") no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n  }\n\n#content {\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    font-size: 50px;\n    font-weight: 800;\n    text-align: center;\n    padding: 30px;\n    background-color: rgba(0, 0, 0, 0.2);\n}\n\n\nnav {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n}\n\n#home-tab {\n    flex: 1;\n    width: max(50%, 300px);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    align-self: center;\n    background-color: rgba(0, 0, 0, 0.8);\n    margin: 50px;\n    gap: 50px;\n    padding: 40px;\n}\n\n#menu-tab {\n    flex: 1;\n    width: max(50%, 300px);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    align-self: center;\n    background-color: rgba(0, 0, 0, 0.8);\n    margin: 50px;\n    gap: 50px;\n    padding: 40px;\n}\n\n#contact-tab {\n    flex: 1;\n    width: max(50%, 300px);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    align-self: center;\n    background-color: rgba(0, 0, 0, 0.8);\n    margin: 50px;\n    gap: 50px;\n    padding: 40px;\n}\n\n.dish img {\n    width: 200px;\n    height: 200px;\n}\n\n.dish {\n    width: max(40%, 300px);\n    display: flex;\n}\n\nbutton {\n    background-color: none;\n    font-size: 40px;\n    padding: 20px;\n    background-color: rgba(0, 0, 0, 0.6);\n}\n\nfooter {\n    padding: 20px;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.8);\n}\n\np {\n    font-size: 20px;\n}\n\nh2 {\n    font-size: 30px;\n}",""]);const p=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(r[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);a&&r[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},r=[],c=0;c<e.length;c++){var s=e[c],u=a.base?s[0]+a.base:s[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var p=t(l),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var m=i(h,a);a.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}r.push(l)}return r}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var o=a(e=e||[],i=i||{});return function(e){e=e||[];for(var r=0;r<o.length;r++){var c=t(o[r]);n[c].references--}for(var s=a(e,i),u=0;u<o.length;u++){var d=t(o[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},164:(e,n,t)=>{e.exports=t.p+"004b24329c7cd09cca93.jpeg"}},n={};function t(a){var i=n[a];if(void 0!==i)return i.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var i=a.length-1;i>-1&&!e;)e=a[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{function e(){const e=document.querySelector("main");e.innerHTML="<h2>Welcome to Ichiraku Restaraunt!</h2>\n        <p>Ramen Ichiraku was founded by Teuchi thirty-four years before the start of Part II. Although it is quite small and has an unassuming appearance, Ramen Ichiraku has always been popular with Konoha's villagers because of Teuchi's strong commitment to taste, giving the ramen an almost artistic quality. Like any ramen establishment, Ramen Ichiraku offers various toppings, such as char siu and boiled eggs. In Konoha Hiden, seaweed had been the most popular topping for several years until, after the Fourth Shinobi World War, it was surpassed by naruto.</p>\n        <p>Ramen Ichiraku is Naruto Uzumaki's favourite dining establishment. He eats there regularly – usually stopping by between missions – and he is often joined by Iruka Umino, another frequent customer. Because Naruto has been a loyal customer for most of his life, Teuchi and his daughter, Ayame, were among the few people in Konoha not to treat Naruto with animosity during his youth. Naruto takes Hinata Hyūga to Ramen Ichiraku for their first date; in the anime, this in turn causes Hinata to become a regular customer, to the point that she has won at least one of its eating contests. In Konoha Hiden, Teuchi gives Naruto a lifetime pass for Ramen Ichiraku as a wedding present, which the anime shows to have received heavy use over the following years.</p>\n    ",e.id="home-tab",home.classList.add("active"),menu.classList.remove("active"),contact.classList.remove("active")}function n(){const e=document.querySelector("main");e.innerHTML="\n        <div class='dish' id='ramen'>\n            <h3>Ramen</h3>\n            <img src='https://www.elmundoeats.com/wp-content/uploads/2021/02/FP-Quick-30-minutes-chicken-ramen.jpg' alt='Ramen img'>\n            <p>Naruto's favourite dish</p>\n        </div>\n        <div class='dish' id='sushi'>\n            <h3>Sushi</h3>\n            <img src='https://sushiwok.kz/files/products/medium/641.png?2.0.2' alt='Sushi img'>\n            <p>Ukrainian ones (they're really good)</p>\n        </div>\n        <div class='dish' id='okonomiyaki'>\n            <h3>Okonomiyaki</h3>\n            <img src='https://monmackfood.com/wp-content/uploads/Screen-Shot-2021-06-28-at-12.32.59-pm-500x500.jpeg' alt='Okonomiyaki img'>\n            <p>Ariel likes it a lot (local meme)</p>\n        </div>\n        <div class='dish' id='udon'>\n            <h3>Udon</h3>\n            <img src='https://christieathome.com/wp-content/uploads/2021/03/Garlic-Shrimp-Tofu-Udon-Noodles-2-b-scaled.jpg' alt='Udon img'>\n            <p>My favourite dish (100/10)</p>\n        </div>\n        <div class='dish' id='onigiri'>\n            <h3>Onigiri</h3>\n            <img src='https://cdn.shopify.com/s/files/1/0249/4811/3492/articles/241695756_3008948676009057_2216945854287643878_n_1200x1200.jpg?v=1632053090' alt='Onigiri img'>\n            <p>Just a great dish</p>\n        </div>\n        <div class='dish' id='mochi'>\n            <h3>Mochi</h3>\n            <img src='https://media.istockphoto.com/id/1158085114/photo/multi-colored-japanese-ice-cream-mochi-in-rice-dough-and-jasmine-flowers-on-a-concrete-blue.jpg?s=612x612&w=0&k=20&c=vi-GZ1uALAAJUVbQxwHC4LQZoppElZOSJFwp3R29k9w=' alt='Mochi img'>\n            <p>Cute sweet rice ^_^</p>\n        </div>\n    ",e.id="menu-tab",home.classList.remove("active"),menu.classList.add("active"),contact.classList.remove("active")}function a(){const e=document.querySelector("main");e.innerHTML="\n        <h2>Our contacts:</h2>\n        <p>Phone: +1-800-228-322, +3-123-234-345</p>\n        <p>Instagram: @ichiraku-rest</p>\n        <p>Email: ichiraku-restaraunt@gramen.com</p>\n        <p>Youtube: @ichiraku-rest</p>\n        <p>Location: SECRET! :D</p>\n    ",e.id="contact-tab",home.classList.remove("active"),menu.classList.remove("active"),contact.classList.add("active")}var i=t(379),o=t.n(i),r=t(795),c=t.n(r),s=t(569),u=t.n(s),d=t(565),l=t.n(d),p=t(216),h=t.n(p),m=t(589),f=t.n(m),g=t(426),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=u().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=h(),o()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals,function(){const e=document.querySelector("#content"),n=document.createElement("header"),t=document.createElement("nav"),a=document.createElement("button"),i=document.createElement("button"),o=document.createElement("button"),r=document.createElement("main"),c=document.createElement("footer");n.innerHTML="Ichiraku",a.innerHTML="Home",i.innerHTML="Menu",o.innerHTML="Contact",c.innerHTML='Copyright ©\n        <script>document.write(new Date().getFullYear())<\/script>\n        <a href="https://github.com/Ydashchenko" target="_blank">Yevhenii Dashchenko</a>',t.appendChild(a),t.appendChild(i),t.appendChild(o),e.appendChild(n),e.appendChild(t),e.appendChild(r),e.appendChild(c),a.id="home",i.id="menu",o.id="contact"}(),e(),function(){const t=document.getElementById("home"),i=document.getElementById("menu"),o=document.getElementById("contact");t.addEventListener("click",e),i.addEventListener("click",n),o.addEventListener("click",a)}()})()})();