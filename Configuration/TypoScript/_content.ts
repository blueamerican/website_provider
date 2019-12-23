temp.unterseiten = CONTENT
temp.unterseiten {
  table = pages
  select {
    pidInList.field = 2
    orderBy = sorting
  }
  renderObj = COA
  renderObj {
    10 = TEXT
    10.field = title
    10.wrap = <h2>test|</h2>
    20 = CONTENT
    20 {
      table = tt_content
      select {
        pidInList.field = 2
        orderBy = sorting
      }
    }
  }
}

temp.kumulierterInhalt = COA
temp.kumulierterInhalt {
  10 = TEXT
  10.field = title
  10.wrap = <h1>|</h1>
  20 = CONTENT
  20 {
    table = tt_content
    select {
      orderBy = sorting
    }
  }
  30 < temp.unterseiten
  30.renderObj {
    30 < temp.unterseiten
    30.renderObj {
      10.wrap = <h3>|<h3>
      30 < temp.unterseiten
      30.renderObj {
        10.wrap = <h4>|<h4>
      }
    }
  }
}

    lib.onePage = CONTENT
    lib.onePage {
      table = pages
       select {
    pidInList.field = 2
    orderBy = sorting
  }
     
      renderObj = COA
      renderObj {
     
        10 = TEXT
        10.value = <section id="{field:subtitle}" class="section-block {field:author}">
        10.insertData = 1
        
        20 = TEXT
        20.field = title
        20.wrap = <header class="section-heading"><h2>|</h2></header>
        
        
     
        100 = CONTENT
        100 {
          table = tt_content
          select {
            pidInList.field = uid
            orderBy = sorting
            where = colPos = 0
          }
          wrap = <div class="section-content">|</div>
          wrap.insertData = 1
        }    
     
        999 = TEXT
        999.value = </section>
      }
    }

page.10 = FLUIDTEMPLATE
page.10 {
## Set the template path

variables {
  content0 < lib.onePage
  }
}