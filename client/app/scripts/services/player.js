'use strict';

angular.module('cloudlistApp')
  .factory('Player', function($rootScope, SoundcloudService) {

    function Player() {
      var audio = this.audio = new Audio();

      this.audio.onplay = function(event) {
        $rootScope.$broadcast('state', 'play', audio);
      };
      this.audio.onpause = function(event) {
        $rootScope.$broadcast('state', 'pause', audio);
      };
      this.audio.onended = function(event) {
        $rootScope.$broadcast('state', 'ended', audio);
      };
      this.audio.ontimeupdate = function(event) {
        $rootScope.$broadcast('time', audio.currentTime, audio);
      }
    };

    Player.prototype.get = function(key) {
      return this[key];
    };

    Player.prototype.load = function(src) {
      var p = this;

      SoundcloudService
        .parseUrl(src)
        .success(function(track) {
          p.audio.src = SoundcloudService.addClient(track.stream_url)
          p.play();
        });
    };

    Player.prototype.play = function(play) {
      this.audio[(play || play == undefined) ? 'play' : 'pause']();
    };

    Player.prototype.pause = function() {
      this.play(false);
    };

    Player.prototype.position = function(percent) {
      this.audio.currentTime = this.audio.duration * percent;
    };

    return new Player();

  });