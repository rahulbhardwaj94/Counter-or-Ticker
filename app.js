var d_btn = document.querySelectorAll(".btn")[0];
var r_btn = document.querySelectorAll(".btn")[1];
var i_btn = document.querySelectorAll(".btn")[2];

var counterValue = document.querySelector("h2");

var count = 0;

d_btn.addEventListener("click", ()=>{
    count--;
    counterValue.innerText = count;
    if(counterValue.innerText < 0){
        counterValue.style.color = "#D54C4C";
    }
})


r_btn.addEventListener("click", ()=>{
    count=0;
    counterValue.innerText = count;
    if(counterValue.innerText == 0){
        counterValue.style.color = "black";
    }
    
})

i_btn.addEventListener("click", ()=>{
    count++;
    counterValue.innerText = count;
    if(counterValue.innerText > 0){
        counterValue.style.color = "#4E9F3D";
    }
})
