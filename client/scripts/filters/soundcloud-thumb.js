angular.module('cloudlistApp')
  .filter('scthumb', function() {
    return function(string, size) {
      if (!string) return;

      return string.replace('large', size);
    }
  })