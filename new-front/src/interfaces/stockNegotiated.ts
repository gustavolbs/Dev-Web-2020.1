export interface IStockNegotiated {
  grossAmt: number;
  pricVal: number;
  scty: {
    symb: string;
    desc: string;
  };
}
