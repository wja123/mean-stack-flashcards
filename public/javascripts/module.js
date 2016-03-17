'use strict';

(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

var app = angular.module("myApp",["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state("home",{
    url:"/",
    templateUrl:"/partials/home.html",
    controller:"mainCtrl"
  })
.state("admin",{
    url:"/admin",
    templateUrl:"/partials/admin.html",
    controller:"adminCtrl"
  })
.state("instructions",{
    url:"/instructions",
    templateUrl:"/partials/instructions.html",
    controller:"instCtrl"
  })
.state("play",{
    url:"/play",
    templateUrl:"/partials/play.html",
    controller:"playCtrl"
  })

$urlRouterProvider.otherwise("/");

});

console.log("module works");
