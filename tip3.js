let billAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let errorMessage = document.getElementById("errorMessage");

function calculateButton() {
    if (billAmount.value === "") {
        errorMessage.textContent = "Please Enter a Valid Input.";
    } else if (percentageTip.value === "") {
        errorMessage.textContent = "Please Enter a Valid Input.";
    } else {
        errorMessage.textContent = "";
        let inputbill = parseInt(billAmount.value);
        let inputpercentage = parseInt(percentageTip.value);
        let tipValue = (inputpercentage / 100) * inputbill;
        let totalValue = inputbill + tipValue;
        tipAmount.value = tipValue;
        totalAmount.value = totalValue;
    }
}