## Backend-Layouts definieren
mod.web_layout.BackendLayouts {

	## Standard-Layout
	1 {
		title = Unterseite
		icon = EXT:website_provider/Resources/Public/Icons/belayout_standardlayout.png
		config {
			backend_layout {
				colCount = 1
				rowCount = 1
				rows {
					1 {
						columns {
							1 {
								name = Inhalt
								colPos = 0
							}
						}
					}


				}
			}
		}
	}

	## Startseite
	2 {
		title = Startseite
		icon = EXT:website_provider/Resources/Public/Icons/belayout_startseite.png
		config {
			backend_layout {
				colCount = 1
				rowCount = 2
				rows {
					1 {
						columns {
							1 {
								name = Inhalt oben
								colPos = 1
							}
						}
					}


					2 {
						columns {
							1 {
								name = Inhalt unten
								colPos = 0
							}
						}
					}
				}
			}
		}
	}

	## Startseite
	3 {
		title = Unterseite eine Spalte
		icon = EXT:website_provider/Resources/Public/Icons/belayout_startseite.png
		config {
			backend_layout {
				colCount = 1
				rowCount = 1
				rows {
					1 {
						columns {
							1 {
								name = Inhalt
								colPos = 0
							}
						}
					}
				}
			}
		}
	}
}