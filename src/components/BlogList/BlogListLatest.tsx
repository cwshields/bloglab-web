import BlogProps from "../../types/BlogProps";
import useAxios from "axios-hooks";
import BlogCard from "../../pages/BlogCard/BlogCard";
import FadeIn from "react-fade-in";

export default function BlogListLatest() {
  
  const [{ data, loading, error }/*, refetch*/] = useAxios({
    method: "GET",
    url: "https://zea1btt963.execute-api.eu-west-1.amazonaws.com/dev/get-blogs",
  });

  const blogList = data?.blogs.map((blog: BlogProps, index: number) => (
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
  ));

  return (
    <>
      <FadeIn delay={100}>
        {loading ? (
          <img
            src="https://www.onwebchat.com/img/spinner.gif"
            alt="Loading..."
          />
        ) : (
          blogList.sort((a: any, b: any) =>
            b.props.date
              .split("/")
              .join()
              .localeCompare(a.props.date.split("/").join())
          )
        )}
      </FadeIn>
      {error && <div>Error: couldn't load blogs</div>}
    </>
  );
}
