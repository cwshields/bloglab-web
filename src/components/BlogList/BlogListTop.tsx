import Blog from "../../types/Blog";
import { useGetData } from "../../data/bloglabDataHooks";
import BlogCard from "../../pages/BlogCard/BlogCard";
import FadeIn from "react-fade-in";

export default function BlogListLatest() {
  const [blogsData, blogsLoading, blogsError] = useGetData("blogs");
  return (
    <>
      <FadeIn delay={100}>
        {blogsLoading ? (
          <img
            src="https://www.onwebchat.com/img/spinner.gif"
            alt="Loading..."
          />
        ) : (
          blogsData?.map((blog: Blog, index: number) => (
            <BlogCard
              key={index}
              {...blog}
            />
          ))
        )}
        {blogsError && <div>Error: couldn't load blogs</div>}
      </FadeIn>
    </>
  );
}
