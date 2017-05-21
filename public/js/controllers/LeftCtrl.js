(function() {
  'use strict';

  angular
    .module('app')
    .controller('LeftCtrl', LeftCtrl);

  LeftCtrl.$inject = ['$scope', '$localStorage', 'socket', 'lodash'];

  function LeftCtrl($scope, $localStorage, socket, lodash) {

    // vm = "view model"
    var vm = this;
    vm.test = 'Left Ctlr works!!!';


  }
})();
