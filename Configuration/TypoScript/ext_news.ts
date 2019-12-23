plugin.tx_news {
	_LOCAL_LANG {
		de {
			more-link = weiterlesen
			back-link = zurück
			dateFormat = %d.%m.%Y
		}
	}
	view {
		templateRootPaths {
			0 = EXT:news/Resources/Private/Templates/
			1 = EXT:news/Resources/Private/Templates/Styles/Twb/Templates
			2 = EXT:website_provider/Resources/Private/Extensions/News/Templates/Styles/Twb/Templates/
		}

		partialRootPaths {
			0 = EXT:news/Resources/Private/Partials/
			1 = EXT:news/Resources/Private/Templates/Styles/Twb/Partials/
			2 = EXT:website_provider/Resources/Private/Extensions/News/Templates/Styles/Twb/Partials/
		}

		layoutRootPaths {
			0 = EXT:news/Resources/Private/Layouts/
			1 = EXT:news/Resources/Private/Templates/Styles/Twb/Layouts/
			2 = EXT:website_provider/Resources/Private/Extensions/News/Templates/Styles/Twb/Layouts/
		}

	}

}

plugin.tx_news.persistence.storagePid = {$newsStoragePid}




#plugin.tx_news.view.twb.templateRootPath = EXT:website_provider/Resources/Private/Extensions/News/Templates/Styles/Twb/Templates/
/*
plugin.tx_news {
	view {
		templateRootPaths {
			0 = EXT:news/Resources/Private/Templates/
			1 = EXT:website_provider/Resources/Private/Extensions/News/Templates/

		}

		partialRootPaths {
			0 = EXT:news/Resources/Private/Partials/
			1 = EXT:website_provider/Resources/Private/Extensions/News/Partials/
		}

		layoutRootPaths {
			0 = EXT:news/Resources/Private/Layouts/
			1 = EXT:website_provider/Resources/Private/Extensions/News/Layouts/
		}

		widget.GeorgRinger\News\ViewHelpers\Widget\PaginateViewHelper.templateRootPath = {$resourceDir}/Private/Extensions/News/Templates/
	}
}
*/
## Behaviour of news, if no news-id is given in detail URL
## In this case, redirect to the page with the list view
plugin.tx_news.settings.detail.errorHandling = redirectToPage,{$newsListPid}

## max items in listview for pagination
plugin.tx_news.settings.list.paginate.itemsPerPage = 12

## remove default css
plugin.tx_news._CSS_DEFAULT_STYLE >

plugin.tx_news.settings {

	## settings for list view
	list {
	    ## dimensions for images in listview
		media {
			image {
				maxWidth = 270
				maxHeight = 270
			}
		}
			#media.image.width = 100c
		#media.image.maxHeight = 67

		## hide pagination above list view
		paginate.insertAbove = 0
	}

	## settings for single view
	detail {
	    ## dimensions for images in detail view
		#media.image.maxWidth = 1000c
		#media.image.maxHeight = 1000c


		## enables/disables lightbox rendering in detail view
		## add here the string that shall appear in the rel attribut
		## Example: media.image.lightbox = lightbox
		## In addition, you have to implement a javascript for the lightbox effect!
		## This is not part of the musterprojekt!
		#media.image.lightbox = 0
		media.image {
			maxWidth = 1000
			maxHeight = 1000
			# Get lightbox settings from fluid_styled_content
			lightbox {
				#enabled = {$styles.content.textmedia.linkWrap.lightboxEnabled}
				enabled = 1
				class = {$styles.content.textmedia.linkWrap.lightboxCssClass}
				width = {$styles.content.textmedia.linkWrap.width}
				height = {$styles.content.textmedia.linkWrap.height}
				rel = lightbox[myImageSet]
			}
		}
	}

	## max characters of teaser
	#cropMaxCharacters = 400

	## if no preview image is found, display no dummy image
	displayDummyIfNoMedia = 0

	## ID of page with list view
	listPid = {$newsListPid}

	ListTagPid = 16

	searchPid = 16

	## ID of page with detail view
	defaultDetailPid = {$newsDetailPid}


	#defaultDetailPid.0 = 9
	#defaultDetailPid.1 = 14
	#defaultDetailPid.2 = 33

	#storagePid.0 = 4
	#storagePid.1 = 15
	#storagePid.2 = 32

}

[PIDinRootline = 3]
	plugin.tx_news.settings.listPid = 3
[global]

[PIDinRootline = 5]
	plugin.tx_news.settings.listPid = 5
[global]

[PIDinRootline = 28]
	plugin.tx_news.settings.listPid = 28
[global]



## remove the "erstellt von" in news detail view
## necessary for each used language
plugin.tx_news._LOCAL_LANG {
	default {
		author = %s
	}
	de {
		author = %s
	}
	en {
		author = %s
	}
	fr {
		author = %s
	}
}

## Settings for social plugins

## Set this to 0 to deactivate the social buttons in news detail view
plugin.tx_news.settings.detail.showSocialShareButtons = 0

