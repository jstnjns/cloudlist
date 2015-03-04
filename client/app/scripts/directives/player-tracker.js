'use strict';

angular.module('cloudlistApp')
  .directive('plTracker', function() {
    return {
      scope: {
        scAudio: '='
      },

      template: '<div class="progress"></div>'

      link: function($scope, $elm, $attrs) {


        var audio,

            init = function() {
              audio = $scope.scAudio
            };


        init();


      }
    }
  });