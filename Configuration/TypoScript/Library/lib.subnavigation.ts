[globalVar = TSFE:page|pid=23]
lib.submenuArrow = COA
lib.submenuArrow {
	10 = HMENU
	10 {
		special = browse
		special.entryLevel = 23
		special.items = prev

		1 = TMENU
		1 {
			NO = 1
			NO.ATagParams = class="pageArrow prev"
		}
	}

	20 < .10
	20 {
		special.items = next
		1.NO.ATagParams = class="pageArrow next"
	}
wrap = <div class="row"><div class="col-md-8">|</div></div>
}
[global]