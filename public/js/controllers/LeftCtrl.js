(function() {
  'use strict';

  angular
    .module('app')
    .controller('LeftCtrl', LeftCtrl);

  LeftCtrl.$inject = ['$scope', '$localStorage', '$timeout', 'socket', 'lodash', 'moment'];

  function LeftCtrl($scope, $localStorage, $timeout, socket, lodash, moment) {

    // TODO: use 'this' and vm
    // TODO: change function expressions $scope.x = function(){} to function getX() {}



    // $scope.searchTerm;
    //
    // $scope.checkTyping = function() {
    //   $scope.isTyping = false;
    // };



    // $scope = "view model"
    // var $scope = this;
    $scope.message = '';
    $scope.messages = [];
    // this can optionally be changed in the future
    $scope.name = 'Laura';
    $scope.otherName = 'Rob';
    $scope.time = {};




    // $scope.blank = '';
    // $scope.isTyping = false;
    // var inputChangedPromise;
    //
    // // check if user is typing
    //
    // $scope.inputChanged = function() {
    //   if (inputChangedPromise) {
    //     $timeout.cancel(inputChangedPromise);
    //   }
    //   inputChangedPromise = $timeout($scope.checkTyping, 500);
    // };
    //
    // $scope.checkTyping = function() {
    //   $scope.isTyping = false;
    // };




    $scope.isTyping = false;
    var inputChangedPromise;

    // check if user is typing

    $scope.inputChanged = function() {
      if (inputChangedPromise) {
        $timeout.cancel(inputChangedPromise);
      }
      inputChangedPromise = $timeout($scope.checkTyping, 1500);
    };

    $scope.checkTyping = function() {
      $scope.isTyping = false;
    };





    // send messages
    $scope.sendMessageLeft =  function(data) {
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
