

lib.menu_level2 < lib.menu_horizontal
lib.menu_level2 {
	entryLevel = 1

	wrap = |<!-- -->
	1 {
		wrap = <ul class="nav navbar-nav level-2 navbar-left clearfix">|</ul>
		NO {
			#wrapItemAndSub = <li>|</li>
			wrapItemAndSub = <li class="first">|</li> |*| <li>|</li> |*| <li class="last">|</li>
		}

		# First clear the ATagParams setting of the ACT state because we are working with a copy of the object 'menu'
		# After that we add our modified configuration for menu.secondlevel
		ACT {
			ATagParams >
			#wrapItemAndSub = <li class="active">|</li>
			wrapItemAndSub = <li class="active first">|</li> |*| <li class="active">|</li> |*| <li class="active last">|</li>
		}

		CUR {
			ATagParams >
			#wrapItemAndSub = <li class="selected">|</li>
			wrapItemAndSub = <li class="selected first">|</li> |*| <li class="selected">|</li> |*| <li class="selected last">|</li>

		}

	}

	# Copy the configuration of the first level of this menu to level 2 and 3
	2 < .1
	3 < .1
}