(function() {
  'use strict';

  angular
    .module('app')
    .controller('LeftCtrl', LeftCtrl);

  LeftCtrl.$inject = ['$scope', '$localStorage', 'socket', 'lodash'];

  function LeftCtrl($scope, $localStorage, socket, lodash) {

    // $scope = "view model"
    // var $scope = this;
    $scope.message = '';
    $scope.messages = [];
    // this can optionally be changed in the future
    $scope.name = 'Laura';
    $scope.test = 'Left Ctlr works!!!';

    //send messages
    $scope.sendMessageLeft =  function(data) {
      var newMessage = {
        message: $scope.message,
        from: $scope.name
      };
      socket.emit('send-message-left', newMessage);
      // reset the message
      $scope.message = '';
    };

    // recieve my own messages
    socket.on('get-message-left', function(data) {
      $scope.messages.push(data);
    });

    // recieve right side's messages
    socket.on('get-message-right', function(data) {
      $scope.messages.push(data);
    });

  }
})();
