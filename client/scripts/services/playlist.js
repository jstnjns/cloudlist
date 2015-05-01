'use strict';

angular.module('cloudlistApp')
  .factory('Playlist', function($rootScope, Player) {

    function Playlist() {
      this.tracks = [];
      this.currentTrack = null;
      this.shuffle = false;
      this.repeat = false;
      this.player = Player;

      var pl = this;

      $rootScope.$on('state', function(event, state) {
        switch(state) {
          case 'ended':
            pl.continue();
        }
      });
    };

    Playlist.prototype.load = function(tracks) {
      this.tracks = tracks;
    };

    Playlist.prototype.play = function(i) {
      var track = this.tracks[i];

      if (!track) return false;

      $rootScope.$broadcast('track', track);

      this.currentTrack = i;
      this.player.load(this.tracks[i].url);
    };

    Playlist.prototype.continue = function() {
      if (this.shuffle) this.random();
      if (this.repeat) this.replay();
      else this.next();
    };

    Playlist.prototype.next = function(options) {
      this.play(++this.currentTrack);
    };

    Playlist.prototype.previous = function() {
      this.play(--this.currentTrack);
    };

    Playlist.prototype.random = function() {
      var random = Math.floor(Math.random() * this.tracks.length);

      this.play(random);
    };

    Playlist.prototype.replay = function() {
      this.play(this.currentTrack);
    };

    Playlist.prototype.add = function(track) {
      this.tracks.push(track);
    };

    Playlist.prototype.remove = function(track) {
      this.tracks = _.filter(this.tracks, function(t) {
        return t.id != track.id;
      });
    };

    return new Playlist();

  });