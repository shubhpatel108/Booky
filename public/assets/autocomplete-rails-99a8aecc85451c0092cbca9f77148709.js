!function(t){t.fn.railsAutocomplete=function(){var e=function(){this.railsAutoCompleter||(this.railsAutoCompleter=new t.railsAutocomplete(this))};return void 0!==t.fn.on?t(document).on("focus",this.selector,e):this.live("focus",e)},t.railsAutocomplete=function(t){_e=t,this.init(_e)},t.railsAutocomplete.fn=t.railsAutocomplete.prototype={railsAutocomplete:"0.0.1"},t.railsAutocomplete.fn.extend=t.railsAutocomplete.extend=t.extend,t.railsAutocomplete.fn.extend({init:function(e){function a(t){return t.split(e.delimiter)}function i(t){return a(t).pop().replace(/^\s+/,"")}e.delimiter=t(e).attr("data-delimiter")||null,e.min_length=t(e).attr("min-length")||2,e.append_to=t(e).attr("data-append-to")||null,t(e).autocomplete({appendTo:e.append_to,source:function(a,n){params={term:i(a.term)},t(e).attr("data-autocomplete-fields")&&t.each(t.parseJSON(t(e).attr("data-autocomplete-fields")),function(e,a){params[e]=t(a).val()}),t.getJSON(t(e).attr("data-autocomplete"),params,function(){0==arguments[0].length&&(arguments[0]=[],arguments[0][0]={id:"",label:"no existing match"}),t(arguments[0]).each(function(a,i){var n={};n[i.id]=i,t(e).data(n)}),n.apply(null,arguments)})},change:function(e,a){if(t(this).is("[data-id-element]")&&""!=t(t(this).attr("data-id-element")).val()&&(t(t(this).attr("data-id-element")).val(a.item?a.item.id:""),t(this).attr("data-update-elements"))){var i=t.parseJSON(t(this).attr("data-update-elements")),n=a.item?t(this).data(a.item.id.toString()):{};if(i&&""==t(i.id).val())return;for(var l in i)element=t(i[l]),element.is(":checkbox")?null!=n[l]&&element.prop("checked",n[l]):element.val(a.item?n[l]:"")}},search:function(){var t=i(this.value);return t.length<e.min_length?!1:void 0},focus:function(){return!1},select:function(i,n){var l=a(this.value);if(l.pop(),l.push(n.item.value),null!=e.delimiter)l.push(""),this.value=l.join(e.delimiter);else if(this.value=l.join(""),t(this).attr("data-id-element")&&t(t(this).attr("data-id-element")).val(n.item.id),t(this).attr("data-update-elements")){var r=t(this).data(n.item.id.toString()),o=t.parseJSON(t(this).attr("data-update-elements"));for(var u in o)element=t(o[u]),element.is(":checkbox")?null!=r[u]&&element.prop("checked",r[u]):element.val(r[u])}var s=this.value;return t(this).bind("keyup.clearId",function(){t.trim(t(this).val())!=t.trim(s)&&(t(t(this).attr("data-id-element")).val(""),t(this).unbind("keyup.clearId"))}),t(e).trigger("railsAutocomplete.select",n),!1}})}}),t(document).ready(function(){t("input[data-autocomplete]").railsAutocomplete()})}(jQuery);