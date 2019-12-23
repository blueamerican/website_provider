####### content elements #######

page.10 = FLUIDTEMPLATE
page.10 {
	## Set the template path
	partialRootPath = EXT:website_provider/Resources/Private/Fluidtemplates/Partials/
	layoutRootPath = EXT:website_provider/Resources/Private/Fluidtemplates/Layouts/
	variables {
		content0 < styles.content.get
		content1 < styles.content.get
		content1 {
			select.where = colPos = 1
		}
		content2 < styles.content.get
		content2 {
			select.where = colPos = 2
		}
		## 3 Boxes for home page
		content10 < styles.content.get
		content10 {
			select.where = colPos = 10
			stdWrap.required = 1
			stdWrap.wrap = <div class="col-md-4">|</div>
		}
		content11 < .content10
		content11 {
			select.where = colPos = 11
		}
		content12 < .content10
		content12 {
			select.where = colPos = 12
		}
		languageMenu = TEXT
		languageMenu.value = {$langMenu}
	}
}

## Assign the Template files with the Fluid Backend-Template
page.10.file.stdWrap.cObject = CASE
page.10.file.stdWrap.cObject {
	key.data = pagelayout

	# Default Template = Projekt
	default = TEXT
	default.value = EXT:website_provider/Resources/Private/Fluidtemplates/Templates/DefaultTemplate.html

	# Standard
	#pagets__1 < .default

	# Home
	#pagets__2 = TEXT
	#pagets__2.value = EXT:website_provider/Resources/Private/Fluidtemplates/Templates/HomeTemplate.html

	pagets__1 = TEXT
	pagets__1.value = EXT:website_provider/Resources/Private/Fluidtemplates/Templates/DefaultTemplate.html


	pagets__2 = TEXT
	pagets__2.value = EXT:website_provider/Resources/Private/Fluidtemplates/Templates/HomeTemplate.html




	pagets__3 = TEXT
	pagets__3.value = EXT:website_provider/Resources/Private/Fluidtemplates/Templates/DefaultTemplateCol1.html

	#4 = TEXT
	#4.value = EXT:website_provider/Resources/Private/Fluidtemplates/Templates/DefaultTemplateCol12.html


	# Projekt
	#2 = TEXT
	#2.value = EXT:website_provider/Resources/Private/Fluidtemplates/Templates/DefaultTemplateProject.html

	# Standard breit
	#3 = TEXT
	#3.value = EXT:website_provider/Resources/Private/Fluidtemplates/Templates/DefaultTemplateWide.html
	
	# Unterseite
	#4 = TEXT
	#4.value = EXT:website_provider/Resources/Private/Fluidtemplates/Templates/DefaultTemplate.html

}