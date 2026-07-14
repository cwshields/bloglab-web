import { useMemo, useState } from "react";
import { Pagination } from "react-bootstrap";
import FadeIn from "react-fade-in";
import shopItems from "../../data/shopItems";
import ShopCarousel from "../../components/Shop/ShopCarousel";
import ShopItemCard from "../../components/Shop/ShopItemCard";
import getRandomItems from "../../utils/getRandomItems";
import "../../sass/Shop.scss";

const FEATURED_ITEM_COUNT = 12;
const PAGE_SIZE = 20;

export default function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const featuredItems = useMemo(
    () => getRandomItems(shopItems, FEATURED_ITEM_COUNT),
    [],
  );
  const totalPages = Math.ceil(shopItems.length / PAGE_SIZE);
  const pageItems = shopItems.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <FadeIn delay={100} className="shop-fade-wrap">
      <div className="shop-wrap">
        <h1>Shop</h1>
        <p>
          <em>Official BlogLab gear, picked out by the community.</em>
        </p>

        <h2>Featured</h2>
        <ShopCarousel items={featuredItems} />

        <h2>All Products</h2>
        <div className="shop-item-grid">
          {pageItems.map((item) => (
            <ShopItemCard key={item.id} {...item} />
          ))}
        </div>
        <Pagination>
          <Pagination.Prev
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((page) => page - 1)}
          />
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <Pagination.Item
                key={page}
                active={page === currentPage}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Pagination.Item>
            ),
          )}
          <Pagination.Next
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((page) => page + 1)}
          />
        </Pagination>
      </div>
    </FadeIn>
  );
}
