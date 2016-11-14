/*------------- 左边导航栏 ------------------------*/
$(function(){
	/* 点击左边导航栏 精选 滚动条到600 */
	$(".left-side-ul").find("li:first").click(function(){
		$(window).scrollTop($(".new-sale").offset().top-50)
		$(".new-sale").stop().hide();
		$(".new-sale").stop().fadeIn();
	});
	/* 点击 女装 滚动条到 1835 */
	var newSaleTop = $(".new-sale").offset().top;
	var conmonHeight = $(".conmon-cloth").height();
	/*$(".number:eq(0)").on("click",function(){
		$(window).scrollTop(newSaleTop + conmonHeight)
		$(".conmon-cloth").stop().hide();
		$(".conmon-cloth").stop().fadeIn();
	});*/
	/* 下面的框架高度都一样 可以一起绑定事件 利用index 操作高度*/
	//console.log($(".new-sale").offset().top+$(".new-sale").height())
	var numTop = $(".new-sale").offset().top+$(".new-sale").height();
	var conmonHeight = $(".conmon-cloth").height();
	console.log(conmonHeight);
	console.log(numTop);
	$(".number").click(function(){
		$(window).scrollTop(($(this).index()-1)*2333+1835);
		$(".conmon-cloth").stop().hide();
		$(".conmon-cloth").stop().fadeIn();
	})

	/* 给每一个导航栏的li 添加类事件 点击时添加class=left-side-active 点击别的时候 清除其他的样式 */
	$(".left-side-ul").find("li").on("click",function(){
		$(this).siblings().removeClass("left-side-active");
		$(this).addClass("left-side-active")
	})	
	$(window).on("scroll",function(e){
		//console.log($(window).scrollTop())
		/* 当窗口滚动条>=700的时候 让左边导航栏固定在top：105处*/
		if($(window).scrollTop()>=$(".new-sale").offset().top){
			$(".left-side").addClass("left-side-index");
			$(".left-side").stop().animate({"top":105},100);
		}else{
			$(".left-side").removeClass("left-side-index");
			$(".left-side").stop().animate({"top":105},100);
		}
		/* 当滚动条滚动的时候 导航的状态跟着变化*/
		var valTop = $(".hot-sale").offset().top;
		var valHeight = $(".hot-sale").height();
		var conmonHeight = $(".conmon-cloth").height();
		// $(window).scrollTop()>=600 && $(window).scrollTop()<1835
		/*alert(valTop+":"+valHeight)
		alert($(window).scrollTop() <= valTop+valHeight )*/
		//console.log(valTop+valHeight+conmonHeight);
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
function leftSide(num){
	$(".left-side-ul").find("li").removeClass('left-side-active');
	$(".left-side-ul").find("li:eq("+num+")").addClass('left-side-active');
}