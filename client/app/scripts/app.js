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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
