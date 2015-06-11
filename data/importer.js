urls = [
  'https://api.soundcloud.com/tracks/192743301',
  'https://api.soundcloud.com/tracks/27610789',
  'https://api.soundcloud.com/tracks/163684297'
];

sendEm = function() {
  getInfo(urls[0], function(track) {

    $.post('/tracks',
      {
        name: track.title,
        url: track.uri,
        art: track.artwork_url,
        meta: track
      },
      function(response) {
        console.log(urls.shift());
        sendEm();
      }
    );

  });
};

getInfo = function(url, callback) {
  $.get(
    'http://api.soundcloud.com/resolve.json?url=' + url + '&client_id=7a9b6d08ffc80df2e8eaf0300a9694ac',
    function(response) {
      callback(response);
    }
  );
};