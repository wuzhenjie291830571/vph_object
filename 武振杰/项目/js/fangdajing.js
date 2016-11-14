$(document).ready(
	function(){
		$(".inner-Bimg").mousemove(
			function(e){
				//计算盒子内的鼠标位置：
				var x = e.pageX - $(".inner-Bimg").offset().left;
				var y = e.pageY - $(".inner-Bimg").offset().top;
				//验收，保证放大镜，不能移出盒子
				if(x < 87.5){
					x = 87.5;
				}
				
				if(y < 87.5){
					y = 87.5;
				}

				if(x > 420 - 87.5){
					x = 420 - 87.5;
				}
				if(y > 530 - 87.5){
					y = 530 -87.5;
				}
				//让放大镜跟随鼠标：
				$(".inner-Bimg .fangdajing").css(
					{
						"left":x - 87.5,
						"top":y - 87.5
					}	
				);
				//让大图的background-position，等比例变化
				var beijingx = -(420/175) * (x - 87.5);
				var beijingy = -(530/175) * (y - 87.5);
				$(".datu").css("background-position",beijingx + "px " + beijingy + "px");
			}
		);
		
		$(".inner-Bimg").mouseenter(
			function(){
				$(".fangdajing").show();
				$(".datu").show()
			}
		)
		$(".inner-Bimg").mouseleave(
			function(){
				$(".fangdajing").hide();
				$(".datu").hide();
			}
		)
	}
);