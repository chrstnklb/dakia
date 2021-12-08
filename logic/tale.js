let id = 1

function startGame() {
    nextStoryStep()
}

function nextStoryStep() {
    initActualStep()
    showStepText()
    startNextStep()
}