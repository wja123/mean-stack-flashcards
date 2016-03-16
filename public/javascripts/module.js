'use strict';

(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

var app = angular.module("myApp",["ui.router"]);

console.log("module works");
