import useSWR from "swr";
import { IExchange } from "../interfaces/exchange";
import { IStock } from "../interfaces/stock";
import { fetcher } from "../services/api";

interface IExchanges {
  time: string;
  stocks: IExchange[];
}

export const useBovespa = () => {
  const { data, error } = useSWR("/bovespa", fetcher);

  const rawExchanges = {
    time: data?.exchanges["Msg"]["dtTm"],
    stocks: data?.exchanges["SctyHghstIncrLst"],
  };

  return {
    exchanges: rawExchanges as IExchanges,
    isLoading: !error && !data,
    isError: error,
  };
};
