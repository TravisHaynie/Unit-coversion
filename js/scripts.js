let inputEl = document.getElementById("input-el");
let btnEl = document.getElementById("btn-el");
let cnt1 = document.getElementById("container-1");
let cnt2 = document.getElementById("container-2");
let cnt3 = document.getElementById("container-3");
console.log(inputEl)
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

btnEl.addEventListener("click", function () {
     
    localStorage.setItem("value", JSON.stringify(inputEl.value));
    let caughtValue = JSON.parse(localStorage.getItem("value"))
    const feetUnit =  (caughtValue * 3.281).toFixed(3)
    const meterUnit = (caughtValue / 3.281).toFixed(3)
    const gallonUnit =(caughtValue * 0.264).toFixed(3)
    const literUnit = (caughtValue / 0.264).toFixed(3)
    const poundUnit = (caughtValue * 2.204).toFixed(3)
    const killogramUnit = (caughtValue / 2.204).toFixed(3)
  


    let valueCnt1 = cnt1.innerHTML = ` <p class="length">Length (Meter/Feet)</p>
                                  <p class="length">${caughtValue} meters =${feetUnit} feet | ${caughtValue} feet = ${meterUnit} meters</P>`
    let valueCnt2 = cnt2.innerHTML = ` <p class="volume">Volume (liters/gallons)</p>
                                  <p class="volume">${caughtValue} liters = ${gallonUnit}gallons | ${caughtValue} = ${literUnit}liters</P>`
    let valueCnt3 = cnt3.innerHTML = ` <p class="mass">Mass (killograms/Pounds)</p>
                                  <p class="mass">${caughtValue} kilos = ${poundUnit} pounds | ${caughtValue} = ${killogramUnit} kilos</P>`
    valueCnt1.caughtValue
    valueCnt2.caughtValue
    valueCnt3.caughtValue 
})
