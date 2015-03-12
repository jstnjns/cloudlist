angular.module('cloudlistApp')
  .filter('toMinSec', function() {
    return function(input) {
      if (input === undefined) return;

      // Case  4500 seconds (should be 01:15:00)
      // Case: 90 seconds   (should be 00:01:30)

      var hours, minutes, seconds, output;

      if (input / 3600 >= 1) {
        // has hours
        hours = Math.floor(input / 3600);

      } else {
        hours = 0;
      }

      if ((input % 3600) / 60 >= 1) {
        // has minutes
        minutes = Math.floor((input % 3600) / 60);

      } else {
        minutes = 0;
      }

      // Whatever is leftover are the seconds
      seconds = input % 60;

      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;

      if (hours == 0) {
        output = minutes + ':' + seconds;
      } else {
        output = hours + ':' + minutes + ':' + seconds;
      }

      return output;

    };
  });