## Default Language German
plugin.tx_news.settings.facebookLocale = de_DE
plugin.tx_news.settings.googlePlusLocale = de
plugin.tx_news.settings.disqusLocale = de


## English
[globalVar = GP:L = {$englishId}]
plugin.tx_news.settings.facebookLocale = en_EN
plugin.tx_news.settings.googlePlusLocale = en
plugin.tx_news.settings.disqusLocale = en
[global]

## Settings for further languages
#[globalVar = GP:L = {$extraId}]
#plugin.tx_news.settings.facebookLocale = fr_FR
#plugin.tx_news.settings.googlePlusLocale = fr
#plugin.tx_news.settings.disqusLocale = fr
#[global]

#aktuelle seite
lib.pageid = TEXT
lib.pageid.data = page:uid

#Tag Suche ohne get parameter oder mit
lib.pagenewsvar = TEXT
lib.pagenewsvar.data = GP:tx_news_pi1|overwriteDemand|tags

lib.pagecatvar = TEXT
lib.pagecatvar.data = GP:tx_news_pi1|overwriteDemand|categories

lib.fbbutton = COA
lib.fbbutton {
	10 = TEXT
	# aktuelle Seite
	10.typolink.parameter.data = TSFE:id
	# nur die URL
	10.typolink.returnLast = url
	# die BaseURL (muss definiert sein)
	10.dataWrap = {TSFE:baseUrl}|
	# URL.kodiert.
	10.rawUrlEncode = 1
#	wrap = <iframe src="http://www.facebook.com/plugins/like.php?href=|&layout=button_count&show_faces=false&width=350&action=like&colorscheme=light&height=30" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:350px; height:30px; margin: 0 0 0 0;" allowTransparency="true"></iframe>
#wrap = <iframe src="https://www.facebook.com/plugins/like.php?href=|&width=132&layout=button&action=like&size=small&show_faces=false&share=true&height=65&appId" width="132" height="65" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
}

lib.libutton = COA
lib.libutton {
	10 = TEXT
	# aktuelle Seite
	10.typolink.parameter.data = TSFE:id
	# nur die URL
	10.typolink.returnLast = url
	# die BaseURL (muss definiert sein)
	10.dataWrap = {TSFE:baseUrl}|
	# URL.kodiert.
	10.rawUrlEncode = 1
	#	wrap = <iframe src="http://www.facebook.com/plugins/like.php?href=|&layout=button_count&show_faces=false&width=350&action=like&colorscheme=light&height=30" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:350px; height:30px; margin: 0 0 0 0;" allowTransparency="true"></iframe>
	wrap = <script src="//platform.linkedin.com/in.js" type="text/javascript"> lang: de_DE</script><script type="IN/Share" data-url="|"></script>
}


