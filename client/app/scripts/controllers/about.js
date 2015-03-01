'use strict';

/**
 * @ngdoc function
 * @name cloudlistApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cloudlistApp
 */
angular.module('cloudlistApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
