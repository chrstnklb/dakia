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
    showReactionText(actualNarratorReaction)

    startNextStep()
}

