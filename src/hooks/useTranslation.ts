import { translations } from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext";

export function useTranslation() {
  const { lang } = useLanguage();
  function t(key: string) {
    return translations[lang] && translations[lang][key] ? translations[lang][key] : translations["pt-br"][key] || key;
  }
  return { t, lang };
}
