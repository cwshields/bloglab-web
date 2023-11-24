import useGet from "axios-hooks";

export const useGetBlogData = () => {
  const [{ data, loading, error }] = useGet(
    "https://zea1btt963.execute-api.eu-west-1.amazonaws.com/dev/get-blogs"
  );
  const [blogsData, blogsLoading, blogsError] = [data?.blogs, loading, error];
  return { blogsData, blogsLoading, blogsError };
};

export const useGetListingData = () => {
  const [{ data, loading, error }] = useGet(
    "https://zea1btt963.execute-api.eu-west-1.amazonaws.com/dev/get-listings"
  );
  const [listingData, listingLoading, listingError] = [data?.listings, loading, error];
  return { listingData, listingLoading, listingError };
};
