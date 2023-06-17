import { Route, Routes, Navigate } from "react-router-dom";
import { routerType } from "../types/router.types";
import pagesData from "./pagesData";
import BlogListLatest from "../components/BlogList/BlogListLatest";
import BlogListTop from "../components/BlogList/BlogListTop";
import Home from "./Home/Home";
import Listings from "./Listings/Listings";
import ListingCardList from "../components/Listing/ListingCardList";
import Tags from "./Tags/Tags";
import Guides from "./Guides/Guides";
import Podcasts from "./Podcasts/Podcasts";
import FAQ from "./FAQ/FAQ";
import Shop from "./Shop/Shop";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Conduct from "./Conduct/Conduct";
import Privacy from "./Privacy/Privacy";
import Terms from "./Terms/Terms";

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return (
    <Routes>
      {pageRoutes}
      <Route path="" element={<Navigate replace to="/home/latest" />}/>
      <Route path="/home/*" element={<Home />}>
        <Route path="latest" element={<BlogListLatest />} />
        <Route path="top" element={<BlogListTop />} />
      </Route>
      <Route path="/listings/*" element={<Listings />}>
        <Route path="newest" element={<ListingCardList />} />
        <Route path="collabs" element={<ListingCardList />} />
        <Route path="cfp" element={<ListingCardList />} />
        <Route path="forhire" element={<ListingCardList />} />
        <Route path="education" element={<ListingCardList />} />
        <Route path="jobs" element={<ListingCardList />} />
        <Route path="mentors" element={<ListingCardList />} />
        <Route path="mentees" element={<ListingCardList />} />
        <Route path="forsale" element={<ListingCardList />} />
        <Route path="events" element={<ListingCardList />} />
        <Route path="misc" element={<ListingCardList />} />
        <Route path="products" element={<ListingCardList />} />
      </Route>
      <Route path="/tags/*" >
        <Route path="all" element={<Tags />} />
        <Route path="advice" element={<Tags />} />
        <Route path="philosophy" element={<Tags />} />
        <Route path="life" element={<Tags />} />
        <Route path="storytime" element={<Tags />} />
        <Route path="inspiration" element={<Tags />} />
        <Route path="selfhelp" element={<Tags />} />
        <Route path="jobs" element={<Tags />} />
        <Route path="society" element={<Tags />} />
        <Route path="technology" element={<Tags />} />
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
