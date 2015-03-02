'use strict';

angular.module('cloudlistApp')
  .controller('TracksNewCtrl', function ($scope, Tracks) {


    $scope.url = 'balls';


    $scope.save = function() {

      new Tracks({ url: $scope.url })
        .$save().then(function(track) {

          $scope.tracks.push(track);
          $scope.clear();

        });
    };


    $scope.clear = function() {
      $scope.url = '';
    };


  });