// JavaScript Document

$(function() {

 
  // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
	
 

	
	
});

function checkSize(){
	var footerheight=$('#footerwrap').outerHeight(); 
	var teaserheight=$('.card-blocks').find('img').outerHeight();
	console.log(teaserheight);
	var headerheight=$('#header').outerHeight();
	 $('body').css("padding-top", headerheight); 
	 
	//var overlayheight=$('.card-blocks .overlay').outerHeight(); 
	//$('.card-blocks .overlay').css("height", overlayheight+"px");
  if($(window).width() > 767) {
        $('#main').css("margin-bottom", footerheight+"px");
		 $('.teaser').css("height", teaserheight+"px");
		 $('.teaser').find('.card-blocks').css("height", "100%");
		
		
    }
	else {
		 $('.teaser').css("height", "auto");
		  $('.teaser').find('.card-blocks').css("height", "auto");
		
	} 
	
	
	
 
	
	
}
 
 function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            header = document.querySelector("#header");
        if (distanceY > shrinkOn) {
            classie.add(header,"nav-down");
        } else {
            if (classie.has(header,"nav-down")) {
                classie.remove(header,"nav-down");
            }
        }
    });
}
window.onload = init();



// up scroll
	 $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              $('.scrollup').fadeIn('slow');
          } else {
              $('.scrollup').fadeOut('slow');
          }
      });

      $('.scrollup').click(function () {
          $("html, body").animate({
              scrollTop: 0
          }, 1000);
          return false;
      });
 


 



 
 