// import { fragen } from './fragen.js'
// import { positiveReaktionen, negativeReaktionen } from './reaktionen.js'

// import { antwort, lausch } from './console-in.js'
// import { gibZeileAus, printEmptyLines } from './console-out.js'

// import { spielerName, spielerAlter} from './spieler.js'

let id = 1
let aktuelleFrage;
let fragenTypIsGeschlossen;

console.clear();

function interaktion() {
    // alert("Game Started2    ")

    ermittleFrage()
    ermittleFragenTyp()
    stelleFrage()

    fragenTypIsGeschlossen ? frageGeschlossen() : frageOffen()

    // starteNaechsteInteraktion()
}

function ermittleFragenTyp() {
    fragenTypIsGeschlossen = (aktuelleFrage.fragenTyp === "geschlossen")
}

function frageGeschlossen() {
    bieteAntworten();
    // lausch();
    // reagiere();
}

function frageOffen() {
    lausch(aktuelleFrage);
}

function ermittleFrage() {
    aktuelleFrage = fragen.filter(obj => {
        return obj.id === id;
    })[0]
    console.log('aktuelleFrage :>> ', aktuelleFrage);
}

function stelleFrage() {
    gibZeileAus(aktuelleFrage.frageText, "frage");
}

function bieteAntworten(){
    haengePositivenButtonAn(aktuelleFrage.antworten[0].antwortText);
    haengeNegativenButtonAn(aktuelleFrage.antworten[1].antwortText);
}

// function bieteAntworten() {

//     let antworten = aktuelleFrage.antworten;

//     for (let index = 0; index < antworten.length; index++) {
//         let antwort = antworten[index];
//         gibZeileAus(antwort.antwortText, antwort.antwortTyp);
//     }
// }

function reagiere() {
    gibZeileAus(antwort == 0 ? waehleReaktion(true) : waehleReaktion(false), "aussage")
}

function waehleReaktion(positiveReaktion) {
    let reaktionen = positiveReaktion ? positiveReaktionen : negativeReaktionen
    return reaktionen[Math.floor(Math.random() * reaktionen.length)];
}

function starteNaechsteInteraktion() {
    id = fragenTypIsGeschlossen ? aktuelleFrage.antworten[antwort].folgendeFrageId : aktuelleFrage.folgendeFrageId
    if (id === 0) gameOver()
    interaktion()
}

function gameOver() {
    printEmptyLines(2)
    console.log("   # # #   G A M E    O V E R   # # #   ");
    printEmptyLines(2)
    process.exit(1)
}

// interaktion()