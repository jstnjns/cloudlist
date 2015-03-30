'use strict';

angular.module('cloudlistApp')
  .service('SoundcloudService', function ($http, Soundcloud) {

    return {


      addClient: function(url) {
        if (!url) return false;

        var connector = url.match(/\?/) ? '&' : '?';

        return url + connector + 'client_id=' + Soundcloud.client_id;
      },


      parseUrl: function(url) {
        return $http.get(
          this.addClient(Soundcloud.resolve_url + '?url=' + url)
        );
      },


      getTrack: function(id) {
        return $http.get(
          this.addClient('http://api.soundcloud.com/tracks/' + id + '.json')
        )
      },


      isTrack: function(entity) {
        return entity.kind == 'track';
      }


    };

  });