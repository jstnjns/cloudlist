/**
* Tracks.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    name: {
      type: 'string'
    },

    art: {
      type: 'string',
    },

    url: {
      type: 'string',
      required: true
    },

    is_played: {
      type: 'boolean',
      defaultsTo: false
    },

    is_skipped: {
      type: 'boolean',
      defaultsTo: false
    },

    is_liked: {
      type: 'boolean',
      defaultsTo: false
    }
  }

};

