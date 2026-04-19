import React from "react";
import { useTranslation } from "../hooks/useTranslation";

type Props = {
  onLogoClick?: () => void;
};

export default function Header({ onLogoClick }: Props) {
  const { t } = useTranslation();

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
    // placeholder temporário
    console.log(`Idioma clicado: ${lang}`);
  };

  return (
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
        Vinícius Fernandes
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
        <a href="#publications" onClick={(e) => onNavClick(e, "publications")}>
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
      >
        ☰
      </button>
    </header>
  );
}
