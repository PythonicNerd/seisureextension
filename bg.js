colors = ["#FF0000","#800000","#FFFF00","#00FF00","#008000"]

while(true){

  var color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = color;
}
