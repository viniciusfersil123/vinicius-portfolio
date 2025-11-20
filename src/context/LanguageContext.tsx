import React, { createContext, useContext, useState } from "react";

type Lang = "pt-br" | "en" | "de";

type Context = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LanguageContext = createContext<Context | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt-br");
  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
