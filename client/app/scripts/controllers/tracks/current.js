'use strict';

angular.module('cloudlistApp')
  .controller('CurrentCtrl', function ($scope, Tracks, Player) {

    var init = function() {
          $scope.$on('track', onTrackChange);
          $scope.$on('state', onStateChange);
          $scope.$on('time', onTimeChange);
        },

        onTrackChange = function(event, track) {
          $scope.current = track;
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
          Player.toggle();
        };

    init();

  });
