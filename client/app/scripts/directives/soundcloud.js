'use strict';

angular.module('cloudlistApp')
  .directive('scStream', function($http, SoundcloudService, Player) {
    return {
      scope: {
        scTrackUrl: '=',
        scAudio: '=?'
      },

      link: function($scope, $elm, $attrs) {


        var init = function() {
              $scope.$watch('scTrackUrl', parse);
            },


            parse = function() {
              SoundcloudService.parseUrl($scope.scTrackUrl)
                .success(render);
            },


            render = function(track) {
              Player.load(SoundcloudService.addClient(track.stream_url))
            };


        init();


      }
    }
  });

angular.module('cloudlistApp')
  .directive('scEmbed', function ($http) {
    return {
      scope: {
        scTrackUrl: '='
      },

      link: function($scope, $elm, $attrs) {

        var widget,


            init = function() {
              $scope.$watch('scTrackUrl', render);
            },


            render = function() {
              SC.oEmbed($scope.scTrackUrl, { auto_play: true }, function(oEmbed) {
                var $player = $(oEmbed.html);

                widget = SC.Widget($player.get(0));

                widget.bind(SC.Widget.Events.READY, function() { console.log('READY'); });
                widget.bind(SC.Widget.Events.PLAY, function() { console.log('PLAY'); });
                widget.bind(SC.Widget.Events.FINISH, function() { console.log('FINISH'); });

                $elm.html($player);
              });
            };


        init();


      }
    };
  });