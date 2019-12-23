lib.heroimage = COA
lib.heroimage {
    5 =  TEXT
    5.value = <!--[if IE 9]><video style="display: none;"><![endif]-->

    10 = IMG_RESOURCE
    10 {
        file {
            import = uploads/media/
            import.data = levelmedia:-1, slide
            treatIdAsReference = 1
            import.listNum = 0
            width = 1903c
            height = 390c
        }
        stdWrap.wrap = <source media="(min-width:1400px)" srcset="|">
    }
    20 = IMG_RESOURCE
    20 {
        file {
            import = uploads/media/
            import.data = levelmedia:-1, slide
            treatIdAsReference = 1
            import.listNum = 0
            width = 1400c
            height = 287c
        }
        stdWrap.wrap = <source media="(min-width:992px)" srcset="|">
    }
    30 = IMG_RESOURCE
    30 {
        file {
            import = uploads/media/
            import.data = levelmedia:-1, slide
            treatIdAsReference = 1
            import.listNum = 0
            width = 992c
            height = 203c
        }
        stdWrap.wrap = <source media="(min-width:420px)" srcset="|">
    }

    35 = TEXT
    35.value = <!--[if IE 9]></video><![endif]-->

    40 = IMG_RESOURCE
    40 {
        file {
            import = uploads/media/
            import.data = levelmedia:-1, slide
            treatIdAsReference = 1
            import.listNum = 0
            width = 420c
            height = 86c
        }
        stdWrap.wrap = <img srcset="|" alt="Baumpflege Lexikon" />
    }
}
/*
lib.heroimage = IMAGE
lib.heroimage {
    file {
        import = uploads/media/
        import.data = levelmedia:-1, slide
        treatIdAsReference = 1
        import.listNum = 0
        width = 1904
        height = 390
        import.listNum = 0
    }
    params = class="img-responsive"
    stdWrap.wrap = <section class="hero"><figure>|</figure></section>
}

lib.heroimagehome = IMAGE
lib.heroimagehome {
    file {
        import = uploads/media/
        import.data = levelmedia:-1, slide
        treatIdAsReference = 1
        import.listNum = 0
        width = 1904
        height = 600
        import.listNum = 0
    }
    params = class="img-responsive"
    #stdWrap.wrap = <section class="hero"><figure>|</figure></section>
}
*/
lib.heroimagehome = COA
lib.heroimagehome {
    5 =  TEXT
    5.value = <!--[if IE 9]><video style="display: none;"><![endif]-->

    10 = IMG_RESOURCE
    10 {
        file {
            import = uploads/media/
            import.data = levelmedia:-1, slide
            treatIdAsReference = 1
            import.listNum = 0
            width = 1903c
            height = 600c
        }
        stdWrap.wrap = <source media="(min-width:1400px)" srcset="|">
    }
    20 = IMG_RESOURCE
    20 {
        file {
            import = uploads/media/
            import.data = levelmedia:-1, slide
            treatIdAsReference = 1
            import.listNum = 0
            width = 1400c
            height = 441c
        }
        stdWrap.wrap = <source media="(min-width:992px)" srcset="|">
    }
    30 = IMG_RESOURCE
    30 {
        file {
            import = uploads/media/
            import.data = levelmedia:-1, slide
            treatIdAsReference = 1
            import.listNum = 0
            width = 992c
            height = 313c
        }
        stdWrap.wrap = <source media="(min-width:420px)" srcset="|">
    }

    35 = TEXT
    35.value = <!--[if IE 9]></video><![endif]-->

    40 = IMG_RESOURCE
    40 {
        file {
            import = uploads/media/
            import.data = levelmedia:-1, slide
            treatIdAsReference = 1
            import.listNum = 0
            width = 420c
            height = 132c
        }
        stdWrap.wrap = <img srcset="|" alt="Baumpflege Lexikon" />
    }
}

/*

lib.heroimagefooter = IMAGE
lib.heroimagefooter {
    file {
        import = uploads/media/
        import.data = levelmedia:-1, slide
        treatIdAsReference = 1
        import.listNum = 0
        width = 1904
        height = 390
        import.listNum = 1
    }
    params = class="img-responsive"
    stdWrap.wrap = <section class="hero"><figure>|</figure></section>
}
*/
lib.heroimagefooter = COA
lib.heroimagefooter {
    5 =  TEXT
    5.value = <!--[if IE 9]><video style="display: none;"><![endif]-->

    10 = IMG_RESOURCE
    10 {
        file {
            import = uploads/media/
            import.data = levelmedia:-1, slide
            treatIdAsReference = 1
            width = 1903c
            height = 390c
            import.listNum = 1
        }
        stdWrap.wrap = <source media="(min-width:1400px)" srcset="|">
    }
    20 = IMG_RESOURCE
    20 {
        file {
            import = uploads/media/
            import.data = levelmedia:-1, slide
            treatIdAsReference = 1
            import.listNum = 1
            width = 1400c
            height = 287c
        }
        stdWrap.wrap = <source media="(min-width:992px)" srcset="|">
    }
    30 = IMG_RESOURCE
    30 {
        file {
            import = uploads/media/
            import.data = levelmedia:-1, slide
            treatIdAsReference = 1
            import.listNum = 1
            width = 992c
            height = 203c
        }
        stdWrap.wrap = <source media="(min-width:420px)" srcset="|">
    }

    35 = TEXT
    35.value = <!--[if IE 9]></video><![endif]-->

    40 = IMG_RESOURCE
    40 {
        file {
            import = uploads/media/
            import.data = levelmedia:-1, slide
            treatIdAsReference = 1
            import.listNum = 1
            width = 420c
            height = 86c
        }
        stdWrap.wrap = <img srcset="|" alt="Baumpflege Lexikon" />
    }
}