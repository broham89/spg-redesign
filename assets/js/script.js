

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

$(document).ready( function() {
	const cardContainer = $('#cardContainer');
	const cardTemplate = cardContainer.children()[0].outerHTML;
	const lastCard = cardContainer.children()[1].outerHTML;

	cardContainer.html('');
	
	$.ajax({
		method: 'GET',
		url: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fblog.spg.ai%2Ffeed',
	}).done(function( data ) {
		var posts = data.items

		for (var i=0; i<posts.length; i++) {
			var date = posts[i].pubDate;

			var day = date.substring(8,10);
			var month = date.substring(5,7);
			var year = date.substring(0,4);

			var card = cardTemplate.replace('{{Title}}', posts[i].title)
			card = card.replace('{{Image}}', posts[i].thumbnail)
			card = card.replace('{{Date}}', month + '.' + day + '.' + year)

			cardContainer.append(card)
		}

		cardContainer.append(lastCard)

		$('.variable-width').slick({
			dots: false,
			infinite: false,
			speed: 300,
			slidesToScroll: 2,
			slidesToShow: 1,
			centerMode: false,
			variableWidth: true,
			responsive: [
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: false,
						dots: false
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						centerMode: true
					}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]
		});
	});
});

