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


ytdl('https://www.youtube.com/watch?v=M_2hlJmSbjo')
  .pipe(fs.createWriteStream('video.mp4') , {quality : "highest"});


http.createServer(function(request, response) {
    var filePath = path.join(__dirname, 'video.mp4');
    var stat = fileSystem.statSync(filePath);

    response.writeHead(200, {
        'Content-Type': 'video/mp4',
        'Content-Length': stat.size
    });

    var readStream = fileSystem.createReadStream(filePath);
    // We replaced all the event handlers with a simple call to readStream.pipe()
    readStream.pipe(response);
})
.listen(PORT);
