'use strict';

angular.module('cloudlistApp')
  .factory('Player', function($rootScope) {

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
        console.log('time', audio.currentTime);
        $rootScope.$broadcast('time', audio.currentTime, audio);
      }
    };

    Player.prototype.get = function(key) {
      return this[key];
    };

    Player.prototype.load = function(src) {
      this.audio.src = src;
      this.play();
    };

    Player.prototype.play = function(play) {
      this.audio[(play || play == undefined) ? 'play' : 'pause']();
    };

    Player.prototype.pause = function() {
      this.play(false);
    }

    return new Player();

  });