 /*window滚动事件 的ajax*/
$(function(){
	var index = 0;//定义一个额外的变量来操作数组的下标
	$(window).on("scroll",function(e){
		var scrollTop = $(".conmon-bottom").offset().top-400;
		//console.log(scrollTop);
		var top = $(window).scrollTop();
		if(top>=scrollTop){
			$.ajax({
				type:"get",
				url:"../json/menmore.json",
				success:function(response,status,xhr){
					var arr = response;
					var div = $(".conmon-items");
					//console.log(arr);
					for(var j = 0;j<arr.length;j++){//循环数据中的第一个大数组
						if(index<arr.length){//造的数据中arr的长度为3；如果index小于3的时候可以生成dom元素
							var arr2 = arr[index].list;//对象数组中的list数组 index每加一次 list数组中的数据拿一次
							//console.log(arr2);
							for(var i=0;i<arr2.length;i++){
								var brand_item = $("<div class='brand-item'></div>");

								var brand_item_img = $("<div class='brand-item-img'></div>")
								var a1 = $("<a href=''></a>");
								var img = $("<img src='../images/"+arr2[i].src+"'>");
								var brand_item_opa = $("<div class='brand-item-opa'></div>");
								var i1 = $("<i></i>");
								var postage = $("<span class='postage'>"+arr2[i].postage+"</>");
								var enshore = $("<a href='' class='brand-item-opa-enshore'>收藏品牌</a>");

								// 添加图片模块的dom元素
								brand_item_img.append(a1);
								a1.append(img);
								brand_item_img.append(brand_item_opa);
								brand_item_opa.append(i1);
								brand_item_opa.append(postage);
								brand_item_opa.append(enshore);
								//end

								var brand_bottom = $("<div class='brand-bottom'></div>");
								var title = $("<p class='title'>"+arr2[i].title+"</p>");
								var brand_time = $("<p class='brand-time'>"+arr2[i].time+"</p>");
								//添加商品标题的dom
								brand_bottom.append(title);
								brand_bottom.append(brand_time);
								//end

								//整体添加
								brand_item.append(brand_item_img);
								brand_item.append(brand_bottom);
								
								div.append(brand_item)
							}
						}
						index++;
						break;
					}
				},
				error:function(){
					console.log(false)
				}
			})
		}
		
	})
})
