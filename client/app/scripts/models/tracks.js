'use strict';

angular.module('cloudlistApp')
  .factory('Tracks', function (ActiveRecord, API) {
    return ActiveRecord.extend({
      $urlRoot: API.url + '/tracks'
    });
  });