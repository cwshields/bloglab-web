import useGet from "axios-hooks";
import Blog from "../types/Blog";
import { AxiosError } from "axios";
import Listing from "../types/Listing";
import Podcast from "../types/Podcast";

type DataType = "blogs" | "listings" | "podcasts";

type GetDataType<T extends DataType> = T extends "blogs"
  ? [Array<Blog>, boolean, AxiosError<any, any> | null]
  : T extends "listings"
  ? [Array<Listing>, boolean, AxiosError<any, any> | null]
  : T extends "podcasts"
  ? [Array<Podcast>, boolean, AxiosError<any, any> | null]
  : any[];

export const useGetData = <T extends DataType>(datatype: T): GetDataType<T> => {
  const [{ data, loading, error }] = useGet(
    "https://zea1btt963.execute-api.eu-west-1.amazonaws.com/dev/get-" + datatype
  );
  return [data?.[datatype], loading, error] as any;
};
