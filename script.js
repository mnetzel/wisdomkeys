const images = {
  hero: "https://images.unsplash.com/photo-1759210420960-c5db3160b9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  ceremony: "https://images.unsplash.com/photo-1763186535267-2b6fa6940ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
  light: "https://images.unsplash.com/photo-1767769047159-755f1d56c1ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  meditation: "https://images.unsplash.com/photo-1688220560793-2f4fb29134d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
};

const copy = {
  de: {
    tagline: "TRANSFORMATION · HEILUNG · FRIEDEN",
    footer: "Alle Rechte vorbehalten.",
    nav: {
      home: "Home",
      fire: "Feuer",
      transformation: "Transformation",
      rituals: "Rituale",
      progression: "Progression",
      women: "Heilkreis Frauen",
      selfWorth: "Selbstwert",
      surrender: "Aufgabe & Hingabe",
      meditations: "Meditationen",
      travels: "Reisen",
      events: "Termine",
      about: "Über mich",
      contact: "Kontakt"
    },
    home: {
      title: "WISDOM KEYS",
      intro: "Entdecke die transformative Kraft des Feuers und finde deinen Weg zu innerer Heilung und Frieden durch spirituelle Zeremonien und Begleitung.",
      cards: [
        ["Feuerzeremonien", "Erlebe die heilende und reinigende Kraft des heiligen Feuers in traditionellen Yagna-Zeremonien.", "#/feuerzeremonie"],
        ["Transformation", "Begleitung auf deinem persönlichen Weg der Transformation und spirituellen Entwicklung.", "#/transformation"],
        ["Workshops", "Heilkreise, Meditationen und transformative Workshops für Selbstwert und Hingabe.", "#/heilkreis-frauen"]
      ],
      ctaTitle: "Bereit für deine Transformation?",
      ctaText: "Entdecke kommende Workshops, Zeremonien und Reisen. Beginne deinen Weg zu innerem Frieden und spirituellem Wachstum."
    },
    pages: {
      "feuer-verbindung": {
        title: "Meine Verbindung mit dem Feuer",
        subtitle: "Das Feuer als Wegweiser, Spiegel und Transformationskraft.",
        body: [
          "Das Feuer begleitet mich als lebendige Kraft der Reinigung, Klarheit und Hingabe. In seiner Präsenz wird sichtbar, was gehen darf und was neu geboren werden möchte.",
          "In meinen Zeremonien öffne ich einen stillen, achtsamen Raum, in dem du dich mit deiner Intention, deinem Herzen und der Weisheit des Elements Feuer verbinden kannst."
        ],
        points: ["Reinigung und Loslassen", "Verbindung mit Intention und Gebet", "Stille, Präsenz und innere Ausrichtung"]
      },
      feuerzeremonie: {
        title: "Feuerzeremonie - Yagna",
        subtitle: "Heilige vedische Feuerrituale für Transformation und Reinigung.",
        body: [
          "Yagna ist ein heiliges vedisches Feuerritual, das seit Jahrtausenden praktiziert wird. Es unterstützt Transformation, Reinigung und spirituelles Wachstum.",
          "Während der Zeremonie werden Kräuter, Ghee und heilige Substanzen ins Feuer gegeben, begleitet von Mantras, Gebeten und gemeinsamer Meditation."
        ],
        points: ["Eröffnung und Reinigung des Raumes", "Setzen der persönlichen Intention", "Entzünden des heiligen Feuers", "Mantras, Opfergaben und Meditation", "Integration und Abschluss"]
      },
      transformation: {
        title: "Transformation Begleitung",
        subtitle: "Deine persönliche Reise zu innerem Wachstum und Heilung.",
        body: [
          "Transformation ist ein natürlicher Prozess des Lebens. Manchmal braucht es einen sicheren Raum, um durch Übergänge zu navigieren und dem eigenen authentischen Weg wieder näherzukommen.",
          "Meine Begleitung verbindet spirituelle Weisheit mit praktischen Werkzeugen: energetische Arbeit, Rituale, Meditation, Gespräche und intuitive Führung."
        ],
        points: ["Klarheit in Zeiten der Veränderung", "Alte Muster lösen", "Spirituelle Praxis vertiefen", "Heilung und inneren Frieden stärken"]
      },
      rituale: {
        title: "Übergangs Rituale",
        subtitle: "Bewusste Schwellen für neue Lebensphasen.",
        body: [
          "Rituale helfen uns, Übergänge nicht nur zu durchleben, sondern bewusst zu würdigen. Sie geben dem Unsichtbaren Form und schenken Orientierung.",
          "Ob Neubeginn, Abschied, Beziehung, Berufung oder Lebenswende: ein Ritual kann den inneren Schritt nach außen sichtbar machen."
        ],
        points: ["Abschied und Neubeginn", "Schwellenrituale", "Segnung und Ausrichtung", "Individuell gestaltete Zeremonien"]
      },
      progression: {
        title: "Feuer der Zukunft - Progression",
        subtitle: "Vision, Ausrichtung und innere Führung.",
        body: [
          "Progression richtet den Blick nach vorne: Welche Zukunft möchte durch dich entstehen? Welche Entscheidung braucht Klarheit, Mut und Vertrauen?",
          "Mit Meditation, Ritual und Reflexion öffnet sich ein Raum für Visionen, nächste Schritte und die Verbindung mit deiner inneren Führung."
        ],
        points: ["Visionen klären", "Zukunftsbilder erkunden", "Konkrete nächste Schritte", "Vertrauen und Ausrichtung stärken"]
      },
      "heilkreis-frauen": {
        title: "Heilkreis für Frauen",
        subtitle: "Ein geschützter Raum für weibliche Kraft, Verbindung und Heilung.",
        body: [
          "Im Heilkreis kommen Frauen zusammen, um zu teilen, zu lauschen und sich gegenseitig in ihrer Wahrheit zu stärken.",
          "Rituale, Meditation, Körperwahrnehmung und Sharing schaffen Raum für Verbundenheit, Selbstachtung und innere Klarheit."
        ],
        points: ["Monatliche Kreise", "Sharing und Meditation", "Ritualarbeit", "Weibliche Kraft und Grenzen"]
      },
      selbstwert: {
        title: "Selbstwert",
        subtitle: "Zurück in deine Würde, Kraft und innere Sicherheit.",
        body: [
          "Selbstwert entsteht, wenn du beginnst, dich nicht länger über Leistung, Anpassung oder alte Geschichten zu definieren.",
          "In Workshops und Einzelsitzungen arbeiten wir mit Körper, Bewusstsein und Ritualen daran, dein inneres Ja zu dir selbst zu stärken."
        ],
        points: ["Eigene Grenzen spüren", "Innere Stärke kultivieren", "Alte Glaubenssätze lösen", "Würde und Selbstannahme"]
      },
      "aufgabe-hingabe": {
        title: "Aufgabe und Hingabe",
        subtitle: "Dharma, Vertrauen und die Kunst des Loslassens.",
        body: [
          "Zwischen Aufgabe und Hingabe liegt ein feiner Weg: Verantwortung übernehmen, ohne alles kontrollieren zu müssen.",
          "Diese Arbeit unterstützt dich dabei, deiner Aufgabe näherzukommen und dich gleichzeitig einer größeren Weisheit anzuvertrauen."
        ],
        points: ["Dharma und Lebensaufgabe", "Loslassen von Kontrolle", "Hingabe als Praxis", "Vertrauen in den eigenen Weg"]
      },
      meditationen: {
        title: "Meditationen",
        subtitle: "Stille, Atem und Präsenz als tägliche Praxis.",
        body: [
          "Meditation bringt dich zurück in Kontakt mit deinem inneren Raum. Sie stärkt Klarheit, Ruhe und die Fähigkeit, dem Leben präsenter zu begegnen.",
          "Ich begleite Einsteigerinnen und Fortgeschrittene mit einfachen, tiefgehenden Praktiken, die sich gut in den Alltag integrieren lassen."
        ],
        points: ["Atemmeditation", "Geführte Meditation", "Mantra und Stille", "Online und vor Ort"]
      },
      reisen: {
        title: "Spirituelle Reisen",
        subtitle: "Reisen zu Kraftorten, Ritualen und innerer Erinnerung.",
        body: [
          "Spirituelle Reisen verbinden äußere Bewegung mit innerer Wandlung. An besonderen Orten öffnen sich Räume für Stille, Gemeinschaft und tiefere Ausrichtung.",
          "Die Reisen enthalten Meditation, Rituale, Naturerfahrung und Zeiten für persönliche Integration."
        ],
        points: ["Kraftorte und Natur", "Rituale und Meditation", "Kleine Gruppen", "Integration und Gemeinschaft"]
      },
      "ueber-mich": {
        title: "Über mich",
        subtitle: "Mein Weg zur spirituellen Begleitung.",
        body: [
          "Namaste, ich bin Sanjana, und ich begleite Menschen auf ihrem Weg der spirituellen Transformation und Heilung.",
          "Meine eigene spirituelle Reise führte mich nach Indien, wo ich die vedische Weisheit und die transformative Kraft des heiligen Feuers kennenlernte.",
          "In meiner Arbeit verbinde ich traditionelle spirituelle Weisheit mit einem modernen, lebensbejahenden Ansatz."
        ],
        points: ["Vedische Feuerzeremonien und Yagna-Praxis", "Energetische Heilung und Chakra-Arbeit", "Meditationspraxis und Ritualarbeit", "Frauenkreis-Leitung und Transformationsbegleitung"]
      }
    },
    eventsTitle: "Termine & Veranstaltungen",
    eventsSubtitle: "Aktuelle Workshops, Zeremonien und Retreats",
    events: [
      ["Vollmond-Feuerzeremonie", "15. Mai 2026", "19:00 - 21:30 Uhr", "Ceremonieplatz, Naturpark", "Spezielle Yagna zum Vollmond für Manifestation und Loslassen."],
      ["Heilkreis für Frauen", "22. Mai 2026", "18:00 - 21:00 Uhr", "Praxisraum, Stadtmitte", "Monatlicher Frauenkreis mit Ritual, Meditation und Sharing."],
      ["Selbstwert Workshop", "5. - 6. Juni 2026", "Sa 10:00 - So 17:00 Uhr", "Seminarhaus im Grünen", "Intensiv-Workshop zur Stärkung deines Selbstwerts."],
      ["Sommersonnenwende-Ritual", "21. Juni 2026", "17:00 - 22:00 Uhr", "See bei Sonnenuntergang", "Feuerzeremonie, Meditation und gemeinsames Fest."]
    ],
    contact: {
      title: "Kontakt",
      subtitle: "Ich freue mich von dir zu hören.",
      text: "Hast du Fragen zu meinen Angeboten, möchtest du dich anmelden oder ein Erstgespräch vereinbaren? Schreib mir direkt per E-Mail oder nutze das Formular.",
      email: "info@wisdomkeys.de",
      phone: "+49 (0) 123 456 7890",
      place: "München & Online"
    }
  },
  en: {
    tagline: "TRANSFORMATION · HEALING · PEACE",
    footer: "All rights reserved.",
    nav: {
      home: "Home",
      fire: "Fire",
      transformation: "Transformation",
      rituals: "Rituals",
      progression: "Progression",
      women: "Women's Circle",
      selfWorth: "Self-Worth",
      surrender: "Surrender",
      meditations: "Meditations",
      travels: "Travels",
      events: "Events",
      about: "About",
      contact: "Contact"
    }
  },
  "de-ch": {
    tagline: "TRANSFORMATION · HEILUNG · FRIEDEN",
    footer: "Alli Rächt vorbehalte.",
    nav: {
      home: "Home",
      fire: "Füür",
      transformation: "Transformation",
      rituals: "Rituale",
      progression: "Progression",
      women: "Heilchreis Fraue",
      selfWorth: "Selbstwärt",
      surrender: "Hingab",
      meditations: "Meditatione",
      travels: "Reise",
      events: "Termin",
      about: "Über mich",
      contact: "Kontakt"
    }
  }
};

