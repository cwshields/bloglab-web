import { Outlet } from "react-router-dom";
import "../../sass/Listings.scss";
import FadeIn from "react-fade-in";
import ListingCategoryNav from "../../components/Listing/ListingCategoryNav";

export default function Listings() {
  return (
    <>
      <FadeIn>
        <Outlet />
      </FadeIn>
      <ListingCategoryNav />
    </>
  );
}
