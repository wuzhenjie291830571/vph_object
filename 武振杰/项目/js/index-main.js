/* 导航栏 banner轮播图 整体主体部分 */
/*---------------- 导航栏固定在顶部 -------------------*/
$(function(){
	$(window).on("scroll",function(){
		if($(window).scrollTop()>=170){
			$(".main-nav").css({"position":"fixed","top":0,"z-index":100});
			$(".mian-nav").stop().animate({"top":"0px"},500)
		}else{
			$(".main-nav").css({"position":""});
		}
	})
})
/*---------------- banner -------------------*/
$(function(){

    $("#lunbo-ul2").find("li").mouseover(function(){
        clearInterval(timer);
        $(this).siblings().attr("class","");
        $(this).attr("class","lunbo-active");
        $("#lunbo-ul1").find("li").stop().fadeTo(300,0);
        $("#lunbo-ul1").find("li").eq($(this).index()).stop().fadeTo(300,1)
        index = $(this).index();
    });
    $("#lunbo-ul2").find("li").mouseout(function(){
        timer = setInterval(next,2000);
    });
    $("#lunbo-ul1").find("li").mouseover(function(){
        clearInterval(timer);
    });
    $("#lunbo-ul1").find("li").mouseout(function(){
        timer = setInterval(next,2000);
    });
    var index = 0;
    var lastIndex = $("#lunbo-ul1 li").length;
    var timer = setInterval(next,2000);
    function next(){
        if(index<lastIndex){
            $("#lunbo-ul1").find("li").stop().fadeTo(300,0);
            $("#lunbo-ul1").find("li").eq(index).stop().fadeTo(300,1);
            $("#lunbo-ul2").find("li").attr("class","");
            $("#lunbo-ul2").find("li").eq(index).attr("class","lunbo-active");
            index++;
        }else{
            index=0
        }
    }
   
})
/* 运动，饰品， 美妆楼层的轮播图*/
$(function(){
	var ul = $(".conmon-list-right-lunbo").find("ul");
	var lis = ul.find("li");
	lis.on({
		"mouseover":function(){
			clearInterval(timer);
		},
		"mouseout":function(){
			timer = setInterval(next,1000)
		}
	})
	var index = 0;
	var lastIndex = 6;
	var oli1 = $(".oli1");
	oli1.addClass("conmon-list-right-r-move-active");
	var oli2 = $(".oli2");
	oli1.on("click",function(){
			index = 0;
	});
	oli2.on("click",function(){
			index = 5;
	});
	var timer = setInterval(next,1000);
	function next(){
		if(index<lastIndex){
			ul.animate({top:index*-85},800);
			index++;
			if(index<=4){
				oli1.addClass("conmon-list-right-r-move-active");
				oli2.removeClass("conmon-list-right-r-move-active");
			}else{
				oli1.removeClass("conmon-list-right-r-move-active");
				oli2.addClass("conmon-list-right-r-move-active");
			}
		}else if(index==5){
			ul.animate({top:index*-85},800);
		}else{
			index=0;
		}
		
	}
})
/*------------- 左边导航栏 ------------------------*/
$(function(){
	/* 因为第一个精选高度和其他不一样高 单独拿出来 添加事件*/
	$(".left-side-ul").find("li:first").click(function(){
		$(window).scrollTop($(".new-sale").offset().top-50);
		$(".new-sale").stop().hide();//点击跳转到指定位置的时候 页面有个隐藏的效果
		$(".new-sale").stop().fadeIn();//页面渐现
	});
	/* 从女装开始 下面的模块高度都一样 */
	$(".number").click(function(){
		$(window).scrollTop(($(this).index()-1)*2333+1820);
		$(".conmon-cloth").stop().hide();
		$(".conmon-cloth").stop().fadeIn();
	})
	/* 给每一个导航栏的li 添加类事件 点击时添加class=left-side-active 点击别的时候 清除其他的样式*/
	$(".left-side-ul").find("li").on("click",function(){
		$(this).siblings().removeClass("left-side-active");
		$(this).addClass("left-side-active")
	})

	/* 窗口滚动事件 当滚动条滚动的时候 导航的状态跟着变化*/
	$(window).on("scroll",function(e){
		if($(window).scrollTop()>=$(".new-sale").offset().top){
			$(".left-side").addClass("left-side-index");
			$(".left-side").stop().animate({"top":105,"left":"10px"},100);
		}else{
			$(".left-side").removeClass("left-side-index");
			$(".left-side").stop().animate({"top":105},100);
		}
		var valTop = $(".hot-sale").offset().top;//获取到页眉的顶部的高度
		var valHeight = $(".hot-sale").height();//获取该模块的高度
		var conmonHeight = $(".conmon-cloth").height();
		if($(window).scrollTop()<valHeight+valTop-150){
			leftSide(0);
		}else if($(window).scrollTop()< valTop+valHeight+conmonHeight-150){
			leftSide(1);
		}else if($(window).scrollTop()<valTop+valHeight+conmonHeight*2-150){
			leftSide(2);
		}else if($(window).scrollTop()<valTop+valHeight+conmonHeight*3-150){
			leftSide(3);
		}else if($(window).scrollTop()<valTop+valHeight+conmonHeight*4-150){
			leftSide(4);
		}else if($(window).scrollTop()<valTop+valHeight+conmonHeight*5-150){
			leftSide(5);
		}else if($(window).scrollTop()<valTop+valHeight+conmonHeight*6-150){
			leftSide(6);
		}else if($(window).scrollTop()<valTop+valHeight+conmonHeight*7-150){
			leftSide(7);
		}else if($(window).scrollTop()<valTop+valHeight+conmonHeight*8-150){
			leftSide(8);
		}else if($(window).scrollTop()<valTop+valHeight+conmonHeight*9-150){
			leftSide(9);
		}else if($(window).scrollTop()<valTop+valHeight+conmonHeight*10-150){
			leftSide(10);
		}
	});
})
/*  左侧的导航样式的封装*/
function leftSide(num){
	$(".left-side-ul").find("li").removeClass('left-side-active');
	$(".left-side-ul").find("li:eq("+num+")").addClass('left-side-active');
}
/*------------------右边的侧栏状态栏-------------*/
$(function(){
	/* 帐号左拉菜单的运动*/
	$(".li1,li1-pop").on({
		"mouseover":function(){
			$(".li1-pop").stop().animate({"right":36},500)
		},
		"mouseout":function(){
			$(".li1-pop").stop().animate({"right":(-213)},500)
		}
	})
	/* 劵 品牌 商品 的左拉菜单的运动*/
	$(".lis").on({//右侧状态栏 鼠标移上 菜单出现 
		"mouseover":function(){
			$(".li-pop").eq($(this).index()-1).stop().animate({"right":36},500)
		},
		"mouseout":function(){//鼠标移下 菜单消失
			$(".li-pop").eq($(this).index()-1).stop().animate({"right":(-104)},500)
		}
	})
	/* 会员 回到顶部 的左拉菜单运动*/
	$(".lis2").on({
		"mouseover":function(){
			$(".li-pop1").eq($(this).index()).stop().animate({"right":36},500)
		},
		"mouseout":function(){
			$(".li-pop1").eq($(this).index()).stop().animate({"right":(-104)},500)
		}
	})
	/* 点击回到顶部 */
	$(".back-top").on("click",function(e){
		$("html,body").animate({scrollTop:0},1000);//点击回到顶部 滚动条 运动到的顶部
	})
})













