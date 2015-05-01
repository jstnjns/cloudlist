'use strict';

angular.module('cloudlistApp')
  .controller('TrackCtrl', function ($scope, Track, Playlist) {

    $scope.play = function(i) {
      Playlist.play(i);
    };

    $scope.delete = function() {
      console.log('delete');
      Track.destroy($scope.track);
    };

  });
