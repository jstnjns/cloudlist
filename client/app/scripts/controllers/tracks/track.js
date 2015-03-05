'use strict';

angular.module('cloudlistApp')
  .controller('TrackCtrl', function ($scope, $sce) {

    $scope.play = function() {
      $scope.$emit('track', $scope.track);
    }

  });
