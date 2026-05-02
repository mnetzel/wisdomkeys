import { Heart, Flame, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <Heart className="w-16 h-16 text-rose-600 mx-auto mb-6" />
        <h1 className="text-4xl mb-4">Über Mich</h1>
        <p className="text-lg text-gray-600">Mein Weg zur spirituellen Begleitung</p>
      </div>

      <div className="mb-12 rounded-xl overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1688220560793-2f4fb29134d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
          alt="Meditation and spiritual practice"
          className="w-full h-96 object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700 mb-16">
        <p className="text-xl leading-relaxed">
          Namaste, ich bin Sanjana, und ich begleite Menschen auf ihrem Weg der spirituellen
          Transformation und Heilung.
        </p>

        <p>
          Meine eigene spirituelle Reise begann vor vielen Jahren mit einer tiefen Sehnsucht nach
          Sinn und Verbindung. Auf der Suche nach Antworten führte mich mein Weg nach Indien, wo
          ich die vedische Weisheit und die transformative Kraft des heiligen Feuers
          kennenlernte.
        </p>

        <p>
          Diese Begegnung veränderte mein Leben grundlegend. Ich tauchte tief ein in die Praxis
          der Feuerzeremonien, studierte bei verschiedenen Lehrern und verbrachte Zeit in
          Ashrams. Was als persönliche Suche begann, wurde zu meiner Berufung: anderen Menschen
          zu helfen, ihren eigenen authentischen Weg zu finden.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center">
          <Flame className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-lg mb-2">Feuerrituale</h3>
          <p className="text-sm text-gray-700">
            Ausbildung in vedischen Feuerzeremonien und Yagna-Praxis in Indien
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center">
          <Heart className="w-12 h-12 text-rose-600 mx-auto mb-4" />
          <h3 className="text-lg mb-2">Heilarbeit</h3>
          <p className="text-sm text-gray-700">
            Energetische Heilung, Chakra-Arbeit und ganzheitliche Transformationsbegleitung
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
          <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-lg mb-2">Meditation</h3>
          <p className="text-sm text-gray-700">
            Langjährige Praxis und Lehre verschiedener Meditationstraditionen
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
        <h2 className="text-3xl mb-6">Meine Ausbildungen & Qualifikationen</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
            <p>Vedische Feuerzeremonien und Yagna-Praxis (Ashram Rishikesh, Indien)</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
            <p>Ganzheitliche Energiearbeit und Chakra-Heilung</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
            <p>Meditations-Lehrerin (verschiedene Traditionen)</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
            <p>Ritualarbeit und zeremonielle Führung</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
            <p>Frauenkreis-Leitung und Heilkreis-Arbeit</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
            <p>Kontinuierliche Weiterbildung in spiritueller Begleitung und Coaching</p>
          </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700 mb-16">
        <h2 className="text-3xl">Mein Ansatz</h2>
        <p>
          In meiner Arbeit verbinde ich traditionelle spirituelle Weisheit mit einem modernen,
          lebensbejahenden Ansatz. Ich glaube daran, dass Spiritualität uns nicht vom Leben
          trennt, sondern tiefer hineinführt - in authentische Verbindung mit uns selbst, mit
          anderen und mit dem Größeren Ganzen.
        </p>

        <p>
          Jeder Mensch trägt seine eigene Wahrheit in sich. Meine Rolle ist es nicht, dir zu
          sagen, wer du bist oder was du tun sollst. Ich halte einen Raum, in dem du dich selbst
          begegnen kannst. Ich begleite dich mit Werkzeugen, Ritualen und Praktiken, die dir
          helfen, deine innere Weisheit zu hören und ihr zu folgen.
        </p>

        <p>
          Das Feuer ist dabei ein zentrales Element meiner Arbeit. Es symbolisiert
          Transformation - das Verbrennen des Alten, um Raum für Neues zu schaffen. Es ist Licht
          in der Dunkelheit, Wärme in der Kälte, und ein Anker für unsere Gebete und Intentionen.
        </p>
      </div>

      <div className="bg-gradient-to-r from-orange-50 via-rose-50 to-purple-50 rounded-xl p-8 text-center">
        <h2 className="text-3xl mb-4">Meine Vision</h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
          Ich träume von einer Welt, in der Menschen in Verbindung mit ihrer inneren Weisheit
          leben, ihre einzigartigen Gaben teilen und im Einklang mit der Natur und dem
          Spirituellen sind. Jede Zeremonie, jeder Workshop, jede Begegnung ist ein Schritt in
          diese Richtung - ein Samen, der gepflanzt wird.
        </p>
      </div>
    </div>
  );
}
