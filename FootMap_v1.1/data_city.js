//获取城市相应坐标
var jsonMapXY={
	"北京":[395,123],
	"上海":[455,195],
	"成都":[275,210],
	"重庆":[320,207],
	"兰州":[280,160],
	"广州":[377,270]
};
function getMapXY(name){
	return jsonMapXY[name];
}

