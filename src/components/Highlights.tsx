import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const highlights = [
  {
    title: "Instalação sonora — SESC",
    img: "/placeholder.jpg",
    caption: "Performance e instalação (2018)",
  },
  {
    title: "Residência — Berlim",
    img: "/placeholder.jpg",
    caption: "Pesquisa sonora (2017)",
  },
  {
    title: "Live Set — Riga",
    img: "/placeholder.jpg",
    caption: "Performance ao vivo (2016)",
  },
];

export default function Highlights() {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
    pauseOnHover: true,
    dots: true,
  };

  return (
    <div className="hero-highlights">
      <Slider {...settings}>
        {highlights.map((h, i) => (
          <div key={i} className="highlight-card">
            <div className="highlight-media">
              <img src={h.img} alt={h.title} />
            </div>
            <div className="highlight-overlay">
              <h4>{h.title}</h4>
              <p>{h.caption}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