copy.en = { ...copy.de, ...copy.en };
copy["de-ch"] = { ...copy.de, ...copy["de-ch"] };

const navItems = [
  ["home", "#/"],
  ["fire", "#/feuerzeremonie"],
  ["transformation", "#/transformation"],
  ["rituals", "#/rituale"],
  ["progression", "#/progression"],
  ["women", "#/heilkreis-frauen"],
  ["selfWorth", "#/selbstwert"],
  ["surrender", "#/aufgabe-hingabe"],
  ["meditations", "#/meditationen"],
  ["travels", "#/reisen"],
  ["events", "#/termine"],
  ["about", "#/ueber-mich"],
  ["contact", "#/kontakt"]
];

const app = document.querySelector("#app");
const nav = document.querySelector(".main-nav");
const menuToggle = document.querySelector(".menu-toggle");
let language = localStorage.getItem("wisdomkeys-language") || "de";

function currentCopy() {
  return copy[language] || copy.de;
}

function route() {
  return (location.hash.replace(/^#\/?/, "") || "home").replace(/\/$/, "");
}

function html(strings, ...values) {
  return strings.reduce((result, string, index) => result + string + (values[index] ?? ""), "");
}

function renderNav() {
  const t = currentCopy();
  const active = route();
  nav.innerHTML = navItems
    .map(([key, href]) => {
      const itemRoute = href.replace(/^#\/?/, "") || "home";
      const isActive = active === itemRoute || (active === "home" && itemRoute === "home");
      return `<a class="${isActive ? "is-active" : ""}" href="${href}">${t.nav[key]}</a>`;
    })
    .join("");
}

function syncChrome() {
  const t = currentCopy();
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n='tagline']").forEach((node) => (node.textContent = t.tagline));
  document.querySelectorAll("[data-i18n='footer']").forEach((node) => (node.textContent = t.footer));
  document.querySelector("#year").textContent = new Date().getFullYear();
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === language);
  });
  renderNav();
}

