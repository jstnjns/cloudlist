'use strict';

angular.module('cloudlistApp')
  .controller('TracksCtrl', function ($scope, Tracks) {


    $scope.current = null;


    $scope.play = function(i) {
      $scope.current = $scope.tracks[i];
    };


    Tracks.fetchAll().then(function(tracks) {
      $scope.tracks = tracks;
    });


  });
