'use strict';

var app = angular.module("myApp");

app.controller("mainCtrl", function($scope, $state, flashService, userService) {
    $scope.flashShow = false;
    $scope.revAns = false;
    console.log("controller works");

    flashService.getCats();

    $scope.getQuests = function($this) {
        console.log($this.item);
        $scope.flashShow = true;
        flashService.getByCat($this.item.category);
    };

    //////UPDATE
    $scope.editQuest = function($this) {
        console.log($this.item);
        flashService.getByCat($this.item.category);
    };

    $scope.revealAns = function(val) {
        $scope.revAns = true;
    }

    $scope.returnToHome = function() {
        $scope.flashShow = false;
        $scope.revAns = false;
    }

    $scope.nextAns = function(val) {
        var curIndex = $scope.questionsList.indexOf(val);
        console.log(val);
        if (curIndex + 1 < $scope.numQuests) {
            $scope.revAns = false;
            $scope.quest = $scope.questionsList[curIndex + 1];
        } else {

            console.log("No more questions");
            $scope.flashShow = false;
            $scope.revAns = false;
        }
        // console.log($scope.quest);
        // console.log($scope.questionsList.indexOf($scope.quest));
    }

    $scope.$watch(function() {
        return flashService.categories;
    }, function(curVal, preVal) {
        $scope.categories = curVal;
    });

    $scope.$watch(function() {
        return flashService.curQuestList;
    }, function(curVal, preVal) {

        $scope.numQuests = flashService.numQuests;
        $scope.questionsList = curVal;
        $scope.quest = curVal[0];
    });


});

app.controller("adminCtrl", function($scope, $state, flashService, userService) {
    console.log("adminCtrl works");
    angular.element('#category').trigger('change');
    angular.element('#question').trigger('change');
    angular.element('#hint').trigger('change');
    angular.element('#answer').trigger('change');
    flashService.getAll();
    $scope.modShow = false;
    $scope.allShow = true;

    $scope.$watch(function() {
        return flashService.allQs;
    }, function(curVal, preVal) {
        console.log(curVal);
        $scope.allQuests = curVal;
    });

    $scope.deleteQ = function(input) {
        console.log(input.quest);
        flashService.deleteQuestion(input.quest);
        flashService.getAll();
    }

    $scope.modifyQ = function(input) {
        $scope.modShow = true;
        $scope.allShow = false;
        console.log(input);
        $scope.update = input.quest;

    }

    $scope.updateQ = function(input) {
        console.log(input);
        console.log(input.update.id);
        flashService.update(input.update);
        flashService.getAll();
    }

    $scope.quitUpdate = function() {
        $scope.addShow = false;
        $scope.modShow = false;
        $scope.allShow = true;
    }

    $scope.addNewQuest = function() {
        $scope.addShow = true;
        $scope.modShow = false;
        $scope.allShow = false;
        console.log($scope.newQ);
    }

    $scope.addNewQ = function(input) {
        flashService.create(input);
        flashService.getAll();
    }

    $scope.quitAdd = function() {
        $scope.addShow = false;
        $scope.modShow = false;
        $scope.allShow = true;
        $scope.newQ = {};
    }

});

app.controller("instCtrl", function($scope, $state, flashService, userService) {
    console.log("instCtrl works");

});

app.controller("playCtrl", function($scope, $state, flashService, userService) {
    console.log("playCtrl works");

});