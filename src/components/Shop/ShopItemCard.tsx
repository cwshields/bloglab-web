import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function ShopItemCard(props: ShopItemCardProps) {
  const { name, price, image, className } = props;

  return (
    <div className={`shop-item-card${className ? ` ${className}` : ""}`}>
      <LazyLoadImage
        effect="blur"
        alt={name}
        className="shop-item-image"
        src={image}
        wrapperClassName="shop-item-image-wrap"
      />
      <div className="shop-item-name">{name}</div>
      <div className="shop-item-price">${price.toFixed(2)}</div>
    </div>
  );
}
