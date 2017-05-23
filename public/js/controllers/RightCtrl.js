(function() {
  'use strict';

  angular
    .module('app')
    .controller('RightCtrl', RightCtrl);

  RightCtrl.$inject = ['$location', '$scope', '$localStorage', 'socket', 'scrollBottom'];

  function RightCtrl($location, $scope, $localStorage, socket, scrollBottom) {

    // $scope = "view model"
    // var $scope = this;
    $scope.message = '';
    $scope.messages = [];
    // this can optionally be changed in the future
    $scope.name = 'Rob';
    $scope.test = 'Right Ctlr works!!!';

    // send messages
    $scope.sendMessageRight = function(data) {
      var newMessage = {
        message: $scope.message,
        from: $scope.name
      };
      socket.emit('send-message-right', newMessage);
      // reset the message
      $scope.message = '';
    };

    // recieve my own messages
    socket.on('get-message-right', function(data) {
      $scope.messages.push(data);
    });

    // recieve left side's messages
    socket.on('get-message-left', function(data) {
      $scope.messages.push(data);
    });

  }
})();
