function appendPositiveButton(textContent) {
    let button = getStandardButton(textContent);
    button.onclick = handlePositiveClick
    appendButton(button)
}


function appendNegativeButton(textContent) {
    let button = getStandardButton(textContent);
    button.onclick = handleNegativeClick
    appendButton(button)
}

function getStandardButton(textContent) {
    let button = document.createElement("button")
    button.style.borderStyle = "dotted"
    button.textContent = textContent
    button.type = "button"
    return button
}

function appendButton(button) {
    getRef().appendChild(button)
}