lib.sociallinks = COA
lib.sociallinks {
	wrap = <div class="social-links-wrap"><ul class="social-links">|</div>

	10 = TEXT
	10 {
		value = Share on Facebook weiterempfehlen
		typolink.title = Auf Facebook teilen
		typolink.ATagParams = class="popup"
		typolink.parameter.cObject = COA
		typolink.parameter.cObject {
			10 = TEXT
			10.dataWrap = http://www.facebook.com/sharer/sharer.php?u={TSFE:baseUrl}|
			10.typolink.parameter.data = TSFE:id
			10.typolink.returnLast = url
			10.typolink.addQueryString = 1
			10.typolink.addQueryString.exclude = id
		}
		typolink.wrap = <i class="fa fa-facebook"></i><span class="sr-only">|</span>
		typolink.ATagBeforeWrap = 1
		wrap = <li>|</li>
	}

	20 = TEXT
	20 {
		value = Share on Twitter weiterempfehlen
		typolink.title = Auf Twitter teilen
		typolink.ATagParams = class="popup"
		typolink.parameter.cObject = COA
		typolink.parameter.cObject {
			10 = TEXT
			10.dataWrap = http://twitter.com/share?status={TSFE:baseUrl}|
			10.typolink.parameter.data = TSFE:id
			10.typolink.returnLast = url
			10.typolink.addQueryString = 1
			10.typolink.addQueryString.exclude = id
		}
		typolink.wrap = <i class="fa fa-twitter"></i><span class="sr-only">|</span>
		typolink.ATagBeforeWrap = 1
		wrap = <li>|</li>
	}

	30 = TEXT
	30 {
		value = Share on google plus weiterempfehlen
		typolink.title = Auf google plus teilen
		typolink.ATagParams = class="popup"
		typolink.parameter.cObject = COA
		typolink.parameter.cObject {
			10 = TEXT
			10.dataWrap = https://plus.google.com/share?url={TSFE:baseUrl}|
			10.typolink.parameter.data = TSFE:id
			10.typolink.returnLast = url
			10.typolink.addQueryString = 1
			10.typolink.addQueryString.exclude = id
		}
		typolink.wrap = <i class="fa fa-google-plus"></i><span class="sr-only">|</span>
		typolink.ATagBeforeWrap = 1
		wrap = <li>|</li>
	}

	40 = TEXT
	40 {
		value = Share on linkedin weiterempfehlen
		typolink.title = Auf linkedin teilen
		typolink.ATagParams = class="popup"
		typolink.parameter.cObject = COA
		typolink.parameter.cObject {
			10 = TEXT
			10.dataWrap = https://www.linkedin.com/cws/share?url={TSFE:baseUrl}|
			10.typolink.parameter.data = TSFE:id
			10.typolink.returnLast = url
			10.typolink.addQueryString = 1
			10.typolink.addQueryString.exclude = id
		}
		typolink.wrap = <i class="fa fa-linkedin"></i><span class="sr-only">|</span>
		typolink.ATagBeforeWrap = 1
		wrap = <li>|</li>
	}
/*
	20 = TEXT
	20 {
		value = Twitter
		typolink.title = Tweet it!
		typolink.ATagParams = class="twitterLink"
		typolink.parameter.cObject = COA
		typolink.parameter.cObject {
			10 = TEXT
			10.data = page:title
			10.noTrimWrap = |ließt%20grad:%20||
			10.dataWrap = http://twitter.com/home/?status=|
			10.rawUrlEncode = 1

			20 = TEXT
			20.dataWrap = %20-%20{$baseURL}|
			20.typolink.parameter.data = TSFE:id
			20.typolink.returnLast = url
			20.typolink.addQueryString = 1
			20.typolink.addQueryString.exclude = id
		}
	}

	30 = TEXT
	30 {
		value = Mister Wong
		typolink.title = Wong it!
		typolink.ATagParams = class="wongLink"
		typolink.parameter.cObject = COA
		typolink.parameter.cObject {
			10 = TEXT
			10.dataWrap = http://www.mister-wong.de/index.php?action=addurl&bm_url={$baseURL}|
			10.typolink.parameter.data = TSFE:id
			10.typolink.returnLast = url
			10.typolink.addQueryString = 1
			10.typolink.addQueryString.exclude = id

			20 = TEXT
			20.data = page:title
			20.wrap = &bm_description=|
			20.rawUrlEncode = 1
		}
	}
*/
}


/*
lib.tagselect = CONTENT
lib.tagselect {
table = tx_news_domain_model_tag
select {
selectFields = tx_news_domain_model_tag.title
orderBy = tx_news_domain_model_tag.title asc
### pid folder 'tags'
pidInList = 1
}
renderObj = COA
renderObj {
10 = TEXT
10.field = uid
10.wrap = <option value="|">
10.wrap.insertData = 1

20 = TEXT
20.field = title
20.wrap = |</option>
20.wrap.insertData = 1
}
}

lib.tagselect.wrap = select<form method="get" action="/index.php"><input type="hidden" name="id" value="16" /><select name="tx_news_pi1[overwriteDemand][tags]"><option value="" selected>Tag Suche</option>|</select><input type="submit" value="Suchen"></form>
*/



lib.tagselect = CONTENT
lib.tagselect {
	table = tx_news_domain_model_tag
	select {
		selectFields = tx_news_domain_model_tag.title
		orderBy = tx_news_domain_model_tag.title asc
		### pid folder 'tags'
		pidInList = 1
	}
	renderObj = COA
	renderObj {
		10 = TEXT
		10 {
			typolink.parameter=16
			typolink.additionalParams.dataWrap = &tx_news_pi1[overwriteDemand][tags]={field:uid}
			typolink.returnLast = url
			wrap = <option value="|">
			wrap.insertData = 1
		}




		20 = TEXT
		20.field = title
		20.wrap = |</option>
		20.wrap.insertData = 1
	}
}

lib.tagselect.wrap = <form action=""><div class="form-group"><select id="tag-search" class="form-control"><option value="">neue Suche</option>|</select></div><div class="form-group"><input type="submit" value="Suchen" id="tag-search-submit" class="btn btn-primary"></div></form>


/*
lib.tagselect = CONTENT
lib.tagselect {
	table = tx_news_domain_model_tag
	select {
		selectFields = tx_news_domain_model_tag.title
		orderBy = tx_news_domain_model_tag.title asc
		### pid folder 'tags'
		pidInList = 1
	}
	renderObj = COA
	renderObj {

			10 = TEXT
			10.field = uid
			10.wrap = <option value="|">
			10.wrap.insertData = 1



		20 = TEXT
		20.field = title
		20.wrap = |</option>
		20.wrap.insertData = 1
	}
}

lib.tagselect.wrap = select<form method="get" action="/tag-suche/tags/"><select><option value="" selected>Tag Suche</option>|</select><input type="submit" value="Suchen"></form>
*/

#20 = TEXT
#20.typolink.parameter = {$plugin.tx_newloginbox.loginUID}
#20.typolink.returnLast = url
#20.wrap = <form action="|" method="post">
