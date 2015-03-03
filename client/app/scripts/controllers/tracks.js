'use strict';

angular.module('cloudlistApp')
  .controller('TracksCtrl', function ($scope, Tracks) {


    $scope.current = null;

    var init = function() {
          $scope.$on('track', onTrackChange);
          $scope.$on('state', onStateChange);
          fetch();
        },


        onTrackChange = function(event, track) {
          $scope.current = track;
        },


        onStateChange = function(event, state) {
          $scope.text(state == 'playing' ? 'Pause' : 'Play');
        },


        fetch = function() {
          Tracks.fetchAll().then(function(tracks) {
            $scope.tracks = tracks;
          });
        };


    init();

  });
