let actualUserAnswer;
let actualNarratorReaction;

function chooseReaktion(isPositive) {
    let reaction = isPositive ? positiveReactions : negativeReactions
    console.log('reaction :>> ', reaction);
    return reaction[Math.floor(Math.random() * reaction.length)];
}

function servePossibleAnswers() {
    if (actualStepIsQuestion) {
        appendPositiveButton(actualStep.answers[0].answerText);
        appendNegativeButton(actualStep.answers[1].answerText);
    }
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

function handlePositiveClick() {
    actualUserAnswer = actualStep.answers[0]
    id = actualStep.answers[0].nextInteractionId
    react(true)
}

function handleNegativeClick() {
    actualUserAnswer = actualStep.answers[1]
    id = actualStep.answers[1].nextInteractionId
    react(false)
}


function react(isPositive) {
    actualNarratorReaction = chooseReaktion(isPositive)
    showReactionText()

    startNextStep()
}

function showReactionText() {
    let label = document.createElement("label")

    label.innerHTML += "<br>"
    label.innerHTML += "<br>"
    label.innerHTML += actualNarratorReaction
    label.innerHTML += "<br>"

    getRef().appendChild(label)
    appendBreak(getRef())
}