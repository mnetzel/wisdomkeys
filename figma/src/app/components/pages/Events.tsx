import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Events() {
  const events = [
    {
      title: "Vollmond-Feuerzeremonie",
      date: "15. Mai 2026",
      time: "19:00 - 21:30 Uhr",
      location: "Ceremonieplatz, Naturpark",
      spots: "12 Plätze verfügbar",
      description:
        "Spezielle Yagna zum Vollmond. Wir nutzen die kraftvolle Mondenergie für Manifestation und Loslassen.",
    },
    {
      title: "Heilkreis für Frauen",
      date: "22. Mai 2026",
      time: "18:00 - 21:00 Uhr",
      location: "Praxisraum, Stadtmitte",
      spots: "5 Plätze verfügbar",
      description:
        "Monatlicher Frauenkreis zum Thema 'Weibliche Kraft und Grenzen'. Mit Ritual, Meditation und Sharing.",
    },
    {
      title: "Selbstwert Workshop - Wochenende",
      date: "5. - 6. Juni 2026",
      time: "Sa 10:00 - So 17:00 Uhr",
      location: "Seminarhaus im Grünen",
      spots: "8 Plätze verfügbar",
      description:
        "Intensiv-Workshop zur Stärkung deines Selbstwerts. Inkl. Übernachtung und vegetarischer Verpflegung.",
    },
    {
      title: "Meditations-Einführungskurs (Start)",
      date: "11. Juni 2026",
      time: "19:00 - 20:30 Uhr",
      location: "Online via Zoom",
      spots: "15 Plätze verfügbar",
      description:
        "4-wöchiger Kurs für Anfänger. Lerne verschiedene Meditationstechniken und etabliere eine Praxis.",
    },
    {
      title: "Sommersonnenwende-Ritual",
      date: "21. Juni 2026",
      time: "17:00 - 22:00 Uhr",
      location: "See bei Sonnenuntergang",
      spots: "20 Plätze verfügbar",
      description:
        "Feier der Sommersonnenwende mit Feuerzeremonie, Meditation und gemeinsamem Fest bei Sonnenuntergang.",
    },
    {
      title: "Aufgabe & Hingabe Retreat",
      date: "10. - 13. Juli 2026",
      time: "Do 18:00 - So 14:00 Uhr",
      location: "Retreat-Center, Berge",
      spots: "12 Plätze verfügbar",
      description:
        "3-tägiger Retreat zur Balance zwischen Dharma und Bhakti. Vollpension und tägliche Zeremonien inkludiert.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <Calendar className="w-16 h-16 text-orange-600 mx-auto mb-6" />
        <h1 className="text-4xl mb-4">Termine & Veranstaltungen</h1>
        <p className="text-lg text-gray-600">
          Aktuelle Workshops, Zeremonien und Retreats
        </p>
      </div>

      <div className="mb-12 rounded-xl overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1763186535267-2b6fa6940ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
          alt="Fire ceremony at night"
          className="w-full h-80 object-cover"
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl mb-8">Kommende Veranstaltungen</h2>
        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl mb-3">{event.title}</h3>
                  <p className="text-gray-700 mb-4">{event.description}</p>

                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-orange-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-orange-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4 text-orange-600" />
                      <span>{event.spots}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors whitespace-nowrap">
                    Anmelden
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8">
          <h2 className="text-2xl mb-4">Regelmäßige Angebote</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="mb-1">Wöchentliche Meditation</h3>
              <p className="text-sm text-gray-600">Jeden Mittwoch, 19:00 - 20:30 Uhr, Online</p>
            </div>
            <div>
              <h3 className="mb-1">Heilkreis für Frauen</h3>
              <p className="text-sm text-gray-600">
                Monatlich bei Vollmond, 18:00 - 21:00 Uhr
              </p>
            </div>
            <div>
              <h3 className="mb-1">Feuerzeremonie</h3>
              <p className="text-sm text-gray-600">
                Jeden ersten Sonntag im Monat, 17:00 Uhr
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
          <h2 className="text-2xl mb-4">Individuelle Termine</h2>
          <p className="text-gray-700 mb-4">
            Für Einzelsitzungen, Transformationsbegleitung und private Zeremonien biete ich
            individuelle Termine an.
          </p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Termin anfragen
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl mb-4 text-center">Newsletter abonnieren</h2>
        <p className="text-gray-700 text-center mb-6 max-w-2xl mx-auto">
          Erhalte regelmäßig Updates über neue Termine, besondere Zeremonien und spirituelle
          Impulse direkt in dein Postfach.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Deine E-Mail Adresse"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors whitespace-nowrap">
            Anmelden
          </button>
        </div>
      </div>
    </div>
  );
}
