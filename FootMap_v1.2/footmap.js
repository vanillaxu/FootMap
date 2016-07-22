//获取行间样式
function getStyle(obj,name){
		if (obj.currentStyle) {
			return obj.currentStyle[name];
		}
		else{
			return getComputedStyle(obj,false)[name];
		}
	}
//rgb转hex
function rgb2hex(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x) {
    return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  return ("#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])).toUpperCase();
}

//对于布局太复杂的页面，用class属性操作更有序些
function getByClass(oParent,sClass){ 
		var aEle=oParent.getElementsByTagName('*');
		var aResult=[];
		for (var i = 0; i < aEle.length; i++) {
			if(aEle[i].className==sClass){
				aResult.push(aEle[i]);
			}
		}
		return aResult;
	}

