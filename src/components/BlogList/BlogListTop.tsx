import BlogProps from "../../types/BlogProps";
import { blogs } from "../../data/blogs";
import BlogCard from "../../pages/BlogCard/BlogCard";
import FadeIn from "react-fade-in";

export default function BlogListLatest() {
  return (
    <>
      <FadeIn delay={100}>
        {blogs.map((blog: BlogProps, index: number) => (
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
