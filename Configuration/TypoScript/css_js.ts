page.includeCSS {
	/*
	file5  = //fonts.googleapis.com/css?family=Dosis:300,400,500,600,700
	file5.external = 1
	file5.excludeFromConcatenation = 1
	file5.disableCompression = 1
	file5.media = all
*/

	#file7  = //fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i
	#file7.external = 1
	#file7.media = all

	#file10 = fileadmin/css/news-basic.css
	#file10.media = all

	file20 = {$resourceDir}/Public/assets/css/fluid_styled_content.css
	file20.media = all

	file30 = {$resourceDir}/Public/assets/css/plugins.css
	file30.media = all

	file40 = {$resourceDir}/Public/assets/css/fontello/css/icons2.css
	file40.media = all

	file50 = {$resourceDir}/Public/assets/css/polyglot-language-switcher.css
	file50.media = all

	#slider startseite
	file60 = {$resourceDir}/Public/assets/css/slider.css
	file60.media = all

	file70 = {$resourceDir}/Public/assets/css/main.css
	file70.media = all

}


page.includeJS{
	file10 = {$resourceDir}/Public/assets/js/vendor/modernizr.min.js
	file20 = {$resourceDir}/Public/assets/js/vendor/jquery.min.js
	#file30 = fileadmin/GM_Utils/GPX2GM.js
}


page.includeJSFooter {
	file10 = {$resourceDir}/Public/assets/js/jasny-bootstrap.min.js
	file20 = {$resourceDir}/Public/assets/js/offcanvas.js
	file30 = {$resourceDir}/Public/assets/js/ie10-viewport-bug-workaround.js
	file40 = {$resourceDir}/Public/assets/js/plugins/jquery.flexslider-min.js
	file50 = {$resourceDir}/Public/assets/js/smartresize.js
	file60 = {$resourceDir}/Public/assets/js/bootstrap.min.js
	file70 = {$resourceDir}/Public/assets/js/jquery.smartmenus.js
	file80 = {$resourceDir}/Public/assets/js/jquery.smartmenus.bootstrap.js
	file90 = {$resourceDir}/Public/assets/js/jquery.polyglot.language.switcher.js
	file100 = {$resourceDir}/Public/assets/js/global.js


}
page.headerData {

	87664842 = TEXT
	87664842.value(
    <script>document.createElement( "picture" );</script>
    <script src="{$resourceDir}/Public/assets/js/picturefill.min.js" async></script>
	)
}

####
#### responive images
####
[globalVar = TSFE:id=1]

page.includeJSFooter {
	file5 = {$resourceDir}/Public/assets/js/plugins/owl.carousel.min.js
}
page.footerData {

	87664842 = TEXT
	87664842.value(

	<script>
		$(function () {
            var owl = $('.owl-carousel');
            owl.owlCarousel({
                margin: 10,
                loop: true,
                autoplay: true,
                smartSpeed: 500,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            })
        });
	</script>
	)
}

[global]


###
### customize powermail
###
/*
page.includeCSS.powermailCssBasic = fileadmin/css/powermail.css
page.includeJSFooterlibs.powermailJQuery >
page.includeJSFooter.powermailJQueryDatepicker >
page.includeJSFooter.powermailJQueryTabs >
#page.includeJSFooterlibs.powermailJQueryUi >
#page.includeJSFooterlibs.powermailJQueryUiDatepicker >
*/



###
### google analytics
###
/*
page {
headerData.15 = TEXT
headerData.15.value (
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-53945048-1', 'auto');
ga('set', 'anonymizeIp', true);
ga('send', 'pageview');

</script>
)
}
*/

###
### header data
###
page.headerData {
	7 = TEXT
	7.value(
		<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        		<!--[if lt IE 9]>
        		  <script src="typo3conf/ext/website_provider/Resources/Public/assets/js/html5shiv.min.js" type="text/javascript"></script>
        		  <script src="typo3conf/ext/website_provider/Resources/Public/assets/js/respond.min.js" type="text/javascript"></script>
        		<![endif]-->

	)
	#10 = TEXT
	#10.value (
	#	<link rel="apple-touch-icon" href="fileadmin/img/apple-touch-icon.png">
	#)

}
