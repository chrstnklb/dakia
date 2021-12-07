// import { getSpielerName } from "../interaktion/spieler.js";

let fragen =
    [
        {
            id: 1,
            name: "begruessung",
            fragenTyp: "geschlossen",
            frageText: "Hallo, wie geht es dir?",
            antworten: [
                {
                    antwortTyp: "antwort-positiv",
                    antwortText: "Mir geht es gut!",
                    folgendeFrageId: 2
                },
                {
                    antwortTyp: "antwort-negativ",
                    antwortText: "Schlecht, also halt dein Maul!",
                    folgendeFrageId: 2
                }
            ],
        },
        {
            id: 2,
            name: "namens-abfrage",
            fragenTyp: "offen",
            frageText: "Wie heißt du?",
            folgendeFrageId: 3
        },
        {
            id: 3,
            name: "alters-abfrage",
            fragenTyp: "offen",
            frageText: "Wie alt bist du?",
            folgendeFrageId: 4
        },
        {
            id: 4,
            name: "begruessung",
            fragenTyp: "geschlossen",
            frageText: `Es war einmal eine Abenteurerin namens `,
            antworten: [
                {
                    antwortTyp: "antwort-positiv",
                    antwortText: "Mir geht es gut!",
                    folgendeFrageId: 2
                },
                {
                    antwortTyp: "antwort-negativ",
                    antwortText: "Schlecht, also halt dein Maul!",
                    folgendeFrageId: 2
                }
            ],
        },
    ];
