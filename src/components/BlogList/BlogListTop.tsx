import Blog from "../../types/Blog";
import { useGetData } from "../../data/bloglabDataHooks";
import BlogCard from "../../pages/BlogCard/BlogCard";
import FadeIn from "react-fade-in";

export default function BlogListLatest() {
  const [ blogsData, blogsLoading, blogsError ] = useGetData("blogs");
  return (
    <>
      <FadeIn delay={100}>
        {blogsData?.map((blog: Blog, index: number) => (
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
        ))}
      </FadeIn>
    </>
  );
}
