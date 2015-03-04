'use strict';

angular.module('cloudlistApp')
  .controller('CurrentCtrl', function ($scope, Tracks, Player) {


    var init = function() {
          $scope.$on('state', onStateChange);
        },


        onStateChange = function(event, state) {
          console.log('onStateChange', state);
          $scope.$apply(function() {
            $scope.state = state;
          });
        },


        toggle = $scope.toggle = function() {
          Player.play(Player.state != 'play');
        };


    init();


  });
