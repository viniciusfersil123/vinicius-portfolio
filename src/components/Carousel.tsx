import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { useNavigate } from "../lib/routerShim";

type Item = { title: string; text: string };

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
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    autoplay,
    autoplaySpeed: 2500,
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
        {items.map((it, i) => (
          <div key={i}>
            <Card
              title={it.title}
              text={it.text}
              size="small"
              onClick={() => {
                if (onItemClick) return onItemClick(it);
                // fallback: navigate using title as slug
                const slug = (it as any).slug || (it.title || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                navigate(`/item/${slug}`);
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
