'use strict';

var app = angular.module("myApp");

app.controller("mainCtrl", function($scope, $state, flashService, userService) {
    console.log("controller works");

    flashService.getCats();

    $scope.$watch(function() {
        return flashService.categories;
    }, function(curVal, preVal) {
        $scope.categories = curVal;
    });


});

app.controller("adminCtrl", function($scope, $state, flashService, userService) {
    console.log("adminCtrl works");

});

app.controller("instCtrl", function($scope, $state, flashService, userService) {
    console.log("instCtrl works");

});

app.controller("playCtrl", function($scope, $state, flashService, userService) {
    console.log("playCtrl works");

});