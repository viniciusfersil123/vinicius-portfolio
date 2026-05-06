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
  embedsBandcamp?: Array<{
    html: string;
    caption?: string;
  }>;
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
                <Slider
                  {...{
                    // Match homepage carousel behavior: always show arrows, autoplay, responsive slidesToShow
                    infinite: item.embedsBandcamp.length > 1,
                    speed: 500,
                    slidesToShow: Math.min(4, item.embedsBandcamp.length),
                    slidesToScroll: 1,
                    arrows: true,
                    autoplay: true,
                    autoplaySpeed: 7000,
                    swipeToSlide: true,
                    responsive: [
                      { breakpoint: 1200, settings: { slidesToShow: Math.min(3, item.embedsBandcamp.length) } },
                      { breakpoint: 900, settings: { slidesToShow: Math.min(2, item.embedsBandcamp.length) } },
                      { breakpoint: 600, settings: { slidesToShow: 1 } },
                    ],
                  }}
                >
                  {item.embedsBandcamp.map((embed, idx) => (
                    <div key={`bc-${idx}`} className="bandcamp-carousel-slide">
                      <div className="embed-card bandcamp" dangerouslySetInnerHTML={{ __html: embed.html }} />
                      {embed.caption ? <p className="bandcamp-caption">{embed.caption}</p> : null}
                    </div>
                  ))}
                </Slider>
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
                <Slider
                  {...{
                    infinite: youtubeEmbeds.length > 1,
                    speed: 500,
                    slidesToShow: Math.min(2, youtubeEmbeds.length),
                    slidesToScroll: 1,
                    arrows: true,
                    autoplay: youtubeEmbeds.length > 1,
                    autoplaySpeed: 7000,
                    swipeToSlide: true,
                    responsive: [
                      {
                        breakpoint: 1200,
                        settings: { slidesToShow: Math.min(2, youtubeEmbeds.length) },
                      },
                      {
                        breakpoint: 900,
                        settings: { slidesToShow: Math.min(1, youtubeEmbeds.length) },
                      },
                      {
                        breakpoint: 600,
                        settings: { slidesToShow: 1 },
                      },
                    ],
                  }}
                >
                  {youtubeEmbeds.map((src, idx) => (
                    <div key={`yt-src-${idx}`} className="youtube-carousel-slide">
                      <div className="embed-card youtube">
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
                    </div>
                  ))}
                </Slider>
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
