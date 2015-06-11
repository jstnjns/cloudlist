'use strict';

angular.module('cloudlistApp')
  .factory('Tracks', function ($rootScope, $http, Track, API) {


    var verbs = {
          'created': 'add',
          'updated': 'change',
          'destroyed': 'remove'
        };


    var Tracks = {

          listeners: {},

          init: function() {
            var that = this;

            // Sockets
            // io.socket.on('tracks', function(event) {
            //   that.trigger(verbs[event.verb], event.data || event.previous)
            // });

            return this;
          },

          get: function(callback) {
            var that = this;

            // Standard
            $http
              .get(API.url + '/tracks')
              .then(function(tracks) {
                that.add(tracks);

                if(callback && typeof callback == 'function') callback(tracks);
              });

            // Sockets
            // io.socket.get('/tracks', function(tracks) {
            //   $rootScope.$apply(function() {
            //     that.add(tracks);

            //     if(callback && typeof callback == 'function') callback(tracks);
            //   });
            // });

            return this;
          },

          create: function(data, callback) {
            var that = this;

            Track.create(data, function(track) {
              that.add(track);

              if(callback && typeof callback == 'function') callback(track);
            });

            return this;
          },

          add: function(track) {
            var that = this;

            if(track.length > 1) {
              track.forEach(function(t) { that.add(t); });
              return this;
            }

            this.trigger('add', track);

            return this;
          },

          remove: function(track) {
            var that = this;

            if(track.length > 1) {
              track.forEach(function(t) { that.add(t); });
              return this;
            }

            this.trigger('remove', track);

            return this;
          },

          on: function(key, callback) {
            if(!this.listeners[key]) this.listeners[key] = [];
            this.listeners[key].push(callback);

            return this;
          },

          trigger: function(key, value) {
            var that = this;

            if(that.listeners[key] && that.listeners[key].length > 0) {
              that.listeners[key].forEach(function(callback) {
                if(!$rootScope.$$phase) {
                  $rootScope.$apply(function() {
                    callback(value);
                  });
                }
                else {
                  callback(value);
                }
              });
            }

            return this;
          }

        };

    return Tracks.init();

  })
  .factory('Track', function($rootScope, $injector) {

    return {

      save: function(track, callback) {
        if(!track.id) return this.create(track, callback);

        // Standard
        $http
          .put(API.url + '/tracks/' + track.id, track)
          .then(function(response) {
            if(callback && typeof callback == 'function') callback(response);
          });

        // Sockets
        // io.socket.put('/tracks/' + track.id, track, function(response) {
        //   $rootScope.$apply(function() {
        //     if(callback && typeof callback == 'function') callback(response);
        //   });
        // });

      },

      create: function(data, callback) {

        // Standard
        $http
          .post(API.url + '/tracks', data)
          .then(function(response) {
            if(callback && typeof callback == 'function') callback(response);
          });

        // Sockets
        // io.socket.post('/tracks', data, function(response) {
        //   $rootScope.$apply(function() {
        //     if(callback && typeof callback == 'function') callback(response);
        //   });
        // });

      },

      destroy: function(track, callback) {
        if(!track.id) return;

        var Tracks = $injector.get('Tracks');

        // Standard
        $http
          .delete(API.url + '/tracks/' + track.id)
          .then(function(response) {
            Tracks.remove(response);

            if(callback && typeof callback == 'function') callback(response);
          });

        // Sockets
        // io.socket.delete('/tracks/' + track.id, function(response) {
        //   $rootScope.$apply(function() {
        //     Tracks.remove(response);

        //     if(callback && typeof callback == 'function') callback(response);
        //   });
        // });

      }

    }

  });