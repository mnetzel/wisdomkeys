import { Waves, Sun, Moon, Wind } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Meditations() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <Waves className="w-16 h-16 text-blue-600 mx-auto mb-6" />
        <h1 className="text-4xl mb-4">Meditationen</h1>
        <p className="text-lg text-gray-600">
          Finde innere Ruhe und tiefe Verbindung durch achtsame Praxis
        </p>
      </div>

      <div className="mb-12 rounded-xl overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1688220560793-2f4fb29134d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
          alt="Woman meditating with light"
          className="w-full h-96 object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700 mb-16">
        <p>
          Meditation ist der Weg nach innen - ein Ankommen bei dir selbst. In der Stille
          entdeckst du einen Raum der Ruhe, der immer in dir ist, unberührt vom Sturm des Lebens.
        </p>

        <p>
          Ich biete verschiedene Meditationsformate an, die dich unterstützen, eine regelmäßige
          Praxis zu etablieren oder deine bestehende Praxis zu vertiefen. Jede Meditation ist
          eine Einladung, ganz präsent zu sein - mit allem, was ist.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
          <Waves className="w-10 h-10 text-blue-600 mx-auto mb-3" />
          <h3 className="text-lg mb-2">Atem-Meditation</h3>
          <p className="text-sm text-gray-600">
            Finde Ruhe und Präsenz durch bewusstes Atmen
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center">
          <Sun className="w-10 h-10 text-orange-600 mx-auto mb-3" />
          <h3 className="text-lg mb-2">Mantra-Meditation</h3>
          <p className="text-sm text-gray-600">
            Nutze die Kraft heiliger Klänge zur Transformation
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center">
          <Moon className="w-10 h-10 text-purple-600 mx-auto mb-3" />
          <h3 className="text-lg mb-2">Geführte Reisen</h3>
          <p className="text-sm text-gray-600">
            Erkunde innere Landschaften und begegne deiner Weisheit
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 text-center">
          <Wind className="w-10 h-10 text-teal-600 mx-auto mb-3" />
          <h3 className="text-lg mb-2">Stille-Meditation</h3>
          <p className="text-sm text-gray-600">
            Tauche ein in die Tiefe der reinen Gegenwärtigkeit
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
        <h2 className="text-3xl mb-6">Meditations-Angebote</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-orange-600 pl-6">
            <h3 className="text-xl mb-2">Wöchentliche Meditations-Abende</h3>
            <p className="text-gray-700 mb-2">
              Jeden Mittwoch Abend treffen wir uns zur gemeinsamen Meditation. Ein ruhiger
              Anker in der Woche, um bei dir anzukommen.
            </p>
            <p className="text-sm text-gray-600">
              19:00 - 20:30 Uhr | Online oder vor Ort
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl mb-2">Meditations-Einführungskurs</h3>
            <p className="text-gray-700 mb-2">
              4-wöchiger Kurs für Anfänger. Lerne verschiedene Meditationstechniken kennen und
              etabliere eine regelmäßige Praxis.
            </p>
            <p className="text-sm text-gray-600">
              4 x 90 Minuten | Inklusive Übungsmaterialien
            </p>
          </div>

          <div className="border-l-4 border-purple-600 pl-6">
            <h3 className="text-xl mb-2">Meditations-Retreats</h3>
            <p className="text-gray-700 mb-2">
              Mehrtägige Retreats in der Natur. Tauche tief ein in die Stille und erfahre die
              transformative Kraft intensiver Praxis.
            </p>
            <p className="text-sm text-gray-600">
              2-7 Tage | Mit Schweige-Phasen und geführter Praxis
            </p>
          </div>

          <div className="border-l-4 border-teal-600 pl-6">
            <h3 className="text-xl mb-2">Themen-Meditationen</h3>
            <p className="text-gray-700 mb-2">
              Spezielle Meditationszyklen zu Themen wie Selbstliebe, Vergebung, Fülle,
              Heilung. Monatlich wechselnde Schwerpunkte.
            </p>
            <p className="text-sm text-gray-600">
              Einmal monatlich | 2 Stunden intensive Arbeit
            </p>
          </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700 mb-16">
        <h2 className="text-3xl">Warum meditieren?</h2>
        <p>
          Regelmäßige Meditation bringt zahlreiche Geschenke in dein Leben:
        </p>
        <ul className="space-y-2">
          <li>Innere Ruhe und Gelassenheit im Alltag</li>
          <li>Reduzierung von Stress und Angst</li>
          <li>Klarheit und bessere Entscheidungsfähigkeit</li>
          <li>Tiefere Verbindung zu dir selbst</li>
          <li>Mehr Präsenz und Lebensfreude</li>
          <li>Zugang zu innerer Weisheit und Intuition</li>
          <li>Verbesserte Konzentration und Fokus</li>
          <li>Emotionale Balance und Resilienz</li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-xl p-8">
        <h2 className="text-3xl mb-4 text-center">Beginne heute</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-6">
          Du brauchst keine Vorkenntnisse, keine besondere Ausrüstung, nur die Bereitschaft,
          innezuhalten und bei dir anzukommen. Egal ob du völlig neu bist oder deine Praxis
          vertiefen möchtest - es gibt einen Platz für dich.
        </p>
        <p className="text-center text-gray-600 text-sm">
          Melde dich für eine kostenlose Probe-Meditation an und erlebe selbst die Kraft der
          Stille.
        </p>
      </div>
    </div>
  );
}
