'use strict';

angular.module('cloudlistApp')
  .controller('TracksCtrl', function ($scope, Tracks, Player) {


    var init = function() {
          $scope.current = null;
          $scope.text = 'Play';

          $scope.$on('track', onTrackChange);
          $scope.$on('state', onStateChange);

          fetch();
          window.setInterval(fetch, 5 * 1000);
        },


        onTrackChange = function(event, track) {
          console.log('onTrackChange', track);
          $scope.current = track;
        },


        onStateChange = function(event, state) {
          console.log('onStateChange', state);
          $scope.$apply(function() {
            $scope.text = (state != 'play' ? 'Play' : 'Pause');
          });
        },


        fetch = function() {
          Tracks.fetchAll()
            .then(function(tracks) {
              $scope.tracks = tracks;
            });
        },


        toggle = $scope.toggle = function() {
          Player.play(Player.state != 'play');
        };


    init();

  });
