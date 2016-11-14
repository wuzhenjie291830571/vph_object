/* 购物车 */
/* 页眉用户名字 */
$(function(){
	var user = getCookie("phoneNum");
	var flag = getCookie("flag");
	if(flag=="true"){
		$(".user").html(user);
		$(".out").css("display","block");
		$(".grade").css("display","block");
		
	}else{
		$(".out").css("display","none");
		$(".grade").css("display","none");
		$(".manage").css("display","none");
		$(".pay-time").remove();
		$(".product").remove();
		$(".account").remove();
		$(".pay-process").remove();
		$(".promise-img").remove();
		var div = $("<div style='text-align:center;color:#333;width:400px;height:50px;margin:40px auto;'>登录超时！<a href='login.html' style='color:#f10180'>请重新登录</a></div>")
		$(".container").append(div);
	}
	
})
/* 退出登录*/
$(function(){
	$(".out").click(function(){
		removeCookie("flag");//移除cookie中的flag 不能显示用户名
		
		$(window).location().reload();
	})
})

/*购物车付款剩余时间*/
$(function(){
	countDown(".end-time",20)
	function countDown(id,n){//id==秒杀案例的盒子id名字,nowTime =现在的时间, n = 倒计时几天
		var minute_elem = $(id).find(".minute");
		var second_elem = $(id).find(".second");
		var endTime = new Date();//获取一个时间 
		endTime.setMinutes(endTime.getMinutes()+n);//设置未来的一个时间
		var timer = setInterval(function(){
			var nowTime = new Date();
			var result = endTime.valueOf() - nowTime.valueOf();//现在时间到未来时间之间多少毫秒
				 minute_elem.html(Math.floor(result%(60*60*1000)/(60*1000)));//分钟
				 second_elem.html(Math.floor(result%(60*1000)/(1000)));//秒
			if(result<=0){//如果时间到了 取消间歇
				clearInterval(timer);
				$(".end-time").html("又逛超时了。立即结算抢回还有货的商品吧~")
			}
		},20)
	}
})
/* 商品数量 计算*/
$(function(){
	var num1 = getCookie("conduct-num");//仓库中仅剩的件数
	var num = $(".num").html();//获得当前的购买的件数
	$(".add").click(function(){
		if(num<num1){
			num++;
			$(".num").html(num);
			$(".subtract").css("background-position","-100px -150px");
			var a = $(".num").html();
			var b = $(".nowPrice").html();
			$(".add-price").html(a*b);
			$(".count-num").html(num);
			$(".pay-money").html(a*b);
			$(".final-money").html(a*b);
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
			$(".num").html(num);
			$(".add").css("background-position","-51px -150px");
			var a = $(".num").html();
			var b = $(".nowPrice").html();
			$(".add-price").html(a*b);
			$(".count-num").html(num);
			$(".pay-money").html(a*b);
			$(".final-money").html(a*b);
		}else{
			num=1;//如果小于等于1时 不能继续再减
			$(this).attr("disabled","disabled");
			$(this).css("background-position","0px -150px");
			$(".add").css("background-position","-51px -150px");
			$(".num").html(num);
		}
	})
})
/* 购物车 商品列表中删除的时候 */
$(function(){
	$(".delete").click(function(){
		$(".pro-item").remove();
		var div = $("<div class='empty'>购物车空空如也，快去抢购心仪商品吧~</div>");
		var a = $("<a href='index.html' class='empty-buy'>返回抢购</a>")
		$(".product-list").append(div);
		$(".product-list").append(a);
		$(".account").css("display","none");
		$(".pay-time").css("display","none");
	})
})








