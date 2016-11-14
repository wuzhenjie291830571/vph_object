/*---------------- 导航栏固定在顶部 -------------------*/
/*--------------     cookie的封装函数---------------------*/
function setCookie(name,value,date,path,domain,secure){
    var str = "";
    if(name ==""||value==""){

    }else{
        str+=encodeURIComponent(name)+"="+encodeURIComponent(value);
        if(date instanceof Date){
            str += ";expires="+date;
        }
        if(path){
            str += ";path="+path;
        }
        if(domain){
            str += ";domain="+domain;
        }
        if(secure){
            str += ";secure";
        }
    }
    document.cookie = str;
}

function getCookie(name){
    var str = document.cookie;
    var reg = /\s/ig;
    str = str.replace(reg,"");
    var arr = str.split(";");
    for(var i=0;i<arr.length;i++){
        var arr2= arr[i].split("=");
        if(arr2[0]==encodeURIComponent(name)){
            return decodeURIComponent(arr2[1]);
        }
    }
    return "";
}

function removeCookie(name){
    document.cookie = name +"=1"+new Date();
}
/*----------判断网页用户是否登录--------------*/
$(function(){
    var login = getCookie("flag");//如果flag=true 则把页面上的登录改成用户名
    //console.log(login);
    if(login=="true"){
        var phoneNum = getCookie("phoneNum");
        $("#nav-login").find("#re-login").html(phoneNum);
        $("#re-login1").html(phoneNum);
        var span = $("<b class='out'>[退出]</b>");
        $("#login2").append(span);
        $("#nav-top").children("#regist").remove();
    }
     $(".out").on("click",function(){
        removeCookie("flag");
        window.location.reload();
    })
})
/* 登录的时候 */
$(function(){
    $("#re-login").click(function(){
        var date = new Date();
        date.setDate(date.getDate()+1);
        setCookie("reFlag",true,date);
        open("../html/login.html","_parent");
    })
})
/*---------  页眉中的收货地址 用ajax以及cookie编写 ------------------*/

$(function(){
    var count = 0;
    $("#bj").html(getCookie("bjvalue"));
    $(".nav-inner-left").on("mouseover", function () {
        $.getJSON("../json/area.json", function (response, status, xhr) {
            if (status == "success") {
                var arr = response;
               // console.log(arr);//得到json数组
                for (var i = 0; i < arr.length; i++) {//循环json数组中
                    if (count < arr.length) {
                        var li = $("<li></li>");
                        li.css("font-size", "14px");
                        li.css("padding", "5px 0px");
                        var span = $("<span class='english'>" + arr[i].english + "</span>");

                        li.append(span);
                        $(".english").css("color", "#333");
                        //$(".english").css("padding-right", "5px");
                        $("#area-ul").append(li);

                        var list = arr[i].area;
                       // console.log(list);
                        for (var j = 0; j < list.length; j++) {
                            var span1 = $("<span class='address'>" + list[j] + "</span>");
                            li.append(span1);

                            $(".address").css("color", "#666");
                            $(".address").css("padding", "8px");
                            $(".address").css("cursor", "pointer");

                            //var flag = false;

                            $(".address").on("mouseover", function () {

                                if(!$(this).prop('flag')){
                                    //$(this).siblings('.address').css({"background":""});
                                    $(this).css({"color": "#f10180","background":""});
                                }

                                var self =this;
                                $(self).on("mouseout",function(){
                                    if(!$(self).prop('flag')) {
                                        $(self).css({"color": "#666","background": ""});
                                    }
                                })
                            });
                            $(".address").on("click", function () {
                                /*
                                 设置收货地址的cookie
                                 */
                                $("#bj").html($(this).html());
                                var bjVal=$("#bj").html();
                                var bjDate = new Date();
                                bjDate.setDate(bjDate.getDate()+30);
                                setCookie("bjvalue",bjVal,bjDate);

                                $(".address").removeProp('flag');
                                $(this).prop({'flag':'true'});
                                //console.log($(this).prop('flag'));
                                $("#area-ul").find(".address").css({"background":"","color":"#666"});
                                $(this).css({'color':"white","background":"#f10180"});

                            });
                            
                        }
                        count++;
                    } else {
                        break;
                    }
                }
            }
        })
    })
})
/* ------导航栏中更多的 更多的图片 --------*/
$(function(){
    $("#more-group-area-ul").find("li").on("mouseover",function(){
        $(this).siblings().find("div").css({"background":"rgba(0,0,0,0)"});
        $(this).find("div").css({"background":"rgba(0,0,0,0.3)"});
        $(this).find("span").stop().animate({bottom:20},300);
    });
    $("#more-group-area-ul").find("li").on("mouseout",function(){
        $(this).siblings().find("div").css({"background":"rgba(0,0,0,0)"});
        $(this).find("div").css({"background":"rgba(0,0,0,0)"});
        $(this).find("span").stop().animate({bottom:0},300);
    });
})
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
    //console.log(lastIndex)
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
	//console.log(lis.length);
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
		$(window).scrollTop($(".new-sale").offset().top-50)
		$(".new-sale").stop().hide();
		$(".new-sale").stop().fadeIn();
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
			$(".left-side").stop().animate({"top":105},100);
		}else{
			$(".left-side").removeClass("left-side-index");
			$(".left-side").stop().animate({"top":105},100);
		}
		var valTop = $(".hot-sale").offset().top;
		var valHeight = $(".hot-sale").height();
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
/* 封装函数 */
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