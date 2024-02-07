(function ($) {
	
	"use strict";
	$('.owl-men-item').owlCarousel({
		items:5,
		loop:true,
		dots: true,
		nav: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:3
			  }
		 }
	})

	$('.owl-women-item').owlCarousel({
		items:5,
		loop:true,
		dots: true,
		nav: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:3
			  }
		 }
	 })

	$('.owl-kid-item').owlCarousel({
		items:5,
		loop:true,
		dots: true,
		nav: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:3
			  }
		 }
	 })

	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('#top').height();
	  var header = $('header').height();

	  if (scroll >= box - header) {
	    $("header").addClass("background-header");
	  } else {
	    $("header").removeClass("background-header");
	  }
	});
	

	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 700);
				return false;
			}
		}
	});

	$(document).ready(function () {
	    $(document).on("scroll", onScroll);

		// animation h2 start

		$(window).scroll(function(){
			$("#men h2").scrollTop(function(){
				if($(window).scrollTop() >= $("#men h2").offset().top - 600){
					$("#men h2").addClass("vivify fadeInRight duration-1500")
				}else{
					$("#men h2").removeClass("vivify fadeInRight duration-1500")
				}
			});
			$("#men .container:nth-child(2)").scrollTop(function(){
				if($(window).scrollTop() >= $(this).offset().top - 600){
					$(this).addClass("vivify fadeInLeft duration-1500")
				}else{
					$(this).removeClass("vivify fadeInLeft duration-1500")
				}
			});
			
			$("#women h2").scrollTop(function(){
				if($(window).scrollTop() >= $(this).offset().top - 600){
					$($(this)).addClass("vivify fadeInRight duration-1500")
				}else{
					$($(this)).removeClass("vivify fadeInRight duration-1500")
				}
			});
			$("#women .container:nth-child(2)").scrollTop(function(){
				if($(window).scrollTop() >= $(this).offset().top - 600){
					$(this).addClass("vivify fadeInLeft duration-1500")
				}else{
					$(this).removeClass("vivify fadeInLeft duration-1500")
				}
			});
			$("#kids h2").scrollTop(function(){
				if($(window).scrollTop() >= $("#kids h2").offset().top - 600){
					$("#kids h2").addClass("vivify fadeInRight duration-1500")
				}else{
					$("#kids h2").removeClass("vivify fadeInRight duration-1500")
				}
			});
			$("#kids .container:nth-child(2)").scrollTop(function(){
				if($(window).scrollTop() >= $(this).offset().top - 600){
					$(this).addClass("vivify fadeInLeft duration-1500")
				}else{
					$(this).removeClass("vivify fadeInLeft duration-1500")
				}
			});
			$("#explore .left-content").scrollTop(function(){
				if($(window).scrollTop() >= $(this).offset().top - 600){
					$($(this)).addClass("vivify fadeInRight duration-1500")
				}else{
					$($(this)).removeClass("vivify fadeInRight duration-1500")
				}
			});
			$("#explore .right-content .first-image").scrollTop(function(){
				if($(window).scrollTop() >= $(this).offset().top - 600){
					$($(this)).addClass("vivify fadeInLeft duration-1500")
				}else{
					$($(this)).removeClass("vivify fadeInLeft duration-1500")
				}
			});
			$("#explore .right-content .second-image").scrollTop(function(){
				if($(window).scrollTop() >= $(this).offset().top - 600){
					$($(this)).addClass("vivify fadeInRight duration-1500")
				}else{
					$($(this)).removeClass("vivify fadeInRight duration-1500")
				}
			});

			$("#social .section-heading h2").scrollTop(function(){
				if($(window).scrollTop() >= $(this).offset().top - 600){
					$($(this)).addClass("vivify fadeInRight duration-1500")
				}else{
					$($(this)).removeClass("vivify fadeInRight duration-1500")
				}
			});
			
			$("#social .row.images").scrollTop(function(){
				if($(window).scrollTop() >= $(this).offset().top - 600){
					$($(this)).addClass("vivify fadeInLeft duration-1500")
				}else{
					$($(this)).removeClass("vivify fadeInLeft duration-1500")
				}
			});

		   });

	
	    
	    //smoothscroll
	    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $(document).off("scroll");
	        
	        $('.scroll-to-section a').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	      
	        var target = this.hash,
	        menu = target;
	       	var target = $(this.hash);
	        $('html, body').stop().animate({
	            scrollTop: (target.offset().top) - 79
	        }, 500, 'swing', function () {
	            window.location.hash = target;
	            $(document).on("scroll", onScroll);
	        });
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.nav ul li a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	}


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});



	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 767) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);