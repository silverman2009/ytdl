const fs = require('fs');
const ytdl = require('ytdl-core');

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


ytdl('http://www.youtube.com/watch?v=YSuHrTfcikU')
  .pipe(fs.createWriteStream('video.flv') , {quality : "highest"});
