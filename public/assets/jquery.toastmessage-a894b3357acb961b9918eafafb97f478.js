/*
 * Copyright 2010 akquinet
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function FlashNotice(t,e){$().toastmessage("showToast",{text:e,sticky:!1,position:"top-right",type:t,closeText:"",close:function(){console.log("toast is closed ...")}})}!function(t){var e={inEffect:{opacity:"show"},inEffectDuration:600,stayTime:3e3,text:"",sticky:!1,type:"notice",position:"top-right",closeText:"",close:null},o={init:function(o){o&&t.extend(e,o)},showToast:function(o){var s={};t.extend(s,e,o);var a,n,i,r,c;return a=t(".toast-container").length?t(".toast-container"):t("<div></div>").addClass("toast-container").addClass("toast-position-"+s.position).appendTo("body"),n=t("<div></div>").addClass("toast-item-wrapper"),i=t("<div></div>").hide().addClass("toast-item toast-type-"+s.type).appendTo(a).html(t("<p>").append(s.text)).animate(s.inEffect,s.inEffectDuration).wrap(n),r=t("<div></div>").addClass("toast-item-close").prependTo(i).html(s.closeText).click(function(){t().toastmessage("removeToast",i,s)}),c=t("<div></div>").addClass("toast-item-image").addClass("toast-item-image-"+s.type).prependTo(i),navigator.userAgent.match(/MSIE 6/i)&&a.css({top:document.documentElement.scrollTop}),s.sticky||setTimeout(function(){t().toastmessage("removeToast",i,s)},s.stayTime),i},showNoticeToast:function(e){var o={text:e,type:"notice"};return t().toastmessage("showToast",o)},showSuccessToast:function(e){var o={text:e,type:"success"};return t().toastmessage("showToast",o)},showErrorToast:function(e){var o={text:e,type:"error"};return t().toastmessage("showToast",o)},showWarningToast:function(e){var o={text:e,type:"warning"};return t().toastmessage("showToast",o)},removeToast:function(t,e){t.animate({opacity:"0"},600,function(){t.parent().animate({height:"0px"},300,function(){t.parent().remove()})}),e&&null!==e.close&&e.close()}};t.fn.toastmessage=function(e){return o[e]?o[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.toastmessage"):o.init.apply(this,arguments)}}(jQuery);