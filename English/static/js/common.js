$(function() {
	$('.nav_btn').click(function() {
		$('.nav_zkbg').addClass('on')
		$('.nav_zk').addClass('on');
	})

	$('.nav_zkclose').click(function() {
		$('.nav_zkbg').removeClass('on')
		$('.nav_zk').removeClass('on');
	})

	if ($(window).width() > 1024) {
		$('.nav ul li').hover(function() {
			$(this).toggleClass('on').siblings().removeClass('on');
			$(this).find('.nav2').stop().slideToggle(200).parents('li').siblings('li').find('.nav2').hide();
		})

	}

	var animateDH = $(".xg_pic");
	$(window).bind('scroll load', function() {

		var scrollTop = $(window).scrollTop();
		if (scrollTop > 0) {
			$('.header').addClass('on');
		} else {
			$('.header').removeClass('on');
		}

		if (animateDH.length > 0 && $(window).width() > 1024) {
			animateDH.each(function(i) {
				var animateTop = $(this).offset().top - 400;
				var hei = $(this).height();
				var sca = 1.15 - (((scrollTop - animateTop) / 100) / 120);
				if (scrollTop >= animateTop && scrollTop < (animateTop + hei) + 400) {
					//alert(1)
					$(this).find('img').css('transform', 'scale(' + sca + ')');
				} else {
					$(this).find('img').css('transform', 'scale(1.15)');
				}
			});
		} else {
			animateDH.each(function(i) {
				var animateTop = $(this).offset().top - 800;
				var hei = $(this).height();
				var sca = 1.15 - (((scrollTop - animateTop) / 100) / 120);
				if (scrollTop >= animateTop && scrollTop < (animateTop + hei) + 800) {
					//alert(1)
					$(this).find('img').css('transform', 'scale(' + sca + ')');
				} else {
					$(this).find('img').css('transform', 'scale(1.15)');
				}
			});
		}

	})


	$('.nav_zkcennav ul li').hover(function() {
		$(this).toggleClass('on').siblings().removeClass('on');
	})

	$('.map ul li h2').hover(function() {
		$(this).parents('li').addClass('on');
	})

	$('.map ul li').mouseleave(function() {
		$(this).removeClass('on');
	})

	// var url = window.location.href;
	// var i = url.lastIndexOf('\=');
	// if (i !== -1) {
	//     var h5Url = url.substring(i + 1, url.length);
	//     var _top = $(".header").outerHeight(true);
	//     //alert(h5Url)
	//     $.scrollTo('#' + h5Url, { duration: 500, offset: { top: -_top } });
	// }


	$(window).scroll(function() {
		if ($(document).scrollTop() <= 0) {
			$("#header").removeClass("bjHeise")
		} else {
			$("#header").addClass("bjHeise")
		}
	});


})