'use strict';

angular.module('cloudlistApp')
  .factory('Tracks', function ($scope, ActiveRecord) {
    return ActiveRecord.extend({
      $urlRoot: '/tracks'
    })
  });