function renderHome(t) {
  return html`
    <section class="hero" style="--hero-image: url('${images.hero}')">
      <div class="hero-inner">
        <div class="eyebrow">${t.tagline}</div>
        <h1>${t.home.title}</h1>
        <p>${t.home.intro}</p>
        <div class="button-row">
          <a class="button" href="#/termine">Termine ansehen</a>
          <a class="button secondary" href="#/kontakt">Kontakt aufnehmen</a>
        </div>
      </div>
    </section>
    <section class="cards">
      ${t.home.cards
        .map(
          ([title, text, href]) => html`
            <article class="card">
              <span class="card-icon" aria-hidden="true">◆</span>
              <h3>${title}</h3>
              <p>${text}</p>
              <a class="button secondary" href="${href}">Mehr erfahren</a>
            </article>
          `
        )
        .join("")}
    </section>
    <section class="split">
      <div class="image-panel" style="background-image:url('${images.ceremony}')"></div>
      <div>
        <span class="eyebrow">Die Kraft des Feuers</span>
        <h2>${t.home.ctaTitle}</h2>
        <p>${t.home.ctaText}</p>
        <div class="button-row">
          <a class="button" href="#/termine">Termine ansehen</a>
          <a class="button secondary" href="#/feuerzeremonie">Feuerzeremonie</a>
        </div>
      </div>
    </section>
  `;
}

