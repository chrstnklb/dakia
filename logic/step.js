let actualStep;
let actualStepId = 1;

window.addEventListener('load', function() {
    nextStoryStep()
})

function nextStoryStep() {
    removeAllElementsFromRef();
    initActualStep();
    showStepText();
    jumpToHeader();
    prepareNextStep();
}

function initActualStep() {
    actualStep = getActualStep();
}

function showStepText() {
    
    serveHeader();
    serveText();
    showQuestion();
    showPossibleAnswers();
}


function prepareNextStep() {

    console.log('id :>> ', actualStepId);

    if (actualStepId === 0) gameOver()

    if (userReacted) nextStoryStep()
}

function getActualStep() {
    return steps.filter(obj => {
        return obj.id === actualStepId;
    })[0]
}