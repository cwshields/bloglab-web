import { Route, Routes } from "react-router-dom";
import { routerType } from "../types/router.types";
import pagesData from "./pagesData";
import BlogListLatest from "./BlogList/BlogListLatest";
import BlogListTop from "./BlogList/BlogListTop";
import Home from "./Home/Home";

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
    </Routes>
  );
};

export default Router;
