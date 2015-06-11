var fs = require('fs');

fs.readFile('tracks.json', function(err, contents) {
  tracks = JSON.parse(contents);
  urls = tracks.map(function(track) { return '"' + track.url + '"'; })
  urls = '[' + urls + ']';

  fs.writeFile('urls.json', urls, function(err) {
    console.log('done');
  });
});
