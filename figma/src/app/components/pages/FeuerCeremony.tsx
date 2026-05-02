import { Flame, Users, Clock, Heart } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function FeuerCeremony() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <Flame className="w-16 h-16 text-orange-600 mx-auto mb-6" />
        <h1 className="text-4xl mb-4">Feuerzeremonie - Yagna</h1>
        <p className="text-lg text-gray-600">
          Heilige vedische Feuerrituale für Transformation und Reinigung
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="rounded-xl overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759210420960-c5db3160b9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
            alt="Fire ritual with marigold garlands"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl mb-6">Was ist eine Yagna?</h2>
          <p className="text-gray-700 mb-4">
            Yagna ist ein heiliges vedisches Feuerritual, das seit Jahrtausenden praktiziert
            wird. Es ist eine kraftvolle Zeremonie, die Transformation, Reinigung und spirituelles
            Wachstum unterstützt.
          </p>
          <p className="text-gray-700 mb-4">
            Während der Zeremonie werden spezielle Kräuter, Ghee und heilige Substanzen ins Feuer
            gegeben, begleitet von Mantras und Gebeten. Das Feuer wirkt als Vermittler zwischen
            der materiellen und spirituellen Welt.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
        <h2 className="text-3xl mb-8 text-center">Was erwartet dich?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <Flame className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="mb-2">Heiliges Feuer</h3>
            <p className="text-sm text-gray-600">
              Traditionelles vedisches Feuerritual mit authentischen Mantras
            </p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="mb-2">Gemeinschaft</h3>
            <p className="text-sm text-gray-600">
              Erlebe die Kraft der gemeinsamen spirituellen Praxis
            </p>
          </div>
          <div className="text-center">
            <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="mb-2">Zeitrahmen</h3>
            <p className="text-sm text-gray-600">
              2-3 Stunden intensive Zeremonie mit Vor- und Nachbereitung
            </p>
          </div>
          <div className="text-center">
            <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="mb-2">Intention</h3>
            <p className="text-sm text-gray-600">
              Setze deine persönliche Absicht für Heilung und Transformation
            </p>
          </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
        <h2 className="text-3xl">Ablauf einer Zeremonie</h2>
        <ul className="space-y-3">
          <li>Eröffnung und Reinigung des Raumes</li>
          <li>Setzen der persönlichen Intention</li>
          <li>Entzünden des heiligen Feuers</li>
          <li>Rezitation vedischer Mantras</li>
          <li>Opfergaben ins Feuer</li>
          <li>Gemeinsame Meditation</li>
          <li>Integration und Abschluss</li>
        </ul>

        <h2 className="text-3xl mt-12">Für wen ist eine Yagna geeignet?</h2>
        <p>
          Die Feuerzeremonie ist für jeden geeignet, der sich nach innerem Frieden,
          Transformation oder spiritueller Verbindung sehnt. Keine Vorkenntnisse erforderlich -
          nur ein offenes Herz und die Bereitschaft, sich auf den Prozess einzulassen.
        </p>
      </div>
    </div>
  );
}
