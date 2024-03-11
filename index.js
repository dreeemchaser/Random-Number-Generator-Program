const myButton = document.getElementById("myButton");
const label1 = document.getElementById("countLabel1");
const label2 = document.getElementById("countLabel2");
const label3 = document.getElementById("countLabel3");

let randomNum1 ;
let randomNum2 ; 
let randomNum3 ;

myButton.onclick = function() {   
    min = document.getElementById("minNumber").value; 
    max = document.getElementById("maxNumber").value; 
 
    randomNum1 = Math.floor(Math.random() * max);
    randomNum2 = Math.floor(Math.random() * max);
    randomNum3 = Math.floor(Math.random() * max);
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}