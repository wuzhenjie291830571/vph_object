$(function(){
	var count = 0;
	$("#btn").on("click",function(){//按钮的点击事件
		$.getJSON("../json/loadmore.json",function(response,status,xhr){
			if(status=="success"){
				var arr = response;
				if(count<arr.length){//用count来操作数组的下标
					for(var i = 0;i<arr.length;i++){//对整个数组进行循环
						if(count==i){
							var divList = $("<div class='list'></div>");//创建一个div
							var divListTop = $("<div class='list-top'></div>");//创建div的头部
							divList.append(divListTop);
							var A = $("<a href=''></a>");
							divListTop.append(A);
							var src = "../images/" + arr[i].src;//获取json数据中的图片路径
							var Img = $("<img src='"+src+"'>");
							A.append(Img);
							var divBootom = $("<div class='list-bottom'></div>");
							divList.append(divBootom);
							var A1 = $("<a href=''id='title'></a>");
							var title = arr[i].title;//获取接送数据中的title属性值
							A1.html(title);
							divBootom.append(A1);
							var span = $("<span></span>");
							var time = arr[i].time;//获取接送数据中的time属性值
							span.html(time);
							divBootom.append(span);
							$(".loadmore-inner").append(divList);
						}
					}
					count++;//如果count++大于数组的长度 就不再加载数据
				}else{
					$("#btn").val("没有更多了");
					$("#btn").attr("disabled","disabled");
					$("#btn").css({"background":"#ccc","color":"#999","border":"#ccc"});
				}
			}
		})
	})
})