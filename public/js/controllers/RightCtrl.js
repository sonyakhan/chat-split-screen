(function() {
  'use strict';

  angular
    .module('app')
    .controller('RightCtrl', RightCtrl);

  RightCtrl.$inject = ['$scope', '$localStorage', '$timeout', 'socket', 'lodash', 'moment'];

  function RightCtrl($scope, $localStorage, $timeout, socket, lodash, moment) {

    // $scope = "view model"
    // var $scope = this;
    $scope.message = '';
    $scope.messages = [];
    // this can optionally be changed in the future
    $scope.name = 'Rob';
    $scope.otherName = 'Laura';
    $scope.time = {};

    // send messages
    $scope.sendMessageRight = function(data) {
      $scope.time = new Date();
      var newMessage = {
        message: $scope.message,
        from: $scope.name,
        timestamp: $scope.time
      };
      socket.emit('send-message-right', newMessage);
      // reset the message
      $scope.message = '';
    };

    // recieve my own messages
    socket.on('get-message-right', function(data) {
      $scope.messages.push(data);

      // makes sure messages scroll to bottom when overflow
      $timeout(function() {
      var scroller = document.getElementById("autoscrollRight");
      scroller.scrollTop = scroller.scrollHeight;
    }, 0, false);
    });

    // recieve left side's messages
    socket.on('get-message-left', function(data) {
      $scope.messages.push(data);

      $timeout(function() {
      var scroller = document.getElementById("autoscrollRight");
      scroller.scrollTop = scroller.scrollHeight;
    }, 0, false);
    });

  }
})();
