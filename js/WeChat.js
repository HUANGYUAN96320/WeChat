/*$(document).ready(function(){
	等页面dom结构执行完后再加载js代码，下面的$(function(){})是简写
})*/
$(function(){
	var nowPage = 0;
	/*获取屏幕宽高*/
	var width = window.innerWidth;
	var height = window.innerHeight;
	
	$(".content").width(width);
	$(".content").height(height*4);
	
	$(".page").width(width);
	$(".page").height(height);
	/*手指触屏滑动的事件，这个事件不是jquery原生自带的，是引入的插件*/
	$(".content").swipe({
		swipe:function(event,direction,distance,duration,fingercount){
			if (direction == "up") {
				nowPage ++ ;
			}
			if (direction == "down") {
				nowPage -- ;
			}
			if (nowPage > 3) {
				nowPage = 3;
			}else if (nowPage < 0) {
				nowPage = 0;
			}
			/*animate({要做的动画效果},{时长，动画完了要做的事})*/
			$(".content").animate({top:-nowPage*100+"%"},{duration:400,complete:function(){
				if (nowPage == 1) {
					$(".page2-farm").fadeIn(2000,function(){
						$(".page2-It").fadeIn(2000);
					})
				}
				if (nowPage == 2) {
					$(".page3-earlyTitle").animate({width:"35%"},{duration:1000});
					$(".page3-lastBusTitle").animate({width:"35%"},{duration:1000});
					$(".page3-bus").animate({left:"-50%"},{duration:2000});
					$(".page3-lastBusAvatar").animate({left:"20%"},{duration:2000,complete:function(){
						$(".page3-bus").fadeOut("slow");
						$(".page3-lastBusAvatar").fadeOut("slow");
						$(".page3-lastBusStation").fadeOut("slow");
						$(".page3-earlyTitle").fadeOut("slow");
						/*第一个部分执行完后，再执行第二个部分*/
						$(".page3-lastBusTitle").fadeOut("slow",function(){
							$(".page3-myTeamWall").fadeIn("slow");
							$(".page3-myTeamAvatar").fadeIn("slow",function(){
								$(".page3-myTeamSpace").animate({width:"30%"},{duration:400,complete:function(){
									$(".page3-myTeamWhereTxt").animate({width:"55%"},{duration:400});
								}})
							});
						});
					}});
				}
				
			}});
			/* 第二页的第二种方法 ，只不过css中宽度要设为0；上一种方法设为display:none
			 * $(".page2-farm").animate({width:"65%"},{duration:2000,complete:function(){
				$(".page2-It").animate({width:"65%"},{duration:2000});
			}})*/
		}
	}); 
	
	$(".page1-building").fadeIn(1000,function(){
		$(".page1-flight").animate({width:"70%"},{duration:2000});
	})
	
	$(".page4-lightOff").click(function(){
		$(this).attr("src","img/WeChat/lightOn.png");
		$(".page4-cornerTitle").fadeOut("slow");
		$(".page4-clickGuide").fadeOut("slow");
		$(".page4-lightOffBg").fadeOut("slow",function(){
			$(".page4-lightOnBg").fadeIn("slow");
			$(".page4-weKnowYou").fadeIn("slow");
		});
		
	})
	$(".musicBtn").click(function(){
		var music = $("#music")[0];
		if (music.paused) {
			music.play();
		}else {
			music.pause();
			$(this).attr("src","img/WeChat/musicBtnOff.png");
		}
	})
})
