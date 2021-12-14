function showReactionText(actualNarratorReaction) {
    let label = document.createElement("label")

    // label.innerHTML += "<br>"
    label.innerHTML += "<br>"
    label.innerHTML += actualNarratorReaction
    // label.innerHTML += "<br>"

    getRef().appendChild(label)
    appendBreak(getRef())
}