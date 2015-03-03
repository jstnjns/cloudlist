'use strict';

angular.module('cloudlistApp')
  .controller('TrackCtrl', function ($scope, $sce) {

    $scope.track.playing = false;

    $scope.play = function() {
      $scope.track.playing = true;
    };

    $scope.destroy = function() {
      $scope.track.$destroy()
        .then(function() {
          delete $scope.track;
        });
    }

  });
