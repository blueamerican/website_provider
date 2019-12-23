
lib.navigation = HMENU
lib.navigation {
	entryLevel = 0
	# excludeUidList = 11,13,14
	wrap = <ul class="nav navbar-nav navbar-left" data-sm-skip-collapsible-behavior="true">|</ul>

	1 = TMENU

	1.expAll = 1

	1.NO = 1
	1.NO.wrapItemAndSub = <li class="uid_{field:uid} first">|</li>|*|<li class="uid_{field:uid} middle">|</li>|*|<li class="uid_{field:uid} last">|</li>
	1.NO.ATagParams =
	1.NO.wrapItemAndSub.insertData = 1

	1.ACT = 1
	1.ACT < .1.NO
	1.ACT.wrapItemAndSub = <li class="uid_{field:uid} first active">|</li>|*|<li class="uid_{field:uid} middle active">|</li>|*|<li class="uid_{field:uid} last active">|</li>
	1.ACT.wrapItemAndSub.insertData = 1

	#1.CUR < .1.NO
	#1.CUR.wrapItemAndSub = <li class="uid_{field:uid} first active cur">|</li>|*|<li class="uid_{field:uid} middle active cur">|</li>|*|<li class="uid_{field:uid} last active cur">|</li>

	#1.IFSUB = 1
	#1.IFSUB.wrapItemAndSub = <li class="uid_{field:uid} first">|</li>|*|<li class="uid_{field:uid} middle">|</li>|*|<li class="uid_{field:uid} last">|</li>
	#1.IFSUB.wrapItemAndSub.insertData = 1

	#1.IFSUB.doNotLinkIt = 1
	#1.IFSUB.allWrap = <a href="javascript:void(0);">|</a>

	#1.ACTIFSUB = 1
	#1.ACTIFSUB.wrapItemAndSub = <li class="uid_{field:uid} first active">|</li>|*|<li class="uid_{field:uid} middle active">|</li>|*|<li class="uid_{field:uid} last active">|</li>
	#1.ACTIFSUB.wrapItemAndSub.insertData = 1
	#1.ACTIFSUB.doNotLinkIt = 1
	#1.ACTIFSUB.allWrap = <a href="javascript:void(0);">|</a>

	#1.CURIFSUB = 1
	#1.CURIFSUB.wrapItemAndSub = <li class="uid_{field:uid} first active cur">|</li>|*|<li class="uid_{field:uid} middle active cur">|</li>|*|<li class="uid_{field:uid} last active cur">|</li>
	#1.CURIFSUB.wrapItemAndSub.insertData = 1
	#1.CURIFSUB.doNotLinkIt = 1
	#1.CURIFSUB.allWrap = <a href="javascript:void(0);">|</a>

/*
	1.IFSUB = 1
	1.IFSUB.wrapItemAndSub = <li class="dropdown">
	1.IFSUB.stdWrap.wrap = |<i class="fa fa-chevron-down" aria-hidden="true"></i>

	#1.IFSUB.ATagParams = class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"
	1.IFSUB.ATagParams = class="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false"

	1.ACTIFSUB =1
	1.ACTIFSUB.wrapItemAndSub = <li class="dropdown active">|</li>
	1.ACTIFSUB.stdWrap.wrap = |<i class="fa fa-chevron-down" aria-hidden="true"></i>
	#1.ACTIFSUB.ATagParams = class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"
	1.ACTIFSUB.ATagParams = class="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false"
*/

	1.IFSUB = 1
	1.IFSUB.wrapItemAndSub = <li class="dropdown">
	1.IFSUB.stdWrap.wrap = |<i class="demo-icon-1 icon-down-open-big"></i>
	#1.IFSUB.ATagParams = class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"
	1.IFSUB.ATagParams = class="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false"

	1.ACTIFSUB =1
	1.ACTIFSUB.wrapItemAndSub = <li class="dropdown active">|</li>
	1.ACTIFSUB.stdWrap.wrap = |<i class="demo-icon-1 icon-down-open-big"></i>
	#1.ACTIFSUB.ATagParams = class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"
	1.ACTIFSUB.ATagParams = class="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false"

	2 < .1
	2.expAll = 1
	2.NO.wrapItemAndSub = <li>|</li>
	2.ACT.wrapItemAndSub = <li class="active">|</li>
	2.stdWrap.dataWrap = <ul class="dropdown-menu">|</ul>
	2.IFSUB.stdWrap.wrap >
	2.ACTIFSUB.stdWrap.wrap >

	#3 < .2

	#3 >
}

lib.pidNews = TEXT
lib.pidNews.value = {$website_provider.pidNews}