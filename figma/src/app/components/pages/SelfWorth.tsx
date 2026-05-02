import { Star, Shield, Crown } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function SelfWorth() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <Crown className="w-16 h-16 text-amber-600 mx-auto mb-6" />
        <h1 className="text-4xl mb-4">Selbstwert Workshop</h1>
        <p className="text-lg text-gray-600">
          Erkenne deinen wahren Wert und stehe in deiner vollen Kraft
        </p>
      </div>

      <div className="mb-12 rounded-xl overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1767769047159-755f1d56c1ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
          alt="Clay oil lamps burning"
          className="w-full h-96 object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700 mb-16">
        <p>
          Selbstwert ist die Grundlage für ein erfülltes Leben. Wenn wir unseren wahren Wert
          erkennen und annehmen, öffnen sich Türen, die vorher verschlossen schienen. Wir
          erlauben uns, vollständig zu leben und zu lieben.
        </p>

        <p>
          In diesem transformativen Workshop erforschen wir die Wurzeln mangelnden Selbstwerts
          und kultivieren eine tiefe, unerschütterliche Selbstannahme. Du lernst, dich selbst mit
          liebevollen Augen zu sehen und deine einzigartige Größe zu erkennen.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <Star className="w-10 h-10 text-amber-600 mb-4" />
          <h3 className="text-xl mb-3">Selbsterkenntnis</h3>
          <p className="text-gray-600">
            Erkenne deine einzigartigen Qualitäten und deinen unschätzbaren Wert.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <Shield className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl mb-3">Grenzen setzen</h3>
          <p className="text-gray-600">
            Lerne, liebevoll aber bestimmt für dich einzustehen und Nein zu sagen.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <Crown className="w-10 h-10 text-purple-600 mb-4" />
          <h3 className="text-xl mb-3">Selbstermächtigung</h3>
          <p className="text-gray-600">
            Tritt in deine volle Kraft und lebe dein authentisches Selbst.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl mb-6">Workshop-Inhalte</h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl mb-2">Modul 1: Wurzeln des Selbstwerts</h3>
            <p className="text-gray-600">
              Verstehe, wie Selbstwert entsteht und welche frühen Prägungen dein Selbstbild
              geformt haben. Erkenne limitierende Glaubenssätze und beginne sie zu
              transformieren.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-2">Modul 2: Innere Kritiker heilen</h3>
            <p className="text-gray-600">
              Lerne deine inneren Kritiker kennen und verwandle sie in unterstützende innere
              Stimmen. Entwickle liebevolle Selbst-Mitgefühl-Praktiken.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-2">Modul 3: Grenzen und Selbstfürsorge</h3>
            <p className="text-gray-600">
              Übe das Setzen gesunder Grenzen und erkenne Selbstfürsorge als Ausdruck deines
              Selbstwerts. Lerne, deine Bedürfnisse zu kommunizieren.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-2">Modul 4: In deiner Kraft stehen</h3>
            <p className="text-gray-600">
              Integriere deine Erkenntnisse und trete in deine volle Kraft. Kreiere eine Vision
              für ein Leben in Selbstwert und Selbstliebe.
            </p>
          </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
        <h2 className="text-3xl">Methoden</h2>
        <p>
          Der Workshop verbindet verschiedene Ansätze für ganzheitliche Transformation:
        </p>
        <ul className="space-y-2">
          <li>Tiefenpsychologische Arbeit und Schattenintegration</li>
          <li>Körperbasierte Übungen und somatische Erfahrung</li>
          <li>Meditation und Achtsamkeitspraxis</li>
          <li>Rituale und zeremonielle Arbeit</li>
          <li>Journaling und Selbstreflexion</li>
          <li>Gruppenarbeit und Sharing</li>
        </ul>

        <h2 className="text-3xl mt-12">Format</h2>
        <p>
          Der Selbstwert-Workshop wird als Wochenend-Intensiv (2 Tage) oder als 4-wöchiges
          Online-Programm mit wöchentlichen Live-Sessions angeboten. Beide Formate beinhalten
          umfangreiche Materialien für die Nacharbeit und Integration.
        </p>

        <h2 className="text-3xl mt-12">Für wen ist dieser Workshop?</h2>
        <p>
          Dieser Workshop ist für dich, wenn du bereit bist, tief zu schauen und dich
          vollständig anzunehmen. Wenn du spürst, dass mangelnder Selbstwert dich davon abhält,
          dein volles Potenzial zu leben, ist dies deine Einladung zur Transformation.
        </p>
      </div>
    </div>
  );
}
