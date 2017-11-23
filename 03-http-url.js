var http = require('http');

var server = http.createServer();

var handlerRequest = function(request,Response){
	//通过request.url 拿到请求路径
	var url = request.url;

	//根据不同的路径处理不同的响应
	if(url === '/'){
		//Response.writeHead(响应状态码，响应头对象);
		Response.writeHead(200,{
			'content-Type':'text/html'
		});
		Response.end('index page');
	}else if(url === '/login'){
		Response.writeHead(200,{
			'content-Type':'text/html'
		});
		Response.end('login page');
	}else if(url ==='/register'){//注册
		Response.writeHead(200,{
			'content-Type':'text/html'
		});
		Response.end('register page');
	}else{
		Response.writeHead(200,{
			'content-Type':'text/html'
		});
		Response.end('<strong>aaa</strong>');
	}
};
//和 ajax 相同 content-type 会告知浏览器 我本次发送的 数据是什么类型  这样浏览器才会按照类型渲染数据
server.on('request',handlerRequest);

server.listen(3000,function(){
	console.log('running...');
})