// import { getSpielerName } from "../interaktion/spieler.js";

let steps =
    [
        {
            id: 1,
            text: {
                header: "Die Legende von Dakya.",
                rows: [
                    "Dakya ist das dunkle Land der Unterwelt.",
                    "Es liegt in Rumänien.",
                    "",
                    "Vampire leben dort seit dem Jahr 15 und werden das auch bis in alle Ewigkeit tun.",
                    "",
                    "Das Land wurde so getauft, weil die Göttin des Landes so hieß.",
                    "Sie taufte das Land nach ihrem Namen.",
                    "",
                    "Aber dort herrschte nicht nur Frieden",
                    "Vor 10.000 Jahren, elf Monaten, sieben Wochen und fünf Tagen kam es zum Duell der Götter."
                ]
            },
            question: "Hallo DARKA wie geht es dir?",
            answers: [
                {
                    answerTyp: "antwort-positiv",
                    answerText: "Mir geht es gut!",
                    nextInteractionId: 2
                },
                {
                    answerTyp: "antwort-negativ",
                    answerText: "Schlecht, also halt dein Maul!",
                    nextInteractionId: 0
                }
            ],

        },
        {
            id: 2,
            text: {
                header: "Die Geschichte ging weiter.",
                rows: [
                    "Ja, wirklich"
                ]
            },
            question: "Möchtest du das Spiel beenden?",
            answers: [
                {
                    answerTyp: "antwort-positiv",
                    answerText: "Ja, auf jeden Fall.",
                    nextInteractionId: 0
                },
                {
                    answerTyp: "antwort-negativ",
                    answerText: "Auch ja.",
                    nextInteractionId: 0
                }
            ],

        },
    ];
