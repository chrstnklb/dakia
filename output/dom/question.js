
function showQuestion() {
    let label = document.createElement("label")

    label.innerHTML += actualStep.text
    label.classList.add("question")

    getRef().appendChild(label)
    appendBreak(getRef())
}