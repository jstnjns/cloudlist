'use strict';

angular.module('cloudlistApp')
  .controller('TracksCtrl', function ($scope, Tracks, Playlist) {


    var init = function() {
          $scope.current = null;

          $scope.$on('track', onTrackChange);
          $scope.$on('state', onStateChange);

          fetch();
          window.setInterval(fetch, 5 * 1000);
        },


        onTrackChange = function(event, track) {
          console.log('onTrackChange', track);
          $scope.current = track;
          $scope.i = $scope.tracks.indexOf($scope.current);
        },


        onStateChange = function(event, state) {
          switch(state) {
            case 'ended':
              console.log('onStateChange', state);
              next();
          }
        },


        next = function() {
          $scope.$emit('track', $scope.tracks[$scope.i++]);
        },


        fetch = function() {
          Tracks.fetchAll()
            .then(function(tracks) {
              $scope.playlist = Playlist.load(tracks);
              $scope.tracks = tracks;
            });
        };


    init();


  });
