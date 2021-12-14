function showReactionText(actualNarratorReaction) {
    let label = document.createElement("label")
    let hline = document.createElement("hr")
    let br = document.createElement("br")

    label.innerHTML += "<br>"
    label.innerHTML += actualNarratorReaction
    label.innerHTML += "<br>"

    getRef().appendChild(label)
    getRef().appendChild(br)
    getRef().appendChild(hline)
    appendBreak(getRef())
}