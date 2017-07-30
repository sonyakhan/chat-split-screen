(function() {
  'use strict';

  angular
    .module('app')
    .controller('LeftCtrl', LeftCtrl);

  LeftCtrl.$inject = ['$scope', '$localStorage', '$timeout', 'socket', 'lodash', 'moment'];

  function LeftCtrl($scope, $localStorage, $timeout, socket, lodash, moment) {

    $scope.message = '';
    $scope.messages = [];
    $scope.name = 'Laura';
    $scope.otherName = 'Rob';
    $scope.time = {};
    $scope.currUserIsTyping = false;
    $scope.rightIsTyping;
    var inputChangedPromise;
    var typing;

    // check if user is typing and send to backend
    $scope.inputChanged = function() {

      if (inputChangedPromise) {
        $timeout.cancel(inputChangedPromise);
      }
      // emit signal user is typing
      $scope.currUserIsTyping = true;
      typing = $scope.currUserIsTyping;
      socket.emit('left-user-typing', typing);

      inputChangedPromise = $timeout($scope.checkTyping, 500);
    };

    $scope.checkTyping = function() {
      $scope.currUserIsTyping = false;
      typing = $scope.currUserIsTyping;
      // emit signal that user stopped typing
      socket.emit('left-user-stopped-typing', typing);
    };

    // listen for the other user typing and stop typing
    socket.on('get-right-user-typing', function(data) {
      $scope.rightIsTyping = data;
    });

    socket.on('get-right-user-stopped-typing', function(data) {
      $scope.rightIsTyping = data;
    });

    // send messages
    $scope.sendMessageLeft =  function() {
      // error handling - don't send empty messages
      if ($scope.message.length != 0) {
        $scope.time = new Date();
        var newMessage = {
          message: $scope.message,
          from: $scope.name,
          timestamp: $scope.time
        };
        socket.emit('send-message-left', newMessage);
        // reset the message
        $scope.message = '';
      };
    }

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
