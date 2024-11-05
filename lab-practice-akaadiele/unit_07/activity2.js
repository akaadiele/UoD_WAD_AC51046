let billValue = document.getElementById('billValue').value;
var billVal = document.getElementById('billValue').value

function calcTip() {
    console.log(billValue);
    console.log(billVal);
    console.log(document.getElementById('billValue').value);

    if (document.getElementById('billValue').value) {

        tipValue = (10 / 100) * document.getElementById('billValue').value;;

        let tipAmount = document.getElementById('tipAmount');
        tipAmount.innerHTML = tipValue;
        // console.log(tipValue)
    } else {
        alert("Please enter bill amount!");
    }
}