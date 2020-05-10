var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient(){
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
    css.textContent = body.style.background + ";";   
}

function setRandom() {
    var letters = "0123456789ABCDEF";
    var color1val = "#";
    var color2val = "#";
    for (var i =0; i<6; i++) {
        color1val += letters[Math.floor(Math.random()*16)];
        color2val += letters[Math.floor(Math.random()*16)];
    }
    color1.value=color1val;
    color2.value=color2val;
    setGradient();
}

random.addEventListener("click", setRandom);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);



