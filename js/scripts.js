let inputEl = document.getElementById("input-el");
let btnEl = document.getElementById("btn-el");
let cnt1 = document.getElementById("container-1");
let cnt2 = document.getElementById("container-2");
let cnt3 = document.getElementById("container-3");

btnEl.addEventListener("click", function () {
    localStorage.setItem("value", JSON.stringify(inputEl.value));
    const caughtValue = JSON.parse(localStorage.getItem("value"))
    const feetUnit = (caughtValue * 3.281).toFixed(3)
    const meterUnit = (caughtValue / 3.281).toFixed(3)
    const gallonUnit = (caughtValue * 0.264).toFixed(3)
    const literUnit = (caughtValue / 0.264).toFixed(3)
    const poundUnit = (caughtValue * 2.204).toFixed(3)
    const kilogramUnit = (caughtValue / 2.204).toFixed(3)

    cnt1.innerHTML = ` <p class="length">Length (Meter/Feet)</p>
                                  <p class="length">${caughtValue} meters = ${feetUnit} feet | ${caughtValue} feet = ${meterUnit} meters</P>`
    cnt2.innerHTML = ` <p class="volume">Volume (Liters/Gallons)</p>
                                  <p class="volume">${caughtValue} liters = ${gallonUnit} gallons | ${caughtValue} gallons = ${literUnit} liters</P>`
    cnt3.innerHTML = ` <p class="mass">Mass (Kilograms/Pounds)</p>
                                  <p class="mass">${caughtValue} kilos = ${poundUnit} pounds | ${caughtValue} pounds = ${kilogramUnit} kilos</P>`
})
