'use strict';

angular.module('cloudlistApp')
  .factory('Player', function($rootScope, SoundcloudService) {

    function Player() {
      var p = this;

      this.audio = new Audio();
      this.savedVolume = 1;
      this.isTweening = false;

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

      $(document.body).keydown(function(event) {
        p._keydown.call(p, event);
      });
    };

    Player.prototype._keydown = function(event) {
      switch(event.keyCode) {
        case 32:
          this.toggle();
          event.preventDefault();
          return false;
          break;
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
      this[this.state != 'playing' ? 'play' : 'pause']();
    };

    Player.prototype.play = function(play) {

      var fromVolume = this.audio.volume,
          toVolume   = this.savedVolume;

      this.audio.play();
      this.tweenVolume(fromVolume, toVolume);

    };

    Player.prototype.tweenVolume = function(fromVolume, toVolume, callback) {
      // Don't run tween if tween is already running
      if (this.isTweening) { return }

      this.isTweening = true;

      var difference    = toVolume - fromVolume,
          increment     = (difference / 10),
          p             = this,
          tweenInterval = setInterval(function(){
            if (p.audio.volume == toVolume) {
              clearInterval(tweenInterval);
              p.isTweening = false;
              if(callback && typeof callback == "function") {
                callback.call(p);
              }
              return
            }

            var newVolume = Number(p.audio.volume.toFixed(2)) + increment;
            if (newVolume < 0) { newVolume = 0 };
            if (newVolume > 1) { newVolume = 1 };
            p.audio.volume = newVolume;
          }, 20);
    };

    Player.prototype.pause = function() {
      // lower the volume
      var fromVolume = this.audio.volume,
          toVolume   = 0;

      this.savedVolume = this.audio.volume;
      this.tweenVolume(fromVolume, toVolume, function(){
        // done!
        this.audio.pause();
      });
    };

    Player.prototype.position = function(percent) {
      this.audio.currentTime = this.audio.duration * percent;
    };

    return new Player();

  });
