// Dependencies
import { Route, Routes, Navigate } from "react-router-dom";

// Page components
import Home from "./Home/Home";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import BlogListLatest from "../components/BlogList/BlogListLatest";
import BlogListTop from "../components/BlogList/BlogListTop";
import Listings from "./Listings/Listings";
import ListingCardList from "../components/Listing/ListingCardList";
import Tag from "./Tag/Tag";
import Guides from "./Guides/Guides";
import Podcasts from "./Podcasts/Podcasts";
import FAQ from "./FAQ/FAQ";
import Shop from "./Shop/Shop";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Conduct from "./Conduct/Conduct";
import Privacy from "./Privacy/Privacy";
import Terms from "./Terms/Terms";
import TagList from "./TagList/TagList";

// Data
// TODO: Replace with axios calls
import tags from "../data/tags";
import listingCategories from "../data/listingCategories";

// Types
import TagType from "../types/Tag";

const Router = () => {

  const tagArrayFilter = (arg: string) =>
    tags.filter((tag) => tag.name === arg);

  const tagRoutes = tags.map((tag: TagType, index: number) => {
    return (
      <Route
        key={index}
        path={`${tag.name}`}
        element={<Tag {...tagArrayFilter(tag.name)} />}
      />
    );
  });

  const listingCategoryMap = listingCategories.map((listing: string, index: number) => {
    return <Route key={index} path={`${listing}`} element={<ListingCardList />} />
  })

  return (
    <Routes>
      <Route path="" element={<Navigate replace to="/home/latest" />} />
      <Route path="/home/*" element={<Home />}>
        <Route path="latest" element={<BlogListLatest />} />
        <Route path="top" element={<BlogListTop />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/listings/*" element={<Listings />}>
        {listingCategoryMap}
      </Route>
      <Route path="/tags/*">
        <Route path="all" element={<TagList />} />
        {tagRoutes}
      </Route>
      <Route path="/podcasts" element={<Podcasts />} />
      <Route path="/guides" element={<Guides />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/conduct" element={<Conduct />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
};

export default Router;
