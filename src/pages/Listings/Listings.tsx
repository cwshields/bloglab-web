import SideNav from "../../components/SideNav/SideNav";
import { Outlet } from "react-router-dom";
import "../../sass/Listings.scss";
import FadeIn from "react-fade-in";
import ListingCategoryNav from "../../components/Listing/ListingCategoryNav";

export default function Listings() {
  return (
    <div className="container">
      <SideNav />
      <FadeIn>
        <Outlet />
      </FadeIn>
      <ListingCategoryNav />
    </div>
  );
}
