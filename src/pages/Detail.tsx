import React from "react";
import Header from "../components/Header";
import { useParams, useNavigate } from "../lib/routerShim";

// simples: o App injeta as coleções em window para o Detail ler.
// você pode trocar depois para importar de src/data/items.
type Item = { title: string; text: string; image?: string };
const getAll = (): Item[] => {
  const w = window as any;
  return [
    ...(w.__APP_CARDS__ || []),
    ...(w.__APP_TECH__ || []),
    ...(w.__APP_SOFT__ || []),
    ...(w.__APP_PUBS__ || []),
  ];
};

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function Detail() {
  const { slug } = useParams() as { slug?: string };
  const navigate = useNavigate();

  const all = getAll();
  const item =
    all.find((it) => slugify(it.title) === (slug || "")) || null;

  return (
    <div className="detail-page">
      <Header />
      <main className="section" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
          <button className="button secondary" onClick={() => navigate(-1)}>
            ← Voltar
          </button>
          <h1 style={{ margin: 0 }}>{item ? item.title : slug}</h1>
        </div>

        {item?.image && (
          <div style={{ borderRadius: 12, overflow: "hidden", marginBottom: "1rem" }}>
            <img src={item.image} alt={item.title} style={{ width: "100%", height: "auto" }} />
          </div>
        )}

        <article>
          <p>{item ? item.text : "Item não encontrado."}</p>
        </article>
      </main>
    </div>
  );
}
