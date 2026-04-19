import React, { useEffect, useRef, useState } from "react";

type CardProps = {
  title: string;
  text: string;
  size?: "small" | "normal";
  image?: string; // <-- nova prop
  onClick?: () => void;
};

export default function Card({ title, text, size = "normal", image, onClick }: CardProps) {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const suffix = " [...]";

    const truncateToFit = () => {
      const paragraph = textRef.current;
      if (!paragraph) return;

      const maxHeight = paragraph.clientHeight;
      const maxWidth = paragraph.clientWidth;

      if (maxHeight <= 0 || maxWidth <= 0) {
        setDisplayText(text);
        return;
      }

      const computed = window.getComputedStyle(paragraph);
      const measure = document.createElement("p");

      measure.style.position = "fixed";
      measure.style.visibility = "hidden";
      measure.style.pointerEvents = "none";
      measure.style.zIndex = "-1";
      measure.style.left = "0";
      measure.style.top = "0";
      measure.style.width = `${maxWidth}px`;
      measure.style.margin = "0";
      measure.style.padding = "0";
      measure.style.border = "0";
      measure.style.boxSizing = "border-box";
      measure.style.font = computed.font;
      measure.style.lineHeight = computed.lineHeight;
      measure.style.letterSpacing = computed.letterSpacing;
      measure.style.wordBreak = computed.wordBreak;
      measure.style.overflowWrap = computed.overflowWrap;
      measure.style.whiteSpace = "normal";

      document.body.appendChild(measure);

      const fits = (value: string) => {
        measure.textContent = value;
        return measure.scrollHeight <= maxHeight + 1;
      };

      if (fits(text)) {
        setDisplayText(text);
        document.body.removeChild(measure);
        return;
      }

      let low = 0;
      let high = text.length;
      let best = 0;

      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const candidate = `${text.slice(0, mid).trimEnd()}${suffix}`;

        if (fits(candidate)) {
          best = mid;
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }

      const truncated = `${text.slice(0, Math.max(best, 1)).trimEnd()}${suffix}`;
      setDisplayText(truncated);
      document.body.removeChild(measure);
    };

    let rafId: number | undefined;
    const scheduleTruncate = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(truncateToFit);
    };

    scheduleTruncate();

    let resizeObserver: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(scheduleTruncate);
      resizeObserver.observe(element);
    }

    window.addEventListener("resize", scheduleTruncate);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      resizeObserver?.disconnect();
      window.removeEventListener("resize", scheduleTruncate);
    };
  }, [text]);

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
      <p className="card-text" ref={textRef}>
        {displayText}
      </p>
    </article>
  );
}
