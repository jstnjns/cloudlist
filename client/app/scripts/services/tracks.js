'use strict';

angular.module('cloudlistApp')
  .service('TracksService', function ($http) {

    return {

      parseUrl: function(url) {
        return $http.get('http://api.soundcloud.com/resolve.json?client_id=7a9b6d08ffc80df2e8eaf0300a9694ac&url=' + url);
      }

    };

  });