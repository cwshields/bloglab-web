import useGet from "axios-hooks";

export const useGetBlogData = () => {
  const [{ data, loading, error }] = useGet(
    "https://zea1btt963.execute-api.eu-west-1.amazonaws.com/dev/get-blogs"
  );
  const [blogsData, blogsloading, blogsError] = [data, loading, error];
  return { blogsData, blogsloading, blogsError };
};