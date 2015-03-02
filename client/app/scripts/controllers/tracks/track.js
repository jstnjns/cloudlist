'use strict';

angular.module('cloudlistApp')
  .controller('TrackCtrl', function ($scope, $sce) {

    $scope.track.playing = false;

    $scope.play = function() {
      $scope.track.playing = true;
    };

  });
