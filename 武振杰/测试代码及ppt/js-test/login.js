/* 点击 更多的下拉菜单 */
$(function(){
	var count = 0;
	$("#more").on("click",function(){
		count++;
		$("#more-ul").stop().slideToggle(400);
		if(count%2==1){
			$(this).find(".ico-triangle").css({"border-color":" transparent transparent #f10180 transparent","margin-top":"-10px"})
		}else{
			$(this).find(".ico-triangle").css({"border-color":" #999 transparent transparent  transparent","margin-top":"5px"})
		}
	})
	//登录判断
	var flag1 = false;//用户名失去焦点的时候判断
	var flag2 = false;//密码失去焦点的时候判断
	var flag3 = false;//是否拿到cookie中的用户名以及密码判断
	//如果新注册的用户刚打开登录页 用户名和密码会自动填充
	var flag = getCookie("flag");//判断flag是不是cookie中的true
	var reFlag = getCookie("reFlag");//页面中退出再登录的时候判断
	if(flag=="true" || reFlag=="true" ){
		$("#user-name").val(getCookie("phoneNum"));//用户名是cookie中的用户名
		$("#user-pwd").val(getCookie("phonePwd"));//密码是coo中的密码
		flag3 = true;
		flag2 = true;
		flag1 = true;
	}else{
		flag3 = false;
	}

	//如果没有注册
	//当用户名 密码鼠标hover的 时候 输入框改变
	$("#user-name,#user-pwd").on({
		"mouseover":function(){
			$(this).css("border-color","#999");
		},
		"mouseout":function(){
			$(this).css("border-color","#ccc");
		}
	});
	//用户名失去焦点的时候判断
	$("#user-name").on("blur",function(){
		if($("#user-name").val().length<=0){
			$("#user-name-tip").html("请输入用户名");
			$("#user-name-tip").css({"color":"red","font-size":"12px"});
			flag1=false;
		}else{
			$("#user-name-tip").html("");
			$(this).css("background","rgb(250, 255, 189)");
			flag1=true;
		}
	});
	//密码失去焦点的时候判断
	$("#user-pwd").on("blur",function(){
		if($("#user-pwd").val().length<=0){
				$("#user-pwd-tip").html("请输入密码");
				$("#user-pwd-tip").css({"color":"red","font-size":"12px"});
				flag2 = false;
		}else{
			$("#user-pwd-tip").html("");
			$(this).css("background","rgb(250, 255, 189)");
			flag2 = true;
		}
	})
	//登录跳转页面判断
	$("#btn").click(function(){
		if(flag3&&flag1&&flag2){
			open("../html/index.html","_parent");
			if($("#check").is(':checked')){//如果记住用户名才可以向cookie中储存当前的用户名和密码
				console.log(123);
				var date = new Date();
				date.setDate(date.getDate()+10);
				setCookie("flag",true,date);
			}else{//否则cook中的flag 为false
				//console.log(456);
				removeCookie("flag");
				removeCookie("reFlag");
			}
		}else{
			alert("请输入正确的用户名和密码");
			console.log(flag1);
			console.log(flag2);
			console.log(flag3);
		}
	});
})