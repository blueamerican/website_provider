lib.footercol1 = CONTENT
lib.footercol1.table = tt_content
lib.footercol1.select {

    orderBy = sorting
    where = colPos = 0
	pidInList = 8
}

lib.footercol2 = CONTENT
lib.footercol2.table = tt_content
lib.footercol2.select {

    orderBy = sorting
    where = colPos = 0
	pidInList = 9
}

lib.footercol3 = CONTENT
lib.footercol3.table = tt_content
lib.footercol3.select {

    orderBy = sorting
    where = colPos = 0
    pidInList = 10
}

lib.footercol4 = COA
lib.footercol4 {
    10 = TEXT
    10.value = <h4>Rechtliches</h4>

    20 = HMENU
    20 {
        special = directory
        special.value = 12
        wrap = <ul class="bs-docs-footer-links">|</ul>
        1 = TMENU
        1.NO = 1
        1.NO.wrapItemAndSub = <li> | </li>

        1.ACT < .1.NO
        1.ACT.wrapItemAndSub = <li class="active"> | </li>
    }
}