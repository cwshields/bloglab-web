import { Carousel } from "react-bootstrap";
import ShopItem from "../../types/ShopItem";
import ShopItemCard from "./ShopItemCard";

const ITEMS_PER_SLIDE = 3;

interface ShopCarouselProps {
  items: Array<ShopItem>;
}

export default function ShopCarousel(props: ShopCarouselProps) {
  const { items } = props;

  const slides: Array<Array<ShopItem>> = [];
  for (let i = 0; i < items.length; i += ITEMS_PER_SLIDE) {
    slides.push(items.slice(i, i + ITEMS_PER_SLIDE));
  }

  return (
    <Carousel className="shop-carousel" interval={null}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="shop-carousel-slide">
            {slide.map((item) => (
              <ShopItemCard key={item.id} className="featured" {...item} />
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
