'use strict';

angular.module('cloudlistApp')
  .controller('CurrentCtrl', function ($scope, Tracks, Player) {


    var init = function() {
          $scope.$on('state', onStateChange);
          $scope.$on('time', onTimeChange);
        },


        onStateChange = function(event, state) {
          $scope.$apply(function() {
            $scope.state = state;
          });
        },


        onTimeChange = function(event, time, audio) {
          $scope.$apply(function() {
            $scope.progress = {
              time: Math.floor(time),
              percent: time / audio.duration * 100
            };
          });
        },


        toggle = $scope.toggle = function() {
          Player.play($scope.state != 'play');
        };


    init();


  });