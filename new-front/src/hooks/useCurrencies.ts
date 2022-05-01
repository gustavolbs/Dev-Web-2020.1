import useSWR from "swr";
import { ICurrency } from "../interfaces/currency";
import { fetcher } from "../services/api";

interface ICurrencies {
  [key: string]: ICurrency;
}

export const useCurrencies = () => {
  const { data, error } = useSWR("/home", fetcher);

  return {
    currencies: data?.currencies as ICurrencies,
    isLoading: !error && !data,
    isError: error,
  };
};
