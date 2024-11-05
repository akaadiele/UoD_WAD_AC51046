function go() {
    document.getElementById('id1').style.color = 'blue';
}

function goAgain() {
    document.getElementById('id1').style.color = 'yellow';
}

document.getElementById('id1').addEventListener("click", goOrange)

// document.getElementById('orangeButton').addEventListener("click", goOrange)
// let headerText = document.getElementByID('id1');
// function goOrange() {
//     headerText.style.color = 'orange';
// }

function goOrange() {
    document.getElementById('id1').style.color = 'orange';
}
