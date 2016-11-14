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
	$(".lis").on({
		"mouseover":function(){
			$(".li-pop").eq($(this).index()-1).stop().animate({"right":36},500)
		},
		"mouseout":function(){
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
		$("html,body").animate({scrollTop:0},1000)
	})
})