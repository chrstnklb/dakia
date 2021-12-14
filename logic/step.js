let actualStep;
let actualStepIsQuestion;
let actualStepIsText
let id = 1

function nextStoryStep() {
    initActualStep()
    showStepText()
    startNextStep()
}

function initActualStep(){
    actualStep = getActualStep()
    actualStepIsText = actualStep.type === "text"
    actualStepIsQuestion = actualStep.type === "question"
}

function showStepText() {

    if (actualStepIsQuestion) {
        showQuestion()
        servePossibleAnswers()
    }
    else
        serveText()
}

function startNextStep() {

    console.log('id :>> ', id);
    
    if (id === 0) gameOver()

    if (actualStepIsText) {
        id = actualStep.nextInteractionId
        nextStoryStep()
    }
}

function getActualStep() {
    return steps.filter(obj => {
        return obj.id === id;
    })[0]
}

function startNextStepAfterInput() {
    if (id === 0) gameOver()

    id = actualUserAnswer.nextInteractionId
    nextStoryStep()
}