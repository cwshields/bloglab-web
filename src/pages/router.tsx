// Dependencies
import { Route, Routes, Navigate, Outlet } from "react-router-dom";

// Page components
import Home from "./Home/Home";
import BlogListLatest from "../components/BlogList/BlogListLatest";
import BlogListTop from "../components/BlogList/BlogListTop";
import Listings from "./Listings/Listings";
import ListingCardList from "../components/Listing/ListingCardList";
import Tag from "./Tag/Tag";
import Guides from "./Guides/Guides";
import Podcasts from "./Podcasts/Podcasts";
import PodcastDetail from "./PodcastDetail/PodcastDetail";
import EpisodeDetail from "./EpisodeDetail/EpisodeDetail";
import FAQ from "./FAQ/FAQ";
import Shop from "./Shop/Shop";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Conduct from "./Conduct/Conduct";
import Privacy from "./Privacy/Privacy";
import Terms from "./Terms/Terms";
import TagList from "./TagList/TagList";
import Blog from "./Blog/Blog";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";

// Data
// TODO: Replace with axios calls
import tags from "../data/tags";
import { useGetData } from "../data/bloglabDataHooks";

// Types
import listingCategories from "../data/listingCategories";

// Utils
import slugify from "../utils/slugify";

const Router = () => {
  const [blogsData] = useGetData("blogs");
  const [podcastsData] = useGetData("podcasts");

  const tagArrayFilter = (arg: string) =>
    tags.filter((tag) => tag.name === arg);

  const tagRoutes = tags.map((tag: Tag, index: number) => {
    return (
      <Route
        key={index}
        path={`${tag.name}`}
        element={<Tag {...tagArrayFilter(tag.name)} />}
      />
    );
  });

  const listingCategoryMap = listingCategories.map(
    (listing: ListingsType, index: number) => {
      return (
        <Route key={index} path={`${listing.url}`} element={<ListingCardList />} />
      );
    }
  );

  const blogRoutes = blogsData?.map((blog: Blog, index: number) => {
    return (
      <Route
        key={index}
        path={slugify(blog.title)}
        element={<Blog key={index} {...blog} />}
      />
    );
  });

  const podcastRoutes = podcastsData?.map((podcast: Podcast, index: number) => {
    const episodeRoutes = podcast.episodes.map(
      (episode: Episode, episodeIndex: number) => (
        <Route
          key={episodeIndex}
          path={`${episode.name}`}
          element={<EpisodeDetail podcastName={podcast.name} {...episode} />}
        />
      )
    );

    return (
      <Route key={index} path={`${podcast.name}/*`}>
        <Route index element={<PodcastDetail key={index} {...podcast} />} />
        {episodeRoutes}
      </Route>
    );
  });

  return (
    <Routes>
      <Route path="" element={<Navigate replace to="/home/latest" />} />
      <Route path="/home/*" element={<Home />}>
        <Route path="latest" element={<BlogListLatest />} />
        <Route path="top" element={<BlogListTop />} />
      </Route>
      <Route path="/listings/*" element={<Listings />}>
        {listingCategoryMap}
      </Route>
      <Route path="/tags/*">
        <Route path="all" element={<TagList />} />
        {tagRoutes}
      </Route>
      <Route
        path="/blog/*"
        element={blogsData ? <Outlet /> : <div>Loading...</div>}
      >
        {blogRoutes}
      </Route>
      <Route
        path="/podcasts/*"
        element={podcastsData ? <Outlet /> : <div>Loading...</div>}
      >
        <Route index element={<Podcasts />} />
        {podcastRoutes}
      </Route>
      <Route path="/guides" element={<Guides />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:profileId" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/conduct" element={<Conduct />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
};

export default Router;
