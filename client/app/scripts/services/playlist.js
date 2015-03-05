'use strict';

angular.module('cloudlistApp')
  .factory('Playlist', function($rootScope, Player) {

    function Playlist() {
      this.tracks = [];
      this.current = null;
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
      this.play(++this.current);
    };

    Playlist.prototype.previous = function() {
      this.play(--this.current);
    };

    Playlist.prototype.add = function(track) {
      this.tracks.push(track);
    };

    return new Playlist();

  });