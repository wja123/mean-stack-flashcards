'use strict';

var app = angular.module("myApp");

app.service('flashService', function($http){

this.getAll = function(){
  console.log("getAll");
  return $http.get('/questions')
};

this.getById = function(id){
  return $http.get(`/questions/${id}`);
};

this.create = function(newQuestion){
  return $http.post('/questions', newQuestion);
};

this.getCats = function(){
  return $http.get('/categories');
};

this.update = function(editQuestion){
  return $http.put(`/questions/${editQuestion.id}`, editQuestion);
};

this.getByCat = function(category){
  return $http.get(`/category/${category}`);
};

this.delete = function(question){
  return $http.delete(`/questions/${question.id}`);
};

});

app.service('userService', function($http){
  this.getAll = function(){
    console.log("getAll");
    return $http.get('/users');
  };

  this.getById = function(id){
    return $http.get(`/users/${id}`);
  };

  this.getByName = function(name){
    return $http.get(`/users/user/${name}`);
  };

  this.create = function(user){
    return $http.post('/users', user);
  };

  this.delete = function(user){
    return $http.delete(`/users/${user.id}`);
  };

  this.update = function(editUser){
    return $http.put('/users', editUser);
  };

  });