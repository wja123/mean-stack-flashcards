'use strict';

var app = angular.module("myApp");

app.service('flashService', function($http) {
    this.curQuest = [];
    this.curQuestList = [];
    this.numQuests=0;

    this.getAll = () => {
        $http.get('/questions').then(res => {
            this.allQs = res.data;
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

    this.getById = (id) => {
        $http.get(`/questions/question/${id}`).then(res => {
            this.curQuest = res.data;
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

    this.create = (newQuestion) => {
        $http.post('/questions', newQuestion).then(res => {
            console.log("success");
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

    this.getCats = () => {
        $http.get('/questions/categories').then(res => {
            console.log(res);
            this.categories = res.data;
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

    this.update = (editQuestion) => {
        $http.put(`/questions/${editQuestion.id}`, editQuestion).then(res => {
            console.log("success");
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

    this.getByCat = (category) => {
        $http.get(`questions/category/${category}`).then(res => {
            this.curQuestList = res.data;
            this.numQuests = res.data.length;
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

    this.deleteQuestion = function(question) {
        $http.delete(`/questions/${question.id}`).then(res => {
            console.log("Successfully deleted");
        }, err => {
            if (err) {
                console.log(err);
            }
        });
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