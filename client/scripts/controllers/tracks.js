'use strict';

angular.module('cloudlistApp')
  .controller('TracksCtrl', function ($scope, Tracks, Playlist) {

    var init = function() {
          $scope.playlist = Playlist;

          fetch();
          // seconds * 1000ms
          window.setInterval(fetch, 60 * 1000);
        },

        fetch = function() {
          Tracks.fetchAll()
            .then(function(tracks) {
              Playlist.load(tracks);
            });
        };

    init();

  });
