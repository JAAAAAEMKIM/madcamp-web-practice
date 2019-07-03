
//modules
var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    response.end(queryData.id);
    //console.log(__dirname+url);
    //response.end(fs.readFileSync(__dirname + url)); //사용자가 뭐 클릭했는지 알려줌.

});
app.listen(3000);
