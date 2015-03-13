'use strict';

angular.module('cloudlistApp')
  .directive('plTracker', function(Player) {
    return {
      scope: {
        plTrackerValue: '='
      },
      replace: true,
      template: '<div class="progress">' +
                  '<div class="progress-bar" style="width:{{plTrackerValue}}%"></div>' +
                '</div>',

      link: function($scope, $elm, $attrs) {

        var $progress = $elm,
            $bar = $('.progress-bar', $progress),

            init = function() {
              $progress.on('click', function(event) {
                var progLeft = $progress.offset().left,
                    progWidth = $progress.width(),
                    clickLeft = event.clientX,
                    diffLeft = clickLeft - progLeft,

                    percent = diffLeft / progWidth;

                Player.position(percent);
              });
            };


        init();


      }
    }
  });