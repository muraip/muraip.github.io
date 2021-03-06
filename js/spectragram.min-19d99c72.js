/*!
 * jQuery - Spectragram by Adrian Quevedo
 * http://adrianquevedo.com/  - http://lab.adrianquevedo.com/ - http://elnucleo.com.co/
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * You are free to use this plugin in commercial projects as long as the copyright header is left intact.
 *
 * This plugin uses the Instagram(tm) API and is not endorsed or certified by Instagram or Burbn, inc. 
 * All Instagram(tm) logos and trademarks displayed on this plugin are property of Burbn, Inc.
 *
 * Date: Thu Jul 15 14:05:02 2012 -0500
 */
/*!
 *
 * 6 April 2018: Altered by Medium Rare
 * Bypassed search API endpoint in getUserFeed to use "self" as user ID due to Instagram API changes.
 *
 */
"function"!=typeof Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),function(e){var t={init:function(t,a){var n=this;n.elem=a,n.$elem=e(a),n.api="https://api.instagram.com/v1",n.accessData=e.fn.spectragram.accessData,n.options=e.extend({},e.fn.spectragram.options,t)},getRecentMedia:function(e){var t=this,a="/users/"+e+"/media/recent/?"+t.accessData.clientID+"&access_token="+t.accessData.accessToken;t.fetch(a).done(function(e){t.display(e)})},getUserFeed:function(){this.getRecentMedia("self")},getPopular:function(){var e=this,t="/media/popular?client_id="+e.accessData.clientID+"&access_token="+e.accessData.accessToken;e.fetch(t).done(function(t){e.display(t)})},getRecentTagged:function(){var t=this,a="/tags/"+t.options.query+"/media/recent?client_id="+t.accessData.clientID+"&access_token="+t.accessData.accessToken;t.fetch(a).done(function(a){a.data.length?t.display(a):e.error("Spectagram.js - Error: the tag "+t.options.query+" does not have results.")})},fetch:function(t){var a=this,n=a.api+t;return e.ajax({type:"GET",dataType:"jsonp",cache:!1,url:n})},display:function(t){var a,n=this,c=n.options.size,s=n.options.max>=t.data.length?t.data.length:n.options.max;if(0===t.data.length)n.$elem.append(e(n.options.wrapEachWith).append(n.options.notFoundMsg));else for(var i=0;i<s;i++){a="small"==c?t.data[i].images.thumbnail.url:"medium"==c?t.data[i].images.low_resolution.url:t.data[i].images.standard_resolution.url;var o;null!=t.data[i].caption&&(o='title="'+e("<span/>").text(t.data[i].caption.text).html()+'"'),n.$elem.append(e(n.options.wrapEachWith).append("<a "+o+" target='_blank' href='"+t.data[i].link+"'><img src='"+a+"'></img></a>"))}"function"==typeof n.options.complete&&n.options.complete.call(n)}};jQuery.fn.spectragram=function(a,n){jQuery.fn.spectragram.accessData.clientID?this.each(function(){var c=Object.create(t);if(c.init(n,this),c[a])return c[a](this);e.error("Method "+a+" does not exist on jQuery.spectragram")}):e.error("You must define an accessToken and a clientID on jQuery.spectragram")},jQuery.fn.spectragram.options={max:10,query:"coffee",size:"medium",wrapEachWith:"<li></li>",complete:null},jQuery.fn.spectragram.accessData={accessToken:null,clientID:null}}(jQuery,window,document);