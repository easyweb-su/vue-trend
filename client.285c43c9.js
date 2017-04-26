webpackJsonp([0,2],[,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(17),o=r(i);new(r(n(21)).default)(a({el:"#app"},o.default))},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(9),i=r(a),o=n(13),s=r(o),u=n(16),d=r(u);e.default={components:{Trend:i.default,GithubBadge:d.default},created:function(){this.data=[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0],this.gradient=["#6fa8dc","#42b983","#2c3e50"],this.code=(0,s.default)("<trend\n  :data=\"[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]\"\n  :gradient=\"['#6fa8dc', '#42b983', '#2c3e50']\"\n  auto-draw\n  smooth>\n</trend>")}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["gradient","id"],render:function(t){var e=this.gradient,n=this.id,r=e.length-1;return t("defs",[t("linearGradient",{attrs:{id:n,x1:0,y1:0,x2:0,y2:1}},e.slice().reverse().map(function(e,n){return t("stop",{attrs:{offset:n/r,"stop-color":e}})}))])}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(8);e.default={props:["smooth","data","boundary","radius","id"],render:function(t){var e=(0,r.genPoints)(this.data,this.boundary);return t("path",{attrs:{d:(this.smooth?r.smoothPath:r.linearPath)(e,this.radius),fill:"none",stroke:"url(#"+this.id+")"}})}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),i=r(a),o=n(3),s=r(o),u=n(6);e.default={name:"Trend",props:{data:{type:Array,required:!0},autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},gradient:Array,height:Number,width:Number,padding:{type:Number,default:8},radius:{type:Number,default:10},smooth:Boolean},destroyed:function(){this.removeStyle()},methods:{addStyle:function(){this.removeStyle();var t=this.$refs.path.$el.getTotalLength(),e=this.pathId,n=this.autoDrawDuration,r=this.autoDrawEasing;this.autoDraw&&(this.styleEl=(0,u.injectStyle)("\n@keyframes "+e+"-autodraw {\n  0% {\n  stroke-dashoffset: "+t+";\n  stroke-dasharray: "+t+";\n}\n100% {\n  stroke-dashoffset: 0;\n  stroke-dasharray: "+t+";\n}\n100% {\n  stroke-dashoffset: '';\n  stroke-dasharray: '';\n}\n}\n@keyframes "+e+"-autodraw-cleanup {\nto {\n  stroke-dashoffset: '';\n  stroke-dasharray: '';\n  }\n}\n#"+e+" {\nanimation:\n  "+e+"-autodraw "+n+"ms "+r+",\n  "+e+"-autodraw-cleanup 1ms "+n+"ms;\n}"))},removeStyle:function(){this.styleEl&&this.styleEl.remove()}},watch:{data:{immediate:!0,handler:function(t){!t||t.length<2||this.$nextTick(this.addStyle)}}},render:function(t){if(this.data&&!(this.data.length<2)){var e=this.width,n=this.height,r=this.padding,a=e||300,o=n||75,u={minX:r,minY:r,maxX:a-r,maxY:o-r},d=this.$props;return d.boundary=u,d.id="vue-trend-"+this._uid,this.pathId=d.id+"-path",t("svg",{attrs:{stroke:"black","stroke-width":"1",width:e||"100%",height:n||"25%",viewBox:"0 0 "+a+" "+o}},[t(s.default,{props:d}),t(i.default,{props:d,attrs:{id:this.pathId},ref:"path"})])}}}},function(t,e,n){"use strict";function r(t){var e=document.createElement("style"),n=document.head||document.getElementsByTagName("head")[0];return e.type="text/css",n.appendChild(e),e.appendChild(document.createTextNode(t)),e}Object.defineProperty(e,"__esModule",{value:!0}),e.injectStyle=r},function(t,e,n){"use strict";function r(t){return parseInt(t,10)}function a(t,e,n){return r(t.x+n.x)===r(2*e.x)&&r(t.y+n.y)===r(2*e.y)}function i(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function o(t,e,n){var r={x:t.x-e.x,y:t.y-e.y},a=Math.sqrt(r.x*r.x+r.y*r.y),i={x:r.x/a,y:r.y/a};return{x:e.x+i.x*n,y:e.y+i.y*n}}Object.defineProperty(e,"__esModule",{value:!0}),e.checkCollinear=a,e.getDistance=i,e.moveTo=o},function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function a(t,e){var n=e.minX,a=e.minY,i=e.maxX,o=e.maxY,s=(i-n)/(t.length-1),u=(o-a)/(Math.max.apply(Math,r(t))-Math.min.apply(Math,r(t)));return t.map(function(t,e){return{x:e*s+n,y:o-("number"==typeof t?t:t.value)*u}})}function i(t){var e=t.shift();return"M"+e.x+" "+e.y+t.map(function(t){return"L"+t.x+" "+t.y}).join("")}function o(t,e){var n=t.shift();return"M"+n.x+" "+n.y+t.map(function(r,a){var i=t[a+1],o=t[a-1]||n,u=i&&(0,s.checkCollinear)(i,r,o);if(!i||u)return"L"+r.x+" "+r.y;var d=Math.min((0,s.getDistance)(o,r),(0,s.getDistance)(i,r)),l=d/2<e,f=l?d/2:e,c=(0,s.moveTo)(o,r,f),h=(0,s.moveTo)(i,r,f);return"L"+c.x+" "+c.y+"S"+r.x+" "+r.y+" "+h.x+" "+h.y}).join("")}Object.defineProperty(e,"__esModule",{value:!0}),e.genPoints=a,e.linearPath=i,e.smoothPath=o;var s=n(7)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(5),i=r(a);i.default.install=function(t){t.component(i.default.name,i.default)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(i.default),e.default=i.default},,,function(t,e){},,,,,function(t,e,n){n(12);var r=n(18)(n(2),n(19),null,null);t.exports=r.exports},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main"},[n("github-badge",{attrs:{slug:"QingWei-Li/vue-trend"}}),t._v(" "),n("h1",[t._v("Vue Trend")]),t._v(" "),t._m(0),t._v(" "),n("trend",{attrs:{data:t.data,gradient:t.gradient,"auto-draw":"","stroke-width":1.4,smooth:""}}),t._v(" "),n("pre",{staticClass:"code-wrap"},[n("code",{staticClass:"code",domProps:{innerHTML:t._s(t.code)}})]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" Simple, elegant spark lines for Vue.js "),n("a",{attrs:{href:"https://jsfiddle.net/nyh18bLq/"}},[t._v("Live Demo")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[t._v("Released under the "),n("a",{attrs:{href:"//github.com/QingWei-Li/vue-trend/blob/master/LICENSE"}},[t._v("MIT")]),t._v(" license. "),n("a",{attrs:{href:"//github.com/QingWei-Li/vue-trend"}},[t._v("View source.")])])}]}},,,function(t,e,n){t.exports=n(1)}],[22]);
//# sourceMappingURL=client.285c43c9.js.map