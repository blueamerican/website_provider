// JavaScript Document

$(function() {
	

 
  // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);

	$('.navbar a','.layout1').on('click', function(e) {
e.preventDefault();
		$.smoothScroll({
			scrollElement: null,
			scrollTarget: this.hash,
			offset: -117,
		});
		window.history.pushState({}, '', this.hash);
		
	});
	
	$('.slider a','.layout2').on('click', function(e) {
		e.preventDefault();
		$.smoothScroll({
			scrollElement: null,
			scrollTarget: "/news-referenzen/projekt-1/" . this.hash,
			offset: -217,
		});
		window.history.pushState({}, '', this.hash);
		
	});

 $('.section-block').each(function eachElement() {
                    // cache the jQuery object
                    var $this = $(this);

                    var position = $this.position();

                    window.console.log(position);
                    //window.console.log('min: ' + position.top + ' / max: ' + window.parseInt(position.top + $this.height(), 10));

                    $this.scrollspy({
                        min: position.top,
                        max: position.top + $this.height(),
                        onEnter: function onEnter(element/*, position*/) {
                         
							var navact = "/#" + element.id;
							$('.navbar-nav > li > a').each(function(i) {
							    if($(this).attr("href") == navact)
							    {
							       $(this).parent().addClass('active');
							    }
							});


                          //  $('body').css('background-color', element.id);
                            window.console.log('Entering ' + element.id);
                        },
                        onLeave: function onLeave(element/*, position*/) {
                           $('.navbar-nav > li').removeClass();
                           window.console.log('leave ' + element.id);
                        }
                    });
                });

$("body").click(function(event) {
        // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called 
         if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible") ) {
            $('.navbar-collapse').collapse('toggle');
        }
  });



	//TODO add js for slider links on reference page
	/*
	$('.navbar a').on('click', function(e) {

		$.smoothScroll({
			scrollElement: null,
			scrollTarget: this.hash,
			offset: -117,
		});
		window.history.pushState({}, '', this.hash);
		e.preventDefault();
	});
	*/
	/*
	var $head = $('#logo');
	$('.ha-waypoint').each(function(i) {
		var $el = $(this),
			animClassDown = $el.data('animateDown'),
			animClassUp = $el.data('animateUp');

		$el.waypoint( function( direction ) {
			if( direction === 'down' && animClassDown ) {
				$head.attr('class', 'ha-header ' + animClassDown);
			}
			else if( direction === 'up' && animClassUp ){
				$head.attr('class', 'ha-header ' + animClassUp);
			}
		}, { offset:'100%'} );
	});
	*/

	var $head = $('#logo');
	$('.ha-waypoint').each(function(i) {
		var $el = $(this);
			//animClassDown = $el.data('animateDown'),
			//animClassUp = $el.data('animateUp');

		$el.waypoint( function( direction ) {
			if( direction === 'down') {
				$head.attr('class', 'logo-down');
			}
			else if( direction === 'up'){
				$head.attr('class', 'logo-up');
			}
		}, { offset:107} );
	});
	/*
	var waypoint = new Waypoint({
		element: $('#about'),
		//element: document.getElementById('about'),
		handler: function(direction) {
			if( direction === 'down') {
				$head.attr('class', 'logo-down');
			}
			else if( direction === 'up'){
	 $head.attr('class', 'logo-up');
			}
			//console.log('Direction: ' + direction)
		},
		offset: 107
	})
	var waypoint = new Waypoint({
		element: $('#news'),
		//element: document.getElementById('about'),
		handler: function(direction) {
			if( direction === 'down') {
				$head.attr('class', 'logo-down');
			}
			else if( direction === 'up'){
				$head.attr('class', 'logo-up');
			}
			//console.log('Direction: ' + direction)
		},
		offset: 107
	})
	*/
	/*
	$('#bs-navbar').on('show.bs.collapse', function () {
		$('#logo').addClass('inact');
	})
	$('#bs-navbar').on('hide.bs.collapse', function () {
		$('#logo').removeClass('inact');
	})
*/
});

function checkSize(){
	var footerheight=$('#footerwrap').outerHeight(); 
	var teaserheight=$('.card-blocks').find('img').outerHeight();
	
	
	var headerheight=$('#header').outerHeight();
	 //$('body').css("padding-top", headerheight);
	 
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


	
	
 
////navigation collapse
//
//	var navbar=$('#navbar').find('.navbar-nav');
//	var navwidth=navbar.outerWidth();
//	console.log(navwidth);
//	 if($(window).width() < 1200) {
//		if(navwidth > 560) {
//			navbar.hide();
//			$('.navbar-toggle').show();
//		}
//		 else {
//			navbar.show();
//			//$('.navbar-toggle').hide();
//		}
//		
//	 }
//	 else {
//			 
//		}
 
	
	
}
/*
$('.card-blocks').each(function() {
		
		  
		var overlayheight=$(this).find('.wrap').outerHeight();
		var courtesyheight=$(this).find('.courtesy').outerHeight();
		console.log(overlayheight + " " + courtesyheight);
		 
        
		var ss=$(this).find('.overlay').css("height", overlayheight+courtesyheight);
		var ss=$(this).find('.wrap').css("height", '100%');
		return ss;
		
		 
   
	 });
*/

/*
 function init() {


 	window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 2,
            header = document.querySelector("#logo");
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
 */


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



//    target = target.replace('#', '');
//alert(target);
 
$(window).load(function() {
    var target = window.location.hash;
  
    if (target) {
  //       console.log("1"+target);
        $.smoothScroll({
			scrollElement: null,
			scrollTarget: target,
			offset: 10,
		});
		//window.history.pushState({}, '', this.hash);
		//e.preventDefault();
       // $('html, body').animate({
        //    scrollTop: $("#" + target).offset().top
        //}, 700, 'swing', function () {});
    }
});


 
 