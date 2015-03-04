'use strict';

angular.module('cloudlistApp')
  .controller('CurrentCtrl', function ($scope, Tracks, Player) {


    var init = function() {
          $scope.$on('state', onStateChange);
          $scope.$on('time', onTimeChange);
        },


        onStateChange = function(event, state) {
          console.log('onStateChange', state);
          $scope.$apply(function() {
            $scope.state = state;
          });
        },


        onTimeChange = function(event, time, audio) {
          console.log('onTimeChange', time);
          $scope.$apply(function() {
            $scope.progress = {
              time: Math.floor(time),
              percent: time / audio.duration * 100
            };
          });
        },


        toggle = $scope.toggle = function() {
          Player.play(Player.state != 'play');
        };


    init();


  });
