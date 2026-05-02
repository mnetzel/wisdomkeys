import { Mail, Phone, MapPin, Send } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <Mail className="w-16 h-16 text-orange-600 mx-auto mb-6" />
        <h1 className="text-4xl mb-4">Kontakt</h1>
        <p className="text-lg text-gray-600">
          Ich freue mich von dir zu hören
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="mb-8">
            <h2 className="text-3xl mb-6">Lass uns verbinden</h2>
            <p className="text-gray-700 mb-6">
              Hast du Fragen zu meinen Angeboten? Möchtest du dich für einen Workshop anmelden
              oder ein Erstgespräch vereinbaren? Ich bin für dich da.
            </p>
            <p className="text-gray-700">
              Fülle einfach das Kontaktformular aus, und ich melde mich innerhalb von 48 Stunden
              bei dir zurück. Du kannst mich auch direkt per E-Mail oder Telefon erreichen.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="mb-1">E-Mail</h3>
                <a
                  href="mailto:info@wisdomkeys.de"
                  className="text-orange-600 hover:text-orange-700"
                >
                  info@wisdomkeys.de
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="mb-1">Telefon</h3>
                <a href="tel:+491234567890" className="text-orange-600 hover:text-orange-700">
                  +49 (0) 123 456 7890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="mb-1">Standort</h3>
                <p className="text-gray-700">
                  München & Online
                  <br />
                  Zeremonien finden an verschiedenen Kraftorten statt
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1767769047159-755f1d56c1ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
              alt="Burning candles"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl mb-6">Sende mir eine Nachricht</h2>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="Dein Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                E-Mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="deine@email.de"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                Telefon (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="+49 ..."
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm mb-2 text-gray-700">
                Betreff *
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
              >
                <option value="">Bitte wählen...</option>
                <option value="workshop">Workshop-Anmeldung</option>
                <option value="einzelsitzung">Einzelsitzung anfragen</option>
                <option value="feuerzeremonie">Feuerzeremonie</option>
                <option value="reise">Spirituelle Reisen</option>
                <option value="allgemein">Allgemeine Anfrage</option>
                <option value="sonstiges">Sonstiges</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                Nachricht *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 resize-none"
                placeholder="Teile mir mit, wie ich dir helfen kann..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white px-6 py-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Nachricht senden
            </button>

            <p className="text-sm text-gray-600 text-center">
              * Pflichtfelder. Deine Daten werden vertraulich behandelt.
            </p>
          </form>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl mb-4">Kostenloses Erstgespräch</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Nicht sicher, welches Angebot das richtige für dich ist? Vereinbare ein kostenloses
          20-minütiges Kennenlerngespräch. Gemeinsam finden wir heraus, wie ich dich am besten
          unterstützen kann.
        </p>
        <button className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors">
          Gespräch vereinbaren
        </button>
      </div>
    </div>
  );
}
