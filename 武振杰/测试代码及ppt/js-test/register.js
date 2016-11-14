/*  手机 和 邮箱切换 */

/*$(function(){
	$("#email-reg").on("click",function(){
		$("#phone-form").css("display","none");
		$("#email-form").css("display","block");
		return false;
	});
	$("#phone-reg").on("click",function(){
		$("#phone-form").css("display","block");
		$("#email-form").css("display","none");
		return false;
	})
})*/

/* --------------手机注册表单-------------------- */
$(function(){
	// 手机号验证
	/*var flag1 = false;
	$("#phone-user").on("blur",function(){
		var regPhone = /^1(3|4|5|7|8)\d{9}$/;
		var phoneVal = $("#phone-user").val();
		//console.log(phoneVal)
		if(regPhone.test(phoneVal)){
			$("#phone-user-tip").html("手机号符合要求");
			$("#phone-user-tip").css({"display":"block","color":"green"});
			$(this).css("background","rgb(250, 255, 189)");
			flag1 = true;
			$("#phone-btn").attr("disabled",false);//验证码可以点击
			$("#phone-btn").css({"background":"rgb(250, 255, 189)","color":"#333","cursor":"pointer"});
		}else{
			$("#phone-user-tip").html("手机号不符合要求");
			$("#phone-user-tip").css({"display":"block","color":"red"});
			$(this).css("background","#ffe6e7");
			flag1 = false;
		}
	});*/




	//密码验证
	/*
	1 确定范围
            \w{6,20}
            2 \w{6,20} 数字字母下划线
                     数字（字母，下划线）      任意两个         三个都有
            [6,10]      低1                   低2              低3
            [11,15]     低4                  中5              中6
            [16,20]     低7                  中8              高9
            低：
            reg123=/^\w{6,10}$/
            reg471=/^\d{11,20}$/
            reg472=/^\[a-zA-Z]{11,20}$/
            reg473=/^\_{11,20}$/
            高:
            reg91 = /\d{1,}/ig
            reg92 = /\[a-zA-Z]{1,}/ig
            reg93 = /\_{1,}/ig
            var94 = /^\w{16,20}$/
            中:
            else
	*/


	/*var flag2 = false;
	$("#phone-pwd1").on("keyup",function(){//键盘按下的时候去判断
		//reg2 reg123 reg471 reg472 reg473 任何一个满足就为低

		var reg2 =/^\w{6,20}$/;
		var reg123 = /^\w{6,10}$/;
		var reg471=/^\d{11,20}$/;
		var reg472=/^\[a-zA-Z]{11,20}$/;
		var reg473=/^\_{11,20}$/;
		//reg91 reg92 reg93 reg94 都满足的时候 安全为 高
		var reg91 = /\d{1,}/;
        var reg92 = /[a-zA-Z]{1,}/;
        var reg93 = /_{1,}/;
       	var reg94 = /^\w{16,20}$/;

		var pwd1 = $("#phone-pwd1").val();//定义输入框的value
		if(reg2.test(pwd1)){
			if(reg123.test(pwd1)||reg471.test(pwd1)||reg472.test(pwd1)||reg473.test(pwd1)){
			$(".level").eq(0).css("background","red");
			$(".level").eq(1).css("background","#ccc");
			$(".level").eq(2).css("background","#ccc");
			$(this).css("background","#ffe6e7");
			$(".level-w").html("低");
			$(".level-w").css("color","red");
			flag2 = true;
			}else if(reg91.test(pwd1)&&reg92.test(pwd1)&&reg93.test(pwd1)&&reg94.test(pwd1)){
				$(this).css("background","rgb(250, 255, 189)");
				$(".level").eq(0).css("background","green");
				$(".level").eq(1).css("background","green");
				$(".level").eq(2).css("background","green");
				$(".level-w").html("高");
				$(".level-w").css("color","green");
				flag2 = true;
			}else{
				$(".level").eq(0).css("background","orange");
				$(".level").eq(1).css("background","orange");
				$(".level").eq(2).css("background","#ccc");
				$(".level-w").html("中");
				$(".level-w").css("color","orange");
				flag2 = true;
			}
		}else{
			$(".level-w").html("密码不合法");
			$(".level-w").css("color","red");
			flag2 = false;
		}
	})*/





	// 再一次输入密码的验证
	/*var flag3 = false; 
	$("#phone-pwd2").on("blur",function(){
		if($("#phone-pwd2").val() == $("#phone-pwd1").val()){
		$("#phone-pwd2-tip").html("密码一致");
		$("#phone-pwd2-tip").css({"color":"green","display":"block"});
		flag3 = true;
		}else{
			$("#phone-pwd2-tip").html("密码不一致");
			$("#phone-pwd2-tip").css({"color":"red","display":"block"});
			flag3 = false;
		}
	})*/



	//获取验证码
	/*$("#phone-btn").click(function(evt){
		var num = 30;
		evt.stopPropagation();
		evt.preventDefault();
		var mailStr = Math.ceil(Math.random()*1000000);
		console.log(mailStr);
		//30秒获取验证码
		var timer = setInterval(loadMore,1000);
		function loadMore(){
			num--;
			$("#phone-btn").val(num+" 秒后再获取");
			$("#phone-btn").attr("disabled",true);
			$("#phone-btn").css({"background":"#ccc","color":"#999"});
			if(num<=0){
			$("#phone-btn").val("获取验证码");
			$("#phone-btn").attr("disabled",false);
			$("#phone-btn").css({"background":"rgb(250, 255, 189)","color":"#333"});
			clearInterval(timer);	
			}
		}
	});*/






	//短信验证
	/*var flag4 = false;
	$("#mail-flag").on("blur",function(){
		$.getJSON("http://localhost:8080/ajax2/json/regist.json",function(response,status,xhr){
			if(status == "success"){
				var arr = response;
				//console.log(arr)
				obj = arr[0];
				//console.log(obj);
				if($("#mail-flag").val()==obj.list){
					alert("成功");
					flag4 = true; 
				}else{
					alert("失败");
					flag4 = false;
				}
			}
		})
	});*/


	//条款验证
	/*var flag6 = false;
	$("#item-check").click(function(){
		if($("#item-check").is(':checked')){
			flag6 = true;
		}else{
			flag6 = false;
		}
	})*/

	//注册的验证
	/*$("#phone-curReg").on("click",function(){
		if(flag1&&flag2&&flag3&&flag4&&flag6){
			var phoneDate = new Date();
			phoneDate.setDate(phoneDate.getDate()+10);
			setCookie("phoneNum",$("#phone-user").val(),phoneDate);//把手机号码存入cookie中
			setCookie("phonePwd",$("#phone-pwd2").val(),phoneDate);//把手机密码存入手机中
			setCookie("flag",true,phoneDate);//向Cookie中存入一个判断值,绑定手机好号以及密码存入cookie
			open("../html/login.html","_parent");
		}else{
			console.log(flag1);
			console.log(flag2);
			console.log(flag3);
			console.log(flag4);
			console.log(flag6);
			alert("请检查你的信息是否正确");
		}
	})*/
})	


