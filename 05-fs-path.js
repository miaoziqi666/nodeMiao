var fs = require('fs');
//文件操作中，路径如果是以/开头的，则直接取当前脚本文件所处磁盘根目录去找;
var path = require('path');

fs.readFile('a.txt','utf8',function(err,data){
	if (err) {
		throw err
	}
	console.log(data)
})