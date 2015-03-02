'use strict';

/**
 * @ngdoc function
 * @name cloudlistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cloudlistApp
 */
angular.module('cloudlistApp')
  .controller('TracksCtrl', function ($scope, Tracks) {
    $scope.tracks = [
      {
        url: 'https://soundcloud.com/jacku/sets/skrillex-diplo-present-jack-u'
      },
      {
        url: 'https://soundcloud.com/maddecent/boaz-van-de-beatz-partymad-feat-ronnie-flex-mr-polska'
      }
    ];

    $scope.save = function() {
      var values = angular.copy($scope.track);

      Tracks.new(values).$save();
    };

    $scope.clear = function() {
      $scope.url = '';
    };
  });
