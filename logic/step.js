let actualStep;
let id = 1

function nextStoryStep() {
    initActualStep()
    showStepText()
    prepareNextStep()
}

function initActualStep() {
    actualStep = getActualStep()
}

function showStepText() {
    serveText()
    showQuestion()
    showPossibleAnswers()
}


function prepareNextStep() {

    console.log('id :>> ', id);

    if (id === 0) gameOver()

    if (userReacted) nextStoryStep()
}

function getActualStep() {
    return steps.filter(obj => {
        return obj.id === id;
    })[0]
}