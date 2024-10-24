var selectTippercentage = 0;

function updateTippercentage(value) {
    selectTippercentage = value; 

    document.querySelector('.show-tip').textContent = `Tip percentage: ${selectTippercentage * 100}%`;
}

document.querySelectorAll(".tip-button").forEach(button => {
    button.addEventListener('click', function(event) {
        selectTippercentage = parseFloat(event.target.value); 
        updateTippercentage(selectTippercentage);
    });
});

document.getElementById("custom-tip").addEventListener("input", function(event) {
    console.log(event.target.value)
    updateTippercentage(parseFloat(event.target.value) / 100);
});

function cal() {
    var billAmt = parseFloat(document.getElementById("bill").value);
    var persons = parseInt(document.getElementById("people").value, 10);

    if (isNaN(billAmt) || billAmt <= 0) {
        alert("Please enter a valid bill amount greater than 0.");
        return;
    }
    if (isNaN(persons) || persons <= 0) {
        alert("Please enter a valid number of people greater than 0.");
        return;
    }
    if (selectTippercentage <= 0) {
        alert("Please give us some tip by clicking the buttons or enter your custom tip in the box.");
        return;
    }

    var tipAmount = billAmt * selectTippercentage;
    var totalAmount = billAmt + tipAmount;
    var amountPerPerson = totalAmount / persons;

    document.getElementById('tipPerperson').textContent = `₹ ${(tipAmount / persons).toFixed(2)}`;
    document.getElementById("totalPerperson").textContent = `₹ ${amountPerPerson.toFixed(2)}`;
}


function reset() {
    document.getElementById("bill").value = "";
    document.getElementById("people").value = "";
    document.getElementById("custom-tip").value = "";

    selectTippercentage = 0;

    document.querySelector('.show-tip').textContent = `Tip percentage: ${selectTippercentage * 100}%`;
    document.getElementById('tipPerperson').textContent = "₹ 0.00"
    document.getElementById('totalPerperson').textContent = "₹ 0.00"
}


document.getElementById("calculate-button").addEventListener("click", cal);
document.getElementById("reset").addEventListener("click", reset);
