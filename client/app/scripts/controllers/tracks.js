'use strict';

angular.module('cloudlistApp')
  .controller('TracksCtrl', function ($scope, Tracks) {


    var init = function() {
          $scope.current = null;
          $scope.text = 'Play';

          $scope.$on('track', onTrackChange);
          $scope.$on('state', onStateChange);

          fetch();
        },


        onTrackChange = function(event, track) {
          console.log('onTrackChange', track);
          $scope.current = track;
        },


        onStateChange = function(event, state) {
          console.log('onStateChange', state);
        },


        fetch = function() {
          Tracks.fetchAll().then(function(tracks) {
            $scope.tracks = tracks;
          });
        },


        toggle = $scope.toggle = function(play) {
          $rootScope.$broadcast('state', play ? 'play' : 'pause');
        };


    init();

  });
