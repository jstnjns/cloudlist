'use strict';

angular.module('cloudlistApp')
  .controller('TracksCtrl', function ($scope, Tracks) {


    $scope.current = false;


    $scope.play = function(track) {
      $scope.current = track;

      track.playing = true;
    };


    Tracks.fetchAll().then(function(tracks) {
      $scope.tracks = tracks;
    });


  });
