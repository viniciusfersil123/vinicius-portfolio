type CardProps = {
  title: string;
  text: string;
  size?: "small" | "normal";
  onClick?: () => void;
};

export default function Card({ title, text, size = "normal", onClick }: CardProps) {
  return (
    <article
      className={`card ${size === "small" ? "small" : ""}`}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : undefined }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
