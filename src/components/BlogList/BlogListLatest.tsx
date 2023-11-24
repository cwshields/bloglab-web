import { ReactElement } from "react";
import FadeIn from "react-fade-in";
import { useGetBlogData } from "../../data/bloglabDataHooks";
import Blog from "../../types/Blog";
import BlogCard from "../../pages/BlogCard/BlogCard";

export default function BlogListLatest() {
  const { blogsData, blogsLoading, blogsError } = useGetBlogData();

  const blogDataEl: Array<ReactElement> = blogsData?.map(
    (blog: Blog, index: number) => (
      <BlogCard
        id={blog.id}
        key={index}
        title={blog.title}
        description={blog.description}
        readTime={blog.readTime}
        tags={blog.tags}
        date={blog.date}
        user={blog.user}
      />
    )
  );

  return (
    <>
      <FadeIn delay={100}>
        {blogsLoading ? (
          <img
            src="https://www.onwebchat.com/img/spinner.gif"
            alt="Loading..."
          />
        ) : (
          blogDataEl?.sort((a: ReactElement, b: ReactElement) =>
            b.props.date.split("/").join().localeCompare(a.props.date.split("/").join())
          )
        )}
      </FadeIn>
      {blogsError && <div>Error: couldn't load blogs</div>}
    </>
  );
}
