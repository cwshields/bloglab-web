import useGet from "axios-hooks";
import Blog from "../types/Blog";
import { AxiosError } from "axios";
import Listing from "../types/Listing";
import Podcast from "../types/Podcast";

export const useGetData = <T extends "blogs" | "listings" | "podcasts">(
  datatype: T
): T extends "blogs"
  ? [Array<Blog>, boolean, AxiosError<any, any> | null]
  : T extends "listings"
  ? [Array<Listing>, boolean, AxiosError<any, any> | null]
  : T extends "podcasts"
  ? [Array<Podcast>, boolean, AxiosError<any, any> | null]
  : any[] => {
  const [{ data, loading, error }] = useGet(
    "https://zea1btt963.execute-api.eu-west-1.amazonaws.com/dev/get-" + datatype
  );
  return [data?.[datatype], loading, error] as any;
};