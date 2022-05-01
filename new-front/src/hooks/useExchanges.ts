import useSWR from "swr";
import { ICurrency } from "../interfaces/currency";
import { IExchange } from "../interfaces/exchange";
import { IStockNegotiated } from "../interfaces/stockNegotiated";
import { fetcher } from "../services/api";

interface IMostExchanges {
  time: string;
  low: IExchange[];
  high: IExchange[];
}

interface IMostNegotiated {
  time: string;
  stocks: IStockNegotiated[];
}

export const useExchanges = () => {
  const { data, error } = useSWR("/exchanges", fetcher);

  const exchange = {
    time: data?.most_exchanges["Msg"]["dtTm"],
    low: data?.most_exchanges["SctyHghstDrpLst"],
    high: data?.most_exchanges["SctyHghstIncrLst"],
  };

  const negotiated = {
    time: data?.most_negotiated["Msg"]["dtTm"],
    stocks: data?.most_negotiated["Volume"],
  };

  return {
    exchanges: {
      stockExchange: exchange as IMostExchanges,
      negotiated: negotiated as IMostNegotiated,
    },
    isLoading: !error && !data,
    isError: error,
  };
};
