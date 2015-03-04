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