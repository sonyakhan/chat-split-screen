// (function() {
// 	'use strict';
//
// 	angular.module('LeftCtrl', []).controller('LeftCtrl', function($scope) {
//
// 		this.tagline = 'To the moon and back!';
//
// 		this.hi = 'hey this is coming from the Left Controller';
//
//
// });
//
// })();




(function() {
  'use strict';

  // declare the left controller
  angular
    .module('chatApp')
    .controller('LeftCtrl', LeftCtrl);

  LeftCtrl.$inject = ['$scope', 'socket'];

  function LeftCtrl($scope, socket) {

		// lvm means "left view model"
		var lvm = this;

		lvm.tagline = 'To the moon and back!';

		lvm.hi = 'hey this is coming from the Left Controller';

  }

})();
