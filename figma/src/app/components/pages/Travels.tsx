import { MapPin, Calendar, Heart } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Travels() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <MapPin className="w-16 h-16 text-orange-600 mx-auto mb-6" />
        <h1 className="text-4xl mb-4">Spirituelle Reisen</h1>
        <p className="text-lg text-gray-600">
          Transformative Reisen zu heiligen Orten und kraftvollen Landschaften
        </p>
      </div>

      <div className="mb-16 rounded-xl overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1775807674781-cc30b8c9f4c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
          alt="Japanese religious ceremony with lanterns"
          className="w-full h-96 object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700 mb-16">
        <p>
          Eine spirituelle Reise ist mehr als Urlaub - sie ist eine Pilgerreise zu dir selbst.
          An heiligen Orten, in der Kraft der Natur und in Gemeinschaft mit Gleichgesinnten
          öffnen sich Räume tiefer Transformation.
        </p>

        <p>
          Ich organisiere und begleite Reisen zu kraftvollen Orten in Indien, Bali und Europa.
          Jede Reise verbindet äußere Erkundung mit innerer Arbeit, Abenteuer mit Meditation,
          Bewegung mit Stille.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759210420960-c5db3160b9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
            alt="Fire ceremony in India"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl mb-3">Indien - Quelle der Weisheit</h3>
            <p className="text-gray-700 mb-4">
              14-tägige Reise zu Ashrams, Tempeln und heiligen Flüssen. Teilnahme an
              authentischen Feuerzeremonien und Begegnung mit spirituellen Lehrern.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Calendar className="w-4 h-4" />
              <span>Februar & Oktober 2026</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Rishikesh, Varanasi, Haridwar</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1768392810940-9ac23ab27f00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
            alt="Ceremony with water and fire"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl mb-3">Bali - Insel der Götter</h3>
            <p className="text-gray-700 mb-4">
              10-tägiger Retreat kombiniert mit Erkundung. Yoga, Meditation, balinesische
              Wasserrituale und Dschungel-Zeremonien.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Calendar className="w-4 h-4" />
              <span>April & September 2026</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Ubud, Tirta Empul, Sidemen</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl mb-6">Was macht eine spirituelle Reise aus?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <Heart className="w-8 h-8 text-orange-600 mb-3" />
            <h3 className="text-lg mb-2">Innere Arbeit</h3>
            <p className="text-sm text-gray-700">
              Tägliche Meditation, Rituale und Reflexion unterstützen deinen inneren Prozess
            </p>
          </div>
          <div>
            <MapPin className="w-8 h-8 text-orange-600 mb-3" />
            <h3 className="text-lg mb-2">Heilige Orte</h3>
            <p className="text-sm text-gray-700">
              Besuche kraftvoller Tempel, Ashrams und Naturorte mit besonderer Energie
            </p>
          </div>
          <div>
            <Calendar className="w-8 h-8 text-orange-600 mb-3" />
            <h3 className="text-lg mb-2">Gemeinschaft</h3>
            <p className="text-sm text-gray-700">
              Erlebe die unterstützende Kraft einer spirituellen Reisegruppe
            </p>
          </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700 mb-16">
        <h2 className="text-3xl">Was ist inbegriffen?</h2>
        <ul className="space-y-2">
          <li>Vollständige Reisebegleitung und spirituelle Führung</li>
          <li>Unterkunft in besonderen, sorgfältig ausgewählten Orten</li>
          <li>Vegetarische/vegane Verpflegung</li>
          <li>Tägliche Meditationen und spirituelle Praktiken</li>
          <li>Zeremonien und Rituale an heiligen Orten</li>
          <li>Transport vor Ort</li>
          <li>Begegnungen mit lokalen spirituellen Lehrern</li>
          <li>Vorbereitung und Integration (Online-Calls vor und nach der Reise)</li>
        </ul>

        <h2 className="text-3xl mt-12">Für wen sind diese Reisen?</h2>
        <p>
          Diese Reisen sind für dich, wenn du:
        </p>
        <ul className="space-y-2">
          <li>Bereit bist für tiefe spirituelle Erfahrungen</li>
          <li>Dich nach authentischen Begegnungen sehnst</li>
          <li>Offen für andere Kulturen und spirituelle Traditionen bist</li>
          <li>In Gemeinschaft reisen und wachsen möchtest</li>
          <li>Abenteuer mit innerer Arbeit verbinden willst</li>
        </ul>

        <p className="text-lg mt-8">
          Die Gruppengröße ist auf 8-12 Teilnehmende begrenzt, um intensive Arbeit und
          persönliche Begleitung zu ermöglichen. Frühbucherrabatt bei Anmeldung bis 6 Monate vor
          Reisebeginn.
        </p>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg text-center">
        <h2 className="text-2xl mb-4">Interessiert?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Melde dich für ein kostenloses Informationsgespräch an. Gemeinsam schauen wir, welche
          Reise für dich passt und beantworten alle deine Fragen.
        </p>
      </div>
    </div>
  );
}
