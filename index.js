const fs = require('fs');
const ytdl = require('ytdl-core');

var http = require('http'),
    fileSystem = require('fs'),
    path = require('path');
const PORT = process.env.PORT || 5000


const playwright = require('playwright');

const { chromium } = require('playwright');
(async () => {
	const browser = await chromium.launch({headless: true, args: ['--no-sandbox']});

	const context = await browser.newContext();
	const page = await context.newPage();
	await page.goto('http://whatsmyuseragent.org/');


	const results = await page.$('.intro-text');
	
	const text = await results.evaluate(element => element.innerText);
	console.log("Text ::"+text)
	
})();	
	




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




/*

ytdl('https://www.youtube.com/watch?v=dN-ejqqR0EI')
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


*/
