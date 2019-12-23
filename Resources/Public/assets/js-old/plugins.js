 $(window).load(function(){
      $('.flexslider').flexslider({
        animation: "slide",
		easing:"swing",
         customDirectionNav: $(".flex-navigation a") 
		
      });
    });


// Name: wow js plugin 
// Required file: wow.min.js, animate.css
// Documentation:https://github.com/matthieua/WOW
// Note: remove if not needed.

 var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         false        // act on asynchronously loaded content (default is true)
  }
);
wow.init();

// Name: Header shrink on scroll
// Required file: classie.js
// Documentaion:http://callmenick.com/2014/02/18/create-an-animated-resizing-header-on-scroll/
// Note: remove if not needed.

function init() {
	var headerheight=$('.navbar-default').outerHeight();
	//alert(header);
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = headerheight,
            body = document.querySelector("body");
        if (distanceY > shrinkOn) {
            classie.add(body,"sticky");
        } else {
            if (classie.has(body,"sticky")) {
                classie.remove(body,"sticky");
            }
        }
    });
}
window.onload = init();
