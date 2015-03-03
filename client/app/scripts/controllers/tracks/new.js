'use strict';

angular.module('cloudlistApp')
  .controller('TracksNewCtrl', function ($scope, Tracks, SoundcloudService) {


    $scope.url = '';


    $scope.save = function() {

      if ($scope.url == '') return;

      SoundcloudService.parseUrl($scope.url)
        .success(function(data) {

          if (!SoundcloudService.isTrack(data)) return;

          new Tracks({
                name: data.title,
                art: data.artwork_url,
                url: data.uri
              }).$save()
                .then(function(track) {
                  $scope.tracks.push(track);
                  $scope.clear();
                });

        })
        .error(function(err) {

          alert('There was an error.');
          $scope.clear();

        });

    };


    $scope.clear = function() {
      $scope.url = '';
    };


  });