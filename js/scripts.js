let inputEl = document.getElementById("input-el");
let btnEl = document.getElementById("btn-el");
let cnt1 = document.getElementById("container-1");
let cnt2 = document.getElementById("container-2");
let cnt3 = document.getElementById("container-3");

btnEl.addEventListener("click", function () {
    const caughtValue = inputEl.value;
    const feetUnit = (caughtValue * 3.281).toFixed(3);
    const meterUnit = (caughtValue / 3.281).toFixed(3);
    const gallonUnit = (caughtValue * 0.264).toFixed(3);
    const literUnit = (caughtValue / 0.264).toFixed(3);
    const poundUnit = (caughtValue * 2.204).toFixed(3);
    const kilogramUnit = (caughtValue / 2.204).toFixed(3);

    cnt1.querySelector(".measurment-data").innerHTML = `${caughtValue} meters = ${feetUnit} feet | ${caughtValue} feet = ${meterUnit} meters`;
    cnt2.querySelector(".measurment-data").innerHTML = `${caughtValue} liters = ${gallonUnit} gallons | ${caughtValue} gallons = ${literUnit} liters`;
    cnt3.querySelector(".measurment-data").innerHTML = `${caughtValue} kilos = ${poundUnit} pounds | ${caughtValue} pounds = ${kilogramUnit} kilos`;
})


