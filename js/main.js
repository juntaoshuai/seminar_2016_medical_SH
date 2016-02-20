// JavaScript Document

$(function(){
	

	//鼠标滚动导航固定顶部
	var w_top = $("#wrapper").offset().top;
  $(window).bind("scroll",function(){
    //nav
    var s_top = $(window).scrollTop();
    if(s_top > w_top)
    {
      $("#nav").addClass("nav_fixed");
      $(".fuchuang,.xufu_weixin").show();
    }
    else
    {
      $("#nav").removeClass("nav_fixed");
      $(".fuchuang,.xufu_weixin").hide();
    }

  })
  
	
	//导航当前样式
	$("#nav li").click(function(){
		$(this).addClass("on").siblings("li").removeClass("on");
	})
	

	//分享代码
	$("#share").hover(function(){
		$(this).find(".jiathis_style").show();
	},function(){
		$(this).find(".jiathis_style").hide();
	})

	



    //通用头部banner轮换图
    var b_index = 1;
    var b_len = $(".banner_list li").length;
    $(".banner_list li:not(:first-child)").hide();

    function b_show() {
      $(".banner_list li").eq(b_index).fadeIn(1000).siblings("li").fadeOut(1000);
      $(".dot_list li").eq(b_index).addClass("active").siblings("li").removeClass("active");
      b_index++;
      if (b_index > b_len - 1) {
        b_index = 0;
      }
    }
    var b_timer = setInterval(b_show, 3000);
    $(".banner_list").hover(function() {
      clearInterval(b_timer);

    }, function() {
      b_timer = setInterval(b_show, 3000);
    });

    $(".dot_list li").mouseover(function() {
      b_index = $(this).index();
      $(".banner_list li").eq(b_index).fadeIn(1000).siblings().fadeOut(1000);
      $(this).addClass("active").siblings().removeClass("active");
    });


	// 会议背景右边幻灯片播放
    var index = 1;
    var len = $(".pic_list li").length;
    $(".pic_list li:not(:first-child)").hide();

    function show() {
      $(".pic_list li").eq(index).fadeIn(1000).siblings("li").fadeOut(1000);
      $(".dot span").eq(index).addClass("on").siblings("span").removeClass("on");
      index++;
      if (index > len - 1) {
        index = 0;
      }
    }
    var timer = setInterval(show, 3000);
    $(".pic_list").hover(function() {
      clearInterval(timer);

    }, function() {
      timer = setInterval(show, 3000);
    });

    $(".dot span").mouseover(function() {
      index = $(this).index();
      $(".pic_list li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
      $(this).addClass("on").siblings().removeClass("on");
    });
		
		
	//导航栏定位到指定位置
		$(".nav ul li").eq(1).on("click",function(){
			var wrapper=$("#wrapper").offset().top;
			$("html,body").animate({"scrollTop":wrapper-60},300);
			})
					
		$(".nav ul li").eq(2).on("click",function(){
			var richeng=$("#richeng").offset().top;
			$("html,body").animate({"scrollTop":richeng-50},300);
			})
			
	
})