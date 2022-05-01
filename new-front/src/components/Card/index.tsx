// TODO: trocar o handleClose por minizar e maximizar um card

import { useState } from "react";
import { useQuantity } from "../../contexts/quantity";
import { ICurrency } from "../../interfaces/currency";
import { IExchange } from "../../interfaces/exchange";
import { IStock } from "../../interfaces/stock";
import { IStockNegotiated } from "../../interfaces/stockNegotiated";
import { ReactSVG } from "react-svg";
import ArrowTop from "../../assets/images/svg/Icon/arrow-top-right.svg";
import ArrowDown from "../../assets/images/svg/Icon/arrow-bottom-right.svg";

import { Container } from "./styles";

interface ICardProps {
  stock?: IStock;
  currency?: ICurrency;
  exchange?: IExchange;
  negotiated?: IStockNegotiated;
  time?: string;
}

interface IExchangeCardProps {
  exchange: IExchange;
  time: string;
  handleClose: () => void;
  classType: (value: string | number) => string;
  iconType: (value: string | number) => JSX.Element;
}

interface IStockNegotiatedCardProps {
  negotiated: IStockNegotiated;
  time: string;
  handleClose: () => void;
  classType: (value: string | number) => string;
}

interface ICurrencyCardProps {
  currency: ICurrency;
  handleClose: () => void;
  classType: (value: string | number) => string;
  iconType: (value: string | number) => JSX.Element;
}

interface IStockCardProps {
  stock: IStock;
  handleClose: () => void;
  classType: (value: string | number) => string;
  iconType: (value: string | number) => JSX.Element;
}

const DATE_OPTIONS = {
  hour12: false,
  timeZone: "America/Fortaleza",
};

const Card = ({ currency, stock, exchange, negotiated, time }: ICardProps) => {
  const [display, setDisplay] = useState(true);

  const defaultTime = new Intl.DateTimeFormat("pt-BR", {
    ...DATE_OPTIONS,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(new Date());

  const handleClose = () => {
    setDisplay(false);
  };

  const classType = (value: string | number) => {
    const percentage = Number(value);

    if (percentage === 0 || !percentage) return "zero";
    else if (percentage > 0) return "goUp";
    else if (percentage < 0) return "goDown";

    return "";
  };

  const iconType = (value: string | number) => {
    const percentage = Number(value);

    if (percentage === 0 || !percentage) return <></>;
    else if (percentage > 0)
      return <ReactSVG src={ArrowTop} wrapper={undefined} />;
    else if (percentage < 0) return <ReactSVG src={ArrowDown} />;

    return <></>;
  };

  if (currency && display) {
    return (
      <CurrencyCard
        handleClose={handleClose}
        currency={currency}
        classType={classType}
        iconType={iconType}
      />
    );
  }

  if (stock && display) {
    return (
      <StockCard
        handleClose={handleClose}
        stock={stock}
        classType={classType}
        iconType={iconType}
      />
    );
  }

  if (exchange && display) {
    return (
      <ExchangeCard
        handleClose={handleClose}
        exchange={exchange}
        time={time || defaultTime}
        classType={classType}
        iconType={iconType}
      />
    );
  }

  if (negotiated && display) {
    return (
      <NegotiatedCard
        handleClose={handleClose}
        negotiated={negotiated}
        time={time || defaultTime}
        classType={classType}
      />
    );
  }

  return <></>;
};

const CurrencyCard = ({
  currency,
  handleClose,
  classType,
  iconType,
}: ICurrencyCardProps) => {
  const { quantity } = useQuantity();

  const currencyOptions = {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  };

  const label = `${currency.code} - ${currency.name}`;
  const value = new Intl.NumberFormat("pt-BR", currencyOptions).format(
    Number(quantity) * Number(currency.ask)
  );

  const time = new Intl.DateTimeFormat("pt-BR", {
    ...DATE_OPTIONS,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(new Date(currency.timestamp * 1000));

  const pctClass = classType(currency.pctChange);
  const icon = iconType(currency.pctChange);

  return (
    <Container>
      <h4>{value}</h4>
      <span>{label}</span>
      <div>
        <small className={pctClass}>
          {icon}
          {currency.pctChange}%
        </small>
        <small>{time}</small>
      </div>
      <button onClick={handleClose}>&#x2715;</button>
    </Container>
  );
};

const StockCard = ({
  stock,
  handleClose,
  classType,
  iconType,
}: IStockCardProps) => {
  const pctClass = classType(stock.variation);
  const icon = iconType(stock.variation);

  return (
    <Container>
      <h4>{stock.points}</h4>
      <span>
        {stock.name} ({stock.location})
      </span>
      <div>
        <small className={pctClass}>
          {icon}
          {stock.variation}%
        </small>
        <small>{stock.create_date}</small>
      </div>
      <button onClick={handleClose}>&#x2715;</button>
    </Container>
  );
};

const ExchangeCard = ({
  exchange,
  time,
  handleClose,
  classType,
  iconType,
}: IExchangeCardProps) => {
  const { quantity } = useQuantity();

  const currencyOptions = {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  };

  const label = `${exchange.symb} - ${exchange.desc}`;
  const value = new Intl.NumberFormat("pt-BR", currencyOptions).format(
    Number(quantity) * Number(exchange.SctyQtn.curPrc)
  );

  const pctChange = new Intl.NumberFormat("pt-BR", {
    style: "percent",
    maximumFractionDigits: 2,
  }).format((Number(quantity) * Number(exchange.SctyQtn.prcFlcn)) / 100);

  const pctClass = classType(exchange.SctyQtn.prcFlcn);
  const icon = iconType(exchange.SctyQtn.prcFlcn);

  return (
    <Container>
      <h4>{value}</h4>
      <span>{label}</span>
      <div>
        <small className={pctClass}>
          {icon}
          {pctChange}
        </small>
        <small>{time}</small>
      </div>
      <button onClick={handleClose}>&#x2715;</button>
    </Container>
  );
};

const NegotiatedCard = ({
  negotiated,
  time,
  handleClose,
  classType,
}: IStockNegotiatedCardProps) => {
  const { quantity } = useQuantity();

  const currencyOptions = {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  };

  const label = `${negotiated.scty.symb} - ${negotiated.scty.desc}`;
  const value = new Intl.NumberFormat("pt-BR", currencyOptions).format(
    Number(quantity) * Number(negotiated.pricVal)
  );

  const pctClass = classType(0);

  return (
    <Container>
      <h4>{value}</h4>
      <span>{label}</span>
      <div>
        <small className={pctClass}>Não informado</small>
        <small>{time}</small>
      </div>
      <button onClick={handleClose}>&#x2715;</button>
    </Container>
  );
};

export default Card;
