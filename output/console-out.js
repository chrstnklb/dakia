// import chalk from 'chalk';

function startGame() {
    interaction()
}

function showInteractionText() {
    appendText()
}

function appendText() {
    let ref = document.getElementById("ref")
    let label = document.createElement("label")


    if (!interactionTypeIsQuestion) {
        let header = document.createElement("h1")
        header.textContent = actualInteraction.text.header
        actualInteraction.text.rows.forEach(row => {
            label.innerHTML += row
            label.innerHTML += "<br>"
        });
        ref.appendChild(header)
    } else {
        label.innerHTML += actualInteraction.text
        label.classList.add("question")
    }

    ref.appendChild(label)
    appendBreak(ref)
}

function haengePositivenButtonAn(textContent) {
    let button = gibStandardButton(textContent);

    button.style.backgroundColor = "bisque"
    button.onclick = handlePositiveClick

    haengeButtonAn(button)
}

function haengeNegativenButtonAn(textContent) {

    let button = gibStandardButton(textContent);

    button.style.backgroundColor = "aquamarine"
    button.onclick = handleNegativeClick
    haengeButtonAn(button)

}

function gibStandardButton(textContent) {
    let button = document.createElement("button")
    button.style.borderStyle = "dotted"
    button.textContent = textContent
    button.type = "button"
    return button
}

function haengeButtonAn(button) {
    let ref = document.getElementById("ref")
    ref.appendChild(button)
}

function handlePositiveClick() {
    alert("😀😀")
    console.log("handlePositiveClick");
}

function handleNegativeClick() {
    alert("🤔🤔")
    console.log("handleNegativeClick");
}

function appendBreak(appendee) {
    let br = document.createElement("br")
    appendee.appendChild(br)
}