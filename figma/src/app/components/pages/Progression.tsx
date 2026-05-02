import { TrendingUp, Lightbulb, Target } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Progression() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <TrendingUp className="w-16 h-16 text-orange-600 mx-auto mb-6" />
        <h1 className="text-4xl mb-4">Feuer der Zukunft - Progression</h1>
        <p className="text-lg text-gray-600">
          Entfache dein inneres Feuer und gestalte deine Zukunft bewusst
        </p>
      </div>

      <div className="mb-12 rounded-xl overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1713635750060-f8b2196d1720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
          alt="Close up of fire in the dark"
          className="w-full h-96 object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700 mb-16">
        <p>
          Das Feuer der Zukunft ist dein inneres Leuchten, das dich vorwärts trägt. Progression
          bedeutet, bewusst den nächsten Schritt zu gehen und deine Vision mit Klarheit und Mut
          zu verwirklichen.
        </p>

        <p>
          In diesem transformativen Programm verbinden wir spirituelle Weisheit mit praktischen
          Werkzeugen für persönliche und berufliche Entwicklung. Du lernst, dein inneres Feuer
          zu entfachen und nachhaltig zu nähren.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <Target className="w-10 h-10 text-orange-600 mb-4" />
          <h3 className="text-xl mb-3">Vision klären</h3>
          <p className="text-gray-600">
            Erkenne deine wahren Ziele und entwickle eine klare Vision für deine Zukunft.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <Lightbulb className="w-10 h-10 text-amber-600 mb-4" />
          <h3 className="text-xl mb-3">Potenzial entfalten</h3>
          <p className="text-gray-600">
            Entdecke deine einzigartigen Gaben und lerne, sie vollständig zu leben.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <TrendingUp className="w-10 h-10 text-rose-600 mb-4" />
          <h3 className="text-xl mb-3">Wachstum manifestieren</h3>
          <p className="text-gray-600">
            Setze deine Visionen in konkrete Schritte um und bleibe dabei in deiner Kraft.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl mb-6">Programm-Inhalte</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2" />
            <div>
              <h3 className="text-xl mb-1">Visionsarbeit</h3>
              <p className="text-gray-600">
                Entwickle eine kraftvolle, klare Vision für deine persönliche und berufliche
                Zukunft
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2" />
            <div>
              <h3 className="text-xl mb-1">Blockaden lösen</h3>
              <p className="text-gray-600">
                Identifiziere und transformiere hinderliche Glaubenssätze und Muster
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2" />
            <div>
              <h3 className="text-xl mb-1">Manifestation</h3>
              <p className="text-gray-600">
                Lerne, wie du deine Visionen in die Realität bringst mit praktischen Tools
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2" />
            <div>
              <h3 className="text-xl mb-1">Feuer-Rituale</h3>
              <p className="text-gray-600">
                Nutze die transformative Kraft des Feuers zur Reinigung und Aktivierung
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
        <h2 className="text-3xl">Für wen ist Progression?</h2>
        <p>
          Dieses Programm ist für alle, die:
        </p>
        <ul className="space-y-2">
          <li>An einem Wendepunkt stehen und Klarheit für den nächsten Schritt suchen</li>
          <li>Ihre Vision verwirklichen und ihr volles Potenzial leben möchten</li>
          <li>Spirituelles Wachstum mit praktischer Umsetzung verbinden wollen</li>
          <li>Bereit sind, alte Begrenzungen loszulassen und Neues zu wagen</li>
          <li>Ihre Lebensaufgabe erkennen und leben möchten</li>
        </ul>

        <h2 className="text-3xl mt-12">Format</h2>
        <p>
          Progression wird als Intensiv-Workshop (3 Tage) oder als begleitetes Programm über 3
          Monate angeboten. Beide Formate beinhalten individuelle Sessions, Gruppenarbeit und
          Feuerzeremonien.
        </p>
      </div>
    </div>
  );
}
