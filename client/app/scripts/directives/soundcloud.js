'use strict';

angular.module('cloudlistApp')
  .directive('scEmbed', function ($http) {
    return {
      scope: {
        scTrackUrl: '='
      },

      link: function($scope, $elm, $attrs) {

        var widget;

        SC.oEmbed($scope.scTrackUrl, { auto_play: true }, function(oEmbed) {
          var $player = $(oEmbed.html);

          widget = SC.Widget($player.get(0));

          widget.bind(SC.Widget.Events.READY, function() { console.log('READY'); });
          widget.bind(SC.Widget.Events.PLAY, function() { console.log('PLAY'); });
          widget.bind(SC.Widget.Events.FINISH, function() { console.log('FINISH'); });

          $elm.html($player);
        });

      }
    };
  });


angular.module('cloudlistApp')
  .directive('scStream', function($http) {
    return {
      scope: {
        scTrackUrl: '='
      },

      link: function($scope, $elm, $attrs) {

        $http
          .get('http://api.soundcloud.com/resolve.json?client_id=7a9b6d08ffc80df2e8eaf0300a9694ac&url=' + $scope.scTrackUrl)
          .success(function(data, status, headers, config) {
            var track = data.tracks && data.tracks[0] && data.tracks[0].id || data.id;

            SC.stream('/tracks/' + track, function(sound){
              sound.play();
            });
          });

      }
    }
  });