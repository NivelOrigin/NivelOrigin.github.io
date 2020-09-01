
function calcAmount() {
    let price = 700;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    showSumPrice(price, amountNumber);
}

function showSumPrice(price = 700, amountNumber = 1) {
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 100) {
        alert("Maximum 100 terméket rendelhetsz!");
        return;
    } else if (amountNumber < 1) {
        alert("Nem vásárolhatsz kevesebb mint 1 terméket!");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}

function hider() {
    let checkBox = document.getElementById("check-tax");
    let text = document.getElementById("hidden-row");
    if (checkBox.checked == true){
      text.setAttribute("class" , "form-row");
    } else {
       text.setAttribute("class" , "form-row hide");
    }
  }