import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { useNavigate } from "../lib/routerShim";
import { useTranslation } from "../hooks/useTranslation";
import { useT } from "../context/LanguageProvider"; // adiciona helper de tradução

type Item = { title: any; text: any; image?: string; slug?: string };

type Props = {
  items: Item[];
  slidesToShow?: number;
  autoplay?: boolean;
  className?: string;
  dots?: boolean;
  onItemClick?: (item: Item) => void;
};

export default function Carousel({
  items,
  slidesToShow = 3,
  autoplay = true,
  className = "",
  dots = false,
  onItemClick,
}: Props) {
  const navigate = useNavigate();
  const t = useT(); // função: recebe string ou objeto {pt-br,en,de} e devolve string

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    autoplay,
    autoplaySpeed: 7000,
    swipeToSlide: true,
    dots,
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: Math.max(1, slidesToShow - 1) } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className={`carousel-wrapper-component ${className}`}>
      <Slider {...settings}>
        {items.map((it, i) => {
          // garante strings para o Card
          const titleStr = t((it as any).title);
          const textStr = t((it as any).text);
          const img = (it as any).image || (it as any).img || undefined;

          return (
            <div key={i}>
              <Card
                title={titleStr}
                text={textStr}
                image={img}
                size="small"
                onClick={() => {
                  if (onItemClick) return onItemClick(it);
                  const base = titleStr || "";
                  const slug =
                    (it as any).slug ||
                    base.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                  navigate(`/item/${slug}`);
                }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
