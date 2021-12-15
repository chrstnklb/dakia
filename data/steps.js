// import { getSpielerName } from "../interaktion/spieler.js";

let steps =
    [
        {
            id: 1,
            text: {
                header: "Die Legende von Dakya.",
                rows: [
                    "Geschrieben von der Autorin Elenor Dreibach",
                    "Programmiert von Christian Kliebe",
                    "",
                    "",
                    "Dakya ist das dunkle Land der Unterwelt.",
                    "Es liegt in Rumänien.",
                    "",
                    "Vampire leben dort seit dem Jahr 15 und werden das auch bis in alle Ewigkeit tun.",
                    "",
                    "Das Land wurde so getauft, weil die Göttin des Landes so hieß.",
                    "Sie taufte das Land nach ihrem Namen.",
                    "",
                    "Aber dort herrschte nicht nur Frieden",
                    "Vor 10.000 Jahren, elf Monaten, sieben Wochen und fünf Tagen kam es zum Duell der Götter.",
                    "Geschrieben von der Autorin Elenor Dreibach",
                    "Programmiert von Christian Kliebe",
                    "",
                    "",
                    "Dakya ist das dunkle Land der Unterwelt.",
                    "Es liegt in Rumänien.",
                    "",
                    "Vampire leben dort seit dem Jahr 15 und werden das auch bis in alle Ewigkeit tun.",
                    "",
                    "Das Land wurde so getauft, weil die Göttin des Landes so hieß.",
                    "Sie taufte das Land nach ihrem Namen.",
                    "",
                    "Aber dort herrschte nicht nur Frieden",
                ]
            },
            question: "Hallo, wie geht es dir?",
            answers: [
                {
                    answerText: "Mir geht es gut!",
                    nextInteractionId: 2
                },
                {
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
                    answerText: "Ja, auf jeden Fall.",
                    nextInteractionId: 0
                },
                {
                    answerText: "Auch ja.",
                    nextInteractionId: 0
                }
            ],

        },
    ];
