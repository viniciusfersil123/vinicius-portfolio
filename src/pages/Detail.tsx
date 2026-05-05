import { useMemo, useEffect } from "react";
import { useParams } from "../lib/routerShim";
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
  images_details?: Array<{
    src: string;
    title: string;
    caption: string;
  }>;
  embeds?: string[];
  embedsBandcamp?: string[];
  youtubeUrls?: string[];
  embedsYoutubeSrc?: string[];
  caption?: string;
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

export default function Detail() {
  const { slug } = useParams() as { slug?: string };

  const allItems: Item[] = (window as any).__APP_ALL__ || [];
  const item =
    allItems.find((it) => slugify(it.title) === (slug || "")) || null;

  // atualizar título do documento quando um item for exibido
  useEffect(() => {
    const prev = document.title;
    if (item?.title) {
      document.title = `${item.title} — Vinícius Fernandes`;
    }
    return () => {
      document.title = prev;
    };
  }, [item]);

  const images = useMemo(() => {
    const arr = item?.images_details?.length
      ? item.images_details
      : item?.image
        ? [
            {
              src: item.image,
              title: item.title,
              caption: item.caption || "Lorem ispsum, São Paulo (2026)",
            },
          ]
        : [];
    return arr;
  }, [item]);

  const sliderSettings = useMemo(
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
    [images.length],
  );

  // normaliza fontes do YouTube: primeiro usa youtubeUrls, depois embedsYoutubeSrc (compat)
  const youtubeEmbeds = useMemo(() => {
    const urls = (item?.youtubeUrls || []).map(toYouTubeEmbed);
    const legacy = (item?.embedsYoutubeSrc || []).map(toYouTubeEmbed);
    return [...urls, ...legacy];
  }, [item]);

  const detailSections = [
    {
      key: "hero",
      inverted: false,
      content: (
        <>
{/*           {item?.linkUrl && (
            <a
              className="button primary detail-external-link"
              href={item.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.linkTitle || item.linkUrl} <span aria-hidden>↗</span>
            </a>
          )} */}
        </>
      ),
    },

    ...(item?.embeds?.length
      ? [
          {
            key: "embeds",
            inverted: false,
            content: (
              <section className="detail-embeds">
                <h2 className="detail-embeds-title">Ouça/Veja</h2>
                <div className="detail-embeds-grid">
                  {item.embeds.map((html: string, idx: number) => (
                    <div
                      key={idx}
                      className="embed-card"
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  ))}
                </div>
              </section>
            ),
          },
        ]
      : []),
    ...(item?.embedsBandcamp?.length
      ? [
          {
            key: "bandcamp",
            inverted: true,
            content: (
              <section className="detail-embeds">
                <h2 className="detail-embeds-title">Bandcamp</h2>
                <div className="detail-embeds-grid bandcamp-grid">
                  {item.embedsBandcamp.map((html, idx) => (
                    <div
                      key={`bc-${idx}`}
                      className="embed-card bandcamp"
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  ))}
                </div>
              </section>
            ),
          },
        ]
      : []),
    ...(youtubeEmbeds.length
      ? [
          {
            key: "youtube",
            inverted: false,
            content: (
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
            ),
          },
        ]
      : []),
  ];

  return (
    <div className="detail-page">
      <main className="detail-sections">
        {detailSections.map((section) => (
          <section
            key={section.key}
            className={`section detail-section ${section.inverted ? "section--inverted" : ""}`}
          >
            {section.content}
          </section>
        ))}
      </main>
    </div>
  );
}
