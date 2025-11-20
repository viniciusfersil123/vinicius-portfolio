import Header from "../components/Header";
import { useParams, useNavigate } from "../lib/routerShim";
import { allItems } from "../data/items";

export default function Detail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const item = allItems.find((it) => it.slug === slug);

  if (!item) {
    return (
      <div className="detail-page">
        <Header />
        <main className="section">
          <p>Item não encontrado.</p>
          <button className="button secondary" onClick={() => navigate(-1)}>
            ← Voltar
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <Header />
      <main className="section">
        <button className="button secondary" onClick={() => navigate(-1)} style={{ marginBottom: "1rem" }}>
          ← Voltar
        </button>
        <article className="card" style={{ padding: "1.5rem" }}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          <hr style={{ margin: "1rem 0" }} />
          <p>
            Descrição detalhada (mock): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
            elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
            porta. Mauris massa.
          </p>
        </article>
      </main>
    </div>
  );
}
