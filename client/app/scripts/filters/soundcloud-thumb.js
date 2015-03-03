angular.module('cloudlistApp')
  .filter('scthumb', function() {
    return function(string, size) {
      return string.replace('large', size);
    }
  })