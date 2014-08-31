/**
 * hCounter插件
 * @author Huihan2
 * @email huihan2@iflytek.com
 */
(function($) {
	var scrollMethods={
		init:function(options){
			var o = $.extend({
				during : 2000,
				height:30,
				width:20,
				curNumber:100
			}, options || {});
			var self = this;
			this.each(function(){
				//获得之前的数据
				var tempObj=$(this).data("scrollNumber");
				self.data('scrollNumber', o);
				if(!tempObj||tempObj=="undefined"){
					scrollMethods._createDom.call(self);
				}else{
					scrollMethods._changeDom.call(self,tempObj.curNumber);
				}
				scrollMethods._turnNumber.call(self,o.curNumber);
			});
			return this;
		},
		_turnNumber:function(curNumber){
			var o=this.data("scrollNumber");
			var curLength=scrollMethods._formatterNumber.call(this,curNumber).length;
			for (var i = 0; i < curLength; i++) {
				var tempUnit=scrollMethods._formatterNumber.call(this,curNumber).charAt(i);
				if (tempUnit == '.'){
				} else if (tempUnit == ',') {
					this.find(".hscroll-number-wrap").children("li:eq(" + i + ")").css({"width":""}).removeClass("numberunit-wrap").addClass("number-dot").html("<span>,</span>");
				} else {
					if(this.find(".hscroll-number-wrap").children("li:eq(" + i + ")").hasClass("number-dot")){
						this.find(".hscroll-number-wrap").children("li:eq(" + i + ")").removeClass("number-dot").addClass("numberunit-wrap").width(o.width).empty();
						var numberUnit="<ul style='width:"+o.width+"px;height:"+parseInt(o.height*10)+"px;line-height:"+parseInt(o.height)+"px' class='each-number-wrap'><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li></ul>";
						this.find(".hscroll-number-wrap").children("li:eq(" + i + ")").append(numberUnit);
					}
					this.find(".hscroll-number-wrap").children("li:eq(" + i + ")").find("ul").stop().animate({
						"top":parseInt(scrollMethods._formatterNumber.call(this,curNumber).charAt(i))*-1*o.height+"px"
					});
				}
			}
			return this;
		},
		_changeDom:function(oldNumber){
			var o=this.data("scrollNumber");
			var difference=scrollMethods._formatterNumber.call(this,o.curNumber).length-scrollMethods._formatterNumber.call(this,oldNumber).length;
			if (difference >= 0) {
				var numberUnit="<ul style='width:"+o.width+"px;height:"+parseInt(o.height*10)+"px;line-height:"+parseInt(o.height)+"px' class='each-number-wrap'><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li></ul>";
				for (var j = 0; j < difference; j++) {
					var $curUnit=$("<li class='numberunit-wrap' style='width:"+o.width+"px;height:"+o.height+"px;'>"+numberUnit+"</li>");
					this.find(".hscroll-number-wrap").append($curUnit);
				}
			} else {

				for (var j = 0; j < (-1 * difference); j++) {
					this.find(".hscroll-number-wrap").children("li:last").remove();
				}
			}
			return this;
		},
		_createDom:function(){
			var o=this.data("scrollNumber");
			tagName = (typeof this.prop === 'function') ? this.prop('tagName') : this.attr('tagName');
			var $panel = tagName === 'UL' ? this : $('<ul class="hscroll-number-wrap"></ul>').appendTo(this);
			//数字单元
			var numberUnit="<ul style='width:"+o.width+"px;height:"+parseInt(o.height*10)+"px;line-height:"+parseInt(o.height)+"px' class='each-number-wrap'><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li></ul>";
			var numberStr=scrollMethods._formatterNumber.call(this,o.curNumber);
			for(var i=0;i<numberStr.length;i++){
				if(numberStr.charAt(i)!=","){
					var $curUnit=$("<li class='numberunit-wrap' style='width:"+o.width+"px;height:"+o.height+"px;'>"+numberUnit+"</li>");
					$curUnit.find(".each-number-wrap").css("top",o.height*-1*parseInt(numberStr.charAt(i))+"px")
					$panel.append($curUnit);
				}else{
					$panel.append("<li class='number-dot' style='height:"+o.height+"px;'><span>,</span></li>");
				}
			}
			return this;
		},
		_formatterNumber:function(number){//加上进位的逗号
			number += "";
			var newStr = "";
			var length = number.length;
			for (var i = 0, j = length; j >= 0; j--, i++) {
				newStr = number.charAt(j) + newStr;
				if (i != 0 && (i ) % 3 == 0 && i != number.length) {
					newStr = "," + newStr;
				}
			}
			return newStr;
		}
	};
	$.fn.scrollNumber=function(scrollMethod){
		return scrollMethods.init.apply(this, arguments);
	}
})(jQuery);
