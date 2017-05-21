// angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
//
// 	$routeProvider
//
// 		// home page
// 		.when('/', {
// 			templateUrl: 'views/home.html',
// 			controller: 'MainController'
// 		});
//
// 		// .when('/nerds', {
// 		// 	templateUrl: 'views/nerd.html',
// 		// 	controller: 'NerdController'
// 		// })
// 		//
// 		// .when('/geeks', {
// 		// 	templateUrl: 'views/geek.html',
// 		// 	controller: 'GeekController'
// 		// });
//
// 	$locationProvider.html5Mode(true);
//
// }]);

// angular.module('appRoutes',[]).config(function ($routeProvider, $locationProvider) {
// 	$locationProvider.html5Mode(true);
// 	$routeProvider
// 		.when('/', {
// 			templateUrl: 'views/home.html',
// 			controller: 'MainController'
// 		})
// 		.when('/nerds', {
// 			templateUrl: 'views/nerd.html',
// 			controller: 'NerdController'
// 		})
//
// 		.when('/geeks', {
// 			templateUrl: 'views/geek.html',
// 			controller: 'GeekController'
// 		})
// 		.otherwise({
// 			redirectTo: '/'
// 		});
// });


angular.module('appRoutes',['ui.router']).config(function ($stateProvider, $urlRouteProvider) {

	$urlRouteProvider.otherwise('/');

	$stateProvider

	// home states and nested views
	.state('home', {
		url: '/',
		templateUrl: 'views/home.html'
	});



});
