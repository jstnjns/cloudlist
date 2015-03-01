'use strict';

/**
 * @ngdoc function
 * @name cloudlistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cloudlistApp
 */
angular.module('cloudlistApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
