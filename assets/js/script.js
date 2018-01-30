

	// Header scroll function
	smoothScroll();
	function smoothScroll(){
		var $root = $('html, body');
		$('header .nav-container a').click(function() {
		    var href = $.attr(this, 'href');
		    $root.animate({
		        scrollTop: ($(href).offset().top - 70)
		    }, 500, function () {
		        window.location.hash = href;
		    });
		    return false;
		});
	};

	// Hamburger icon animation
	var nav_h = $( 'header .nav-links' ).height();
	var $nav_height = $('header div nav');
	
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		
		if ( $(this).hasClass('open') ) {
			$('header .nav-container').addClass('show');
			$('header .nav-container a').css('color','white');

		} else {
			$('header .nav-container a').css('color','');

			$nav_height.removeClass('show');

		}
		
	});

	// ALL SCROLL functions----------------------------------------

	$(window).on('scroll', function(){
		var wScroll = $(this).scrollTop();

		// Header reveal after 500px below the window top 
		if(wScroll > 50 && wScroll < 500) {
			$('header').css('opacity',0);
			$('#logo > svg').addClass('logo-white');


		}else if (wScroll > 500) {			
			$('header').addClass('reveal-header');
			$('header').css('opacity', 1);
			$('#logo > svg').removeClass('logo-white');
		
		}else {
			$('header').removeClass('reveal-header').css('opacity', '1');

		}

	});

	$('.variable-width').slick({
	  dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToScroll: 1,
	  slidesToShow: 1,
	  centerMode: false,
	  variableWidth: true,
	  responsive: [
	    {
	      breakpoint: 900,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        infinite: false,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

