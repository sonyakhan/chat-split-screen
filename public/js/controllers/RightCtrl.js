// angular.module('RightCtrl', []).controller('RightCtrl', function($scope) {
//
// 	this.tagline = 'The square root of life is pi!';
//
// 	this.hi = 'hello from the Right Controller~';
//
// });


(function() {
  'use strict';

  // declare the right controller
  angular
    .module('chatApp')
    .controller('RightCtrl', RightCtrl);

  RightCtrl.$inject = ['$scope', 'socket'];

  function RightCtrl($scope, socket) {

		// rvm means "right view model"
		var rvm = this;

		rvm.tagline = 'To the moon and back!';

		rvm.hi = 'hey this is coming from the Right Controller';

  }

})();
