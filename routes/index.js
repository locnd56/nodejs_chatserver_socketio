var express = require('express');
var router = express.Router();
var fs = require('fs')
var mime = require('mime')
var co = require('co');
var Rooms = require('services/service');
var cache = {}
var app = require('app')
var http = require('http')

function send404(res){
	res.writeHead(404, {'Content-Type':'text/plain'});
	res.write('Error 404: resource not found');
	res.end();
}

function sendFile(res, filePath, fileContents){
	res.writeHead(200, {'content-type': mime.lookup(path.basename(filePath))});
	res.end(fileContents);
}

// Serving static files
function serveStatic(res, cache, absPath){
	if(cache[absPath]){
		sendFile(res, absPath, cache[absPath]);
	}else{
		fs.exists(absPath, function(exists){
			if(exists){
				fs.readFile(absPath,function(err,data){
				if (err) {
					send404(res)
				}else{
					cache[absPath] = data;
					sendFile(res,absPath, data);
				}
				})
			}else{
				send404(res);
			}
		});
	}
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  	 title: 'Express' ,
  	 command_title: "Chat Command: ",
  	 change_name_title: "Change Name",
  	 create_join_room: "Join/create room: ",
  	 change_name_guide: "/name [username]",
  	 create_join_room_guide: "/join [room]"
  });
  
});

module.exports = router;
