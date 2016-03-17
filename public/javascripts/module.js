'use strict';

$(document).ready(function(){
    $('.button-collapse').sideNav();
});



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

