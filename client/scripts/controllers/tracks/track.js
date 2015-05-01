'use strict';

angular.module('cloudlistApp')
  .controller('TrackCtrl', function ($scope, Track, Playlist) {

    $scope.play = function(i) {
      Playlist.play(i);
    };

    $scope.delete = function() {
      Track.destroy($scope.track);
    };

    $scope.preventBubble = function(event) {
      event.stopPropagation();
    }

  });
