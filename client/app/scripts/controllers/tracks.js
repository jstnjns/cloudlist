'use strict';

angular.module('cloudlistApp')
  .controller('TracksCtrl', function ($scope, Tracks, Player) {


    var init = function() {
          $scope.current = null;

          $scope.$on('track', onTrackChange);

          fetch();
          window.setInterval(fetch, 5 * 1000);
        },


        onTrackChange = function(event, track) {
          console.log('onTrackChange', track);
          $scope.current = track;
        },


        fetch = function() {
          Tracks.fetchAll()
            .then(function(tracks) {
              $scope.tracks = tracks;
            });
        };


    init();


  });
