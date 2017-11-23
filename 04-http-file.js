var http = require('http');
var fs = require('fs');
var server = http.createServer();

var handlerRequest = function(request,Response){
	//通过request.url 拿到请求路径
	var url = request.url;
	console.log(url)
	//根据不同的路径处理不同的响应
	if(url === '/'){
		//Response.writeHead(响应状态码，响应头对象);
		Response.writeHead(200,{
			'content-Type':'text/html'
		});
		fs.readFile('./data/index.html','utf8',function(err,data){
			if(err){
				throw err
			}
			Response.end(data);
		});
		// Response.end('index page');
	}else if(url === '/login'){
		Response.writeHead(200,{
			'content-Type':'text/html'
		});
		fs.readFile('./data/login.html','utf8',function(err,data){
			if(err){
				throw err
			}
			Response.end(data);
		});
	}else if(url ==='/register'){//注册
		Response.writeHead(200,{
			'content-Type':'text/html'
		});
		fs.readFile('./data/register.html','utf8',function(err,data){
			if(err){
				throw err
			}
			Response.end(data);
		});
	}else if(url === '/css/main.css'){
		Response.writeHead(200,{
			'content-Type':'text/css'
		});
		fs.readFile('./css/main.css','utf8',function(err,data){
			if(err){
				throw err
			}
			Response.end(data);
		});
	}else if(url === '/a'){
		Response.writeHead(200,{
			'content-Type':'image/jpeg'
		});
		//utf8 是字符编码，读取歌曲，图片，视频等文件时，一定不要指定编码，不管用
		//如果是这种富文本等文件，就不用指定编码，直接发送二进制数据就可以了
		fs.readFile('./img/scimg.jpg',function(err,data){
			if(err){
				throw err
			}
			Response.end(data);
		});
	}else{
		Response.writeHead(200,{
			'content-Type':'text/html'
		});
		fs.readFile('./data/404.html','utf8',function(err,data){
			if(err){
				throw err
			}
			Response.end(data);
		});

	}
};

//和 ajax 相同 content-type 会告知浏览器 我本次发送的 数据是什么类型  这样浏览器才会按照类型渲染数据
server.on('request',handlerRequest);

server.listen(3200,function(){
	console.log('running...');
})