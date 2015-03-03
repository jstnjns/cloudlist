'use strict';

angular.module('cloudlistApp')
  .factory('Player', function($rootScope) {

    function Player() {
      var p = this;

      $rootScope.$on('state', function(event, state) { p.state = state });

      this.audio = new Audio();
      this.audio.onplay = function() { $rootScope.$broadcast('state', 'play' ); };
      this.audio.onpause = function() { $rootScope.$broadcast('state', 'pause'); };
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