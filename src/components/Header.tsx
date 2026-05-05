import React, { useEffect, useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { useLanguage } from "../context/LanguageContext";

type Props = {
  onLogoClick?: () => void;
  brandName?: string;
};

export default function Header({ onLogoClick, brandName = "Vinícius Fernandes" }: Props) {
  const { t } = useTranslation();
  const { setLang } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEscape);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const header = document.querySelector(".navbar") as HTMLElement | null;
    const headerHeight = header?.offsetHeight ?? 0;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(sectionTop - headerHeight, 0),
      behavior: "smooth",
    });
  };

  const onNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  const onLangClick = (lang: "DE" | "EN" | "PT") => {
    if (lang === "DE") setLang("de");
    if (lang === "EN") setLang("en");
    if (lang === "PT") setLang("pt-br");
  };

  const onMobileNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div
          className="logo"
          onClick={() =>
            onLogoClick
              ? onLogoClick()
              : window.scrollTo({ top: 0, behavior: "smooth" })
          }
          style={{ cursor: "pointer" }}
        >
          {brandName}
        </div>

        <nav>
          <a href="#about" onClick={(e) => onNavClick(e, "about")}>
            {t("nav.sobre")}
          </a>
          <a href="#art" onClick={(e) => onNavClick(e, "art")}>
            {t("nav.arte")}
          </a>
          <a href="#tech" onClick={(e) => onNavClick(e, "tech")}>
            {t("nav.tech")}
          </a>
          <a
            href="#publications"
            onClick={(e) => onNavClick(e, "publications")}
          >
            {t("nav.pesquisa")}
          </a>
          <a href="#software" onClick={(e) => onNavClick(e, "software")}>
            {t("nav.software")}
          </a>
          <a href="#contact" onClick={(e) => onNavClick(e, "contact")}>
            {t("nav.contato")}
          </a>
        </nav>

        <div className="header-lang-actions" aria-label="Seleção de idioma">
          <button type="button" onClick={() => onLangClick("DE")}>
            DE
          </button>
          <button type="button" onClick={() => onLangClick("EN")}>
            EN
          </button>
          <button type="button" onClick={() => onLangClick("PT")}>
            PT
          </button>
        </div>

        <button
          type="button"
          className="navbar-mobile-toggle"
          aria-label={t("header.abrirMenu") || "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu-drawer"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          ☰
        </button>
      </header>

      <div
        className={`mobile-menu-backdrop ${isMobileMenuOpen ? "is-open" : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      />

      <aside
        id="mobile-menu-drawer"
        className={`mobile-menu-drawer ${isMobileMenuOpen ? "is-open" : ""}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          type="button"
          className="mobile-menu-close"
          aria-label={t("header.fecharMenu") || "Fechar menu"}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          ✕
        </button>

        <nav className="mobile-menu-nav">
          <button type="button" onClick={() => onMobileNavClick("about")}>
            {t("nav.sobre")}
          </button>
          <button type="button" onClick={() => onMobileNavClick("art")}>
            {t("nav.arte")}
          </button>
          <button type="button" onClick={() => onMobileNavClick("tech")}>
            {t("nav.tech")}
          </button>
          <button type="button" onClick={() => onMobileNavClick("publications")}>
            {t("nav.pesquisa")}
          </button>
          <button type="button" onClick={() => onMobileNavClick("software")}>
            {t("nav.software")}
          </button>
          <button type="button" onClick={() => onMobileNavClick("contact")}>
            {t("nav.contato")}
          </button>
        </nav>

        <div className="mobile-menu-lang-switch" aria-label="Seleção de idioma">
          <button type="button" onClick={() => onLangClick("DE")}>
            DE
          </button>
          <button type="button" onClick={() => onLangClick("EN")}>
            EN
          </button>
          <button type="button" onClick={() => onLangClick("PT")}>
            PT
          </button>
        </div>
      </aside>
    </>
  );
}
