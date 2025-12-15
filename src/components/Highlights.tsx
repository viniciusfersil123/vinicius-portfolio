import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const highlights = [
  {
    title: "Instalação",
    img: "/teaser_1.jpg",
    caption: "Espaço das Artes, USP, São Paulo (2019)",
  },
  {
    title: "Instalação Interativa",
    img: "/teaser_2.jpg",
    caption: "SESC Aveneida Paulista, São Paulo (2020)",
  },
  {
    title: "Curso de eletrônica para síntese sonora",
    img: "/teaser_3.jpg",
    caption: "Fauhaus, São Paulo (2020)",
  },
  {
    title: "Echos of the deep",
    img: "/teaser_4.jpg",
    caption: "Vila do Conde, Portugal (2025)",
  },
  {
    title: "Cassini Trio",
    img: "/teaser_5.jpg",
    caption: "Bolderaja, Riga, Letônia (2018)",
  }
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
