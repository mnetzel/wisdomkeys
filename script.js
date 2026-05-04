const images = {
  hero: "https://images.unsplash.com/photo-1759210420960-c5db3160b9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  ceremony: "https://images.unsplash.com/photo-1763186535267-2b6fa6940ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
  light: "https://images.unsplash.com/photo-1767769047159-755f1d56c1ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  meditation: "https://images.unsplash.com/photo-1688220560793-2f4fb29134d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
};

const copy = {
  fr: {
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

const baseCopy = copy.fr;
const germanUi = {
  viewEvents: "Termine ansehen",
  contact: "Kontakt aufnehmen",
  learnMore: "Mehr erfahren",
  firePower: "Die Kraft des Feuers",
  fireCeremony: "Feuerzeremonie",
  calendar: "Kalender",
  spotsOnRequest: "Plätze auf Anfrage",
  register: "Anmelden",
  contactEyebrow: "Kontakt",
  email: "E-Mail",
  phone: "Telefon",
  location: "Standort",
  name: "Name",
  subject: "Betreff",
  choose: "Bitte wählen...",
  workshopSignup: "Workshop-Anmeldung",
  oneOnOne: "Einzelsitzung",
  generalRequest: "Allgemeine Anfrage",
  message: "Nachricht",
  sendMessage: "Nachricht senden",
  notFoundTitle: "Seite nicht gefunden",
  notFoundSubtitle: "Diese Unterseite gibt es leider nicht.",
  notFoundBody: "Nutze das Menü, um zurück zu den Angeboten zu navigieren.",
  notFoundPoints: ["Home", "Termine", "Kontakt"]
};

const englishCopy = {
  tagline: "TRANSFORMATION · HEALING · PEACE",
  footer: "All rights reserved.",
  nav: {
    home: "HOME",
    fire: "FIRE",
    fireConnection: "MY CONNECTION WITH FIRE",
    fireCeremony: "FIRE CEREMONY-YAGNA",
    transformation: "TRANSFORMATION GUIDANCE",
    rituals: "TRANSITION RITUALS",
    futuresFire: "FIRE OF THE FUTURE",
    progression: "PROGRESSION",
    workshops: "WORKSHOPS",
    women: "WOMEN'S HEALING CIRCLE",
    selfWorth: "SELF-WORTH",
    surrender: "DEDICATION AND SURRENDER",
    meditations: "MEDITATIONS",
    travels: "TRAVELS",
    events: "EVENTS",
    about: "ABOUT ME",
    contact: "CONTACT"
  },
  home: {
    title: "WISDOM KEYS",
    intro: "Discover the transformative power of fire and find your way toward inner healing and peace through spiritual ceremonies and guidance.",
    cards: [
      ["Fire Ceremonies", "Experience the healing and cleansing power of sacred fire in traditional Yagna ceremonies.", "#/feuerzeremonie"],
      ["Transformation", "Support for your personal path of transformation and spiritual development.", "#/transformation"],
      ["Workshops", "Healing circles, meditations, and transformative workshops for self-worth and surrender.", "#/heilkreis-frauen"]
    ],
    ctaTitle: "Ready for your transformation?",
    ctaText: "Explore upcoming workshops, ceremonies, and journeys. Begin your path toward inner peace and spiritual growth."
  },
  pages: {
    "feuer-verbindung": {
      title: "My Connection with Fire",
      subtitle: "Fire as a guide, mirror, and force of transformation.",
      body: [
        "Fire accompanies me as a living force of purification, clarity, and surrender. In its presence, it becomes visible what may be released and what wants to be born anew.",
        "In my ceremonies, I open a quiet and mindful space where you can connect with your intention, your heart, and the wisdom of the element of fire."
      ],
      points: ["Purification and release", "Connection with intention and prayer", "Silence, presence, and inner alignment"]
    },
    feuerzeremonie: {
      title: "Fire Ceremony - Yagna",
      subtitle: "Sacred Vedic fire rituals for transformation and purification.",
      body: [
        "Yagna is a sacred Vedic fire ritual practiced for thousands of years. It supports transformation, purification, and spiritual growth.",
        "During the ceremony, herbs, ghee, and sacred substances are offered into the fire, accompanied by mantras, prayers, and shared meditation."
      ],
      points: ["Opening and cleansing the space", "Setting a personal intention", "Lighting the sacred fire", "Mantras, offerings, and meditation", "Integration and closing"]
    },
    transformation: {
      title: "Transformation Guidance",
      subtitle: "Your personal journey toward inner growth and healing.",
      body: [
        "Transformation is a natural process of life. Sometimes it helps to have a safe space in which to navigate transitions and come closer to your authentic path.",
        "My guidance combines spiritual wisdom with practical tools: energetic work, rituals, meditation, conversation, and intuitive guidance."
      ],
      points: ["Clarity in times of change", "Releasing old patterns", "Deepening spiritual practice", "Strengthening healing and inner peace"]
    },
    rituale: {
      title: "Transition Rituals",
      subtitle: "Conscious thresholds for new phases of life.",
      body: [
        "Rituals help us not only move through transitions, but honor them consciously. They give form to the invisible and offer orientation.",
        "Whether it is a new beginning, farewell, relationship, calling, or life change, a ritual can make the inner step visible on the outside."
      ],
      points: ["Farewell and new beginnings", "Threshold rituals", "Blessing and alignment", "Individually created ceremonies"]
    },
    progression: {
      title: "Fire of the Future - Progression",
      subtitle: "Vision, alignment, and inner guidance.",
      body: [
        "Progression turns the gaze forward: What future wants to emerge through you? Which decision needs clarity, courage, and trust?",
        "Through meditation, ritual, and reflection, a space opens for visions, next steps, and connection with your inner guidance."
      ],
      points: ["Clarifying visions", "Exploring future images", "Concrete next steps", "Strengthening trust and alignment"]
    },
    "heilkreis-frauen": {
      title: "Women's Healing Circle",
      subtitle: "A protected space for feminine power, connection, and healing.",
      body: [
        "In the healing circle, women come together to share, listen, and strengthen one another in their truth.",
        "Rituals, meditation, body awareness, and sharing create space for connection, self-respect, and inner clarity."
      ],
      points: ["Monthly circles", "Sharing and meditation", "Ritual work", "Feminine power and boundaries"]
    },
    selbstwert: {
      title: "Self-Worth",
      subtitle: "Returning to your dignity, strength, and inner safety.",
      body: [
        "Self-worth grows when you begin to define yourself no longer through performance, adaptation, or old stories.",
        "In workshops and individual sessions, we work with body, awareness, and rituals to strengthen your inner yes to yourself."
      ],
      points: ["Sensing your own boundaries", "Cultivating inner strength", "Releasing old beliefs", "Dignity and self-acceptance"]
    },
    "aufgabe-hingabe": {
      title: "Dedication and Surrender",
      subtitle: "Dharma, trust, and the art of letting go.",
      body: [
        "Between dedication and surrender lies a subtle path: taking responsibility without needing to control everything.",
        "This work supports you in coming closer to your task while also entrusting yourself to a greater wisdom."
      ],
      points: ["Dharma and life purpose", "Letting go of control", "Surrender as practice", "Trust in your own path"]
    },
    meditationen: {
      title: "Meditations",
      subtitle: "Silence, breath, and presence as a daily practice.",
      body: [
        "Meditation brings you back into contact with your inner space. It strengthens clarity, calm, and the ability to meet life more presently.",
        "I guide beginners and experienced practitioners through simple, deep practices that can be integrated into everyday life."
      ],
      points: ["Breath meditation", "Guided meditation", "Mantra and silence", "Online and in person"]
    },
    reisen: {
      title: "Spiritual Journeys",
      subtitle: "Journeys to places of power, rituals, and inner remembrance.",
      body: [
        "Spiritual journeys connect outer movement with inner transformation. In special places, spaces open for silence, community, and deeper alignment.",
        "The journeys include meditation, rituals, nature experience, and time for personal integration."
      ],
      points: ["Places of power and nature", "Rituals and meditation", "Small groups", "Integration and community"]
    },
    "ueber-mich": {
      title: "About Me",
      subtitle: "My path into spiritual guidance.",
      body: [
        "Namaste, I am Sanjana, and I accompany people on their path of spiritual transformation and healing.",
        "My own spiritual journey led me to India, where I encountered Vedic wisdom and the transformative power of sacred fire.",
        "In my work, I combine traditional spiritual wisdom with a modern, life-affirming approach."
      ],
      points: ["Vedic fire ceremonies and Yagna practice", "Energetic healing and chakra work", "Meditation practice and ritual work", "Women's circle facilitation and transformation guidance"]
    }
  },
  eventsTitle: "Events & Dates",
  eventsSubtitle: "Current workshops, ceremonies, and retreats",
  events: [
    ["Full Moon Fire Ceremony", "May 15, 2026", "7:00 - 9:30 PM", "Ceremony site, nature park", "A special Yagna for the full moon, focused on manifestation and release."],
    ["Women's Healing Circle", "May 22, 2026", "6:00 - 9:00 PM", "Practice room, city center", "A monthly women's circle with ritual, meditation, and sharing."],
    ["Self-Worth Workshop", "June 5 - 6, 2026", "Sat 10:00 AM - Sun 5:00 PM", "Seminar house in nature", "An intensive workshop to strengthen your self-worth."],
    ["Summer Solstice Ritual", "June 21, 2026", "5:00 - 10:00 PM", "Lakeside at sunset", "Fire ceremony, meditation, and a shared celebration."]
  ],
  contact: {
    title: "Contact",
    subtitle: "I look forward to hearing from you.",
    text: "Do you have questions about my offerings, would you like to register, or arrange an introductory conversation? Write to me directly by email or use the form.",
    email: "info@wisdomkeys.de",
    phone: "+49 (0) 123 456 7890",
    place: "Munich & Online"
  },
  ui: {
    viewEvents: "View events",
    contact: "Get in touch",
    learnMore: "Learn more",
    firePower: "The power of fire",
    fireCeremony: "Fire ceremony",
    calendar: "Calendar",
    spotsOnRequest: "Places on request",
    register: "Register",
    contactEyebrow: "Contact",
    email: "Email",
    phone: "Phone",
    location: "Location",
    name: "Name",
    subject: "Subject",
    choose: "Please choose...",
    workshopSignup: "Workshop registration",
    oneOnOne: "Individual session",
    generalRequest: "General request",
    message: "Message",
    sendMessage: "Send message",
    notFoundTitle: "Page not found",
    notFoundSubtitle: "This page does not exist.",
    notFoundBody: "Use the menu to return to the offerings.",
    notFoundPoints: ["Home", "Events", "Contact"]
  }
};

copy.en = { ...baseCopy, ...englishCopy, nav: { ...baseCopy.nav, ...englishCopy.nav }, ui: englishCopy.ui };
copy["de-ch"] = { ...baseCopy, ...copy["de-ch"], nav: { ...baseCopy.nav, ...copy["de-ch"].nav }, ui: germanUi };
delete copy.fr;

const menuLabels = {
  "de-ch": {
  home: "HOME",
  fire: "FEUER",
  fireConnection: "MEINE VERBINDUNG MIT DEM FEUER",
  fireCeremony: "FEUERZEREMONIE-YAGNA",
  transformation: "TRANSFORMATION BEGLEITUNG",
  rituals: "ÜBERGANGS RITUALE",
  futuresFire: "FEUER DER ZUKUNFT",
  progression: "PROGRESSION",
  workshops: "WORKSHOPS",
  women: "HEILKREIS FÜR FRAUEN",
  selfWorth: "SELBSTWERT",
  surrender: "AUFGABE UND HINGABE",
  meditations: "MEDITATIONEN",
  travels: "REISEN",
  events: "TERMINE",
  about: "ÜBER MICH",
  contact: "KONTAKT"
  },
  en: englishCopy.nav
};

Object.entries(copy).forEach(([key, item]) => {
  item.nav = { ...item.nav, ...(menuLabels[key] || menuLabels["de-ch"]) };
});

const navItems = [
  { key: "home", href: "#/" },
  {
    key: "fire",
    children: [
      { key: "fireConnection", href: "#/feuer-verbindung" },
      { key: "fireCeremony", href: "#/feuerzeremonie" }
    ]
  },
  { key: "transformation", href: "#/transformation" },
  { key: "rituals", href: "#/rituale" },
  {
    key: "futuresFire",
    children: [{ key: "progression", href: "#/progression" }]
  },
  {
    key: "workshops",
    children: [
      { key: "women", href: "#/heilkreis-frauen" },
      { key: "selfWorth", href: "#/selbstwert" },
      { key: "surrender", href: "#/aufgabe-hingabe" },
      { key: "meditations", href: "#/meditationen" }
    ]
  },
  { key: "travels", href: "#/reisen" },
  { key: "events", href: "#/termine" },
  { key: "about", href: "#/ueber-mich" },
  { key: "contact", href: "#/kontakt" }
];

const app = document.querySelector("#app");
const nav = document.querySelector(".main-nav");
const menuToggle = document.querySelector(".menu-toggle");
let language = localStorage.getItem("wisdomkeys-language") || "de-ch";
if (language === "de" || language === "fr") language = "de-ch";

function currentCopy() {
  return copy[language] || copy["de-ch"];
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
    .map((item) => {
      if (item.children) {
        const childLinks = item.children
          .map((child) => {
            const childRoute = child.href.replace(/^#\/?/, "") || "home";
            const childActive = active === childRoute;
            return `<a class="submenu-link ${childActive ? "is-active" : ""}" href="${child.href}">${t.nav[child.key]}</a>`;
          })
          .join("");
        const groupActive = item.children.some((child) => active === child.href.replace(/^#\/?/, ""));

        return `
          <div class="nav-group ${groupActive ? "is-active" : ""}">
            <button class="nav-parent" type="button" aria-expanded="false">
              ${t.nav[item.key]} <span aria-hidden="true">⌄</span>
            </button>
            <div class="submenu">${childLinks}</div>
          </div>
        `;
      }

      const itemRoute = item.href.replace(/^#\/?/, "") || "home";
      const isActive = active === itemRoute || (active === "home" && itemRoute === "home");
      return `<a class="${isActive ? "is-active" : ""}" href="${item.href}">${t.nav[item.key]}</a>`;
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
          <a class="button" href="#/termine">${t.ui.viewEvents}</a>
          <a class="button secondary" href="#/kontakt">${t.ui.contact}</a>
        </div>
      </div>
    </section>
    <section class="cards">
      ${t.home.cards
        .map(
          ([title, text, href]) => html`
            <article class="card">
              <h3>${title}</h3>
              <p>${text}</p>
              <a class="button secondary" href="${href}">${t.ui.learnMore}</a>
            </article>
          `
        )
        .join("")}
    </section>
    <section class="split">
      <div class="image-panel" style="background-image:url('${images.ceremony}')"></div>
      <div>
        <span class="eyebrow">${t.ui.firePower}</span>
        <h2>${t.home.ctaTitle}</h2>
        <p>${t.home.ctaText}</p>
        <div class="button-row">
          <a class="button" href="#/termine">${t.ui.viewEvents}</a>
          <a class="button secondary" href="#/feuerzeremonie">${t.ui.fireCeremony}</a>
        </div>
      </div>
    </section>
  `;
}

function renderInfoPage(page, image = images.meditation) {
  const t = currentCopy();
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
        <a class="button" href="#/kontakt">${t.ui.contact}</a>
        <a class="button secondary" href="#/termine">${t.ui.viewEvents}</a>
      </div>
    </section>
  `;
}

function renderEvents(t) {
  return html`
    <section class="section section-title">
      <span class="eyebrow">${t.ui.calendar}</span>
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
                  <span>${t.ui.spotsOnRequest}</span>
                </div>
              </div>
              <a class="button" href="#/kontakt">${t.ui.register}</a>
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
        <span class="eyebrow">${t.ui.contactEyebrow}</span>
        <h2>${t.contact.title}</h2>
        <p>${t.contact.subtitle}</p>
        <p>${t.contact.text}</p>
        <p><strong>${t.ui.email}:</strong> <a href="mailto:${t.contact.email}">${t.contact.email}</a></p>
        <p><strong>${t.ui.phone}:</strong> <a href="tel:+491234567890">${t.contact.phone}</a></p>
        <p><strong>${t.ui.location}:</strong> ${t.contact.place}</p>
      </div>
      <div class="contact-panel">
        <form class="contact-form" action="mailto:${t.contact.email}" method="post" enctype="text/plain">
          <label>${t.ui.name} <input name="name" required /></label>
          <label>${t.ui.email} <input type="email" name="email" required /></label>
          <label>${t.ui.subject}
            <select name="subject" required>
              <option value="">${t.ui.choose}</option>
              <option>${t.ui.workshopSignup}</option>
              <option>${t.ui.fireCeremony}</option>
              <option>${t.ui.oneOnOne}</option>
              <option>${t.ui.generalRequest}</option>
            </select>
          </label>
          <label>${t.ui.message} <textarea name="message" rows="7" required></textarea></label>
          <button class="button" type="submit">${t.ui.sendMessage}</button>
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
      title: t.ui.notFoundTitle,
      subtitle: t.ui.notFoundSubtitle,
      body: [t.ui.notFoundBody],
      points: t.ui.notFoundPoints
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

nav.addEventListener("click", (event) => {
  const parent = event.target.closest(".nav-parent");
  if (parent) {
    const group = parent.closest(".nav-group");
    const isOpen = group.classList.toggle("is-open");
    parent.setAttribute("aria-expanded", String(isOpen));

    nav.querySelectorAll(".nav-group").forEach((item) => {
      if (item !== group) {
        item.classList.remove("is-open");
        item.querySelector(".nav-parent")?.setAttribute("aria-expanded", "false");
      }
    });
    return;
  }

  if (event.target.closest("a")) {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("hashchange", render);
render();
