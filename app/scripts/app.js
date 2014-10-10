'use strict';

angular
  .module('scrollviewTestApp', ['famous.angular', 'ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
    })
    .when('/stack', {
      templateUrl: 'stack.html',
      controller: 'StackController'
    });

    // configure html5 to get links working on jsfiddle
  });
