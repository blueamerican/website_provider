## configuration for default language (id=0) in template config.ts

## English configuration
[globalVar = GP:L = {$englishId}]
config {
	 sys_language_uid = {$englishId}
	config.language = tr
	config.locale_all = tr_TR
	config.htmlTag_langKey = tr
}
[global]

## configuration for further languages
/*
[globalVar = GP:L = {$extraId}]
config {
	 sys_language_uid = {$extraId}
	 language =
	 locale_all =
	 htmlTag_langKey =
}
[global]
*/
lib.flagmenu = COA
lib.flagmenu {
	wrap = 	<div id="polyglotLanguageSwitcher"><form action="#"><select id="polyglot-language-options">|</select></form></div>
	10 = TEXT
	10.value  = <option id="de" value="javascript:void(0);" selected>Deutsch</option>


	20 = TEXT
	20 {
		typolink.parameter.data = page:uid
		typolink.addQueryString = 1
		typolink.addQueryString.method = GET
		typolink.addQueryString.exclude = cHash,L
		typolink.additionalParams.cObject = COA
		typolink.additionalParams.cObject {
			10 = TEXT
			10.wrap = |&L=0
		}
		typolink.returnLast = url
		#wrap = <option value="|" selected="selected" id="de">Deutsch</option>
		wrap = <option id="de" value="javascript:void(0);" selected>Deutsch</option>
	}
	20.typolink.additionalParams.cObject.10.wrap = |&L=1
	20.wrap = <option value="|" id="tr">Türkisch</option>

}

[globalVar = GP:L=1]
	lib.flagmenu.10.value = <option id="tr" value="javascript:void(0);" selected>Türkisch</option>
	lib.flagmenu.20.typolink.additionalParams.cObject.10.wrap = |&L=0
	lib.flagmenu.20.wrap = <option value="|" id="de">Deutsch</option>
[global]
/*
## language menu with flags
lib.flagmenu = HMENU
lib.flagmenu {
	# Ein Sprach-Menue wird erzeugt
	special = language
	# Reihenfolge und Auswahl der Sprachen im Menue
	special.value = {$englishId},{$deutschId}
	#special.value = {$extraId},{$englishId},{$deutschId}

	special.normalWhenNoLanguage = 0
	wrap = <ul class="flagmenu">|</ul>
	1 = TMENU
	1 {
		noBlur = 1
		# Standard Sprachen
		NO = 1
		NO {
			linkWrap = <li>|</li>

			stdWrap.override = {$nameLang1} || {$nameLang0}
			#stdWrap.override = {$nameLang2} || {$nameLang1} || {$nameLang0}

			doNotLinkIt = 1
			stdWrap.typolink.parameter.data = page:uid
			stdWrap.typolink.additionalParams = &L={$englishId} || &L={$deutschId}
			#stdWrap.typolink.additionalParams = &L={$extraId} || &L={$englishId} || &L={$deutschId}
			stdWrap.typolink.ATagParams.dataWrap = class="flags flags{$englishId}"| || class="flags flags{$deutschId}"|
			#stdWrap.typolink.ATagParams.dataWrap = class="flags flags{$extraId}"| || class="flags flags{$englishId}"| || class="flags flags{$deutschId}"|
			stdWrap.typolink.addQueryString = 1
			stdWrap.typolink.addQueryString.exclude = L,id,cHash,no_cache
			stdWrap.typolink.addQueryString.method = GET
			stdWrap.typolink.useCacheHash = 1
			stdWrap.typolink.no_cache = 0
		}

		# Aktive Sprache
		ACT < .NO
		ACT.stdWrap.typolink >
		ACT.linkWrap = <li><span class="flags flags{$englishId}">|</span></li> || <li><span class="flags flags{$deutschId}">|</span></li>
		#ACT.linkWrap = <li><span class="flags flags{$extraId}">|</span></li> || <li><span class="flags flags{$englishId}">|</span></li> || <li><span class="flags flags{$deutschId}">|</span></li>
		# NO + Übersetzung nicht vorhanden
		USERDEF1 < .NO
		USERDEF1.stdWrap.typolink >
		USERDEF1.doNotShowLink = 1
		# ACT + Übersetzung nicht vorhanden
		USERDEF2 < .ACT
		USERDEF2.stdWrap.typolink >
		USERDEF2.doNotShowLink = 1
	}
}


lib.flagmenu {
	wrap = <ul class="flagmenu noflags">|</ul>
	1 {
		NO.stdWrap.typolink.ATagParams.dataWrap >
		ACT.linkWrap = <li>|</li>
		ACT.stdWrap.typolink.ATagParams.dataWrap >
	}
}
*/