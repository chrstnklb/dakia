let actualStep;
let actualStepIsQuestion;
let actualStepIsText
let id = 1

function nextStoryStep() {
    initActualStep()
    showStepText()
    prepareNextStep()
}

function initActualStep(){
    actualStep = getActualStep()
    actualStepIsText = actualStep.type === "text"
    actualStepIsQuestion = actualStep.type === "question"
}

function showStepText() {

    if (actualStepIsText) {
        serveText()
        id = actualStep.nextInteractionId
    }
    else {
        showQuestion()
        servePossibleAnswers()
    }
}

function prepareNextStep() {

    console.log('id :>> ', id);
    
    if (id === 0) gameOver()

    if (actualStepIsText) {
        nextStoryStep()
    }
    if(userReacted) {
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