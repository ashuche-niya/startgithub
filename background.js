var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("container");
var head3=document.querySelector("h3");

console.log(body.style.backgroundColor);
// console.log(body.style.backgroundcolor);

color1.addEventListener("input",function() {
body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
head3.textContent=body.style.background+";";
// head3.innerHTML=body.style.background+";";
})
color2.addEventListener("input",function()
{body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
head3.textContent=body.style.background+";";
})