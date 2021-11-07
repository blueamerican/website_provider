page = PAGE
page.bodyTag >
page.bodyTagCObject = TEXT

[treeLevel = 0]
page.bodyTagCObject.value= layout1
[global]

[treeLevel = 1]
page.bodyTagCObject.value= layout2
[global]

page.bodyTagCObject.wrap = <body class="|">

####### favicons #######
page.shortcutIcon = {$resourceDir}/Public/assets/images/favicon.ico
page.headerData.10 = TEXT
page.headerData.10.value (
    <link rel="apple-touch-icon" href="{$resourceDir}/Public/assets/images/apple-touch-icon.png">
)




####
#### Page Title
####

config.noPageTitle = 2
page.headerData.5 = TEXT
page.headerData.5.field = subtitle // title
page.headerData.5.wrap = <title>|&nbsp;- Test Seite.</title>


/*
page.headerData.20 = TEXT
page.headerData.20.value (
<!-- Global site tag (gtag.js) - Google Analytics -->
<script>

var gaProperty = 'UA-111483103-1';
var disableStr = 'ga-disable-' + gaProperty;
if (document.cookie.indexOf(disableStr + '=true') > -1) {
  window[disableStr] = true;
}
function gaOptout() {
  document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
  window[disableStr] = true;
}

</script>

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-111483103-1"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-111483103-1', { 'anonymize_ip': true });
</script>

)
*/
