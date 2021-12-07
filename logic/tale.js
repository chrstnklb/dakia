let id = 1
let actualInteraction;
let interactionTypeIsQuestion;
let actualAnswer;

console.clear();

function interaction() {
    getActualInteraction()
    showInteractionText()
    servePossibleAnswers()
    // lausch();
    // reagiere();

    startNextInteraktion()
}

function receiveInteractionType() {
    interactionTypeIsQuestion = (actualInteraction.type === "question")
}

function frageOffen() {
    lausch(actualInteraction);
}

function getActualInteraction() {
    actualInteraction = interactions.filter(obj => {
        return obj.id === id;
    })[0]
    receiveInteractionType()
    console.log('actualInteraction :>> ', actualInteraction);
}

function servePossibleAnswers() {
    if (interactionTypeIsQuestion) {
        haengePositivenButtonAn(actualInteraction.answers[0].answerText);
        haengeNegativenButtonAn(actualInteraction.answers[1].answerText);
    }
}

function reagiere() {
    showInteractionText(antwort == 0 ? waehleReaktion(true) : waehleReaktion(false), "aussage")
}

function waehleReaktion(positiveReaktion) {
    let reaktionen = positiveReaktion ? positiveReaktionen : negativeReaktionen
    return reaktionen[Math.floor(Math.random() * reaktionen.length)];
}

function startNextInteraktion() {
    id = actualInteraction.type === "question" ? actualAnswer.nextInteractionId : actualInteraction.nextInteractionId
    if (id === 0) gameOver()
    interaction()
}

function gameOver() {
    alert("   # # #   G A M E    O V E R   # # #   ");
}