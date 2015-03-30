'use strict';

angular.module('cloudlistApp')
  .controller('CurrentCtrl', function ($scope, Tracks, Player, Playlist) {

    var init = function() {
          $scope.shuffle = Playlist.shuffle;

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
        };

    $scope.toggleState = function() {
      Player.toggle();
    };

    $scope.toggleShuffle = function() {
      $scope.shuffle = Playlist.shuffle = !Playlist.shuffle;
    };

    $scope.toggleRepeat = function() {
      $scope.repeat = Playlist.repeat = !Playlist.repeat;
    };

    $scope.convertDuration = function() {
      if (!$scope.current || !$scope.current.meta) {
        return false;
      }

      return Math.floor($scope.current.meta.duration / 1000);

    };

    init();

  });
