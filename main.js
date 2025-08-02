let rules = [
    {
        title: "VDM ohne Grund",
        content: "Das absichtliche Überfahren von Spielern ohne RP-Grund ist verboten. Solche Aktionen zerstören das Spielerlebnis und führen zu Strafen."
    },
    {
        title: "RDM ohne Call",
        content: "Schüsse ohne vorherigen Schuss-Call sind nicht erlaubt. Jeder Schuss muss angekündigt werden, um faires RP zu gewährleisten."
    },
    {
        title: "Tier- & Kinder-RP erlaubt",
        content: "Das Spielen von Tier- und Kinder-RP ist gestattet, solange es realistisch bleibt. Achte auf angemessenes Verhalten und respektvolle Darstellung."
    },
    {
        title: "Bomben-RP verboten",
        content: "Bomben-RP ist im LARP strikt untersagt, da es zu Chaos führt. Vermeide solche Aktionen, um den Serverfrieden zu bewahren."
    },
    {
        title: "Power-RP verboten",
        content: "Power-RP, wie z.B. Fahrzeuge blockieren, ist nicht erlaubt. Spieler müssen realistisch und fair miteinander interagieren."
    },
    {
        title: "Save Zones",
        content: "In Safe Zones wie Krankenhaus oder Flughafen darf keine Gewalt ausgeübt werden. Diese Zonen dienen dem Schutz und der Erholung."
    },
    {
        title: "Geiselnahme von Caltrans/FD verboten",
        content: "Mitarbeiter von Caltrans und der Feuerwehr dürfen nicht als Geiseln genommen werden. Sie sind wichtige NPCs im RP."
    },
    {
        title: "OOC verboten",
        content: "Über das echte Leben zu sprechen ist Out-of-Character (OOC) und im RP verboten. Bleibt im Szenario, um Immersion zu gewährleisten."
    },
    {
        title: "FRP = kein RP",
        content: "Kein RP zu machen gilt als Fail RP (FRP) und wird bestraft. Jeder muss aktiv und angemessen am RP teilnehmen."
    },
    {
        title: "RP-Flucht verboten",
        content: "Das Weglaufen aus RP-Situationen ist nicht erlaubt. Spieler müssen Konsequenzen akzeptieren und das RP respektieren."
    },
    {
        title: "Tot = 5 Minuten liegen bleiben",
        content: "Wer tot ist, muss mindestens 5 Minuten am Boden liegen bleiben. Dies verhindert schnelles Respawnen und fördert realistisches RP."
    },
    {
        title: "Kinder ohne Waffen",
        content: "Kinder dürfen keine Waffen besitzen, außer Messern. Das schützt den RP-Realismus und die Balance im Spiel."
    },
    {
        title: "Tiere ohne Waffen",
        content: "Tiere dürfen keine Waffen tragen oder benutzen. Dies ist unrealistisch und wird nicht toleriert."
    },
    {
        title: "!mod-Spam verboten",
        content: "Das unnötige oder grundlose Verwenden von !mod Calls ist verboten. Nutzt den Mod-Call nur bei legitimen Problemen."
    },
    {
        title: "Verhandeln bei Raub",
        content: "Bei Raubüberfällen muss verhandelt werden. Einfache Gewaltanwendung ohne RP ist nicht erlaubt."
    },
    {
        title: "Eigenwerbung verboten",
        content: "Werbung für andere Server oder Projekte im RP ist untersagt. Haltet das RP sauber und respektiert die Community."
    },
    {
        title: "Keine Waffen in Save Zones",
        content: "Das Ziehen oder Schießen von Waffen in Safe Zones ist verboten. Diese Zonen bieten Schutz vor Gewalt."
    },
    {
        title: "Langwaffe = -zw-",
        content: "Beim Benutzen von Langwaffen muss im Schuss-Call das Kürzel -zw- verwendet werden. Das sorgt für Klarheit."
    },
    {
        title: "Keine Hit-Ansprachen",
        content: "Über 'Hits' oder ähnliche illegale Aktionen zu sprechen ist verboten und wird streng bestraft."
    },
    {
        title: "Spawn Reset erlaubt",
        content: "Man darf sich am Spawn resetten, auch nach dem Tod, um den RP-Fluss aufrechtzuerhalten."
    },
    {
        title: "Tot = Nicht reden",
        content: "Wer tot ist, darf nicht im RP sprechen. Das fördert realistische Interaktionen."
    },
    {
        title: "Leichenschändung verboten",
        content: "Das Schänden von Leichen ist strikt verboten und führt zu harten Konsequenzen."
    },
    {
        title: "Multiteaming im Staff verboten",
        content: "Mehrfach-Teamplay innerhalb des Staff-Teams ist untersagt, um Machtmissbrauch zu verhindern."
    },
    {
        title: "Homeland-Staff keine Geisel",
        content: "Staffler, die im Homeland-Job sind, dürfen nicht als Geisel genommen werden."
    },
    {
        title: "Bunnyhopping = FRP",
        content: "Bunnyhopping ist verboten und gilt als Fail RP. Spieler sollen realistisch laufen."
    },
    {
        title: "Wer redet, bekommt Ruhe",
        content: "Wenn jemand spricht, sollen die anderen schweigen, bis die Person fertig ist."
    },
    {
        title: "Staff freundlich bleiben",
        content: "Staffler müssen sich gegenüber Bürgern stets freundlich und professionell verhalten."
    },
    {
        title: "Bugs ausnutzen = FRP",
        content: "Das Ausnutzen von Bugs im RP ist verboten und gilt als Fail RP."
    },
    {
        title: "Rassismus verboten",
        content: "Rassistische Aussagen sind streng verboten und werden mit Bann bestraft."
    },
    {
        title: "Crash-RP ab 30 km/h",
        content: "Bei einem Unfall ab 30 km/h oder 60 mph muss Crash-RP durchgeführt werden."
    },
    {
        title: "-cuff- beim Verhaften",
        content: "Beim Verhaften muss das Kommando -cuff- geschrieben werden, um den Vorgang klar zu machen."
    },
    {
        title: "Kein Self-Support / Abuse",
        content: "Eigener Support und Rechte-Abuse sind verboten und führen zu Strafen."
    },
    {
        title: "Festhalten = annehmen",
        content: "Wenn jemand festhalten klickt, muss der Gefangene dies annehmen."
    },
    {
        title: "Drohne = 2 Min Cooldown",
        content: "Abschießen einer Drohne führt zu 2 Minuten Nutzungssperre."
    },
    {
        title: "Leben schützen bei Bedrohung",
        content: "Spieler müssen ihr Leben schützen, wenn sie bedroht werden."
    },
    {
        title: "1 Geisel = 1 Forderung",
        content: "Pro Geisel darf nur eine Forderung gestellt werden."
    },
    {
        title: "Freie Flucht = 10 Sekunden",
        content: "Bei freier Flucht hat man 10 Sekunden Zeit, zu entkommen."
    },
    {
        title: "Staff bei Geiselnahme zuschauen",
        content: "Staffler müssen bei Geiselnahmen als Beobachter anwesend sein."
    },
    {
        title: "2 Platten = Fahren verboten",
        content: "Fahren mit zwei platten Reifen ist nicht erlaubt."
    },
    {
        title: "Nach Wiederbelebung: Krankenhaus",
        content: "Nach der Wiederbelebung muss die Person zur Untersuchung ins Krankenhaus."
    },
    {
        title: "Sexuelle Inhalte verboten",
        content: "Sexuelle Inhalte sind im Discord und RP-Server verboten."
    },
    {
        title: "Mod-Call = Clip oder 3 Zeugen",
        content: "Bei einem Mod-Call muss ein Clip oder mindestens 3 Zeugen vorliegen."
    },
    {
        title: "Erste Hilfe = kein Respawn",
        content: "Wenn Erste Hilfe gestartet wurde, darf man nicht respawnen."
    },
    {
        title: "Keine Politik in SRP",
        content: "Politische Themen sind im Serious RP verboten."
    },
    {
        title: "Staff = kein RP-Eingriff",
        content: "Das Staff-Team darf sich nicht ins RP einmischen, außer bei Raubüberfällen als Beobachter."
    },
    {
        title: "Zelte nicht auf Straßen",
        content: "Zelte dürfen nicht auf oder nahe von Straßen und Gehwegen platziert werden."
    },
    {
        title: "Nach Tod = Erinnerung weg",
        content: "Nach dem Tod darf man sich an keine RP-Situation erinnern."
    },
    {
        title: "Nicht auf fahrenden Autos stehen",
        content: "Das Stehen auf fahrenden Fahrzeugen ist verboten."
    },
    {
        title: "30 Sekunden Crash-RP",
        content: "Crash-RP muss mindestens 30 Sekunden lang durchgeführt werden."
    },
    {
        title: "FFK-RP verboten",
        content: "Fail First Kill RP (FFK-RP) ist nicht erlaubt."
    },
    {
        title: "Homeland ab 11 Spielern",
        content: "Staffler dürfen erst ab mindestens 11 Spielern im Homeland-Job spielen."
    },
    {
        title: "Erste Hilfe = kein Respawn",
        content: "Nach Beginn der Ersten Hilfe ist Respawn verboten."
    }
];

const regelwerk = document.getElementById("Regelwerk");
const searchInput = document.getElementById("searchInput");

let containers = [];

for (let i = 0; i < rules.length; i++) {
    let container = document.createElement("div");
    container.classList.add("rule-container");

    let title = document.createElement("div");
    title.classList.add("rule-title");
    title.textContent = "§ " + (i + 1) + " - " + rules[i].title;

    let content = document.createElement("div");
    content.classList.add("rule-content");
    content.textContent = rules[i].content;

    title.addEventListener("click", () => {
        content.classList.toggle("visible");
    });

    container.appendChild(title);
    container.appendChild(content);
    regelwerk.appendChild(container);

    containers.push({
        container,
        title: rules[i].title.toLowerCase(),
        content: rules[i].content.toLowerCase()
    });
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();

    containers.forEach(({ container, title, content }) => {
        if (title.includes(query) || content.includes(query)) {
            container.style.display = "";
        } else {
            container.style.display = "none";
        }
    });
});