function renderInfoPage(page, image = images.meditation) {
  return html`
    <section class="split">
      <div>
        <span class="eyebrow">Wisdom Keys</span>
        <h2>${page.title}</h2>
        <p>${page.subtitle}</p>
      </div>
      <div class="image-panel" style="background-image:url('${image}')"></div>
    </section>
    <section class="section section-narrow">
      ${page.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      <ul class="feature-list">
        ${page.points.map((point) => `<li>${point}</li>`).join("")}
      </ul>
      <div class="button-row">
        <a class="button" href="#/kontakt">Kontakt aufnehmen</a>
        <a class="button secondary" href="#/termine">Termine ansehen</a>
      </div>
    </section>
  `;
}

function renderEvents(t) {
  return html`
    <section class="section section-title">
      <span class="eyebrow">Kalender</span>
      <h2>${t.eventsTitle}</h2>
      <p>${t.eventsSubtitle}</p>
    </section>
    <section class="event-list">
      ${t.events
        .map(
          ([title, date, time, place, text]) => html`
            <article class="event-card">
              <div>
                <h3>${title}</h3>
                <p>${text}</p>
                <div class="event-meta">
                  <span>${date}</span>
                  <span>${time}</span>
                  <span>${place}</span>
                  <span>Plätze auf Anfrage</span>
                </div>
              </div>
              <a class="button" href="#/kontakt">Anmelden</a>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function renderContact(t) {
  return html`
    <section class="contact-grid">
      <div class="contact-panel">
        <span class="eyebrow">Kontakt</span>
        <h2>${t.contact.title}</h2>
        <p>${t.contact.subtitle}</p>
        <p>${t.contact.text}</p>
        <p><strong>E-Mail:</strong> <a href="mailto:${t.contact.email}">${t.contact.email}</a></p>
        <p><strong>Telefon:</strong> <a href="tel:+491234567890">${t.contact.phone}</a></p>
        <p><strong>Standort:</strong> ${t.contact.place}</p>
      </div>
      <div class="contact-panel">
        <form class="contact-form" action="mailto:${t.contact.email}" method="post" enctype="text/plain">
          <label>Name <input name="name" required /></label>
          <label>E-Mail <input type="email" name="email" required /></label>
          <label>Betreff
            <select name="subject" required>
              <option value="">Bitte wählen...</option>
              <option>Workshop-Anmeldung</option>
              <option>Feuerzeremonie</option>
              <option>Einzelsitzung</option>
              <option>Allgemeine Anfrage</option>
            </select>
          </label>
          <label>Nachricht <textarea name="message" rows="7" required></textarea></label>
          <button class="button" type="submit">Nachricht senden</button>
        </form>
      </div>
    </section>
  `;
}

function render() {
  const t = currentCopy();
  const currentRoute = route();
  syncChrome();

  if (currentRoute === "home") {
    app.innerHTML = renderHome(t);
  } else if (currentRoute === "termine") {
    app.innerHTML = renderEvents(t);
  } else if (currentRoute === "kontakt") {
    app.innerHTML = renderContact(t);
  } else if (t.pages[currentRoute]) {
    const image = currentRoute.includes("feuer") ? images.ceremony : currentRoute === "reisen" ? images.light : images.meditation;
    app.innerHTML = renderInfoPage(t.pages[currentRoute], image);
  } else {
    app.innerHTML = renderInfoPage({
      title: "Seite nicht gefunden",
      subtitle: "Diese Unterseite gibt es leider nicht.",
      body: ["Nutze das Menü, um zurück zu den Angeboten zu navigieren."],
      points: ["Home", "Termine", "Kontakt"]
    });
  }

  app.focus({ preventScroll: true });
  menuToggle.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    language = button.dataset.language;
    localStorage.setItem("wisdomkeys-language", language);
    render();
  });
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

window.addEventListener("hashchange", render);
render();
