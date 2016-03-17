'use strict';

var app = angular.module("myApp");

app.service('flashService', function($http) {

    this.getAll = function() {
        console.log("getAll");
        $http.get('/questions').then(function(res) {
            console.log(res);
            this.allQs = res;
        }, function(err) {
            if (err) {
                console.log(err);
            }
        });
    };

    this.getById = function(id) {
        return $http.get(`/questions/question/${id}`);
    };

    this.create = function(newQuestion) {
        return $http.post('/questions', newQuestion);
    };

    this.getCats =()=> {
        $http.get('/questions/categories').then(res => {
            console.log(res);
            this.categories = res.data;
        }, err=>{
            if (err) {
                console.log(err);
            }
        });

    };

    this.update = function(editQuestion) {
        return $http.put(`/questions/${editQuestion.id}`, editQuestion);
    };

    this.getByCat = function(category) {
        return $http.get(`questions/category/${category}`);
    };

    this.delete = function(question) {
        return $http.delete(`/questions/${question.id}`);
    };

});

app.service('userService', function($http) {
    this.getAll = function() {
        console.log("getAll");
        return $http.get('/users');
    };

    this.getById = function(id) {
        return $http.get(`/users/${id}`);
    };

    this.getByName = function(name) {
        return $http.get(`/users/user/${name}`);
    };

    this.create = function(user) {
        return $http.post('/users', user);
    };

    this.delete = function(user) {
        return $http.delete(`/users/${user.id}`);
    };

    this.update = function(editUser) {
        return $http.put('/users', editUser);
    };

});