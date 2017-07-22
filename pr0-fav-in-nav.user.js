// ==UserScript==
// @name         pr0-fav-in-nav
// @namespace    http://pr0gramm.com/user/playmax
// @version      1.1
// @description  Adds a heart-shaped link to the users favorites in the navigation bar
// @author       playmax
// @match        http://pr0gramm.com/*
// @match        https://pr0gramm.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

jQuery(function() {
  var data = jQuery.parseJSON(decodeURI($.cookie('me')));
  var link = jQuery("<a id='tab-fav' class='head-tab' href='/user/" + data.n + "/likes'>❤</a>");
  jQuery("#filter-link").before(link);
  
//Patch by https://github.com/jarlave
  if(/likes/.test(window.location.href)) {
    $('#tab-fav').addClass('active');
  }
});
