(function() {
  'use strict';

  angular
    .module('app')
    .controller('RightCtrl', RightCtrl);

  RightCtrl.$inject = ['$location', '$scope', '$localStorage', 'socket'];

  function RightCtrl($location, $scope, $localStorage, socket) {

    // vm = "view model"
    var vm = this;
    vm.test = 'Right Ctlr works!!!';



  }
})();
