import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "../hooks/useTranslation";

const highlights = [
  {
    titleKey: "home.highlights.0.title",
    img: "/teaser_1.jpg",
    captionKey: "home.highlights.0.caption",
  },
  {
    titleKey: "home.highlights.1.title",
    img: "/teaser_2.jpg",
    captionKey: "home.highlights.1.caption",
  },
  {
    titleKey: "home.highlights.2.title",
    img: "/teaser_3.jpg",
    captionKey: "home.highlights.2.caption",
  },
  {
    titleKey: "home.highlights.3.title",
    img: "/teaser_4.jpg",
    captionKey: "home.highlights.3.caption",
  },
  {
    titleKey: "home.highlights.4.title",
    img: "/teaser_5.jpg",
    captionKey: "home.highlights.4.caption",
  }
];

export default function Highlights() {
  const { t } = useTranslation();

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    pauseOnHover: true,
    dots: false,
  };

  return (
    <div className="hero-highlights">
      <Slider {...settings}>
        {highlights.map((h, i) => (
          <div key={i} className="highlight-card">
            <div className="highlight-media">
              <img src={h.img} alt={t(h.titleKey)} />
            </div>
            <div className="highlight-overlay">
              <h4>{t(h.titleKey)}</h4>
              <p>{t(h.captionKey)}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
