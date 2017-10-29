
var named_colors = ['green','red','blue','yellow','white','silver','maroon','olive','lime','aqua','purple','deeppink']
divs = document.getElementsByTagName('div');

setInterval(function(){
  console.log(document.body.style.backgroundColor);
  var color = named_colors[Math.floor(Math.random() * named_colors.length)];
  document.body.style.backgroundColor = color;
  for(var i = 0; i < divs.length; i++){
    divs[i].style.backgroundColor = color;
  }
}, 100);
