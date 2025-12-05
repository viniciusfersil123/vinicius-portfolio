import React from "react";
import Header from "../components/Header";
import { useParams, useNavigate } from "../lib/routerShim";

function slugify(s: string) {
  return String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function Detail() {
  const { slug } = useParams() as { slug?: string };
  const navigate = useNavigate();
  const allItems: Array<{ title: string; text: string; description?: string; image?: string }> =
    (window as any).__APP_ALL__ || [];

  const item =
    allItems.find((it) => slugify(it.title) === (slug || "")) || null;

  if (!item) {
    return (
      <div className="detail-page">
        <Header />
        <main className="section">
          <button className="button secondary" onClick={() => navigate(-1)}>
            ← Voltar
          </button>
          <p style={{ marginTop: "1rem" }}>Item não encontrado.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <Header />
      <main className="section">
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
          <button className="button secondary" onClick={() => navigate(-1)}>
            ← Voltar
          </button>
          <h1 style={{ margin: 0 }}>{item.title}</h1>
        </div>

        {item.image && (
          <div style={{ borderRadius: 12, overflow: "hidden", marginBottom: "1rem" }}>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        )}

        <article>
          <p>{item.description || item.text}</p>
        </article>
      </main>
    </div>
  );
}
