import { Flame } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function FeuerConnection() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <Flame className="w-16 h-16 text-orange-600 mx-auto mb-6" />
        <h1 className="text-4xl mb-4">Meine Verbindung mit dem Feuer</h1>
        <p className="text-lg text-gray-600">
          Eine persönliche Reise zur heiligen Flamme
        </p>
      </div>

      <div className="mb-12 rounded-xl overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1763610651612-47f26d299c28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
          alt="Man performing a ritual with smoke and fire"
          className="w-full h-96 object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
        <p>
          Das Feuer war schon immer ein heiliges Element in meinem Leben. Es repräsentiert die
          transformative Kraft, die uns hilft, das Alte loszulassen und Raum für Neues zu
          schaffen.
        </p>

        <p>
          Meine Verbindung mit dem Feuer begann auf einer spirituellen Reise nach Indien, wo ich
          die tiefe Weisheit der vedischen Feuerzeremonien kennenlernte. Diese Erfahrung
          veränderte mein Leben grundlegend und führte mich auf den Pfad der spirituellen
          Begleitung.
        </p>

        <h2 className="text-2xl mt-8 mb-4">Die Bedeutung des Feuers</h2>
        <p>
          Feuer ist ein mächtiges Symbol der Transformation. Es verbrennt das Alte, reinigt die
          Seele und schenkt uns Wärme und Licht. In der vedischen Tradition ist Agni, der
          Feuergott, der Vermittler zwischen Himmel und Erde, zwischen dem Materiellen und dem
          Spirituellen.
        </p>

        <h2 className="text-2xl mt-8 mb-4">Mein Weg</h2>
        <p>
          Durch jahrelange Praxis und Studium der vedischen Feuerrituale habe ich gelernt, die
          Kraft des Feuers zu kanalisieren und anderen Menschen auf ihrem Transformationsweg zu
          helfen. Jede Zeremonie ist eine Einladung, sich selbst zu begegnen und mit offenem
          Herzen in die Flammen zu schauen.
        </p>
      </div>
    </div>
  );
}
