import React, { useMemo, useRef } from "react";
import Header from "../components/Header";
import { useParams, useNavigate } from "../lib/routerShim";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function slugify(s: string) {
  return String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

type Item = {
  title: string;
  text: string;
  description?: string;
  image?: string;
  images_details?: string[];
  embedsBandcamp?: string[];
  youtubeUrls?: string[];
  // novo:
  linkUrl?: string;
  linkTitle?: string;
};

// converte URLs "watch" / "youtu.be" / "playlist" para embed
function toYouTubeEmbed(src: string): string {
  try {
    const u = new URL(src);
    const host = u.hostname.replace(/^www\./, "");
    const v = u.searchParams.get("v");
    const list = u.searchParams.get("list");

    // já é embed
    if (host.includes("youtube.com") && u.pathname.startsWith("/embed")) {
      return u.toString();
    }

    // youtu.be/<id>
    if (host === "youtu.be") {
      const id = u.pathname.replace("/", "");
      const q = new URLSearchParams(u.search);
      q.delete("v");
      return `https://www.youtube.com/embed/${id}${q.toString() ? "?" + q.toString() : ""}`;
    }

    // watch?v=<id> (com ou sem lista)
    if (host.includes("youtube.com") && u.pathname === "/watch" && v) {
      const q = new URLSearchParams(u.search);
      q.delete("v");
      return `https://www.youtube.com/embed/${v}${q.toString() ? "?" + q.toString() : ""}`;
    }

    // playlist somente (sem v): usar videoseries
    if (host.includes("youtube.com") && list && !v) {
      const q = new URLSearchParams();
      q.set("list", list);
      return `https://www.youtube.com/embed/videoseries?${q.toString()}`;
    }

    // fallback
    return src;
  } catch {
    return src;
  }
}

// setas do carrossel (mesma aparência do restante do site)
const Prev = (props: any) => (
  <button className="detail-btn left" aria-label="Slide anterior" onClick={props.onClick}>‹</button>
);
const Next = (props: any) => (
  <button className="detail-btn right" aria-label="Próximo slide" onClick={props.onClick}>›</button>
);

export default function Detail() {
  const { slug } = useParams() as { slug?: string };
  const navigate = useNavigate();

  const allItems: Item[] = (window as any).__APP_ALL__ || [];
  const item =
    allItems.find((it) => slugify(it.title) === (slug || "")) || null;

  const images = React.useMemo(() => {
    const arr = item?.images_details?.length
      ? item.images_details
      : item?.image
      ? [item.image]
      : [];
    return arr;
  }, [item]);

  const sliderSettings = React.useMemo(
    () => ({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      infinite: images.length > 1,
      autoplay: images.length > 1,
      autoplaySpeed: 6000,
      speed: 500,
      pauseOnHover: true,
      adaptiveHeight: false,
      centerMode: false,
      variableWidth: false,
      // removido nextArrow/prevArrow para usar as setas padrão do slick estilizadas via CSS
    }),
    [images.length]
  );

  // normaliza fontes do YouTube: primeiro usa youtubeUrls, depois embedsYoutubeSrc (compat)
  const youtubeEmbeds = useMemo(() => {
    const urls = (item?.youtubeUrls || []).map(toYouTubeEmbed);
    const legacy = (item?.embedsYoutubeSrc || []).map(toYouTubeEmbed);
    return [...urls, ...legacy];
  }, [item]);

  return (
    <div className="detail-page">
      <Header />
      <main className="section detail-section">
        {/* cabeçalho */}
        <div className="detail-header">
          <button className="button secondary" onClick={() => history.length > 1 ? history.back() : (location.href = "/")}>
            ← Voltar
          </button>
          <h1 className="detail-title">{item?.title || "Item"}</h1>
        </div>

        {/* link externo do item (logo abaixo do título) */}
        {item?.linkUrl && (
          <p className="detail-link-row">
            <a
              className="detail-link"
              href={item.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.linkTitle || item.linkUrl} <span aria-hidden>↗</span>
            </a>
          </p>
        )}

        {/* Carrossel com setas + autoplay */}
        <div className="detail-carousel">
          {images.length ? (
            <Slider {...sliderSettings}>
              {images.map((src, i) => (
                <div key={`${src}-${i}`} className="detail-slide">
                  <img src={src} alt={`${item?.title || "Imagem"} ${i + 1}`} />
                </div>
              ))}
            </Slider>
          ) : null}
        </div>

        <article className="detail-content">
          <p>{item?.description || item?.text || "Descrição indisponível."}</p>
        </article>

        {/* EMBEDS: aparecem logo abaixo do carrossel/descrição */}
        {item?.embeds?.length ? (
          <section className="detail-embeds">
            <h2 className="detail-embeds-title">Ouça/Veja</h2>
            <div className="detail-embeds-grid">
              {item.embeds.map((html, idx) => (
                <div
                  key={idx}
                  className="embed-card"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              ))}
            </div>
          </section>
        ) : null}

        {/* Bandcamp (se existir) */}
        {item?.embedsBandcamp?.length ? (
          <section className="detail-embeds">
            <h2 className="detail-embeds-title">Bandcamp</h2>
            <div className="detail-embeds-grid bandcamp-grid">
              {item.embedsBandcamp.map((html, idx) => (
                <div key={`bc-${idx}`} className="embed-card bandcamp" dangerouslySetInnerHTML={{ __html: html }} />
              ))}
            </div>
          </section>
        ) : null}

        {/* YouTube via JSX a partir de URLs (watch/short/playlist) */}
        {youtubeEmbeds.length ? (
          <section className="detail-embeds">
            <h2 className="detail-embeds-title">Vídeos</h2>
            <div className="detail-embeds-grid youtube-grid">
              {youtubeEmbeds.map((src, idx) => (
                <div key={`yt-src-${idx}`} className="embed-card youtube">
                  <iframe
                    src={src}
                    title={`YouTube ${idx + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-presentation"
                  />
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </div>
  );
}
