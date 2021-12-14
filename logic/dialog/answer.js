let actualUserAnswer;
let actualNarratorReaction;
let userReacted = false

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
    userReacted = false
}

function handlePositiveClick() {
    actualUserAnswer = actualStep.answers[0]
    id = actualStep.answers[0].nextInteractionId
    narratorReact(true)
}

function handleNegativeClick() {
    actualUserAnswer = actualStep.answers[1]
    id = actualStep.answers[1].nextInteractionId
    narratorReact(false)
}


function narratorReact(isPositive) {
    userReacted = true
    actualNarratorReaction = chooseReaktion(isPositive)
    showReactionText(actualNarratorReaction)
    prepareNextStep()
}

