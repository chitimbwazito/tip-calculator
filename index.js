let custom = document.getElementById('custom');
let b5 = document.getElementById('b5');
let reset = document.getElementById('reset');
let bill = document.getElementById('bill');
let noPeople = document.getElementById('number-people');
let error = document.getElementById('error');

function errorMessage() {
    let error = document.getElementById("error");
    let noPeople = document.getElementById('number-people').value;
    if (noPeople <= 0) {
    let totalPerPerson = document.querySelector("#total-amount").textContent = "$0.00";
    let tipPerPerson = document.querySelector("#tip-amount").textContent = "$0.00";
    error.style.display = "flex";
    error.style.color = "red";
    } else {
    error.style.display = "none";
    }
}

// const parent = document.querySelector(".test")

// parent.addEventListener('click',e=>{
//     const target = e.target;
//     if(target.id === "custom") return;

//     const tipAmount = Number(target.textContent.replace('%',''))/100;
//     calculateTip(tipAmount)
// })

function calculateTip(tipAmount){
    let noPeople = document.getElementById('number-people').value;
    if(!noPeople || noPeople <= 0){
        console.log("number is 0")
    return errorMessage();
    } else {
        errorMessage();
    }
    let bill = document.getElementById('bill').value;
    let tipPerPerson = document.querySelector("#tip-amount").textContent ="$" + ((tipAmount * bill) / noPeople).toFixed(2);
    tip = ((tipAmount * bill) / noPeople).toFixed(2);
    let totalPerPerson = document.querySelector("#total-amount").textContent ="$" + (((parseFloat(bill) / noPeople) + parseFloat(tip))).toFixed(2);
}

//shorter way to add eventlisteners 
//b5.onclick = ()=>calculateTip(5/100);

custom.addEventListener('input', function(){
    calculateTip(document.getElementById('custom').value / 100);
    b5.classList.remove("active");
    b50.classList.remove("active");
    b10.classList.remove("active");
    b15.classList.remove("active");
    b25.classList.remove("active");
})

b5.addEventListener('click', function(){
    calculateTip(5 / 100);
    b5.classList.add("active");
    b50.classList.remove("active");
    b10.classList.remove("active");
    b15.classList.remove("active");
    b25.classList.remove("active");
})

b10.addEventListener('click', function(){
    calculateTip(10 / 100);
    b10.classList.add("active");
    b5.classList.remove("active");
    b50.classList.remove("active");
    b15.classList.remove("active");
    b25.classList.remove("active");
})

b15.addEventListener('click', function(){
    calculateTip(15 / 100);
    b15.classList.add("active");
    b5.classList.remove("active");
    b10.classList.remove("active");
    b50.classList.remove("active");
    b25.classList.remove("active");
})

b25.addEventListener('click', function(){
    calculateTip(25 / 100);
    b25.classList.add("active");
    b5.classList.remove("active");
    b10.classList.remove("active");
    b15.classList.remove("active");
    b50.classList.remove("active");
})

b50.addEventListener('click', function(){
    calculateTip(50 / 100);
    b50.classList.add("active");
    b5.classList.remove("active");
    b10.classList.remove("active");
    b15.classList.remove("active");
    b25.classList.remove("active");
})

reset.addEventListener('click', function(){
    let bill = document.getElementById('bill').value = "";
    let noPeople = document.getElementById('number-people').value = "";
    let error = document.getElementById('error');
    
    let tipPerPerson = document.querySelector("#tip-amount").textContent = "$0.00";
    let totalPerPerson = document.querySelector("#total-amount").textContent = "$0.00";
    let tipAmount = document.getElementById('custom').value = "CUSTOM";
    error.style.display = "none";
    b50.classList.remove("active");
    b5.classList.remove("active");
    b10.classList.remove("active");
    b15.classList.remove("active");
    b25.classList.remove("active");
})
