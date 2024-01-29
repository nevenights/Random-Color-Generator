const colorElem = document.querySelector(".color");
const hexElem = document.querySelector(".hex");
const copyBtn = document.getElementById("copy");
const generate = document.getElementById("generate");


const result = document.getElementById("result");
// const alertbox = document.querySelector(".alert");

const chars = "0123456789abcdef";
const len=6; // color code length
let color = "#";

function getColor(){
    color = "#";
    for (let i=0;i<len;i++){
        let rand = Math.floor(Math.random()*chars.length);
        color += chars.substring(rand,rand+1);
    }
    hexElem.innerHTML = color;
    colorElem.style.backgroundColor = color;
}


function copyColor(){
    copyBtn.classList.add("active");
    navigator.clipboard.writeText(color);
    setTimeout(()=>copyBtn.classList.remove("active"), 2500);
}

generate.addEventListener("click", getColor);
copyBtn.addEventListener("click", copyColor);