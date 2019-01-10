var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

color1.addEventListener("input",function(){
  body.style.background = "linear-gradient(to right,"
  +color1.value+","+color2.value+")";
})

color.addEventListener("input",function(){
    body.style.background = "linear-gradient(to right,"
    +color1.value+","+color2.value+")";
  }) 