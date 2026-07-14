import useGet from "axios-hooks";

export const useGetData = <T extends DataType>(datatype: T): GetDataType<T> => {
  const [{ data, loading, error }] = useGet(
    "https://zea1btt963.execute-api.eu-west-1.amazonaws.com/dev/get-" + datatype
  );
  return [Array.isArray(data) ? data : data?.[datatype], loading, error] as any;
};
