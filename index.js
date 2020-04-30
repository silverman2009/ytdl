const fs = require('fs');
const ytdl = require('ytdl-core');

var http = require('http'),
    fileSystem = require('fs'),
    path = require('path');
const PORT = process.env.PORT || 5000
 /*
  ytdl.getInfo("watch?v=UGc96kSdc5s", (err, info) => {
	  
	  
	  console.log(info.formats)
  if (err) throw err;
  let format = ytdl.chooseFormat(info.formats, { quality: '134' });
  if (format) {
    console.log('Format found!');
  }
});*/
 

 
 /*
 ytdl.getInfo("UGc96kSdc5s", (err, info) => {
  if (err) throw err;
  let format = ytdl.chooseFormat(info.formats, { quality: '46' });
  if (format) {
    console.log(format);
  }
});*/


ytdl('https://www.youtube.com/watch?v=ZkpGeCCLwKg')
  .pipe(fs.createWriteStream('video.flv') , {quality : "highest"});


http.createServer(function(request, response) {
    var filePath = path.join(__dirname, 'video.flv');
    var stat = fileSystem.statSync(filePath);

    response.writeHead(200, {
        'Content-Type': 'video/flv',
        'Content-Length': stat.size
    });

    var readStream = fileSystem.createReadStream(filePath);
    // We replaced all the event handlers with a simple call to readStream.pipe()
    readStream.pipe(response);
})
.listen(PORT);
