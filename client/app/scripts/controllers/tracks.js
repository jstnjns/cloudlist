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
          $scope.current = track;
        },

        // TODO JJ: Move this functionality into the Playlist.
        onStateChange = function(event, state) {
          switch(state) {
            case 'ended':
              Playlist.next();
          }
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
