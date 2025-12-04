import React, { createContext, useContext, useEffect, useState } from "react";

export type Lang = "pt-br" | "en" | "de" | null;

type LanguageCtx = {
  lang: Lang;
  setLang: (l: Exclude<Lang, null>) => void;
  openLangModal: () => void;
};

const LanguageContext = createContext<LanguageCtx | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const s = localStorage.getItem("vf_lang");
      return (s as Lang) || null; // null => força modal na primeira visita
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      if (lang) localStorage.setItem("vf_lang", lang);
      else localStorage.removeItem("vf_lang");
    } catch {}
  }, [lang]);

  const setLang = (l: Exclude<Lang, null>) => setLangState(l);
  const openLangModal = () => setLangState(null);

  return (
    <LanguageContext.Provider value={{ lang, setLang, openLangModal }}>
      {children}
      {lang === null && (
        <div className="lang-modal" role="dialog" aria-modal="true" aria-label="Seleção de idioma">
          <div className="lang-modal__backdrop" />
          <div className="lang-modal__dialog">
            <h3>Escolha o idioma</h3>
            <p>Selecione a língua para exibir os textos do site.</p>

            <div className="lang-modal__buttons">
              <button className="lang-btn" onClick={() => setLang("pt-br")}>
                <span className="flag">🇧🇷</span>
                <span>Português (PT‑BR)</span>
              </button>

              <button className="lang-btn" onClick={() => setLang("en")}>
                <span className="flag">🇬🇧</span>
                <span>English</span>
              </button>

              <button className="lang-btn" onClick={() => setLang("de")}>
                <span className="flag">🇩🇪</span>
                <span>Deutsch</span>
              </button>
            </div>

            <p className="lang-modal__note">Você deve escolher um idioma para prosseguir.</p>
          </div>
        </div>
      )}
    </LanguageContext.Provider>
  );
}

/* hook seguro para consumir contexto */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // fallback defensivo para evitar que componentes que por engano não estejam
    // dentro do Provider quebrem a app
    return {
      lang: null as any,
      setLang: (() => {}) as (l: "pt-br" | "en" | "de") => void,
      openLangModal: () => {},
    };
  }
  return ctx;
}

/* helper para traduzir um texto que pode ser string ou objeto {pt-br,en,de} */
export function useT() {
  const { lang } = useLanguage();
  return (m: any) => {
    if (!m) return "";
    if (typeof m === "string") return m;
    const key = (lang || "pt-br") as keyof typeof m;
    return m[key] || m["pt-br"] || Object.values(m)[0] || "";
  };
}