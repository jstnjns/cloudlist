'use strict';

/**
 * @ngdoc overview
 * @name cloudlistApp
 * @description
 * # cloudlistApp
 *
 * Main module of the application.
 */
angular
  .module('cloudlistApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ActiveRecord'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/tracks.html',
        controller: 'TracksCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

SC.initialize({
  client_id: '7a9b6d08ffc80df2e8eaf0300a9694ac'
});