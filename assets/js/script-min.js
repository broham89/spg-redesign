function smoothScroll(){var e=$("html, body");$("header .nav-container a").click(function(){var o=$.attr(this,"href");return e.animate({scrollTop:$(o).offset().top-70},500,function(){window.location.hash=o}),!1})}smoothScroll();var nav_h=$("header .nav-links").height(),$nav_height=$("header div nav");$("#nav-icon").click(function(){$(this).toggleClass("open"),$(this).hasClass("open")?($("header .nav-container").addClass("show"),$("header .nav-container a").css("color","white")):($("header .nav-container a").css("color",""),$nav_height.removeClass("show"))}),$(window).on("scroll",function(){var e=$(this).scrollTop();e>50&&e<500?($("header").css("opacity",0),$("#logo > svg").addClass("logo-white")):e>500?($("header").addClass("reveal-header"),$("header").css("opacity",1),$("#logo > svg").removeClass("logo-white")):$("header").removeClass("reveal-header").css("opacity","1")}),$(document).ready(function(){const e=$("#cardContainer"),o=e.children()[0].outerHTML,s=e.children()[1].outerHTML;e.html(""),$.ajax({method:"GET",url:"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fblog.spg.ai%2Ffeed"}).done(function(a){for(var t=a.items,n=0;n<t.length;n++){var i=t[n].pubDate,r=i.substring(8,10),l=i.substring(5,7),h=i.substring(0,4),c=o.replace("{{Title}}",t[n].title);c=c.replace("{{Image}}",t[n].thumbnail),c=c.replace("{{Date}}",l+"."+r+"."+h),e.append(c)}e.append(s),$(".variable-width").slick({dots:!1,infinite:!1,speed:300,slidesToScroll:2,slidesToShow:1,centerMode:!1,variableWidth:!0,responsive:[{breakpoint:900,settings:{slidesToShow:2,slidesToScroll:1,infinite:!1,dots:!1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!0}}]})})});