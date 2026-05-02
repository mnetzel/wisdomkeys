import { Link } from "react-router";
import { Home, Flame } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <Flame className="w-20 h-20 text-orange-600 mx-auto mb-6 opacity-50" />
        <h1 className="text-6xl mb-4 text-gray-800">404</h1>
        <h2 className="text-3xl mb-6 text-gray-700">Seite nicht gefunden</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Die Seite, die du suchst, existiert leider nicht. Vielleicht findest du auf der
          Startseite, was du brauchst.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-colors"
        >
          <Home className="w-5 h-5" />
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
