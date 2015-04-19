'use strict';

angular.module('cloudlistApp')
  .controller('TracksCtrl', function ($scope, Tracks, Playlist) {

    var init = function() {
          $scope.playlist = Playlist;

          io.socket.get('/tracks', function(tracks) {
            Playlist.load(tracks);
            $scope.$apply();
          });

          io.socket.on('tracks', function(event) {
            if(event.verb == 'created') {
              Playlist.add(event.data);
              $scope.$apply();
            }
          });
        };

    init();

  });
