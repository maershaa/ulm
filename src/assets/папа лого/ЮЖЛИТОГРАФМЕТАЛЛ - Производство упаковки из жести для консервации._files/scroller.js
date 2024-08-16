
//<script language="JavaScript1.2">

//configure the below five variables to change the style of the scroller
var scrollerwidth=100
var scrollerheight=140
var scrollerbgcolor='white'
//set below to '' if you don't wish to use a background image
var scrollerbackground=''

//configure the below variable to change the contents of the scroller
var messages=new Array()
messages[0]="<font face='Tahoma' size='1'>Рекламный блок номер 1, идет текст, текст, текст, текст</font>"
messages[1]="<font face='Tahoma' size='1'>Блок рекламы второй, Вам нравится...</font>"
messages[2]="<font face='Tahoma' size='1'>Интересно... а третий блок рекламы, вы прочитаете...?</font>"
messages[3]="<font face='Tahoma' size='1'>И что четветрый тоже хватило терпения? Тогда Вы просто молодей!</font>"
messages[4]="<font face='Tahoma' size='1'>За прочитанные блоки рекламы и новостей Мы выражаем Вам признательность!</font>"

///////Do not edit pass this line///////////////////////

if (messages.length>1)
i=2
else
i=0

function move1(whichlayer){
tlayer=eval(whichlayer)
if (tlayer.top>0&&tlayer.top<=5){
tlayer.top=0
setTimeout("move1(tlayer)",3000)
setTimeout("move2(document.main.document.second)",3000)
return
}
if (tlayer.top>=tlayer.document.height*-1){
tlayer.top-=5
setTimeout("move1(tlayer)",100)
}
else{
tlayer.top=scrollerheight
tlayer.document.write(messages[i])
tlayer.document.close()
if (i==messages.length-1)
i=0
else
i++
}
}

function move2(whichlayer){
tlayer2=eval(whichlayer)
if (tlayer2.top>0&&tlayer2.top<=5){
tlayer2.top=0
setTimeout("move2(tlayer2)",3000)
setTimeout("move1(document.main.document.first)",3000)
return
}
if (tlayer2.top>=tlayer2.document.height*-1){
tlayer2.top-=5
setTimeout("move2(tlayer2)",100)
}
else{
tlayer2.top=scrollerheight
tlayer2.document.write(messages[i])
tlayer2.document.close()
if (i==messages.length-1)
i=0
else
i++
}
}

function move3(whichdiv){
tdiv=eval(whichdiv)
if (tdiv.style.pixelTop>0&&tdiv.style.pixelTop<=5){
tdiv.style.pixelTop=0
setTimeout("move3(tdiv)",3000)
setTimeout("move4(second2)",3000)
return
}
if (tdiv.style.pixelTop>=tdiv.offsetHeight*-1){
tdiv.style.pixelTop-=5
setTimeout("move3(tdiv)",100)
}
else{
tdiv.style.pixelTop=scrollerheight
tdiv.innerHTML=messages[i]
if (i==messages.length-1)
i=0
else
i++
}
}

function move4(whichdiv){
tdiv2=eval(whichdiv)
if (tdiv2.style.pixelTop>0&&tdiv2.style.pixelTop<=5){
tdiv2.style.pixelTop=0
setTimeout("move4(tdiv2)",3000)
setTimeout("move3(first2)",3000)
return
}
if (tdiv2.style.pixelTop>=tdiv2.offsetHeight*-1){
tdiv2.style.pixelTop-=5
setTimeout("move4(second2)",100)
}
else{
tdiv2.style.pixelTop=scrollerheight
tdiv2.innerHTML=messages[i]
if (i==messages.length-1)
i=0
else
i++
}
}

function startscroll(){
if (document.all){
move3(first2)
second2.style.top=scrollerheight
second2.style.visibility='visible'
}
else if (document.layers){
document.main.visibility='show'
move1(document.main.document.first)
document.main.document.second.top=scrollerheight+5
document.main.document.second.visibility='show'
}
}

window.onload=startscroll


//</script>

