import { useBlogsData } from "../../context/BlogsDataContext";
import BlogCard from "../../pages/BlogCard/BlogCard";
import FadeIn from "react-fade-in";

export default function BlogListLatest() {
  const { blogsData, blogsLoading, blogsError } = useBlogsData();
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
