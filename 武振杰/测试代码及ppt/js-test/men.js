/* 分类模块 star*/
/*$(function(){
	$(".sort-right-ul").find("a").on({
		"mouseover":function(){//鼠标移上去的时候i span 变颜色
			$(".sort-right-ul").find("i").removeClass("add-color");//先把其他的原本样式清除
			$(".sort-right-ul").find("span").removeClass("add-color");
			$(this).find("i").addClass("add-color");
			$(this).find("span").addClass("add-color");

		},
		"mouseout":function(){
			$(this).find("i").removeClass("add-color");//鼠标移走 的时候 全部移除添加的 类add-color
			$(this).find("span").removeClass("add-color");
		}
	});
	$(".sort-right-ul").find("a").on("click",function(e){
			e.stopPropagation();//取消冒泡事件
			e.preventDefault();//取消系统默认的事件
			$(".sort-right-ul").find("i").removeClass("add-color");
				$(".sort-right-ul").find("span").removeClass("add-color");
			$(".sort-right-ul").find("a").css("border-color","#fff");
			$(".sort-right-ul").find("a").css("color","#666");
			$(this).css("border-color","#f32b80");
			$(this).css("color","#f32b80");
			$(this).find("i").addClass("add-color");
			$(this).find("span").addClass("add-color");
		}
	);
})*/



/* 点击全部分类模块 商品模块出现不同商品*/
/*	$(function(){
		$(".conmon-li1").find("a").click(function(){
			$(".container").find("ul").css("display","none");
			$(".container").find("#conduct-ul1").css("display","block")
		});
		$(".conmon-li2").find("a").click(function(){
			$(".container").find("ul").css("display","none");
			$(".container").find("#conduct-ul2").css("display","block")
		});
	})*/




/* 尺寸模块 */
/*$(function(){
	$(".size-right-ul").find("a").on({
		"mouseover":function(){//鼠标移上 清除左右的类 给该选择的添加类
			$(this).siblings().removeClass("add-color");
			$(this).addClass("add-color");
		},
		"mouseout":function(){
			$(this).removeClass("add-color");//鼠标移走的时候 清除该类名
		}
	});
	$(".size-right-ul").find("a").on("click",function(e){//取消默认事件 以及冒泡事件
			e.stopPropagation();
			e.preventDefault();
			$(".size-right-ul").find("a").css({"border-color":"#fff","color":"#666"})
			$(this).css({"border-color":"#f32b80","color":"#f32b80"});

		}
	);
})*/



/* 综合 */
/*$(function(){
	$(".composite").find("li").click(function(e){//当点击的时候 背景 以及颜色变 
		e.stopPropagation();
		e.preventDefault();
		$(this).siblings().css("background","#f5f5f5");
		$(this).css("background","#f32b80");
		$(".composite").find("li").find("a").css("color","#333");
		$(this).find("a").css("color","white");

	})
})*/



/* 商品 样式*/
/*$(function(){
	$(".item-after").find("li").on({
		"mouseover":function(){
			var src = $(this).parent().parent().siblings(".item-img").find("img").attr("src");
			var src1 = $(this).find("img").attr("src");
			$(this).parent().parent().siblings(".item-img").find("img").attr("src",src1);
			//图片框变化
			$(this).siblings().css("border-color","#ccc");
			$(this).css("border-color","#f32b80");
		},
		"mouseout":function(){
			var src = $(this).parent().find("li").eq(0).find("img").attr("src")
			$(this).parent().parent().siblings(".item-img").find("img").attr("src",src);
		}
	})
})*/
















