import { Heart, Compass, Star } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Transformation() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <Heart className="w-16 h-16 text-rose-600 mx-auto mb-6" />
        <h1 className="text-4xl mb-4">Transformation Begleitung</h1>
        <p className="text-lg text-gray-600">
          Deine persönliche Reise zu innerem Wachstum und Heilung
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
          Transformation ist ein natürlicher Prozess des Lebens, doch manchmal brauchen wir
          Begleitung, um durch die Übergänge zu navigieren. Ich biete dir einen sicheren Raum,
          in dem du dich selbst begegnen und dein volles Potenzial entfalten kannst.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <Compass className="w-10 h-10 text-orange-600 mb-4" />
          <h3 className="text-xl mb-3">Orientierung</h3>
          <p className="text-gray-600">
            Finde Klarheit in Zeiten der Veränderung und entdecke deinen authentischen Weg.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <Heart className="w-10 h-10 text-rose-600 mb-4" />
          <h3 className="text-xl mb-3">Heilung</h3>
          <p className="text-gray-600">
            Löse alte Muster und Blockaden, um Raum für Neues zu schaffen.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <Star className="w-10 h-10 text-amber-600 mb-4" />
          <h3 className="text-xl mb-3">Entfaltung</h3>
          <p className="text-gray-600">
            Erkenne und lebe dein volles Potenzial in allen Lebensbereichen.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl mb-6">Mein Ansatz</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Meine Begleitung verbindet spirituelle Weisheit mit praktischen Werkzeugen. Ich
            arbeite ganzheitlich - mit Körper, Geist und Seele - und integriere verschiedene
            Methoden:
          </p>
          <ul className="space-y-2 ml-6">
            <li>• Energetische Arbeit und Chakra-Heilung</li>
            <li>• Rituale und Zeremonien</li>
            <li>• Meditation und Achtsamkeit</li>
            <li>• Gespräche und Reflexion</li>
            <li>• Intuitive Führung</li>
          </ul>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
        <h2 className="text-3xl">Für wen ist die Begleitung geeignet?</h2>
        <p>
          Die Transformationsbegleitung ist für dich, wenn du:
        </p>
        <ul className="space-y-2">
          <li>Dich in einer Übergangsphase befindest</li>
          <li>Alte Muster loslassen möchtest</li>
          <li>Deine spirituelle Praxis vertiefen willst</li>
          <li>Nach deinem authentischen Selbst suchst</li>
          <li>Heilung und inneren Frieden anstrebst</li>
        </ul>

        <h2 className="text-3xl mt-12">Einzelsitzungen oder Prozessbegleitung</h2>
        <p>
          Ich biete sowohl Einzelsitzungen als auch längerfristige Prozessbegleitung an. In
          einem kostenlosen Erstgespräch finden wir heraus, was für dich am besten passt.
        </p>
      </div>
    </div>
  );
}
