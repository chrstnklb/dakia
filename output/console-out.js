// import chalk from 'chalk';

function startGame() {
    // alert("Game Started")
    interaktion()

}

let aktuelleAntwort = undefined;

function gibZeileAus(text, textArt) {
    console.log('text :>> ', text);
    console.log('textArt :>> ', textArt);

    let preOutput = ">>> ";
    let output = preOutput;
    // let content;
    let content = text;

    let ref = document.getElementById("ref")
    switch (textArt) {

        case "frage":
            appendFrage(text)
            // content = chalk.bold.yellow(text);
            break;

        case "aussage":

            // content = chalk.italic.white(text);
            break;

        case "antwort-negativ":
            appendButton(id, text, "bisque")
            break;

        case "antwort-positiv":
            appendButton(id, text, "aquamarine")
            break;

        default:
            break;
    }
}

function appendFrage(frageContent){
    let ref = document.getElementById("ref")
    let label = document.createElement("label")
    label.textContent = frageContent
    // label.style.backgroundColor = color
    ref.appendChild(label)
    appendBreak(ref)
}

function haengePositivenButtonAn(textContent) {
    let button = gibStandardButton(textContent);
    
    button.style.backgroundColor = "bisque"
    button.onclick = handlePositiveClick

    haengeButtonAn(button)
}

function haengeNegativenButtonAn(textContent) {

    let button = gibStandardButton(textContent);
 
    button.style.backgroundColor = "aquamarine"
    button.onclick = handleNegativeClick
    haengeButtonAn(button)

}

function gibStandardButton(textContent){
    let button = document.createElement("button")
    button.style.borderStyle = "dotted"
    button.textContent = textContent
    button.type = "button"
    return button
}

function haengeButtonAn(button){
    let ref = document.getElementById("ref")
    ref.appendChild(button)
}

function handlePositiveClick(){
    alert("😀😀")
    console.log("handlePositiveClick");
}

function handleNegativeClick(){
    alert("🤔🤔")
    console.log("handleNegativeClick");
}

function appendBreak(appendee){
    let br = document.createElement("br")
    appendee.appendChild(br)
}