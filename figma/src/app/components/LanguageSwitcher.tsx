import { useLanguage, Language } from "../contexts/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "de", label: "DE", flag: "🇩🇪" },
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "de-ch", label: "CH", flag: "🇨🇭" },
  ];

  return (
    <div className="flex items-center gap-2 bg-white/50 rounded-full p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all ${
            language === lang.code
              ? "bg-orange-600 text-white shadow-md"
              : "text-gray-700 hover:bg-orange-100"
          }`}
        >
          <span className="text-base">{lang.flag}</span>
          <span className="font-medium">{lang.label}</span>
        </button>
      ))}
    </div>
  );
}
