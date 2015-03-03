'use strict';

angular.module('cloudlistApp')
  .controller('TracksNewCtrl', function ($scope, Tracks, TracksService) {


    $scope.url = '';


    $scope.save = function() {

      TracksService.parseUrl('https://soundcloud.com/djfire789/phyersquad-go-back-1?in=djfire789/sets/phyersquad-thesquadlifechronicles-vol-1')
        .success(function(data) {

          console.log(data);

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
        })

    };


    $scope.clear = function() {
      $scope.url = '';
    };


  });