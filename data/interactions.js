// import { getSpielerName } from "../interaktion/spieler.js";

let interactions =
    [
        {
            id: 1,
            type: "text",
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
            nextInteractionId: 2
        },
        {
            id: 2,
            type: "question",
            text: "Hallo Elenoria wie geht es dir?",
            answers: [
                {
                    answerTyp: "antwort-positiv",
                    answerText: "Mir geht es gut!",
                    nextInteractionId: 0
                },
                {
                    answerTyp: "antwort-negativ",
                    answerText: "Schlecht, also halt dein Maul!",
                    nextInteractionId: 0
                }
            ],
        },
    ];
