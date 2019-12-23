
# Überschrift des Inhaltselements ausgeben (optional)
tt_content.gridelements_pi1.10 =< lib.stdheader



# Fluid-Template zuweisen
tt_content.gridelements_pi1.20.10.setup {
	# GRID_ID ist die ID des entsprechenden Gridelements
	2 < lib.gridelements.defaultGridSetup
	2 {
		cObject = FLUIDTEMPLATE
		cObject {
			file = typo3conf/ext/website_provider/Resources/Private/Extensions/gridelements/zweispaltig.html
		}
	}
	3 < lib.gridelements.defaultGridSetup
	3 {
		cObject = FLUIDTEMPLATE
		cObject {
			file = typo3conf/ext/website_provider/Resources/Private/Extensions/gridelements/einspaltig.html
		}
	}

}