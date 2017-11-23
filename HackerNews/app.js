var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request',function(req,res){
	var url = req.url;
	if(url === '/'){
		fs.readFile('./views/views.html','utf8',function(err,data){
			if (err) {
				throw err;
			}
			//对于发送的响应数据 只能是二进制 数据 
			//或者是 字符串
			//但字符串也会被转换为二进制 再发送
			//如果读出来的文本文件内容 想要进一步处理，那你一定要根据编码转成普通字符串再使用处理
			//如果读出来的文本文件不处理，则可以通过response.end() 直接发送
			//如果是二进制 则直接发送
			res.writeHead(200,{
				'content-Type':'text/html'
			})
			res.end(data)
		})
	}else if(url.startsWith('/static')){
		console.log(url);
		var staticFilePath = '.' + url;
		fs.readFile(staticFilePath,function(err,data){
			if (err) {
				throw err
			}
			res.end(data)
		})
	}
});

server.listen(3000,function(){
	console.log('Server is running at port 3000.');
	console.log('	Please visit http://127.0.0.1:3000')
})