'use strict';

angular.module('cloudlistApp')
  .controller('TrackCtrl', function ($scope, Playlist) {

    $scope.play = function(i) {
      Playlist.play(i);
    };

    $scope.preventBubble = function(event) {
      event.stopPropagation();
    };

  });
