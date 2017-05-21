// angular.module('chatApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'NerdCtrl', 'NerdService', 'GeekCtrl', 'GeekService']);


(function() {
    'use strict';
}());

angular
  .module('chatApp', [
    // 'ngCookies',
    // 'ngRoute',
    'ui.router',
    // 'appRoutes',
    // 'ngSanitize',
    // 'ngStorage',
    // 'ngLodash',
    'MainCtrl',
    'NerdCtrl',
    'NerdService',
    'GeekCtrl',
    'GeekService'
  ])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

      // HOME STATES AND NESTED VIEWS ========================================
      .state('home', {
    		url: '/',
    		templateUrl: 'views/home.html',
        controller: 'MainController'
    	});

});
