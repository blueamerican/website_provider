lib.logo = COA
lib.logo {


	10 = IMAGE
	10.file = {$resourceDir}/Public/assets/images/bg-footer.png
	10.width = 70
	10.height = 38
	10.altText = {$sitename}
	10.params = id="logo"


	20 = TEXT
	20.value = {$sitename}
	20.wrap = <span>|</span>

	stdWrap.typolink {
		parameter = {$rootUid}
		title = {$sitename}
		ATagParams = class="navbar-brand"
	}

	}
