var divBoxElement = document.getElementById('divBox');

divBoxElement.addEventListener("mouseover", changeColor);

function changeColor() {
    switch (divBoxElement.style.backgroundColor) {
        case 'red':
            divBoxElement.style.backgroundColor = 'blue'
            break;
        case 'blue':
            divBoxElement.style.backgroundColor = 'green'
            break;
        default:
        divBoxElement.style.backgroundColor = 'red'
    }
}