/* --------------邮箱注册表单-------------------- */
//邮箱验证
$(function(){

/*	var flag5 = false;
	$("#email-user").on("blur",function(){
	var regEmail = /^[a-zA-Z0-9_+.-]+\@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,4}$/;
	var emailVal = $("#email-user").val();
		//console.log(phoneVal)
		if(regEmail.test(emailVal)){
			$("#email-user-tip").html("邮箱符合要求");
			$("#email-user-tip").css({"display":"block","color":"green"});
			$(this).css("background","rgb(250, 255, 189)");
			flag5 = true;
		}else{
			$("#email-user-tip").html("邮箱不符合要求");
			$("#email-user-tip").css({"display":"block","color":"red"});
			$(this).css("background","#ffe6e7");
			flag5 = false;
		}
	});*/


//邮箱密码验证
	/*var flag2 = false;
	$("#email-pwd1").on("keyup",function(){//键盘按下的时候去判断
		//reg2 reg123 reg471 reg472 reg473 任何一个满足就为低
		var reg2 =/^\w{6,20}$/;
		var reg123 = /^\w{6,10}$/;
		var reg471=/^\d{11,20}$/;
		var reg472=/^\[a-zA-Z]{11,20}$/;
		var reg473=/^\_{11,20}$/;
		//reg91 reg92 reg93 reg94 都满足的时候 安全为 高
		var reg91 = /\d{1,}/;
        var reg92 = /[a-zA-Z]{1,}/;
        var reg93 = /_{1,}/;
       	var reg94 = /^\w{16,20}$/;

		var pwd1 = $("#email-pwd1").val();//定义输入框的value
		if(reg2.test(pwd1)){
			if(reg123.test(pwd1)||reg471.test(pwd1)||reg472.test(pwd1)||reg473.test(pwd1)){
			$(".level1").eq(0).css("background","red");
			$(".level1").eq(1).css("background","#ccc");
			$(".level1").eq(2).css("background","#ccc");
			$(this).css("background","#ffe6e7");
			$(".level-w1").html("低");
			$(".level-w1").css("color","red");
			flag2 = true;
			}else if(reg91.test(pwd1)&&reg92.test(pwd1)&&reg93.test(pwd1)&&reg94.test(pwd1)){
				$(this).css("background","rgb(250, 255, 189)");
				$(".level1").eq(0).css("background","green");
				$(".level1").eq(1).css("background","green");
				$(".level1").eq(2).css("background","green");
				$(".level-w1").html("高");
				$(".level1-w").css("color","green");
				flag2 = true;
			}else{
				$(".level1").eq(0).css("background","orange");
				$(".level1").eq(1).css("background","orange");
				$(".level1").eq(2).css("background","#ccc");
				$(".level-w1").html("中");
				$(".level-w1").css("color","orange");
				flag2 = true;
			}
		}else{
			$(".level-w1").html("密码不合法");
			$(".level-w1").css("color","red");
			flag2 = false;
		}
	});*/

// 邮箱再一次输入密码的验证
	/*var flag3 = false; 
	$("#email-pwd2").on("blur",function(){
		if($("#email-pwd2").val() == $("#email-pwd1").val()){
		$("#email-pwd2-tip").html("密码一致");
		$("#email-pwd2-tip").css({"color":"green","display":"block"});
		flag3 = true;
		}else{
			$("#email-pwd2-tip").html("密码不一致");
			$("#email-pwd2-tip").css({"color":"red","display":"block"});
			flag3 = false;
		}
	});*/


// 邮箱手机号验证
	/*var flag1 = false;
	$("#email-phone").on("blur",function(){
		var regPhone = /^1(3|4|5|7|8)\d{9}$/;
		var phoneVal = $("#email-phone").val();
		//console.log(phoneVal)
		if(regPhone.test(phoneVal)){
			$("#email-phone-tip").html("手机号符合要求");
			$("#email-phone-tip").css({"display":"block","color":"green"});
			$(this).css("background","rgb(250, 255, 189)");
			flag1 = true;
			$("#email-btn").attr("disabled",false);//验证码可以点击
			$("#email-btn").css({"background":"rgb(250, 255, 189)","color":"#333","cursor":"pointer"});
		}else{
			$("#email-phone-tip").html("手机号不符合要求");
			$("#email-phone-tip").css({"display":"block","color":"red"});
			$(this).css("background","#ffe6e7");
			flag1 = false;
		}
	});*/

//获取验证码
	/*$("#email-btn").click(function(evt){
		var num = 30;
		evt.stopPropagation();
		evt.preventDefault();
		var mailStr = Math.ceil(Math.random()*1000000);
		console.log(mailStr);
		//30秒获取验证码
		var timer = setInterval(loadMore,1000);
		function loadMore(){
			num--;
			$("#email-btn").val(num+" 秒后再获取");
			$("#email-btn").attr("disabled",true);
			$("#email-btn").css({"background":"#ccc","color":"#999"});
			if(num<=0){
			$("#email-btn").val("获取验证码");
			$("#email-btn").attr("disabled",false);
			$("#email-btn").css({"background":"rgb(250, 255, 189)","color":"#333"});
			clearInterval(timer);	
			}
		}
	});*/


//短信验证
	/*var flag4 = false;
	$("#email-flag").on("blur",function(){
		$.getJSON("http://localhost:8080/ajax2/json/regist.json",function(response,status,xhr){
			if(status == "success"){
				var arr = response;
				//console.log(arr)
				obj = arr[0];
				//console.log(obj);
				if($("#email-flag").val()==obj.list){
					alert("成功");
					flag4 = true; 
				}else{
					alert("失败");
					flag4 = false;
				}
			}
		})
	});*/


//条款验证
/*var flag6 = false;
$("#item-check").click(function(){
	if($("#item-check").is(':checked')){
		flag6 = true;
	}else{
		flag6 = false;
	}
})*/


//注册的验证
	/*$("#email-curReg").on("click",function(){
		if(flag1&&flag2&&flag3&&flag4&&flag5&&flag6){
			var emailDate = new Date();
			emailDate.setDate(emailDate.getDate()+10);
			setCookie("email",$("#email-user").val(),emailDate);//邮箱cookie
			setCookie("emailPhone",$("#email-phone").val(),emailDate);//手机号cookie
			setCookie("emailPwd",$("#email-pwd2").val(),emailDate);//密码cookie
			setCookie("flag",true,emailDate);//判断cookie
			open("../html/login.html","_parent");
		}else{
			alert("请检查你的信息是否正确");
		}
	});	*/
})


