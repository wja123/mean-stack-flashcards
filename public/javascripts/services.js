'use strict';

var app = angular.module("myApp");

app.service('flashService', function($http){

this.getAll = function(){
  console.log("getAll");
}

});