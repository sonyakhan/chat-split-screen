(function() {
  'use strict';

  // declare the socket factory to use in the left + right controllers
  angular
    .module('chatApp')
    .factory('socket', socket);

  socket.$inject = ['$rootScope'];

  function socket($rootScope) {

    var socketObj = {};

    return socketObj;

  }
})();
