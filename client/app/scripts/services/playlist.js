'use strict';

angular.module('cloudlistApp')
  .factory('Playlist', function($rootScope, Player) {

    function Playlist() {
      this.tracks = [];
      this.current = 0;
      this.player = Player;
    };

    Playlist.prototype.load = function(tracks) {
      this.tracks = tracks;
    };

    Playlist.prototype.play = function(i) {
      var track = this.tracks[i];

      if (!track) return false;

      $rootScope.$broadcast('track', track);

      this.current = i;
      this.player.load(this.tracks[i].url);
    };

    Playlist.prototype.next = function() {
      console.log('next', this.current + 1);
      this.play(this.current + 1);
    };

    Playlist.prototype.previous = function() {
      this.play(this.current - 1);
    };

    return new Playlist();

  });