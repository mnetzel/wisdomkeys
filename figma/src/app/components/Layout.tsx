import { Link, Outlet, useLocation } from "react-router";
import { Menu, X, Flame } from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();
  const t = translations[language];

  const navigation = [
    { name: t.nav.home, path: "/" },
    {
      name: t.nav.fire,
      submenu: [
        { name: t.nav.fireConnection, path: "/feuer-verbindung" },
        { name: t.nav.fireCeremony, path: "/feuerzeremonie" },
      ],
    },
    { name: t.nav.transformation, path: "/transformation" },
    { name: t.nav.rituals, path: "/rituale" },
    {
      name: t.nav.futuresFire,
      submenu: [{ name: t.nav.progression, path: "/progression" }],
    },
    {
      name: t.nav.workshops,
      submenu: [
        { name: t.nav.womenCircle, path: "/heilkreis-frauen" },
        { name: t.nav.selfWorth, path: "/selbstwert" },
        { name: t.nav.dedicationSurrender, path: "/aufgabe-hingabe" },
        { name: t.nav.meditations, path: "/meditationen" },
      ],
    },
    { name: t.nav.travels, path: "/reisen" },
    { name: t.nav.events, path: "/termine" },
    { name: t.nav.about, path: "/ueber-mich" },
    { name: t.nav.contact, path: "/kontakt" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar with Logo and Tagline */}
          <div className="py-6 border-b border-amber-200 relative">
            <div className="absolute right-0 top-6 hidden lg:block">
              <LanguageSwitcher />
            </div>
            <div className="text-center">
              <Link to="/" className="inline-flex items-center gap-3 group">
                <Flame className="w-8 h-8 text-orange-600 group-hover:text-orange-700 transition-colors" />
                <div>
                  <h1 className="text-2xl tracking-wide text-gray-800">WISDOM KEYS</h1>
                  <p className="text-sm tracking-widest text-amber-700 mt-1">
                    {t.nav.tagline}
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-8 py-4">
            {navigation.map((item) =>
              item.submenu ? (
                <div key={item.name} className="relative group">
                  <button className="text-sm tracking-wide text-gray-700 hover:text-orange-600 transition-colors py-2">
                    {item.name}
                  </button>
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.path}
                          to={subitem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm tracking-wide transition-colors py-2 ${
                    location.pathname === item.path
                      ? "text-orange-600 border-b-2 border-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex justify-between items-center py-4">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-amber-200">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) =>
                item.submenu ? (
                  <div key={item.name} className="space-y-1">
                    <div className="text-sm tracking-wide text-gray-900 py-2">
                      {item.name}
                    </div>
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.path}
                          to={subitem.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm text-gray-600 hover:text-orange-600 py-2 transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-sm tracking-wide py-2 transition-colors ${
                      location.pathname === item.path
                        ? "text-orange-600"
                        : "text-gray-700 hover:text-orange-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-amber-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <Flame className="w-6 h-6 text-orange-600 mx-auto mb-3" />
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Wisdom Keys. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
