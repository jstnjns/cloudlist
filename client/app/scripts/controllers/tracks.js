'use strict';

angular.module('cloudlistApp')
  .controller('TracksCtrl', function ($scope, Tracks) {


    Tracks.fetchAll().then(function(tracks) {
      $scope.tracks = tracks;
    });


  });
