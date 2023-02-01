let result = document.querySelector('.result');
let decrease = document.getElementById('decrease');
let reset = document.getElementById('reset');
let increase = document.getElementById('increase');

decrease.addEventListener("click", ()=>{
    decrease.style.backgroundColor = "black";
    decrease.style.color = "white";

    let output = Number(result.innerText) - 1;
    result.innerText = output;
})
reset.addEventListener("click",()=>{
    result.innerText = 0;
})
increase.addEventListener("click", ()=>{
    increase.style.backgroundColor = "black";
    increase.style.color = "white";
    let output = Number(result.innerText) + 1;
    result.innerText = output;
})

class Counter{
    number = 0
    constructor(){

    }

    decrease(){

    }

    increase(){

    }

    reset(){

    }
}