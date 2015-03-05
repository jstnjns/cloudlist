'use strict';

angular.module('cloudlistApp')
  .controller('TracksCtrl', function ($scope, Tracks, Playlist) {

    var init = function() {
          $scope.playlist = Playlist;

          $scope.$on('state', onStateChange);

          fetch();
          window.setInterval(fetch, 5 * 1000);
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
              Playlist.load(tracks);
            });
        };

    init();

  });
