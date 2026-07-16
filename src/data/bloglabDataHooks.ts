import useGet from "axios-hooks";
import { API_BASE_URL } from "../axios/client";

export const useGetData = <T extends DataType>(datatype: T): GetDataType<T> => {
  const [{ data, loading, error }] = useGet(API_BASE_URL + "get-" + datatype);
  return [Array.isArray(data) ? data : data?.[datatype], loading, error] as any;
};
