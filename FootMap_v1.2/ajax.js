//获取城市相应坐标
/*
var jsonMapXY={
	"北京":[395,123],
	"上海":[455,195],
	"成都":[275,210],
	"重庆":[320,207],
	"兰州":[280,160],
	"广州":[377,270]
};*/

//ajax的创建过程
function ajax(url,fnSucc,fnFail){
	//创建对象
	if (window.XMLHttpRequest) {//使用没定义的属性  不会报错  出现undefined
		var oAjax=new XMLHttpRequest();
	}
	else{
		var oAjax=new ActiveXObject("Microsoft.XMLHttp");//兼容IE6
	}
	

	//连接服务器
	oAjax.open('GET',url,true);

	//发送请求
	oAjax.send();

	//接收返回
	oAjax.onreadystatechange=function(){//是一个事件的形式，当服务器数据返回时，调用这个事件
		if (oAjax.readyState==4) {//告诉浏览器，客户端与服务器进行到哪一步了
			if (oAjax.status==200) {
				fnSucc(oAjax.responseText);//这个参数会传给调用时的回调函数
			}
			else{
				if (fnFail) {
					fnFail(oAjax.status);
				}
							
			}
		}
	};
}

