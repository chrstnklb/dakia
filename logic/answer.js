let actualUserAnswer;
let actualNarratorReaction;
let userReacted = false

function showPossibleAnswers() {

    appendPositiveButton(actualStep.answers[0].answerText);
    appendNegativeButton(actualStep.answers[1].answerText);

    userReacted = false
}

function handlePositiveClick() {
    actualUserAnswer = actualStep.answers[0]
    actualStepId = actualStep.answers[0].nextInteractionId
    handleClick()
}

function handleNegativeClick() {
    actualUserAnswer = actualStep.answers[1]
    actualStepId = actualStep.answers[1].nextInteractionId
    handleClick()
}

function handleClick() {
    console.log('actualStepId :>> ', actualStepId);
    userReacted = true
    prepareNextStep()
}