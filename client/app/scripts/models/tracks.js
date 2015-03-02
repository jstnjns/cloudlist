'use strict';

angular.module('cloudlistApp')
  .factory('Tracks', function (ActiveRecord) {
    return ActiveRecord.extend({
      $url: 'http://localhost:1337/tracks'
    });
  });