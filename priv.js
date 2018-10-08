var zvery = ["...",
  "котик",
  "собачка",
  "листик"
]
var catDiv = document.createElement("div")
    catDiv.className = "catDiv"
catDiv.id = 'divCat'
var cat = document.createElement('input')
cat.className = "cat"
cat.type = 'button'
cat.value = "котик"
cat.onclick= function(){
    var pict = document.getElementById ( 'picture' )
    if ( pict ) {
        pict.parentNode.removeChild ( pict )
    }
    else {
        var picture=document.createElement('img')
        picture.id='picture'
        picture.src='http://persianpet.org/forum/images/imported/2012/09/28.aspx'
        catDiv.appendChild(picture)
    }
}
var dogDiv = document.createElement("div")
dogDiv.className = "dogDiv"
dogDiv.id = 'divDog'
var dog = document.createElement('input')
dog.type = 'button'
dog.value = "песик"
dog.className = "dog"
dog.onclick= function(){
    var pict2 = document.getElementById ( 'picture' )
    if ( pict2 ) {
        pict2.parentNode.removeChild ( pict2 )
    }
    else {
        var picture2=document.createElement('img')
        picture2.id='picture'
        picture2.src='http://www.playcast.ru/uploads/2016/01/20/16899217.gif'
        dogDiv.appendChild(picture2)
    }
}



var groupZvery = document.createElement ( 'select' )
document.body.appendChild ( groupZvery )
for ( var zvery of zvery ) {
    var option = document.createElement ( 'option' )
    groupZvery.appendChild ( option )
    option.value = option.innerHTML = zvery
}
groupZvery.onchange = function ( event ) {
    if(event.target.selectedIndex === 1)
   {
     (catDiv.appendChild(cat),
    document.body.appendChild(catDiv))
    }
    else if(event.target.selectedIndex === 2)
    {
      (dogDiv.appendChild(dog),
     document.body.appendChild(dogDiv))
     }
    else if(event.target.selectedIndex === 3)
    {
      function Stars (){
  this.elem = document.createElement("img")
  document.body.appendChild(this.elem)
  this.elem.src = "https://img-fotki.yandex.ru/get/6522/71746914.47/0_9c766_e4274eac_S.jpg"
  this.elem.style = `
  position:fixed;
  display:block;
  transition:all 0.5s;
  width:200px;
  `
  this.move = function(){
    var x = Math.random()*window.innerWidth
    var y = Math.random()*window.innerHeight
    this.elem.style.transform = `rotate(${Math.random()*360}deg)`
    this.elem.style.top = y+"px"
    this.elem.style.left = x+"px"
    console.log(this.elem.style.top)
  }
  this.pass = function(num){
    num = num ? num : 10
    var self = this
    for(var i=1;i<num;i++){
      var x = (function(n){
        return function(){
          setTimeout(
            function(){
              self.move()
         },1000*n
        )
      }
      })(i)
      x()
    }
  }

}
var star =[]
star.push(new Stars())
star[0].pass(10)

     }
  }
