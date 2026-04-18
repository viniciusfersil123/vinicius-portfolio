import React from "react";
import { useLanguage } from "../context/LanguageProvider";
import { useTranslation } from "../hooks/useTranslation";

type Props = {
  onLogoClick?: () => void;
};

export default function Header({ onLogoClick }: Props) {
  const { lang, setLang, openLangModal } = useLanguage();
  const { t } = useTranslation();

  return (
    <header className="navbar">
      <div
        className="logo"
        onClick={() =>
          onLogoClick ? onLogoClick() : window.scrollTo({ top: 0, behavior: "smooth" })
        }
        style={{ cursor: "pointer" }}
      >
        Vinícius Fernandes
      </div>

      <nav>
        <a href="#about">{t("nav.sobre")}</a>
        <a href="#art">{t("nav.arte")}</a>
        <a href="#tech">{t("nav.tech")}</a>
        <a href="#software">{t("nav.software")}</a>
        <a href="#research">{t("nav.pesquisa")}</a>
        <a href="#contact">{t("nav.contato")}</a>
      </nav>

      <button
        type="button"
        className="navbar-mobile-toggle"
        aria-label={t("header.abrirMenu") || "Abrir menu"}
      >
        ☰
      </button>

      <div
        className="header-lang-controls"
        style={{ marginLeft: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
      >
        <button
          className="lang-open"
          onClick={() => (openLangModal ? openLangModal() : undefined)}
          aria-label={t("header.alterarIdioma") || "Alterar idioma"}
          style={{ background: "transparent", color: "#ddd", border: "none", cursor: "pointer" }}
        >
          {lang === "pt-br" && "🇧🇷 PT"}
          {lang === "en" && "🇬🇧 EN"}
          {lang === "de" && "🇩🇪 DE"}
          {!lang && "🌐"}
        </button>

        <select
          value={lang || ""}
          onChange={(e) => (setLang ? setLang(e.target.value as any) : undefined)}
          aria-label={t("header.selecaoIdioma") || "Seleção de idioma"}
          style={{
            background: "transparent",
            color: "#ddd",
            border: "1px solid rgba(255,255,255,0.06)",
            padding: "0.25rem 0.5rem",
            borderRadius: "6px",
          }}
        >
          <option value="">{t("header.escolher") || "Escolher"}</option>
          <option value="pt-br">🇧🇷 PT</option>
          <option value="en">🇬🇧 EN</option>
          <option value="de">🇩🇪 DE</option>
        </select>
      </div>
    </header>
  );
}
