type CardProps = {
  title: string;
  text: string;
  size?: "small" | "normal";
  image?: string; // <-- nova prop
  onClick?: () => void;
};

export default function Card({ title, text, size = "normal", image, onClick }: CardProps) {
  return (
    <article
      className={`card ${size === "small" ? "small" : ""}`}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : undefined }}
    >
      {image && (
        <div className="card-thumb">
          <img src={image} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
