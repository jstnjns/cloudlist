'use strict';

angular.module('cloudlistApp')
  .factory('TracksService', function ($rootScope, Tracks) {

    function TracksService() {
      this.tracks = [];

      this.fetch();
    };

    TracksService.prototype.fetch = function() {
      var ts = this;

      Tracks.fetchAll()
        .then(function(response) {
          ts.tracks = response;
        });
    };

    TracksService.prototype.add = function(track) {

    };

    return new TracksService();

  });