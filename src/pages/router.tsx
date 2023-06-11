import { Route, Routes } from "react-router-dom";
import { routerType } from "../types/router.types";
import pagesData from "./pagesData";
import BlogListLatest from "./BlogList/BlogListLatest";
import BlogListTop from "./BlogList/BlogListTop";
import Home from "./Home/Home";
import Listings from "./Listings/Listings";
import ListingCard from "../components/Listing/ListingCard";
import ListingTab from "../components/Listing/ListingTab";
import { listings } from "./../data/blogs";
import ListingProps from "./../types/ListingProps";
import Tags from "./Tags/Tags";

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return (
    <Routes>
      {pageRoutes}
      <Route path="/home/*" element={<Home />}>
        <Route path="latest" element={<BlogListLatest />} />
        <Route path="top" element={<BlogListTop />} />
      </Route>
      <Route path="/listings/*" element={<Listings />}>
        <Route path="newest" element={<ListingCard />} />
        <Route
          path="best"
          element={listings.map((listing: ListingProps, index: number) => (
            <ListingTab
              id={listing.id}
              key={index}
              header={listing.header}
              tags={listing.tags}
              body={listing.body}
              user={listing.user}
              date={listing.date}
            />
          ))}
        />
      </Route>
      <Route path="/tag/*" />
        <Route path="advice" element={<Tags />} />
        <Route path="philosophy" element={<Tags />}/>
        <Route path="life" element={<Tags />}/>
        <Route path="storytime" element={<Tags />}/>
        <Route path="inspiration" element={<Tags />}/>
        <Route path="selfhelp" element={<Tags />}/>
        <Route path="jobs" element={<Tags />}/>
        <Route path="society" element={<Tags />}/>
        <Route path="technology" element={<Tags />}/>
    </Routes>
  );
};

export default Router;
