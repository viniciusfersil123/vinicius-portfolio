import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "../hooks/useTranslation";

type Highlight = {
  titleKey: string;
  img: string;
  captionKey: string;
  offsets: {
    desktop: { x: string; y: string };
    max900?: { x: string; y: string };
    max600?: { x: string; y: string };
  };
};

type HighlightTextItem = {
  title: string;
  caption: string;
};

type HighlightImageItem = {
  src: string;
};

const highlights: Highlight[] = [
  {
    titleKey: "home.highlights.0.title",
    img: "/teaser_1.jpg",
    captionKey: "home.highlights.0.caption",
    offsets: {
      desktop: { x: "0px", y: "-65%" },
      max900: { x: "50%", y: "-100%" },
      max600: { x: "50%", y: "0%" },
    },
  },
  {
    titleKey: "home.highlights.1.title",
    img: "/teaser_2.jpg",
    captionKey: "home.highlights.1.caption",
    offsets: {
      desktop: { x: "0px", y: "-60%" },
      max900: { x: "0px", y: "-60%" },
      max600: { x: "0px", y: "-60%" },
    },
  },
  {
    titleKey: "home.highlights.2.title",
    img: "/teaser_3.jpg",
    captionKey: "home.highlights.2.caption",
    offsets: {
      desktop: { x: "0px", y: "-60%" },
      max900: { x: "0px", y: "-60%" },
      max600: { x: "10%", y: "-60%" },
    },
  },
  {
    titleKey: "home.highlights.3.title",
    img: "/teaser_4.jpg",
    captionKey: "home.highlights.3.caption",
    offsets: {
      desktop: { x: "0px", y: "-90%" },
      max900: { x: "0px", y: "-60%" },
      max600: { x: "0px", y: "-60%" },
    },
  },
  {
    titleKey: "home.highlights.4.title",
    img: "/teaser_5.jpg",
    captionKey: "home.highlights.4.caption",
    offsets: {
      desktop: { x: "0px", y: "-60%" },
      max900: { x: "0px", y: "-60%" },
      max600: { x: "0px", y: "-60%" },
    },
  },
];

export default function Highlights({
  textItems,
  imageItems,
}: {
  textItems?: HighlightTextItem[];
  imageItems?: HighlightImageItem[];
}) {
  const { t } = useTranslation();
  const sliderRef = useRef<Slider | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const slides: Highlight[] = imageItems?.length
    ? imageItems.map((img, index) => ({
        ...highlights[index % highlights.length],
        img: img.src,
      }))
    : highlights;

  const toggleSlideshow = () => {
    setIsPaused((prev) => {
      const next = !prev;

      if (next) {
        sliderRef.current?.slickPause();
      } else {
        sliderRef.current?.slickPlay();
      }

      return next;
    });
  };

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: !isPaused,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    pauseOnHover: true,
    dots: false,
  };

  return (
    <div className="hero-highlights">
      <button
        type="button"
        className="highlights-pause-toggle"
        onClick={toggleSlideshow}
        aria-pressed={isPaused}
      >
        {isPaused ? "▶ Play" : "⏸ Pause"}
      </button>

      <Slider ref={sliderRef} {...settings}>
        {slides.map((h, i) => {
          // texto dinâmico por slide; fallback para tradução antiga
          // quando não houver item correspondente
          const dynamicTitle = textItems?.[i]?.title;
          const dynamicCaption = textItems?.[i]?.caption;
          const titleText = dynamicTitle || t(h.titleKey);
          const captionText = dynamicCaption || t(h.captionKey);

          return (
            <div key={i} className="highlight-card">
              <div className="highlight-media">
                <img
                  src={h.img}
                  alt={titleText}
                  style={
                    {
                      "--highlight-media-offset-x": h.offsets.desktop.x,
                      "--highlight-media-offset-y": h.offsets.desktop.y,
                      "--highlight-media-offset-x-900":
                        h.offsets.max900?.x || h.offsets.desktop.x,
                      "--highlight-media-offset-y-900":
                        h.offsets.max900?.y || h.offsets.desktop.y,
                      "--highlight-media-offset-x-600":
                        h.offsets.max600?.x ||
                        h.offsets.max900?.x ||
                        h.offsets.desktop.x,
                      "--highlight-media-offset-y-600":
                        h.offsets.max600?.y ||
                        h.offsets.max900?.y ||
                        h.offsets.desktop.y,
                    } as React.CSSProperties
                  }
                />
              </div>
              <div className="highlight-overlay">
                <h4>{titleText}</h4>
                <p>{captionText}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
