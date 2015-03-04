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
      if (!this.tracks[i]) return false;

      this.current = i;
      this.player.load(this.tracks[i]);
    };

    Playlist.prototype.next = function() {
      this.player.play(this.current++);
    };

    Playlist.prototype.previous = function() {
      this.player.play(this.current--);
    };

    Playlist.prototype.get = function(key) {
      return this[key];
    };

    return new Playlist();

  });