/* 详情页的 js */

/* 分享的图标*/
/*$(function(){
	$(".share").on({
		"mouseover":function(){//鼠标移上上的时候 下拉菜单的出现
			$(".share-icon").stop().fadeTo(300,1);
			$(this).css("border-bottom-color","#fff");
		},
		"mouseout":function(){//移走的时候 下拉菜单消失
			$(".share-icon").stop().fadeTo(300,0);
			$(this).css("border-bottom-color","#ccc");
		}
	})
})*/




/* 图片 选中小图中的图片在大图中显示 */
/*$(function(){
	$(".inner-Simg").find("img").click(function(e){
		e.stopPropagation();//取消冒泡事件
		e.preventDefault();//取消默认事件
		var src = $(this).attr("src");
		$(".inner-Bimg").find("img").attr("src",src);//大图的src 为小图的src
		$(".datu").css({"background":"url('" + src + "') no-repeat"});
	})
})*/



/*  皇冠 下拉列表 */
/*$(function(){
	$(".question").on({
		"mouseover":function(){
			$(".question-list").css("display","block");
		},
		"mouseout":function(){
			$(".question-list").css("display","none");
		}
	});
	$(".question-list").on({
		"mouseover":function(){
			$(".question-list").css("display","block");
		},
		"mouseout":function(){
			$(".question-list").css("display","none");
		}
	});
})*/


/*  查看尺码 */
/*$(function(){//点击查看尺码 弹出框
	$(".size-cheet").click(function(){
		$(".open").css("display","block")
	});
	$(".close").click(function(){
		$(".open").css("display","none")
	})
})*/


/* number 加减 */
/*$(function(){
	var num = $(".count-num").html();
	$(".add").click(function(){//加号点击的时候 加1
		var num1 = $(".last-num").html();//获取仅剩的件数
		if(num<num1){//如果num<num1的时候
			num++;
			$(".count-num").html(num);
			$(".subtract").css("background-position","-100px -150px");
		}else{
			num = num1;
			$(this).attr("disabled","disabled");//加号不能点击
			$(this).css("background-position","-151px -150px");
			$(".subtract").css("background-position","-100px -150px");
			$(".count-num").html(num);
		}
	});
	$(".subtract").click(function(){//减号点击的时候 减1
		if(num>1){//如果大于1 就可以继续减
			num--;
			$(".count-num").html(num);
			$(".add").css("background-position","-51px -150px");
		}else{
			num=0;//如果小于等于1时 不能继续再减
			$(this).attr("disabled","disabled");
			$(this).css("background-position","0px -150px");
			$(".add").css("background-position","-51px -150px");
			$(".count-num").html(num);
		}
	})
})*/


		/* 仅剩几件衣服 存入cookie中 */

/*$(function(){
	var date = new Date();
	date = date.setDate(date.getDate()+10);
	setCookie("conduct-num",$(".last-num").html(),date);
	// console.log($(".last-num").html());
})*/



/* 尺码 */

/*$(function(){
	$(".size-num").click(function(){
		$(this).siblings().css("border-color","#ccc");
		$(this).css("border-color","#f43499");
		$(this).siblings().css("color","#999");
		$(this).css("color","#f43499");
	})
})*/

/* 导航栏固定在顶部 */

/*$(function(){
	$(window).on("scroll",function(e){
		if($(window).scrollTop()>=918){
			$(".info-nav").css({"position":"fixed","top":(0),"z-index":100});
		}else{
			$(".info-nav").css({"position":""});
		}
	})
})
*/
/* 导航连接 */
$(function(){
	/*$(document).click(function(){
		console.log($(".M-conmon").eq(1).offset().top)
	})*/
	$(".info-nav1").click(function(e){
		e.stopPropagation();
		e.preventDefault();
		var index = $(this).index();
		//console.log(index);
		var top = $(".nav-top").eq(index).offset().top;
		$("html,body").scrollTop(top-50);
	})
})

/* 根据滚动条的高度 切换导航中的状态   没有实现该功能*/
/*$(function(){
	$(window).on("scroll",function(e){
		if($(window).scrollTop()>=$(".nav-top").eq(0).offset().top){
			$(".info-nav1").find("a").css("color","#333");
			$(".info-nav1").eq(0).find("a").css("color","#f10180");
			console.log($(".nav-top").eq(0).height)
		}else if($(window).scrollTop()>=($(".nav-top").eq(0).offset().top+$(".nav-top").eq(0).offset().height)){
			$(".info-nav1").find("a").css("color","#333");
			$(".info-nav1").eq(1).find("a").css("color","#f10180")
		}
	})
	
})*/


/* 底部关于我们 切换图 */
/*$(function(){
	$(".about-us-title").find("li").on({
		"mouseover":function(){
			var index = $(this).index();//找到标题的下标 当作一个变量操作
			$(this).siblings().find("a").css("color","#333");//标题的颜色切换
			$(this).find("a").css("color","#f10180");
			$(".ab-u-i").eq(index).siblings().stop().fadeTo(100,0);//下面内容换图片
			$(".ab-u-i").eq(index).stop().fadeTo(100,1);
		}
	})
})*/



/* 放大镜 */
/*$(function(){
	$(".inner-Bimg").mousemove(
			function(e){
				//计算盒子内的鼠标位置：
				var x = e.pageX - $(".inner-Bimg").offset().left;
				var y = e.pageY - $(".inner-Bimg").offset().top;
				//验收，保证放大镜，不能移出盒子
				if(x < 87.5){
					x = 87.5;
				}
				
				if(y < 87.5){
					y = 87.5;
				}

				if(x > 420 - 87.5){
					x = 420 - 87.5;
				}
				if(y > 530 - 87.5){
					y = 530 -87.5;
				}
				//让放大镜跟随鼠标：
				$(".inner-Bimg .fangdajing").css(
					{
						"left":x - 87.5,
						"top":y - 87.5
					}	
				);
				//让大图的background-position，等比例变化
				var beijingx = -(420/175) * (x - 87.5);
				var beijingy = -(530/175) * (y - 87.5);
				$(".datu").css("background-position",beijingx + "px " + beijingy + "px");
			}
		);
		
		$(".inner-Bimg").mouseenter(
			function(){
				$(".fangdajing").show();
				$(".datu").show()
			}
		)
		$(".inner-Bimg").mouseleave(
			function(){
				$(".fangdajing").hide();
				$(".datu").hide();
			}
		)
})*/




