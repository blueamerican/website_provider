function languageSwitcher () {
    if ($("#polyglot-language-options").length) {
        $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
            effect: 'fade',
            testMode: false,
            onChange: function(evt){
                //alert("The selected language is: "+evt.selectedItem);
                //alert(evt);
            }
//                ,afterLoad: function(evt){
//                    alert("The selected language has been loaded");
//                },
//                beforeOpen: function(evt){
//                    alert("before open");
//                },
//                afterOpen: function(evt){
//                    alert("after open");
//                },
//                beforeClose: function(evt){
//                    alert("before close");
//                },
//                afterClose: function(evt){
//                    alert("after close");
//                }
        });
    };
}

jQuery(document).ready(function() {
    languageSwitcher ()
	// queryStrip
	function queryStrip(string) {
		string = string.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
		var regex = new RegExp('[\\?&]' + string + '=([^&#]*)'),
			results = regex.exec(location.search);
		return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ''));
	}

	// Show bootstrap tab on load
	// If the tab id="friendRequests", you can show it on page load by appending `?tab=friendRequests` to the URL
	var tabString = queryStrip('tab');
	if (tabString !== '') {
		jQuery('.nav-tabs a[href=#' + tabString + ']').tab('show');
	}

	jQuery('.flexslider').flexslider({
		animation: "slide",
		easing:"swing",
		customDirectionNav: jQuery(".flex-navigation a")
	});


	jQuery("#btn-gal").click(function() {
		jQuery("#cal-first").trigger("click");
	});

	jQuery('a.magnificpopup').each(function() {
		//	jQuery(this).append('<span><a class="btn btn-primary eq-ui-btn-fab eq-ui-waves-light waves-effect waves-effect waves-light"><i class="demo-icon icon-plus"></i></a></span>');
		jQuery(this).append('<span><i class="demo-icon icon-plus"></i></span>').wrap("<div class='outer'></div>");;
	});
	
	//close offcanvas navigation
	jQuery('.btn-close').click(function (){
		jQuery('.navbar-offcanvas').offcanvas('hide');
	});


    $('.news-single .thumbnail').each(function() {
        $(this).magnificPopup({
            delegate: 'a:isImageFile',
            tClose: 'Schließen (Esc)',
            type: 'image',
            tLoading: 'Lade Bild #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: 1,
                preload: [1,2],
                navigateByImgClick: 1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                tPrev: 'Vorheriges (Linke Pfeiltaste)',
                tNext: 'Nächstes (Rechte Pfeiltaste)',
                tCounter: '%curr% von %total%'
            },
            image: {
                cursor: 'mfp-zoom-out-cur',
                titleSrc: 'title',
                verticalGap: 88,
                verticalFit: 1,
                tError: '<a href="%url%">Das Bild</a> konnte nicht geladen werden.'
            },
            removalDelay: 0
        });
    });



	// correct foooter position
	function reInitialize(){
		resizeFooterPos();
	}
	
	jQuery(window).smartresize(reInitialize);
	reInitialize();	
});

function resizeFooterPos(){
	var window_height = jQuery(window).height();
	jQuery("#content").height("auto");
	var body_height = jQuery("body").height();
	var content_padding = jQuery("#content").outerHeight() - jQuery("#content").height();
	var diff = window_height-body_height;
	
	if(diff > 0){
		var newHeight = jQuery("#content").outerHeight()+diff-content_padding;
		jQuery("#content").animate({'height': newHeight}, 0,'linear');
	}
}
	
jQuery(window).load(function() {       
	resizeFooterPos();
});

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