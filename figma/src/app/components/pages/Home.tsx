import { Link } from "react-router";
import { Flame, Heart, Sparkles, Calendar } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations";

export function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759210420960-c5db3160b9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Fire ceremony with marigold garlands"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl mb-6 tracking-wide">{t.home.hero.title}</h1>
          <p className="text-2xl md:text-3xl tracking-widest mb-8">
            {t.home.hero.tagline}
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t.home.hero.description}
          </p>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <Flame className="w-12 h-12 text-orange-600 mb-4" />
            <h3 className="text-xl mb-3">{t.home.offerings.fire.title}</h3>
            <p className="text-gray-600 mb-6">
              {t.home.offerings.fire.description}
            </p>
            <Link
              to="/feuerzeremonie"
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              {t.home.offerings.fire.cta} →
            </Link>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <Heart className="w-12 h-12 text-rose-600 mb-4" />
            <h3 className="text-xl mb-3">{t.home.offerings.transformation.title}</h3>
            <p className="text-gray-600 mb-6">
              {t.home.offerings.transformation.description}
            </p>
            <Link
              to="/transformation"
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              {t.home.offerings.transformation.cta} →
            </Link>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <Sparkles className="w-12 h-12 text-amber-600 mb-4" />
            <h3 className="text-xl mb-3">{t.home.offerings.workshops.title}</h3>
            <p className="text-gray-600 mb-6">
              {t.home.offerings.workshops.description}
            </p>
            <Link
              to="/heilkreis-frauen"
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              {t.home.offerings.workshops.cta} →
            </Link>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl text-center mb-12">{t.home.gallery.title}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-80 rounded-xl overflow-hidden group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1763186535267-2b6fa6940ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Priests perform a fire ritual at night"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <p className="text-white p-6 text-lg">{t.home.gallery.ceremony}</p>
            </div>
          </div>

          <div className="relative h-80 rounded-xl overflow-hidden group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1767769047159-755f1d56c1ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Clay oil lamps burning"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <p className="text-white p-6 text-lg">{t.home.gallery.light}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-100 to-amber-100 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Calendar className="w-16 h-16 text-orange-600 mx-auto mb-6" />
          <h2 className="text-3xl mb-6">{t.home.cta.title}</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {t.home.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/termine"
              className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors"
            >
              {t.home.cta.viewEvents}
            </Link>
            <Link
              to="/kontakt"
              className="bg-white text-orange-600 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors border-2 border-orange-600"
            >
              {t.home.cta.contact}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
