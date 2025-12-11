import React, { useMemo, useRef } from "react";
import Header from "../components/Header";
import { useParams, useNavigate } from "../lib/routerShim";

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
  embeds?: string[]; // novo: lista de embeds (iframes) por item
};

export default function Detail() {
  const { slug } = useParams() as { slug?: string };
  const navigate = useNavigate();

  const allItems: Item[] = (window as any).__APP_ALL__ || [];
  const item =
    allItems.find((it) => slugify(it.title) === (slug || "")) || null;

  const images = useMemo(() => {
    const arr = item?.images_details && item.images_details.length
      ? item.images_details
      : item?.image
        ? [item.image]
        : ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"];
    return arr.concat(arr);
  }, [item]);

  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollBySlide = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const slideWidth = el.querySelector<HTMLElement>(".detail-slide")?.offsetWidth || 300;
    const gap = 12;
    el.scrollBy({ left: dir === "right" ? slideWidth + gap : -(slideWidth + gap), behavior: "smooth" });
  };

  return (
    <div className="detail-page">
      <Header />

      <main className="section detail-section">
        <div className="detail-header">
          <button className="button secondary" onClick={() => { try { navigate(-1); } catch { navigate("/"); } }}>
            ← Voltar
          </button>
          <h1 className="detail-title">{item ? item.title : "Item"}</h1>
        </div>

        <div className="detail-carousel">
          <button className="detail-btn left" aria-label="Slide anterior" onClick={() => scrollBySlide("left")}>‹</button>
          <div className="detail-track" ref={trackRef}>
            {images.map((src, i) => (
              <div key={`${src}-${i}`} className="detail-slide">
                <img src={src} alt={`${item?.title || "Imagem"} ${i + 1}`} />
              </div>
            ))}
          </div>
          <button className="detail-btn right" aria-label="Próximo slide" onClick={() => scrollBySlide("right")}>›</button>
        </div>

        <article className="detail-content">
          <p>{item?.description || item?.text || "Descrição indisponível."}</p>
        </article>

        {/* EMBEDS: aparecem logo abaixo do carrossel/descrição */}
        {item?.embeds && item.embeds.length > 0 && (
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
        )}
      </main>
    </div>
  );
}
