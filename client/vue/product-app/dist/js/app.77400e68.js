(function(t){function o(o){for(var e,i,u=o[0],l=o[1],a=o[2],d=0,p=[];d<u.length;d++)i=u[d],n[i]&&p.push(n[i][0]),n[i]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);s&&s(o);while(p.length)p.shift()();return c.push.apply(c,a||[]),r()}function r(){for(var t,o=0;o<c.length;o++){for(var r=c[o],e=!0,u=1;u<r.length;u++){var l=r[u];0!==n[l]&&(e=!1)}e&&(c.splice(o--,1),t=i(i.s=r[0]))}return t}var e={},n={1:0},c=[];function i(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,o,r){i.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,o){if(1&o&&(t=i(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var e in t)i.d(r,e,function(o){return t[o]}.bind(null,e));return r},i.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(o,"a",o),o},i.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=o,u=u.slice();for(var a=0;a<u.length;a++)o(u[a]);var s=l;c.push([3,0]),r()})({2:function(t,o){},3:function(t,o,r){t.exports=r("Vtdi")},"4a2j":function(t,o,r){},BPHT:function(t,o,r){},IiMq:function(t,o,r){"use strict";var e=r("4a2j"),n=r.n(e);n.a},Vtdi:function(t,o,r){"use strict";r.r(o);r("VRzm");var e=r("Kw5r"),n=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("ProductCollection",{attrs:{"products-url":"http://127.0.0.1:8090/random-products.json.php"}})},c=[],i=r("KN3F"),u=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("span",{style:{background:"#"+t.color.colorCode},attrs:{title:t.color.title}})},l=[],a={name:"ProductColor",props:{color:{type:Object,default:function(){return{}}}}},s=a,d=(r("ikkE"),r("KHd+")),p=Object(d["a"])(s,u,l,!1,null,"7c1b6526",null),f=p.exports,v=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("button",{on:{click:function(o){t.reload(o)}}},[t._v("Reload")])])]),t._l(t.products,function(o){return r("div",{staticClass:"row product",class:{"is-active":o===t.activeProduct},on:{click:function(r){t.selectProduct(o)}}},[r("div",{staticClass:"col-6 col-md-3 title"},[t._v("Title: "+t._s(o.title))]),r("div",{staticClass:"col-6 col-md-3 price"},[t._v("Price: "+t._s(o.price)+" EUR")]),r("div",{staticClass:"col-12 col-md-6"},t._l(o.colors,function(t){return r("ProductColor",{attrs:{color:t}})})),o===t.activeProduct?r("div",{staticClass:"col-12 col-md-6 description"},[t._v(t._s(o.description))]):t._e()])})],2)},h=[],P={name:"ProductCollection",components:{ProductColor:f},props:{productsUrl:String},data:function(){return{products:[],activeProduct:null}},methods:{fetch:function(){var t=this;this.$http.get(this.productsUrl).then(function(o){t.$data.products=o.body||[],t.$data.products.length>0?t.$data.activeProduct=t.$data.products[0]:t.$data.activeProduct=null})},reload:function(t){this.fetch()},selectProduct:function(t){this.$data.activeProduct!==t&&(this.activeProduct=t)}},mounted:function(){this.fetch()}},b=P,m=(r("IiMq"),Object(d["a"])(b,v,h,!1,null,"895dcce2",null)),_=m.exports;e["a"].use(i["a"]);var y={name:"ProductApp",components:{ProductCollection:_,ProductColor:f}},g=y,C=Object(d["a"])(g,n,c,!1,null,null,null),j=C.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(j)}}).$mount("#app")},ikkE:function(t,o,r){"use strict";var e=r("BPHT"),n=r.n(e);n.a}});
//# sourceMappingURL=app.77400e68.js.map