'use strict';

angular.module('cloudlistApp')
  .factory('Player', function($rootScope, SoundcloudService) {

    function Player() {
      var p = this;

      this.audio = new Audio()

      this.audio.onplay = function(event) {
        $rootScope.$broadcast('state', 'play', p.audio);
        p.state = 'playing';
      };
      this.audio.onpause = function(event) {
        $rootScope.$broadcast('state', 'pause', p.audio);
        p.state = 'paused';
      };
      this.audio.onended = function(event) {
        $rootScope.$broadcast('state', 'ended', p.audio);
        p.state = 'ended';
      };
      this.audio.ontimeupdate = function(event) {
        $rootScope.$broadcast('time', p.audio.currentTime, p.audio);
      }

      $(document.body).keyup(this._keyup);
    };

    Player.prototype._keyup = function(event) {
      switch(event.keyCode) {
        case 32:

      }
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

    Player.prototype.toggle = function() {
      this.audio[this.state != 'playing' ? 'play' : 'pause']();
    };

    Player.prototype.play = function(play) {
      this.audio.play();
    };

    Player.prototype.pause = function() {
      this.audio.pause();
    };

    Player.prototype.position = function(percent) {
      this.audio.currentTime = this.audio.duration * percent;
    };

    return new Player();

  });