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
                ]
            },
            question: [
                "Hallo, junge Heldin. ",
                "Möchtest du mehr erfahren?",
            ],
            answers: [
                {
                    answerText: "Ich möchte Abenteuer!",
                    nextInteractionId: 2
                },
                {
                    answerText: "Ich möchte mehr erfahren!",
                    nextInteractionId: 3
                }
            ],

        },
        {
            id: 2,
            text: {
                header: "Die Erwachung",
                rows: [
                    "Du liegst im Schlafe, als du plötzlich Stimmen aus der Ferne hörst.",
                    "Langsam lässt du die Welt in deine Augen wirken.",
                    "Dir wird bewusst, dass inmitten eines Fichtenwald liegst.",
                    "",
                    "Die Geräusche der Ferne und die Kutsche die du siehst lassen dich ein Bild zeichnen.",
                    "Händler ziehen an diesem Morgen durch den Wald und wollen ins nächste Dorf.",
                ]
            },
            question: "Was tust du?",
            answers: [
                {
                    answerText: "Ich bleibe geduckt, lasse die Händler vorbeiziehen",
                    nextInteractionId: 0
                },
                {
                    answerText: "Ich stehe auf und gehe zur Kutsche der Händler",
                    nextInteractionId: 0
                }
            ],

        },
        {
            id: 3,
            text: {
                header: "Das Land Dakya",
                rows: [
                    "Das Land Dakya wurde so getauft, weil die Göttin des Landes so hieß.",
                    "Sie taufte das Land nach ihrem Namen.",
                    "",
                    "Doch in Dakya herrschte nicht nur Frieden",
                    "Vor 10.000 Jahren, elf Monaten, sieben Wochen und fünf Tagen kam es zum Duell der Götter.",
                ]
            },
            question: "Was möchtest du tun?",
            answers: [
                {
                    answerText: "Mehr von Dakya lesen.",
                    nextInteractionId: 4
                },
                {
                    answerText: "Nach Dakya reisen",
                    nextInteractionId: 2
                }
            ],

        },
        {
            id: 4,
            text: {
                header: "Der Name Dakia",
                rows: [
                    "Dakia die Götting des Landes wurde nicht Dakya geschrieben sondern Dakia",
                    "Dakia wusste, dass ihr Name mit i und nicht mit y als vorletzten Buchstaben geschrieben werden sollte.",
                    "Doch die Menschen schrieben sie immer mit y.",
                ]
            },
            question: "",
            answers: [
                {
                    answerText: "Zum Duell der Götter",
                    nextInteractionId: 5
                },
                {
                    answerText: "Dakia's Schwester?",
                    nextInteractionId: 6
                }
            ],

        },
        {
            id: 5,
            text: {
                header: "Das Duell der Götter",
                rows: [
                    "Das Duell der Götter war nur einmal im Jahr, am 15. Mai.",
                    "Im Land Dakia war gerade der 15.Mai!",
                ]
            },
            question: "",
            answers: [
                {
                    answerText: "Auf zum Kampf!",
                    nextInteractionId: 7
                },
                {
                    answerText: "Na dann los!",
                    nextInteractionId: 7
                }
            ],

        },
        {
            id: 6,
            text: {
                header: "Dakia's Schwester",
                rows: [
                    "Daiya hatte eine Schwester!",
                    "Die beiden Schwestern stritten zu oft miteinander.",
                    "Daher kam es schon bald zu einem verhängnisvollen Tag."
                ]
            },
            question: "",
            answers: [
                {
                    answerText: "Zum Duell der Götter",
                    nextInteractionId: 5
                },
                {
                    answerText: "Zum Verhängnisvollen Tag",
                    nextInteractionId: 7
                }
            ],

        },
        {
            id: 7,
            text: {
                header: "Der Tag des Duells",
                rows: [
                    "Das Duell der Götter war nur einmal im Jahr, am 15. Mai.",
                    "Im Land Dakia war gerade der 15.Mai!",
                ]
            },
            question: "",
            answers: [
                {
                    answerText: "Auf zum Kampf",
                    nextInteractionId: 8
                },
                {
                    answerText: "Zur Heldin von Dakia",
                    nextInteractionId: 2
                }
            ],

        },
        {
            id: 8,
            text: {
                header: "Der Kampf der Schwestern",
                rows: [
                    "Eda beginnt einen Feuerball auf Dakia zu werfen.",
                    "Doch Dakia wehrte ab.",
                    "",
                    "Und ehe Eda abwehren konnte, hatte Dakia schon einen Feuerball auf Eda geworfen",
                    "Der Ball traf Eda am Bein.",
                    "Eda fiel zu Boden und rief: 'Irgendwann werde ich dich noch besiegen!'",
                ]
            },
            question: "",
            answers: [
                {
                    answerText: "Eda's Gegenangriff",
                    nextInteractionId: 9
                },
                {
                    answerText: "Zur Heldin von Dakia",
                    nextInteractionId: 2
                }
            ],

        },
        {
            id: 9,
            text: {
                header: "Eda wehrt sich",
                rows: [
                    "Eda stand wieder auf und warf erneut einen Feuerball auf Dakia.",
                    "Dakia wurde getroffen",
                    "Eda lachte laut!"
                ]
            },
            question: "",
            answers: [
                {
                    answerText: "ENDE",
                    nextInteractionId: 0
                },
                {
                    answerText: "ENDE",
                    nextInteractionId: 0
                }
            ],

        },
        {
            id: 99,
            text: {
                header: "",
                rows: [
                    ""
                ]
            },
            question: "",
            answers: [
                {
                    answerText: "",
                    nextInteractionId: 0
                },
                {
                    answerText: "",
                    nextInteractionId: 0
                }
            ],

        },
        {
            id: 99,
            text: {
                header: "",
                rows: [
                    ""
                ]
            },
            question: "",
            answers: [
                {
                    answerText: "",
                    nextInteractionId: 0
                },
                {
                    answerText: "",
                    nextInteractionId: 0
                }
            ],

        },
        {
            id: 99,
            text: {
                header: "",
                rows: [
                    ""
                ]
            },
            question: "",
            answers: [
                {
                    answerText: "",
                    nextInteractionId: 0
                },
                {
                    answerText: "",
                    nextInteractionId: 0
                }
            ],

        },
        {
            id: 99,
            text: {
                header: "",
                rows: [
                    ""
                ]
            },
            question: "",
            answers: [
                {
                    answerText: "",
                    nextInteractionId: 0
                },
                {
                    answerText: "",
                    nextInteractionId: 0
                }
            ],

        },
        {
            id: 99,
            text: {
                header: "",
                rows: [
                    ""
                ]
            },
            question: "",
            answers: [
                {
                    answerText: "",
                    nextInteractionId: 0
                },
                {
                    answerText: "",
                    nextInteractionId: 0
                }
            ],

        },
        {
            id: 99,
            text: {
                header: "",
                rows: [
                    ""
                ]
            },
            question: "",
            answers: [
                {
                    answerText: "",
                    nextInteractionId: 0
                },
                {
                    answerText: "",
                    nextInteractionId: 0
                }
            ],

        },
    ];
