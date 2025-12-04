import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const highlights = [
  {
    title: "Hardware Terceiro Mundo",
    img: "/teaser_2.jpg",
    caption: "Curso de Eletrônica (2019)",
  },
  {
    title: "Pássro-concreto",
    img: "/teaser_1.jpg",
    caption: "Apresentação na Casa das Rosas, São Paulo (2016)",
  },
  {
    title: "Hardware musical artesanal",
    img: "/teaser_3.jpg",
    caption: "Fauhaus, São Paulo (2020)",
  },
  {
    title: "Atelier pessoal",
    img: "/teaser_4.jpg",
    caption: "São Paulo, Brasil (2021)",
  },
  {
    title: "Echos of the deep",
    img: "/teaser_5.jpg",
    caption: "Vila do Conde, Portugal (2025)",
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
