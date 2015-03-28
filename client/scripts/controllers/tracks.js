'use strict';

angular.module('cloudlistApp')
  .controller('TracksCtrl', function ($scope, Tracks, Playlist) {

    var init = function() {
          $scope.playlist = Playlist;

          fetch();
          window.setInterval(fetch, 15000);
        },

        fetch = function() {
          Tracks.fetchAll()
            .then(function(tracks) {
              Playlist.load(tracks);
            });
        };

    init();

  });
