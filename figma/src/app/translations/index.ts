export interface Translation {
  nav: {
    tagline: string;
    home: string;
    fire: string;
    fireConnection: string;
    fireCeremony: string;
    transformation: string;
    rituals: string;
    futuresFire: string;
    progression: string;
    workshops: string;
    womenCircle: string;
    selfWorth: string;
    dedicationSurrender: string;
    meditations: string;
    travels: string;
    events: string;
    about: string;
    contact: string;
  };
  home: {
    hero: {
      title: string;
      tagline: string;
      description: string;
    };
    offerings: {
      fire: {
        title: string;
        description: string;
        cta: string;
      };
      transformation: {
        title: string;
        description: string;
        cta: string;
      };
      workshops: {
        title: string;
        description: string;
        cta: string;
      };
    };
    gallery: {
      title: string;
      ceremony: string;
      light: string;
    };
    cta: {
      title: string;
      description: string;
      viewEvents: string;
      contact: string;
    };
  };
  footer: {
    rights: string;
  };
}

export const translations: Record<"de" | "en" | "de-ch", Translation> = {
  de: {
    nav: {
      tagline: "TRANSFORMATION · HEILUNG · FRIEDEN",
      home: "HOME",
      fire: "FEUER",
      fireConnection: "Meine Verbindung mit dem Feuer",
      fireCeremony: "Feuerzeremonie - Yagna",
      transformation: "TRANSFORMATION BEGLEITUNG",
      rituals: "ÜBERGANGS RITUALE",
      futuresFire: "FEUER DER ZUKUNFT",
      progression: "Progression",
      workshops: "WORKSHOPS",
      womenCircle: "Heilkreis für Frauen",
      selfWorth: "Selbstwert",
      dedicationSurrender: "Aufgabe und Hingabe",
      meditations: "Meditationen",
      travels: "REISEN",
      events: "TERMINE",
      about: "ÜBER MICH",
      contact: "KONTAKT",
    },
    home: {
      hero: {
        title: "WISDOM KEYS",
        tagline: "TRANSFORMATION · HEILUNG · FRIEDEN",
        description:
          "Entdecke die transformative Kraft des Feuers und finde deinen Weg zu innerer Heilung und Frieden durch spirituelle Zeremonien und Begleitung.",
      },
      offerings: {
        fire: {
          title: "Feuer Zeremonien",
          description:
            "Erlebe die heilende und reinigende Kraft des heiligen Feuers in traditionellen Yagna-Zeremonien.",
          cta: "Mehr erfahren",
        },
        transformation: {
          title: "Transformation",
          description:
            "Begleitung auf deinem persönlichen Weg der Transformation und spirituellen Entwicklung.",
          cta: "Mehr erfahren",
        },
        workshops: {
          title: "Workshops",
          description:
            "Heilkreise, Meditationen und transformative Workshops für Selbstwert und Hingabe.",
          cta: "Mehr erfahren",
        },
      },
      gallery: {
        title: "Die Kraft des Feuers",
        ceremony: "Heilige Feuerzeremonie",
        light: "Licht und Meditation",
      },
      cta: {
        title: "Bereit für deine Transformation?",
        description:
          "Entdecke die kommenden Workshops, Zeremonien und Reisen. Beginne deinen Weg zu innerem Frieden und spirituellem Wachstum.",
        viewEvents: "Termine ansehen",
        contact: "Kontakt aufnehmen",
      },
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
    },
  },
  en: {
    nav: {
      tagline: "TRANSFORMATION · HEALING · PEACE",
      home: "HOME",
      fire: "FIRE",
      fireConnection: "My Connection with Fire",
      fireCeremony: "Fire Ceremony - Yagna",
      transformation: "TRANSFORMATION GUIDANCE",
      rituals: "TRANSITION RITUALS",
      futuresFire: "FIRE OF THE FUTURE",
      progression: "Progression",
      workshops: "WORKSHOPS",
      womenCircle: "Women's Healing Circle",
      selfWorth: "Self-Worth",
      dedicationSurrender: "Dedication and Surrender",
      meditations: "Meditations",
      travels: "TRAVELS",
      events: "EVENTS",
      about: "ABOUT ME",
      contact: "CONTACT",
    },
    home: {
      hero: {
        title: "WISDOM KEYS",
        tagline: "TRANSFORMATION · HEALING · PEACE",
        description:
          "Discover the transformative power of fire and find your path to inner healing and peace through spiritual ceremonies and guidance.",
      },
      offerings: {
        fire: {
          title: "Fire Ceremonies",
          description:
            "Experience the healing and purifying power of sacred fire in traditional Yagna ceremonies.",
          cta: "Learn more",
        },
        transformation: {
          title: "Transformation",
          description:
            "Guidance on your personal journey of transformation and spiritual development.",
          cta: "Learn more",
        },
        workshops: {
          title: "Workshops",
          description:
            "Healing circles, meditations and transformative workshops for self-worth and surrender.",
          cta: "Learn more",
        },
      },
      gallery: {
        title: "The Power of Fire",
        ceremony: "Sacred Fire Ceremony",
        light: "Light and Meditation",
      },
      cta: {
        title: "Ready for Your Transformation?",
        description:
          "Discover upcoming workshops, ceremonies and journeys. Begin your path to inner peace and spiritual growth.",
        viewEvents: "View Events",
        contact: "Get in Touch",
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  "de-ch": {
    nav: {
      tagline: "TRANSFORMATION · HEILUNG · FRIEDEN",
      home: "HOME",
      fire: "FÜÜR",
      fireConnection: "Mini Verbindig mit em Füür",
      fireCeremony: "Füürzeremonie - Yagna",
      transformation: "TRANSFORMATION BEGLEITIG",
      rituals: "ÜBERGANGS RITUALE",
      futuresFire: "FÜÜR VOR ZUKUNFT",
      progression: "Progression",
      workshops: "WORKSHOPS",
      womenCircle: "Heilchreis für Fraue",
      selfWorth: "Selbstwärt",
      dedicationSurrender: "Ufgab und Hingab",
      meditations: "Meditatione",
      travels: "REISE",
      events: "TERMIN",
      about: "ÜBER MICH",
      contact: "KONTAKT",
    },
    home: {
      hero: {
        title: "WISDOM KEYS",
        tagline: "TRANSFORMATION · HEILUNG · FRIEDEN",
        description:
          "Entdecke d'transformative Chraft vom Füür und find din Wäg zu innerer Heilig und Fride durch spirituelli Zeremonie und Begleitig.",
      },
      offerings: {
        fire: {
          title: "Füür Zeremonie",
          description:
            "Erleb d'heilendi und reinigendi Chraft vom heilige Füür i traditiönelle Yagna-Zeremonie.",
          cta: "Meh erfahre",
        },
        transformation: {
          title: "Transformation",
          description:
            "Begleitig uf dim persönliche Wäg vor Transformation und spirituelle Entwicklig.",
          cta: "Meh erfahre",
        },
        workshops: {
          title: "Workshops",
          description:
            "Heilchreis, Meditatione und transformativi Workshops für Selbstwärt und Hingab.",
          cta: "Meh erfahre",
        },
      },
      gallery: {
        title: "D'Chraft vom Füür",
        ceremony: "Heiligi Füürzeremonie",
        light: "Liecht und Meditation",
      },
      cta: {
        title: "Bereit für dini Transformation?",
        description:
          "Entdeck di chommende Workshops, Zeremonie und Reise. Beginn din Wäg zu innerem Fride und spirituellem Wachstum.",
        viewEvents: "Termin alüege",
        contact: "Kontakt ufnäh",
      },
    },
    footer: {
      rights: "Alli Rächt vorbehalte.",
    },
  },
};
