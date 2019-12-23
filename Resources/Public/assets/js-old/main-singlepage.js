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
			offset: -110,
		afterScroll: function() { 
			
			; }
		});

	});
	
	$('.slider a','.layout2').on('click', function(e) {
		e.preventDefault();
		$.smoothScroll({
			scrollElement: null,
			scrollTarget: this.hash,
			offset: -137,
		});
	});

 $('.section-block').each(function eachElement() {
                    // cache the jQuery object
                    var $this = $(this);

                    var position = $this.position();

                    //console.log(position.top);
                    //window.console.log('min: ' + position.top + ' / max: ' + window.parseInt(position.top + $this.height(), 10));

                    $this.scrollspy({
                        min: position.top - 117,
                        max: position.top - 117 + $this.height(),
                        onEnter: function onEnter(element/*, position*/) {
                         $('.navbar-nav > li').removeClass();
							var navact = "/#" + element.id;
							$('.navbar-nav > li > a').each(function(i) {
							    if($(this).attr("href") == navact)
							    {
							       $(this).parent().addClass('active');
							    }
							});


                          //  $('body').css('background-color', element.id);
                          //  window.console.log('Entering ' + element.id +" "+ $this.min);
                        },
                        onLeave: function onLeave(element/*, position*/) {
                           //$('.navbar-nav > li').removeClass();
                           /*
                           var navact = "/#" + element.id;
							$('.navbar-nav > li > a').each(function(i) {
							    if($(this).attr("href") == navact)
							    {
							     // $('.navbar-nav > li').removeClass();
							       $(this).parent().removeClass('active');
							    }
							});
							*/
                         //  window.console.log('leave ' + element.id);
                        }
                    });
                });

$("body").click(function(event) {
        // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called 
         if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible") ) {
            $('.navbar-collapse').collapse('toggle');
        }
  });


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

}

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
        $.smoothScroll({
			scrollElement: null,
			scrollTarget: target,
			offset: -110,
		});
		
    }
});


 
 