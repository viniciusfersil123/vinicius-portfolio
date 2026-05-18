import { useMemo, useEffect } from "react";
import { useParams } from "../lib/routerShim";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "../hooks/useTranslation";
import Image from "../components/Image";

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
    caption_i18n?: Record<string, string>;
    imageOffsetX?: string;
    imageOffsetY?: string;
    imageOffsetX900?: string;
    imageOffsetY900?: string;
    imageOffsetX600?: string;
    imageOffsetY600?: string;
  }>;
  embeds?: Array<{
    html: string;
    caption?: string;
    caption_i18n?: Record<string, string>;
  } | string>;
  embedsBandcamp?: Array<{
    html: string;
    caption?: string;
    caption_i18n?: Record<string, string>;
  }>;
  youtubeUrls?: string[];
  youtubeCaption?: string[];
  youtubeCaption_i18n?: Record<string, string[]>;
  embedsYoutubeSrc?: string[];
  caption?: string;
  // novo:
  linkUrl?: string;
  linkTitle?: string;
  linkTitle_i18n?: Record<string, string>;
  description_i18n?: Record<string, string>;
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

  const { t, lang } = useTranslation();

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

  const bandcampEmbeds = item?.embedsBandcamp || [];
  const hasMultipleBandcampEmbeds = bandcampEmbeds.length > 1;
  const hasMultipleYoutubeEmbeds = youtubeEmbeds.length > 1;

  const detailSections = [
    ...(item?.images_details?.length
      ? [
          {
            key: "images",
            inverted: true,
            content: (
              <section className="detail-gallery">
                <h2 className="detail-gallery-title">{t("detail.gallery") || "Gallery"}</h2>
                {item.images_details.length > 1 ? (
                  <Slider
                    {...{
                      infinite: true,
                      speed: 500,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: true,
                      autoplay: true,
                      autoplaySpeed: 5000,
                      swipeToSlide: true,
                    }}
                  >
                    {item.images_details.map((imgDetail, idx) => (
                      <div key={idx} className="gallery-slide">
                        <div className="gallery-image-wrapper">
                          <Image
                            src={imgDetail.src}
                            alt={imgDetail.title}
                            style={{
                              "--card-image-offset-x": imgDetail.imageOffsetX,
                              "--card-image-offset-y": imgDetail.imageOffsetY,
                            } as React.CSSProperties}
                          />
                        </div>
                        <div className="gallery-info">
                          {imgDetail.title && <h3 className="gallery-image-title">{imgDetail.title}</h3>}
                          {imgDetail.caption && (
                            <p className="gallery-image-caption">
                              {imgDetail.caption_i18n?.[lang] || imgDetail.caption}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div className="gallery-single">
                    <div className="gallery-image-wrapper">
                      <Image
                        src={item.images_details[0].src}
                        alt={item.images_details[0].title}
                        style={{
                          "--card-image-offset-x": item.images_details[0].imageOffsetX,
                          "--card-image-offset-y": item.images_details[0].imageOffsetY,
                        } as React.CSSProperties}
                      />
                    </div>
                    <div className="gallery-info">
                      {item.images_details[0].title && (
                        <h3 className="gallery-image-title">{item.images_details[0].title}</h3>
                      )}
                      {item.images_details[0].caption && (
                        <p className="gallery-image-caption">
                          {item.images_details[0].caption_i18n?.[lang] || item.images_details[0].caption}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </section>
            ),
          },
        ]
      : []),
    ...(item?.embeds?.length
      ? [
          {
            key: "embeds",
            inverted: false,
            content: (
              <section className="detail-embeds">
                <h2 className="detail-embeds-title">{t("detail.listen")}</h2>
                <div className="detail-embeds-grid">
                  {item.embeds.map((embed, idx: number) => {
                    const isString = typeof embed === 'string';
                    const html = isString ? embed : embed.html;
                    
                    return (
                      <div key={idx} className="embed-wrapper">
                        <div
                          className="embed-card"
                          dangerouslySetInnerHTML={{ __html: html }}
                        />
                        {(embed as any).caption_i18n?.[lang] || (embed as any).caption ? (
                          <p className="embed-caption">{(embed as any).caption_i18n?.[lang] ?? (embed as any).caption}</p>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </section>
            ),
          },
        ]
      : []),
    ...(bandcampEmbeds.length
      ? [
          {
            key: "bandcamp",
            inverted: true,
            content: (
              <section className="detail-embeds">
                <h2 className="detail-embeds-title">{t("detail.bandcamp")}</h2>
                {hasMultipleBandcampEmbeds ? (
                  <Slider
                    {...{
                      // Match homepage carousel behavior: always show arrows, autoplay, responsive slidesToShow
                      infinite: true,
                      speed: 500,
                      slidesToShow: Math.min(4, bandcampEmbeds.length),
                      slidesToScroll: 1,
                      arrows: true,
                      autoplay: true,
                      autoplaySpeed: 7000,
                      swipeToSlide: true,
                      responsive: [
                        { breakpoint: 1200, settings: { slidesToShow: Math.min(3, bandcampEmbeds.length) } },
                        { breakpoint: 900, settings: { slidesToShow: Math.min(2, bandcampEmbeds.length) } },
                        { breakpoint: 600, settings: { slidesToShow: 1 } },
                      ],
                    }}
                  >
                    {bandcampEmbeds.map((embed, idx) => (
                      <div key={`bc-${idx}`} className="bandcamp-carousel-slide">
                        <div className="embed-card bandcamp" dangerouslySetInnerHTML={{ __html: embed.html }} />
                        {(embed as any).caption_i18n?.[lang] || (embed as any).caption ? (
                          <p className="bandcamp-caption">{(embed as any).caption_i18n?.[lang] ?? (embed as any).caption}</p>
                        ) : null}
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div className="bandcamp-single">
                    <div className="embed-card bandcamp" dangerouslySetInnerHTML={{ __html: bandcampEmbeds[0].html }} />
                    {bandcampEmbeds[0].caption ? <p className="bandcamp-caption">{bandcampEmbeds[0].caption}</p> : null}
                  </div>
                )}
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
                <h2 className="detail-embeds-title">{t("detail.videos")}</h2>
                {hasMultipleYoutubeEmbeds ? (
                  <Slider
                    {...{
                      infinite: true,
                      speed: 500,
                      slidesToShow: Math.min(2, youtubeEmbeds.length),
                      slidesToScroll: 1,
                      arrows: true,
                      autoplay: true,
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
                    {youtubeEmbeds.map((src, idx) => {
                      const caption = item?.youtubeCaption_i18n?.[lang]?.[idx] ?? item?.youtubeCaption?.[idx];
                      return (
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
                          {caption ? <p className="youtube-caption">{caption}</p> : null}
                        </div>
                      );
                    })}
                  </Slider>
                ) : (
                  <div className="youtube-single">
                    <div className="embed-card youtube">
                      <iframe
                        src={youtubeEmbeds[0]}
                        title="YouTube"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-presentation"
                      />
                    </div>
                    { (item?.youtubeCaption_i18n?.[lang]?.[0] ?? item?.youtubeCaption?.[0]) ? (
                      <p className="youtube-caption">{item.youtubeCaption_i18n?.[lang]?.[0] ?? item.youtubeCaption?.[0]}</p>
                    ) : null }
                  </div>
                )}
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
