// Contains DOM manipulations but only if there is no functional logic in it

function getRef(){
    return document.getElementById("ref");
}

function appendPositiveButton(textContent) {
    let button = getStandardButton(textContent);

    button.style.backgroundColor = "bisque"
    button.onclick = handlePositiveClick

    appendButton(button)
}


function appendNegativeButton(textContent) {

    let button = getStandardButton(textContent);

    button.style.backgroundColor = "aquamarine"
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

function appendBreak(appendee) {
    let br = document.createElement("br")
    appendee.appendChild(br)
}

function showReactionText(actualNarratorReaction) {
    let label = document.createElement("label")

    // label.innerHTML += "<br>"
    label.innerHTML += "<br>"
    label.innerHTML += actualNarratorReaction
    // label.innerHTML += "<br>"

    getRef().appendChild(label)
    appendBreak(getRef())
}

function gameOver() {
    alert("   # # #   G A M E    O V E R   # # #   ");
}