import { Moon, Sun, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Rituals() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <Sparkles className="w-16 h-16 text-amber-600 mx-auto mb-6" />
        <h1 className="text-4xl mb-4">Übergangs Rituale</h1>
        <p className="text-lg text-gray-600">
          Zeremonien für die wichtigen Wendepunkte des Lebens
        </p>
      </div>

      <div className="mb-12 rounded-xl overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1768392810940-9ac23ab27f00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
          alt="Bamboo torches and flower on water"
          className="w-full h-96 object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700 mb-16">
        <p>
          Übergänge sind heilige Momente im Leben. Sie markieren das Ende eines Kapitels und den
          Beginn eines neuen. Rituale helfen uns, diese Übergänge bewusst zu gestalten und zu
          ehren.
        </p>

        <p>
          Seit Urzeiten haben Menschen Rituale genutzt, um wichtige Lebensübergänge zu
          markieren. Diese Zeremonien geben uns Halt, schaffen Raum für Trauer und Freude, und
          helfen uns, die Veränderung vollständig zu integrieren.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
          <Moon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl mb-3">Loslassen</h3>
          <p className="text-gray-600 text-sm">
            Rituale zum Abschied von alten Lebensabschnitten, Beziehungen oder Mustern
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
          <Sparkles className="w-12 h-12 text-amber-600 mx-auto mb-4" />
          <h3 className="text-xl mb-3">Transformation</h3>
          <p className="text-gray-600 text-sm">
            Zeremonien für Veränderungsphasen und persönliche Neuausrichtung
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
          <Sun className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-xl mb-3">Neubeginn</h3>
          <p className="text-gray-600 text-sm">
            Rituale zum Willkommen heißen neuer Lebensabschnitte und Möglichkeiten
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl mb-6">Arten von Übergangsritualen</h2>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="text-xl mb-2">Persönliche Übergänge</h3>
            <p>
              Geburtstag-Schwellen, Lebensphasen, Karrierewechsel, Wohnortwechsel
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-2">Beziehungen</h3>
            <p>
              Trennungen, Scheidungen, Verlust von geliebten Menschen, neue Partnerschaften
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-2">Spirituelle Initiationen</h3>
            <p>
              Beginn einer spirituellen Praxis, Visionssuche, spirituelles Erwachen
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-2">Jahreskreis-Feste</h3>
            <p>
              Sonnenwenden, Tag-und-Nacht-Gleichen, saisonale Übergänge
            </p>
          </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
        <h2 className="text-3xl">Individuelle Ritualgestaltung</h2>
        <p>
          Jedes Ritual wird individuell auf deine Situation und Bedürfnisse abgestimmt. Gemeinsam
          gestalten wir eine Zeremonie, die für dich stimmig ist und die wichtigen Elemente
          deines Übergangs würdigt.
        </p>

        <p>
          Ein Ritual kann in der Natur stattfinden, in einem geschützten Innenraum, allein oder
          in Gemeinschaft. Die Form folgt deiner Intention und dem, was du brauchst, um diesen
          Übergang vollständig zu leben.
        </p>
      </div>
    </div>
  );
}
