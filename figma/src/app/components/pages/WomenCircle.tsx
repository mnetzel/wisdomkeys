import { Users, Moon, Heart } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function WomenCircle() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <Heart className="w-16 h-16 text-rose-600 mx-auto mb-6" />
        <h1 className="text-4xl mb-4">Heilkreis für Frauen</h1>
        <p className="text-lg text-gray-600">
          Ein sicherer Raum für weibliche Kraft, Heilung und Verbindung
        </p>
      </div>

      <div className="mb-12 rounded-xl overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1662852744966-143f1dde2634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
          alt="Group of people around a fire"
          className="w-full h-96 object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700 mb-16">
        <p>
          Der Heilkreis für Frauen ist ein geschützter Raum, in dem wir zusammenkommen, um uns
          selbst und einander zu begegnen. In der Kraft des Kreises heilen wir alte Wunden,
          teilen unsere Weisheit und feiern unsere weibliche Essenz.
        </p>

        <p>
          Seit Jahrtausenden versammeln sich Frauen in Kreisen - um zu heilen, zu teilen, zu
          unterstützen und zu feiern. In unserer modernen Welt brauchen wir diese heiligen Räume
          mehr denn je.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
          <Users className="w-12 h-12 text-rose-600 mx-auto mb-4" />
          <h3 className="text-xl mb-3">Schwesternschaft</h3>
          <p className="text-gray-600 text-sm">
            Erlebe die heilende Kraft von authentischer weiblicher Verbindung
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
          <Moon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl mb-3">Zyklus-Weisheit</h3>
          <p className="text-gray-600 text-sm">
            Verbinde dich mit den natürlichen Rhythmen deines Körpers und der Erde
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
          <Heart className="w-12 h-12 text-rose-600 mx-auto mb-4" />
          <h3 className="text-xl mb-3">Heilung</h3>
          <p className="text-gray-600 text-sm">
            Finde Heilung für weibliche Wunden in einem sicheren, unterstützenden Kreis
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl mb-6">Was erwartet dich im Heilkreis?</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-rose-600 rounded-full mt-2 flex-shrink-0" />
            <p>Kreisrituale und Eröffnungszeremonien</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-rose-600 rounded-full mt-2 flex-shrink-0" />
            <p>Geführte Meditationen und Körperarbeit</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-rose-600 rounded-full mt-2 flex-shrink-0" />
            <p>Sharing-Runden in geschütztem Rahmen</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-rose-600 rounded-full mt-2 flex-shrink-0" />
            <p>Heilungsarbeit mit weiblichen Archetypen</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-rose-600 rounded-full mt-2 flex-shrink-0" />
            <p>Arbeit mit Mondphasen und Jahreskreisfesten</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-rose-600 rounded-full mt-2 flex-shrink-0" />
            <p>Kreative Ausdrucksformen (Tanz, Stimme, Kunst)</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-rose-600 rounded-full mt-2 flex-shrink-0" />
            <p>Gemeinschaftliches Ritual und Feuer</p>
          </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
        <h2 className="text-3xl">Themen der Heilkreise</h2>
        <p>
          Jeder Heilkreis hat ein spezifisches Thema, das sich an den natürlichen Zyklen
          orientiert:
        </p>
        <ul className="space-y-2">
          <li>Die vier Phasen der Weiblichkeit (Mädchen, Mutter, Zauberin, Weise)</li>
          <li>Heilung der weiblichen Linie (Ahninnen-Arbeit)</li>
          <li>Sexualität und Sinnlichkeit</li>
          <li>Kreativität und Schöpferkraft</li>
          <li>Grenzen setzen und Selbstfürsorge</li>
          <li>Intuition und innere Weisheit</li>
        </ul>

        <h2 className="text-3xl mt-12">Regelmäßige Treffen</h2>
        <p>
          Die Heilkreise finden einmal monatlich statt, abgestimmt auf den Mondzyklus. Du kannst
          an einzelnen Kreisen teilnehmen oder dich für einen längeren Zyklus anmelden (3, 6
          oder 12 Monate).
        </p>

        <p>
          Die Kontinuität ermöglicht tiefe Prozesse und das Entstehen echter Schwesternschaft.
          Gleichzeitig ist jeder Kreis in sich geschlossen, sodass auch Einzelteilnahmen möglich
          sind.
        </p>
      </div>
    </div>
  );
}
