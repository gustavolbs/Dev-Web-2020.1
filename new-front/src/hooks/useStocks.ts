import useSWR from "swr";
import { IStock } from "../interfaces/stock";
import { fetcher } from "../services/api";

export const useStocks = () => {
  const { data, error } = useSWR("/home/stocks", fetcher);

  return {
    stocks: data?.stocks as IStock[],
    isLoading: !error && !data,
    isError: error,
  };
};
