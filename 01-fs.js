//	家在操作文件的模块包
//	fs 是 Node 平台提供的核心模块，专门用来操作文件
var fs = require('fs');

//	写入文件
//	fs.writeFile(文件路径，要写入的文件数据，回调处理函数)
//	如果文件不存在，则直接新建
//	如果文件已存在，直接覆盖
// fs.writeFile('./a.txt','hello aaa',function(err){
// 	//回调函数中的 err 表示一个错误对象
// 	//当写文件完成的时候：回调函数会被自动调用
// 	//如果有误 err就是一个对象
// 	//如果没有错误 err就是一个null
// 	if (err) {
// 		console.log('写入文件失败了');
// 	}
// 	console.log('写入文件成功了')
// });

//读取文件
//fs.readFile(文件路径，'指定编码'，回调函数)
fs.readFile('./a.txt','utf-8',function(err,data){
	if (err) {
		throw err
	}
	//data 里面的数据如果不转换成字符里面就是 16进制的编码
	console.log(data.toString('utf8'))
})