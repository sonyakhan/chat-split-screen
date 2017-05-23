(function() {
  'use strict';

  angular
    .module('app')
    .controller('LeftCtrl', LeftCtrl);

  LeftCtrl.$inject = ['$scope', '$localStorage', '$timeout', 'socket', 'lodash', 'moment'];

  function LeftCtrl($scope, $localStorage, $timeout, socket, lodash, moment) {

    // $scope = "view model"
    // var $scope = this;
    $scope.message = '';
    $scope.messages = [];
    // this can optionally be changed in the future
    $scope.name = 'Laura';
    $scope.otherName = 'Rob';
    $scope.test = 'Left Ctlr works!!!';

    $scope.time = new Date();

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

      // makes sure messages scroll to bottom when overflow
      $timeout(function() {
      var scroller = document.getElementById("autoscrollLeft");
      scroller.scrollTop = scroller.scrollHeight;
    }, 0, false);
    });

    // recieve right side's messages
    socket.on('get-message-right', function(data) {
      $scope.messages.push(data);

      $timeout(function() {
      var scroller = document.getElementById("autoscrollLeft");
      scroller.scrollTop = scroller.scrollHeight;
    }, 0, false);
    });

  }
})();
