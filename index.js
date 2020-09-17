let h3 = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById('gradient');
let color3 = document.querySelector(".color3");
let h1 = document.getElementById("two");

const setGradient = () => {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    h3.textContent = body.style.background;
}

 const setColor1 = () => {
     h1.style.color = color3.value;
 }


color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
color3.addEventListener('input', setColor1);


