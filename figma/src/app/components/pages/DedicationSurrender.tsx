import { Heart, Flower2, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function DedicationSurrender() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <Flower2 className="w-16 h-16 text-pink-600 mx-auto mb-6" />
        <h1 className="text-4xl mb-4">Aufgabe und Hingabe</h1>
        <p className="text-lg text-gray-600">
          Die heilige Balance zwischen Tun und Sein
        </p>
      </div>

      <div className="mb-12 rounded-xl overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1763186534213-a3ce3ec7e9b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
          alt="People performing a ritual with smoke and bells"
          className="w-full h-96 object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700 mb-16">
        <p>
          In einer Welt, die oft vom Machen und Leisten dominiert wird, vergessen wir die Kraft
          der Hingabe. Doch wahre Erfüllung entsteht im Tanz zwischen aktiver Gestaltung und
          vertrauensvollem Loslassen.
        </p>

        <p>
          Dieser Workshop lädt dich ein, die tiefe Weisheit zu erforschen, die in der Balance
          zwischen deiner Lebensaufgabe und spiritueller Hingabe liegt. Du lernst, deine
          einzigartige Aufgabe zu erkennen und sie in Hingabe an etwas Größeres zu erfüllen.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8">
          <Heart className="w-12 h-12 text-orange-600 mb-4" />
          <h3 className="text-2xl mb-4">Aufgabe - Dharma</h3>
          <p className="text-gray-700 mb-4">
            Deine Lebensaufgabe ist der einzigartige Beitrag, den nur du zur Welt leisten kannst.
            Sie verbindet deine Talente, Leidenschaften und die Bedürfnisse der Welt.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• Erkenne deine wahre Berufung</li>
            <li>• Entdecke deine einzigartigen Gaben</li>
            <li>• Finde deinen authentischen Ausdruck</li>
            <li>• Manifestiere deine Vision</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
          <Sparkles className="w-12 h-12 text-purple-600 mb-4" />
          <h3 className="text-2xl mb-4">Hingabe - Bhakti</h3>
          <p className="text-gray-700 mb-4">
            Hingabe bedeutet, dein Tun einer höheren Kraft zu widmen und zu vertrauen, dass das
            Leben dich trägt. Sie befreit dich vom Druck der Kontrolle.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• Kultiviere tiefes Vertrauen</li>
            <li>• Löse Kontrollmuster auf</li>
            <li>• Öffne dich für göttliche Führung</li>
            <li>• Finde Frieden im Sein</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
        <h2 className="text-3xl mb-6 text-center">Die heilige Balance</h2>
        <div className="max-w-2xl mx-auto text-gray-700 space-y-4">
          <p>
            Wahre Meisterschaft liegt nicht im einen oder anderen, sondern im dynamischen Tanz
            zwischen Aufgabe und Hingabe:
          </p>
          <div className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-lg p-6 my-6">
            <p className="text-center text-lg italic">
              "Tu, was getan werden muss, und widme es dem Göttlichen. Handle mit voller Kraft,
              aber hafte nicht am Ergebnis."
            </p>
            <p className="text-center text-sm text-gray-600 mt-2">- Bhagavad Gita</p>
          </div>
          <p>
            Diese Balance befreit dich von der Last der Perfektion und öffnet dich für den Flow
            des Lebens. Du handelst kraftvoll und bleibst gleichzeitig innerlich frei.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl mb-6">Workshop-Reise</h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl mb-2">Tag 1: Aufgabe erkennen</h3>
            <p className="text-gray-600">
              Tiefenarbeit zur Erkundung deiner wahren Berufung. Welche Gaben trägst du? Welchen
              Beitrag möchtest du leisten? Was ist dein Dharma?
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-2">Tag 2: Hingabe kultivieren</h3>
            <p className="text-gray-600">
              Erlerne Praktiken der Hingabe und des Vertrauens. Löse Kontrollmuster und öffne
              dich für eine größere Führung. Erfahre die Kraft des Loslassens.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-2">Tag 3: Die heilige Balance</h3>
            <p className="text-gray-600">
              Integriere beides in deinen Alltag. Entwickle Praktiken, die dir helfen, in dieser
              Balance zu bleiben. Kreiere einen Aktionsplan in Hingabe.
            </p>
          </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
        <h2 className="text-3xl">Methoden und Praktiken</h2>
        <ul className="space-y-2">
          <li>Kontemplative Meditation und Stille</li>
          <li>Dharma-Erkundung durch Selbstreflexion</li>
          <li>Bhakti-Praktiken (Hingabe-Yoga)</li>
          <li>Feuerzeremonien zur Hingabe</li>
          <li>Mantra und Chanten</li>
          <li>Journaling und innere Arbeit</li>
          <li>Bewegung und verkörperte Praktiken</li>
        </ul>

        <h2 className="text-3xl mt-12">Für wen?</h2>
        <p>
          Dieser Workshop ist für dich, wenn du:
        </p>
        <ul className="space-y-2">
          <li>Deine wahre Lebensaufgabe erkennen möchtest</li>
          <li>Zwischen Ehrgeiz und Erschöpfung gefangen bist</li>
          <li>Lernen willst, Kontrolle loszulassen ohne passiv zu werden</li>
          <li>Dein Tun mit spiritueller Tiefe verbinden möchtest</li>
          <li>Frieden im Tanz zwischen Tun und Sein finden willst</li>
        </ul>

        <h2 className="text-3xl mt-12">Format</h2>
        <p>
          3-tägiger Retreat in der Natur mit Unterkunft, vegetarischer Verpflegung und täglichen
          Zeremonien. Begrenzte Teilnehmerzahl für intensive Arbeit in der Gruppe.
        </p>
      </div>
    </div>
  );
}
