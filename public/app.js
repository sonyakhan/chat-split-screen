(function() {
    'use strict';
}());

angular
  .module('app', [
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngStorage',
    'ngLodash'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        // controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
