'use strict';

angular.module('cloudlistApp')
  .controller('TracksCtrl', function ($scope, Tracks, Playlist) {

    var init = function() {
          $scope.playlist = Playlist;

          Tracks
            .on('add', function(track) { Playlist.add(track); })
            .on('remove', function(track) { Playlist.remove(track); })
            .get();
        };

    init();

  });
