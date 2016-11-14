/*
html:
	<div id="colockbox1" >
		<span class="day">00</span>
		<span class="hour">00</span>
		<span class="minute">00</span>
		<span class="second">00</span>
		<span class="msecond">00</span>
	</div>

	调用函数的时候 传入参数 id n
*/
$(function(){
		countDown("#end-time","2016/11/4",15)
		function countDown(id,nowTime,n){//id==秒杀案例的盒子id名字,nowTime =现在的时间, n = 倒计时几天
			var day_elem = $(id).find(".day");
			var hour_elem = $(id).find(".hour");
			var minute_elem = $(id).find(".minute");
			var second_elem = $(id).find(".second");
			var msecond_elem = $(id).find(".msecond");
			var endTime = new Date(nowTime);//获取一个时间 
			endTime.setDate(endTime.getDate()+n);//设置未来的一个时间
		var timer = setInterval(function(){
			var nowTime = new Date();
			var result = endTime.valueOf() - nowTime.valueOf();//现在时间到未来时间之间多少毫秒
				 day_elem.html(Math.floor(result/(24*60*60*1000)));//天数
				 hour_elem.html(Math.floor(result%(24*60*60*1000)/(60*60*1000)));//小时
				 minute_elem.html(Math.floor(result%(60*60*1000)/(60*1000)));//分钟
				 second_elem.html(Math.floor(result%(60*1000)/(1000)));//秒
				 msecond_elem.html(Math.floor(result%(1000)/10));//毫秒数
			if(result<=0){//如果时间到了 取消间歇
				clearInterval(timer);
			}
		},20)
		}
	})