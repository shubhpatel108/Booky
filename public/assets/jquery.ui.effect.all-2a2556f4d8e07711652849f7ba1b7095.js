/*!
 * jQuery UI Effects 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */
!function(t,e){var o="ui-effects-";t.effects={effect:{}},/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
function(t,e){function o(t,e,o){var i=h[e.type]||{};return null==t?o||!e.def?null:e.def:(t=i.floor?~~t:parseFloat(t),isNaN(t)?e.def:i.mod?(t+i.mod)%i.mod:0>t?0:i.max<t?i.max:t)}function i(e){var o=c(),i=o._rgba=[];return e=e.toLowerCase(),p(f,function(t,n){var r,s=n.re.exec(e),a=s&&n.parse(s),f=n.space||"rgba";return a?(r=o[f](a),o[u[f].cache]=r[u[f].cache],i=o._rgba=r._rgba,!1):void 0}),i.length?("0,0,0,0"===i.join()&&t.extend(i,r.transparent),o):r[e]}function n(t,e,o){return o=(o+1)%1,1>6*o?t+(e-t)*o*6:1>2*o?e:2>3*o?t+(e-t)*(2/3-o)*6:t}var r,s="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",a=/^([\-+])=\s*(\d+\.?\d*)/,f=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],c=t.Color=function(e,o,i,n){return new t.Color.fn.parse(e,o,i,n)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},h={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=c.support={},l=t("<p>")[0],p=t.each;l.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=l.style.backgroundColor.indexOf("rgba")>-1,p(u,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),c.fn=t.extend(c.prototype,{parse:function(n,s,a,f){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(s),s=e);var h=this,d=t.type(n),l=this._rgba=[];return s!==e&&(n=[n,s,a,f],d="array"),"string"===d?this.parse(i(n)||r._default):"array"===d?(p(u.rgba.props,function(t,e){l[e.idx]=o(n[e.idx],e)}),this):"object"===d?(n instanceof c?p(u,function(t,e){n[e.cache]&&(h[e.cache]=n[e.cache].slice())}):p(u,function(e,i){var r=i.cache;p(i.props,function(t,e){if(!h[r]&&i.to){if("alpha"===t||null==n[t])return;h[r]=i.to(h._rgba)}h[r][e.idx]=o(n[t],e,!0)}),h[r]&&t.inArray(null,h[r].slice(0,3))<0&&(h[r][3]=1,i.from&&(h._rgba=i.from(h[r])))}),this):void 0},is:function(t){var e=c(t),o=!0,i=this;return p(u,function(t,n){var r,s=e[n.cache];return s&&(r=i[n.cache]||n.to&&n.to(i._rgba)||[],p(n.props,function(t,e){return null!=s[e.idx]?o=s[e.idx]===r[e.idx]:void 0})),o}),o},_space:function(){var t=[],e=this;return p(u,function(o,i){e[i.cache]&&t.push(o)}),t.pop()},transition:function(t,e){var i=c(t),n=i._space(),r=u[n],s=0===this.alpha()?c("transparent"):this,a=s[r.cache]||r.to(s._rgba),f=a.slice();return i=i[r.cache],p(r.props,function(t,n){var r=n.idx,s=a[r],c=i[r],u=h[n.type]||{};null!==c&&(null===s?f[r]=c:(u.mod&&(c-s>u.mod/2?s+=u.mod:s-c>u.mod/2&&(s-=u.mod)),f[r]=o((c-s)*e+s,n)))}),this[n](f)},blend:function(e){if(1===this._rgba[3])return this;var o=this._rgba.slice(),i=o.pop(),n=c(e)._rgba;return c(t.map(o,function(t,e){return(1-i)*n[e]+i*t}))},toRgbaString:function(){var e="rgba(",o=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===o[3]&&(o.pop(),e="rgb("),e+o.join()+")"},toHslaString:function(){var e="hsla(",o=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===o[3]&&(o.pop(),e="hsl("),e+o.join()+")"},toHexString:function(e){var o=this._rgba.slice(),i=o.pop();return e&&o.push(~~(255*i)),"#"+t.map(o,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),c.fn.parse.prototype=c.fn,u.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,o,i=t[0]/255,n=t[1]/255,r=t[2]/255,s=t[3],a=Math.max(i,n,r),f=Math.min(i,n,r),c=a-f,u=a+f,h=.5*u;return e=f===a?0:i===a?60*(n-r)/c+360:n===a?60*(r-i)/c+120:60*(i-n)/c+240,o=0===c?0:.5>=h?c/u:c/(2-u),[Math.round(e)%360,o,h,null==s?1:s]},u.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,o=t[1],i=t[2],r=t[3],s=.5>=i?i*(1+o):i+o-i*o,a=2*i-s;return[Math.round(255*n(a,s,e+1/3)),Math.round(255*n(a,s,e)),Math.round(255*n(a,s,e-1/3)),r]},p(u,function(i,n){var r=n.props,s=n.cache,f=n.to,u=n.from;c.fn[i]=function(i){if(f&&!this[s]&&(this[s]=f(this._rgba)),i===e)return this[s].slice();var n,a=t.type(i),h="array"===a||"object"===a?i:arguments,d=this[s].slice();return p(r,function(t,e){var i=h["object"===a?t:e.idx];null==i&&(i=d[e.idx]),d[e.idx]=o(i,e)}),u?(n=c(u(d)),n[s]=d,n):c(d)},p(r,function(e,o){c.fn[e]||(c.fn[e]=function(n){var r,s=t.type(n),f="alpha"===e?this._hsla?"hsla":"rgba":i,c=this[f](),u=c[o.idx];return"undefined"===s?u:("function"===s&&(n=n.call(this,u),s=t.type(n)),null==n&&o.empty?this:("string"===s&&(r=a.exec(n),r&&(n=u+parseFloat(r[2])*("+"===r[1]?1:-1))),c[o.idx]=n,this[f](c)))})})}),c.hook=function(e){var o=e.split(" ");p(o,function(e,o){t.cssHooks[o]={set:function(e,n){var r,s,a="";if("transparent"!==n&&("string"!==t.type(n)||(r=i(n)))){if(n=c(r||n),!d.rgba&&1!==n._rgba[3]){for(s="backgroundColor"===o?e.parentNode:e;(""===a||"transparent"===a)&&s&&s.style;)try{a=t.css(s,"backgroundColor"),s=s.parentNode}catch(f){}n=n.blend(a&&"transparent"!==a?a:"_default")}n=n.toRgbaString()}try{e.style[o]=n}catch(f){}}},t.fx.step[o]=function(e){e.colorInit||(e.start=c(e.elem,o),e.end=c(e.end),e.colorInit=!0),t.cssHooks[o].set(e.elem,e.start.transition(e.end,e.pos))}})},c.hook(s),t.cssHooks.borderColor={expand:function(t){var e={};return p(["Top","Right","Bottom","Left"],function(o,i){e["border"+i+"Color"]=t}),e}},r=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function o(e){var o,i,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,r={};if(n&&n.length&&n[0]&&n[n[0]])for(i=n.length;i--;)o=n[i],"string"==typeof n[o]&&(r[t.camelCase(o)]=n[o]);else for(o in n)"string"==typeof n[o]&&(r[o]=n[o]);return r}function i(e,o){var i,n,s={};for(i in o)n=o[i],e[i]!==n&&(r[i]||(t.fx.step[i]||!isNaN(parseFloat(n)))&&(s[i]=n));return s}var n=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,o){t.fx.step[o]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,o,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,r,s,a){var f=t.speed(r,s,a);return this.queue(function(){var r,s=t(this),a=s.attr("class")||"",c=f.children?s.find("*").addBack():s;c=c.map(function(){var e=t(this);return{el:e,start:o(this)}}),r=function(){t.each(n,function(t,o){e[o]&&s[o+"Class"](e[o])})},r(),c=c.map(function(){return this.end=o(this.el[0]),this.diff=i(this.start,this.end),this}),s.attr("class",a),c=c.map(function(){var e=this,o=t.Deferred(),i=t.extend({},f,{queue:!1,complete:function(){o.resolve(e)}});return this.el.animate(this.diff,i),o.promise()}),t.when.apply(t,c.get()).done(function(){r(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),f.complete.call(s[0])})})},t.fn.extend({addClass:function(e){return function(o,i,n,r){return i?t.effects.animateClass.call(this,{add:o},i,n,r):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(o,i,n,r){return arguments.length>1?t.effects.animateClass.call(this,{remove:o},i,n,r):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(o){return function(i,n,r,s,a){return"boolean"==typeof n||n===e?r?t.effects.animateClass.call(this,n?{add:i}:{remove:i},r,s,a):o.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},n,r,s)}}(t.fn.toggleClass),switchClass:function(e,o,i,n,r){return t.effects.animateClass.call(this,{add:o,remove:e},i,n,r)}})}(),function(){function i(e,o,i,n){return t.isPlainObject(e)&&(o=e,e=e.effect),e={effect:e},null==o&&(o={}),t.isFunction(o)&&(n=o,i=null,o={}),("number"==typeof o||t.fx.speeds[o])&&(n=i,i=o,o={}),t.isFunction(i)&&(n=i,i=null),o&&t.extend(e,o),i=i||o.duration,e.duration=t.fx.off?0:"number"==typeof i?i:i in t.fx.speeds?t.fx.speeds[i]:t.fx.speeds._default,e.complete=n||o.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.4",save:function(t,e){for(var i=0;i<e.length;i++)null!==e[i]&&t.data(o+e[i],t[0].style[e[i]])},restore:function(t,i){var n,r;for(r=0;r<i.length;r++)null!==i[r]&&(n=t.data(o+i[r]),n===e&&(n=""),t.css(i[r],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var o,i;switch(t[0]){case"top":o=0;break;case"middle":o=.5;break;case"bottom":o=1;break;default:o=t[0]/e.height}switch(t[1]){case"left":i=0;break;case"center":i=.5;break;case"right":i=1;break;default:i=t[1]/e.width}return{x:i,y:o}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var o={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},i=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},r=document.activeElement;try{r.id}catch(s){r=document.body}return e.wrap(i),(e[0]===r||t.contains(e[0],r))&&t(r).focus(),i=e.parent(),"static"===e.css("position")?(i.css({position:"relative"}),e.css({position:"relative"})):(t.extend(o,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,i){o[i]=e.css(i),isNaN(parseInt(o[i],10))&&(o[i]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),i.css(o).show()},removeWrapper:function(e){var o=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===o||t.contains(e[0],o))&&t(o).focus()),e},setTransition:function(e,o,i,n){return n=n||{},t.each(o,function(t,o){var r=e.cssUnit(o);r[0]>0&&(n[o]=r[0]*i+r[1])}),n}}),t.fn.extend({effect:function(){function e(e){function i(){t.isFunction(r)&&r.call(n[0]),t.isFunction(e)&&e()}var n=t(this),r=o.complete,a=o.mode;(n.is(":hidden")?"hide"===a:"show"===a)?(n[a](),i()):s.call(n[0],o,i)}var o=i.apply(this,arguments),n=o.mode,r=o.queue,s=t.effects.effect[o.effect];return t.fx.off||!s?n?this[n](o.duration,o.complete):this.each(function(){o.complete&&o.complete.call(this)}):r===!1?this.each(e):this.queue(r||"fx",e)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var o=i.apply(this,arguments);return o.mode="show",this.effect.call(this,o)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var o=i.apply(this,arguments);return o.mode="hide",this.effect.call(this,o)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var o=i.apply(this,arguments);return o.mode="toggle",this.effect.call(this,o)}}(t.fn.toggle),cssUnit:function(e){var o=this.css(e),i=[];return t.each(["em","px","%","pt"],function(t,e){o.indexOf(e)>0&&(i=[parseFloat(o),e])}),i}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,o){e[o]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,o=4;t<((e=Math.pow(2,--o))-1)/11;);return 1/Math.pow(4,3-o)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,o){t.easing["easeIn"+e]=o,t.easing["easeOut"+e]=function(t){return 1-o(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?o(2*t)/2:1-o(-2*t+2)/2}})}()}(jQuery),/*!
 * jQuery UI Effects Blind 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/blind-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){var e=/up|down|vertical/,o=/up|left|vertical|horizontal/;t.effects.effect.blind=function(i,n){var r,s,a,f=t(this),c=["position","top","bottom","left","right","height","width"],u=t.effects.setMode(f,i.mode||"hide"),h=i.direction||"up",d=e.test(h),l=d?"height":"width",p=d?"top":"left",g=o.test(h),m={},y="show"===u;f.parent().is(".ui-effects-wrapper")?t.effects.save(f.parent(),c):t.effects.save(f,c),f.show(),r=t.effects.createWrapper(f).css({overflow:"hidden"}),s=r[l](),a=parseFloat(r.css(p))||0,m[l]=y?s:0,g||(f.css(d?"bottom":"right",0).css(d?"top":"left","auto").css({position:"absolute"}),m[p]=y?a:s+a),y&&(r.css(l,0),g||r.css(p,a+s)),r.animate(m,{duration:i.duration,easing:i.easing,queue:!1,complete:function(){"hide"===u&&f.hide(),t.effects.restore(f,c),t.effects.removeWrapper(f),n()}})}}(jQuery),/*!
 * jQuery UI Effects Bounce 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/bounce-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.bounce=function(e,o){var i,n,r,s=t(this),a=["position","top","bottom","left","right","height","width"],f=t.effects.setMode(s,e.mode||"effect"),c="hide"===f,u="show"===f,h=e.direction||"up",d=e.distance,l=e.times||5,p=2*l+(u||c?1:0),g=e.duration/p,m=e.easing,y="up"===h||"down"===h?"top":"left",v="up"===h||"left"===h,b=s.queue(),w=b.length;for((u||c)&&a.push("opacity"),t.effects.save(s,a),s.show(),t.effects.createWrapper(s),d||(d=s["top"===y?"outerHeight":"outerWidth"]()/3),u&&(r={opacity:1},r[y]=0,s.css("opacity",0).css(y,v?2*-d:2*d).animate(r,g,m)),c&&(d/=Math.pow(2,l-1)),r={},r[y]=0,i=0;l>i;i++)n={},n[y]=(v?"-=":"+=")+d,s.animate(n,g,m).animate(r,g,m),d=c?2*d:d/2;c&&(n={opacity:0},n[y]=(v?"-=":"+=")+d,s.animate(n,g,m)),s.queue(function(){c&&s.hide(),t.effects.restore(s,a),t.effects.removeWrapper(s),o()}),w>1&&b.splice.apply(b,[1,0].concat(b.splice(w,p+1))),s.dequeue()}}(jQuery),/*!
 * jQuery UI Effects Clip 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/clip-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.clip=function(e,o){var i,n,r,s=t(this),a=["position","top","bottom","left","right","height","width"],f=t.effects.setMode(s,e.mode||"hide"),c="show"===f,u=e.direction||"vertical",h="vertical"===u,d=h?"height":"width",l=h?"top":"left",p={};t.effects.save(s,a),s.show(),i=t.effects.createWrapper(s).css({overflow:"hidden"}),n="IMG"===s[0].tagName?i:s,r=n[d](),c&&(n.css(d,0),n.css(l,r/2)),p[d]=c?r:0,p[l]=c?0:r/2,n.animate(p,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){c||s.hide(),t.effects.restore(s,a),t.effects.removeWrapper(s),o()}})}}(jQuery),/*!
 * jQuery UI Effects Drop 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/drop-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.drop=function(e,o){var i,n=t(this),r=["position","top","bottom","left","right","opacity","height","width"],s=t.effects.setMode(n,e.mode||"hide"),a="show"===s,f=e.direction||"left",c="up"===f||"down"===f?"top":"left",u="up"===f||"left"===f?"pos":"neg",h={opacity:a?1:0};t.effects.save(n,r),n.show(),t.effects.createWrapper(n),i=e.distance||n["top"===c?"outerHeight":"outerWidth"](!0)/2,a&&n.css("opacity",0).css(c,"pos"===u?-i:i),h[c]=(a?"pos"===u?"+=":"-=":"pos"===u?"-=":"+=")+i,n.animate(h,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===s&&n.hide(),t.effects.restore(n,r),t.effects.removeWrapper(n),o()}})}}(jQuery),/*!
 * jQuery UI Effects Explode 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/explode-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.explode=function(e,o){function i(){b.push(this),b.length===h*d&&n()}function n(){l.css({visibility:"visible"}),t(b).remove(),g||l.hide(),o()}var r,s,a,f,c,u,h=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=h,l=t(this),p=t.effects.setMode(l,e.mode||"hide"),g="show"===p,m=l.show().css("visibility","hidden").offset(),y=Math.ceil(l.outerWidth()/d),v=Math.ceil(l.outerHeight()/h),b=[];for(r=0;h>r;r++)for(f=m.top+r*v,u=r-(h-1)/2,s=0;d>s;s++)a=m.left+s*y,c=s-(d-1)/2,l.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-s*y,top:-r*v}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:y,height:v,left:a+(g?c*y:0),top:f+(g?u*v:0),opacity:g?0:1}).animate({left:a+(g?0:c*y),top:f+(g?0:u*v),opacity:g?1:0},e.duration||500,e.easing,i)}}(jQuery),/*!
 * jQuery UI Effects Fade 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fade-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.fade=function(e,o){var i=t(this),n=t.effects.setMode(i,e.mode||"toggle");i.animate({opacity:n},{queue:!1,duration:e.duration,easing:e.easing,complete:o})}}(jQuery),/*!
 * jQuery UI Effects Fold 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fold-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.fold=function(e,o){var i,n,r=t(this),s=["position","top","bottom","left","right","height","width"],a=t.effects.setMode(r,e.mode||"hide"),f="show"===a,c="hide"===a,u=e.size||15,h=/([0-9]+)%/.exec(u),d=!!e.horizFirst,l=f!==d,p=l?["width","height"]:["height","width"],g=e.duration/2,m={},y={};t.effects.save(r,s),r.show(),i=t.effects.createWrapper(r).css({overflow:"hidden"}),n=l?[i.width(),i.height()]:[i.height(),i.width()],h&&(u=parseInt(h[1],10)/100*n[c?0:1]),f&&i.css(d?{height:0,width:u}:{height:u,width:0}),m[p[0]]=f?n[0]:u,y[p[1]]=f?n[1]:0,i.animate(m,g,e.easing).animate(y,g,e.easing,function(){c&&r.hide(),t.effects.restore(r,s),t.effects.removeWrapper(r),o()})}}(jQuery),/*!
 * jQuery UI Effects Highlight 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/highlight-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.highlight=function(e,o){var i=t(this),n=["backgroundImage","backgroundColor","opacity"],r=t.effects.setMode(i,e.mode||"show"),s={backgroundColor:i.css("backgroundColor")};"hide"===r&&(s.opacity=0),t.effects.save(i,n),i.show().css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(s,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===r&&i.hide(),t.effects.restore(i,n),o()}})}}(jQuery),/*!
 * jQuery UI Effects Pulsate 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/pulsate-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.pulsate=function(e,o){var i,n=t(this),r=t.effects.setMode(n,e.mode||"show"),s="show"===r,a="hide"===r,f=s||"hide"===r,c=2*(e.times||5)+(f?1:0),u=e.duration/c,h=0,d=n.queue(),l=d.length;for((s||!n.is(":visible"))&&(n.css("opacity",0).show(),h=1),i=1;c>i;i++)n.animate({opacity:h},u,e.easing),h=1-h;n.animate({opacity:h},u,e.easing),n.queue(function(){a&&n.hide(),o()}),l>1&&d.splice.apply(d,[1,0].concat(d.splice(l,c+1))),n.dequeue()}}(jQuery),/*!
 * jQuery UI Effects Scale 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/scale-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.puff=function(e,o){var i=t(this),n=t.effects.setMode(i,e.mode||"hide"),r="hide"===n,s=parseInt(e.percent,10)||150,a=s/100,f={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};t.extend(e,{effect:"scale",queue:!1,fade:!0,mode:n,complete:o,percent:r?s:100,from:r?f:{height:f.height*a,width:f.width*a,outerHeight:f.outerHeight*a,outerWidth:f.outerWidth*a}}),i.effect(e)},t.effects.effect.scale=function(e,o){var i=t(this),n=t.extend(!0,{},e),r=t.effects.setMode(i,e.mode||"effect"),s=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"hide"===r?0:100),a=e.direction||"both",f=e.origin,c={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()},u={y:"horizontal"!==a?s/100:1,x:"vertical"!==a?s/100:1};n.effect="size",n.queue=!1,n.complete=o,"effect"!==r&&(n.origin=f||["middle","center"],n.restore=!0),n.from=e.from||("show"===r?{height:0,width:0,outerHeight:0,outerWidth:0}:c),n.to={height:c.height*u.y,width:c.width*u.x,outerHeight:c.outerHeight*u.y,outerWidth:c.outerWidth*u.x},n.fade&&("show"===r&&(n.from.opacity=0,n.to.opacity=1),"hide"===r&&(n.from.opacity=1,n.to.opacity=0)),i.effect(n)},t.effects.effect.size=function(e,o){var i,n,r,s=t(this),a=["position","top","bottom","left","right","width","height","overflow","opacity"],f=["position","top","bottom","left","right","overflow","opacity"],c=["width","height","overflow"],u=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],l=t.effects.setMode(s,e.mode||"effect"),p=e.restore||"effect"!==l,g=e.scale||"both",m=e.origin||["middle","center"],y=s.css("position"),v=p?a:f,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===l&&s.show(),i={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},"toggle"===e.mode&&"show"===l?(s.from=e.to||b,s.to=e.from||i):(s.from=e.from||("show"===l?b:i),s.to=e.to||("hide"===l?b:i)),r={from:{y:s.from.height/i.height,x:s.from.width/i.width},to:{y:s.to.height/i.height,x:s.to.width/i.width}},("box"===g||"both"===g)&&(r.from.y!==r.to.y&&(v=v.concat(h),s.from=t.effects.setTransition(s,h,r.from.y,s.from),s.to=t.effects.setTransition(s,h,r.to.y,s.to)),r.from.x!==r.to.x&&(v=v.concat(d),s.from=t.effects.setTransition(s,d,r.from.x,s.from),s.to=t.effects.setTransition(s,d,r.to.x,s.to))),("content"===g||"both"===g)&&r.from.y!==r.to.y&&(v=v.concat(u).concat(c),s.from=t.effects.setTransition(s,u,r.from.y,s.from),s.to=t.effects.setTransition(s,u,r.to.y,s.to)),t.effects.save(s,v),s.show(),t.effects.createWrapper(s),s.css("overflow","hidden").css(s.from),m&&(n=t.effects.getBaseline(m,i),s.from.top=(i.outerHeight-s.outerHeight())*n.y,s.from.left=(i.outerWidth-s.outerWidth())*n.x,s.to.top=(i.outerHeight-s.to.outerHeight)*n.y,s.to.left=(i.outerWidth-s.to.outerWidth)*n.x),s.css(s.from),("content"===g||"both"===g)&&(h=h.concat(["marginTop","marginBottom"]).concat(u),d=d.concat(["marginLeft","marginRight"]),c=a.concat(h).concat(d),s.find("*[width]").each(function(){var o=t(this),i={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()};p&&t.effects.save(o,c),o.from={height:i.height*r.from.y,width:i.width*r.from.x,outerHeight:i.outerHeight*r.from.y,outerWidth:i.outerWidth*r.from.x},o.to={height:i.height*r.to.y,width:i.width*r.to.x,outerHeight:i.height*r.to.y,outerWidth:i.width*r.to.x},r.from.y!==r.to.y&&(o.from=t.effects.setTransition(o,h,r.from.y,o.from),o.to=t.effects.setTransition(o,h,r.to.y,o.to)),r.from.x!==r.to.x&&(o.from=t.effects.setTransition(o,d,r.from.x,o.from),o.to=t.effects.setTransition(o,d,r.to.x,o.to)),o.css(o.from),o.animate(o.to,e.duration,e.easing,function(){p&&t.effects.restore(o,c)})})),s.animate(s.to,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){0===s.to.opacity&&s.css("opacity",s.from.opacity),"hide"===l&&s.hide(),t.effects.restore(s,v),p||("static"===y?s.css({position:"relative",top:s.to.top,left:s.to.left}):t.each(["top","left"],function(t,e){s.css(e,function(e,o){var i=parseInt(o,10),n=t?s.to.left:s.to.top;return"auto"===o?n+"px":i+n+"px"})})),t.effects.removeWrapper(s),o()}})}}(jQuery),/*!
 * jQuery UI Effects Shake 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/shake-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.shake=function(e,o){var i,n=t(this),r=["position","top","bottom","left","right","height","width"],s=t.effects.setMode(n,e.mode||"effect"),a=e.direction||"left",f=e.distance||20,c=e.times||3,u=2*c+1,h=Math.round(e.duration/u),d="up"===a||"down"===a?"top":"left",l="up"===a||"left"===a,p={},g={},m={},y=n.queue(),v=y.length;for(t.effects.save(n,r),n.show(),t.effects.createWrapper(n),p[d]=(l?"-=":"+=")+f,g[d]=(l?"+=":"-=")+2*f,m[d]=(l?"-=":"+=")+2*f,n.animate(p,h,e.easing),i=1;c>i;i++)n.animate(g,h,e.easing).animate(m,h,e.easing);n.animate(g,h,e.easing).animate(p,h/2,e.easing).queue(function(){"hide"===s&&n.hide(),t.effects.restore(n,r),t.effects.removeWrapper(n),o()}),v>1&&y.splice.apply(y,[1,0].concat(y.splice(v,u+1))),n.dequeue()}}(jQuery),/*!
 * jQuery UI Effects Slide 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slide-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.slide=function(e,o){var i,n=t(this),r=["position","top","bottom","left","right","width","height"],s=t.effects.setMode(n,e.mode||"show"),a="show"===s,f=e.direction||"left",c="up"===f||"down"===f?"top":"left",u="up"===f||"left"===f,h={};t.effects.save(n,r),n.show(),i=e.distance||n["top"===c?"outerHeight":"outerWidth"](!0),t.effects.createWrapper(n).css({overflow:"hidden"}),a&&n.css(c,u?isNaN(i)?"-"+i:-i:i),h[c]=(a?u?"+=":"-=":u?"-=":"+=")+i,n.animate(h,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===s&&n.hide(),t.effects.restore(n,r),t.effects.removeWrapper(n),o()}})}}(jQuery),/*!
 * jQuery UI Effects Transfer 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/transfer-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.transfer=function(e,o){var i=t(this),n=t(e.to),r="fixed"===n.css("position"),s=t("body"),a=r?s.scrollTop():0,f=r?s.scrollLeft():0,c=n.offset(),u={top:c.top-a,left:c.left-f,height:n.innerHeight(),width:n.innerWidth()},h=i.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({top:h.top-a,left:h.left-f,height:i.innerHeight(),width:i.innerWidth(),position:r?"fixed":"absolute"}).animate(u,e.duration,e.easing,function(){d.remove(),o()})}}(jQuery);