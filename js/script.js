// DYNAMIC SCALING

var orig = {
    height: null,
    width: null
};

(function ($) {
	$.fn.photoResize = function (options) {
		var element = $(this),
		defaults = {
		bottomSpacing: 10
		};

		$(element).load(function () {
			updatePhotoHeight();
		});
		
		$(window).bind('resize', function () {
			updatePhotoHeight();
		});
		
		options = $.extend(defaults, options);
	
		function updatePhotoHeight() {
	
		
			if($(window).width() <= 800) { 
		
				var o = options;
				photoHeight = $(window).height();
			
			
				if ($(window).width() <= 560) {
				$(element).attr('height', photoHeight);
				$(element).attr('width', ((photoHeight)/ (orig.height / orig.width)));
				}
				
				else {
				$(element).attr('height', photoHeight - 180);
				$(element).attr('width', ((photoHeight - 180)/ (orig.height / orig.width)));
				}
	
	
	
				$(element).css('max-width' , ($(window).width() - 50) );
				$(element).css('max-height' , ($(window).width() - 50) / (orig.width / orig.height));
	
				$('.nav-container').css('display', 'none');
	
	
				var mobHeight = $("img.indiv-image").height();
				var mobWidth = $("img.indiv-image").width();
				$('.bottom-wrapper').css('top', mobHeight + 60);
				$('.bottom-wrapper').css('bottom', '');
				$('.bottom-wrapper').css('width', mobWidth);
		
	
		
		
			}else{
	
				var o = options;
				photoHeight = $(window).height();
				$(element).attr('height', photoHeight - o.bottomSpacing);
				$(element).attr('width', ((photoHeight - o.bottomSpacing)/ (orig.height / orig.width)));
	
				$(element).css('max-width' , ($(window).width() - ($('.left-rail').width() + 50) ));
				$(element).css('max-height' , ($(window).width() - ($('.left-rail').width() + 50)) / (orig.width / orig.height));
				$('.left-rail').css('max-height' , ($(window).width() - ($('.left-rail').width() + 50)) / (orig.width / orig.height));
	
	
				$('.left-rail').css('height', photoHeight  - o.bottomSpacing);
				$('.nav-container').css('display', 'inline');
	
	
				$('.bottom-wrapper').css('top', '');
				$('.bottom-wrapper').css('bottom', 0);
	
	
				if((photoHeight) > (orig.height + o.bottomSpacing)){
					$(element).attr('height', orig.height);
					$(element).attr('width', orig.width);
					$('.left-rail').css('height', orig.height);
					}
			}
	
		}


	};
}(jQuery));

// LOADERS

$(document).ready(function() {
    $("img.indiv-image").load(function() {
       orig.height = $(this).height();
       orig.width = $(this).width();
	});
 
       
    $("img.indiv-image").photoResize({
	bottomSpacing: 40    
	});

					
	$("img.indiv-image, .title-container, .pagination").hide();
	$("img.indiv-image").bind("load", function () { 
    $("img.indiv-image, .title-container, .pagination").fadeIn("slow"); 
    });
			 

	mobileClick();
	contactClick();
			  
});

// KEYBOARD BUTTONS

$(document).keydown(function(k){
    if (k.keyCode == 37) {
	   actuateLink(document.getElementById('previous'));
       return false;
    }
});


$(document).keydown(function(k){
    if (k.keyCode == 39) {
	   actuateLink(document.getElementById('next'));
       return false;
    }
});

function actuateLink(link){

   var allowDefaultAction = true;
   if (link.click){
      link.click();
      return;
   
   }else if (document.createEvent){
      var e = document.createEvent('MouseEvents');
      e.initEvent(
         'click',
         true,
         true
      );
      allowDefaultAction = link.dispatchEvent(e);           
   }
         
   if (allowDefaultAction){
      var f = document.createElement('form');
      f.action = link.href;
      document.body.appendChild(f);
      f.submit();
   }
}


// MOBILE NAV

function mobileClick(){

	$("#mobile-nav").click(function(){
		$(".nav-container").slideToggle();
	});
};

// CONTACT

function contactClick(){

	$("#contactnav").click(function(){
		$("#email").text(email);
		$("#email").attr('href' , 'mailto:' + email);
		$("#email").toggle();
	});
};


var user = "ruth";
var domain = "ruthmurray";
var email = user + "@" + domain + ".com";