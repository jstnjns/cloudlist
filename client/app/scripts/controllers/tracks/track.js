'use strict';

angular.module('cloudlistApp')
  .controller('TrackCtrl', function ($scope, $sce) {


    $scope.play = function() {
      $scope.$emit('track', $scope.track);
    }


    $scope.destroy = function() {
      $scope.track.$destroy()
        .then(function() {
          delete $scope.track;
        });
    }


  });
