/*--------------     cookie的封装函数---------------------*/
function setCookie(name,value,date,path,domain,secure){//设置cookie
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
function getCookie(name){//获取cookie
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
function removeCookie(name){//移除coo
    document.cookie = name +"=1"+new Date();
}
/*----------判断网页用户是否已经注册登录--------------*/
$(function(){
    var login = getCookie("flag");//如果flag=true 则把页面上的登录改成用户名
    if(login=="true"){
        var phoneNum = getCookie("phoneNum");
        $("#nav-login").find("#re-login").html(phoneNum);
        $("#re-login1").html(phoneNum);
        var span = $("<b class='out'>[退出]</b>");
        $("#login2").append(span);
        $("#nav-top").children("#regist").remove();//移除页眉中的再登录dom元素
    }
     $(".out").on("click",function(){
        removeCookie("flag");//点击退出的时候移除flag
        window.location.reload();//页面的重新加载
    })
})
/* 登录的时候 */
$(function(){
    $("#re-login").click(function(){
        var date = new Date();
        date.setDate(date.getDate()+1);
        setCookie("reFlag",true,date);//设置一个登录的cookie 为了跳转到登录页面的时候首次注册的帐号密码还可以使用
        open("../html/login.html","_parent");//退出登录后 再登录
    })
})
/*---------  页眉中的收货地址 用ajax以及cookie编写 ------------------*/

$(function(){
    var count = 0;//判断循环的数次 操作数组的下标
    $("#bj").html(getCookie("bjvalue"));
    $(".nav-inner-left").on("mouseover", function () {
        $.getJSON("../json/area.json", function (response, status, xhr) {
            if (status == "success") {
                var arr = response;
                for (var i = 0; i < arr.length; i++) {//循环json数组
                    if (count < arr.length) {
                        var li = $("<li></li>");
                        li.css("font-size", "14px");
                        li.css("padding", "5px 0px");
                        var span = $("<span class='english'>" + arr[i].english + "</span>");

                        li.append(span);
                        $(".english").css("color", "#333");
                        $("#area-ul").append(li);
                        var list = arr[i].area;
                        for (var j = 0; j < list.length; j++) {
                            var span1 = $("<span class='address'>" + list[j] + "</span>");
                            li.append(span1);
                            $(".address").css("color", "#666");
                            $(".address").css("padding", "8px");
                            $(".address").css("cursor", "pointer");
                            $(".address").on("mouseover", function () {
                                if(!$(this).prop('flag')){//用prop给页面元素添加自定义属性
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
                                $("#area-ul").find(".address").css({"background":"","color":"#666"});
                                $(this).css({'color':"white","background":"#f10180"});
                            });
                        }
                        count++;
                    }else{
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
        $(this).find("div").css({"background":"rgba(0,0,0,0.3)"});//sibilings是该元素的兄弟元素 不包括本身元素
        $(this).find("span").stop().animate({bottom:20},300);
    });
    $("#more-group-area-ul").find("li").on("mouseout",function(){
        $(this).siblings().find("div").css({"background":"rgba(0,0,0,0)"});
        $(this).find("div").css({"background":"rgba(0,0,0,0)"});
        $(this).find("span").stop().animate({bottom:0},300);
    });
})









