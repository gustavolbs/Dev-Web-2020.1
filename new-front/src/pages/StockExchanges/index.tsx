import Card from "../../components/Card";
import Header from "../../components/Header";
import SkeletonCard from "../../components/SkeletonCard";
import { useExchanges } from "../../hooks/useExchanges";
import { CardList, Container } from "./styles";

const StockExchanges: React.FC = () => {
  const {
    exchanges: { stockExchange, negotiated },
    isLoading,
  } = useExchanges();

  return (
    <Container>
      <Header
        title={"Ações"}
        description={"Acompanhe os valores das ações da Bovespa em tempo real"}
      />

      <div>
        <h2>Maiores Altas</h2>
        <CardList>
          {isLoading ? (
            <SkeletonCard />
          ) : (
            stockExchange?.high.map((exchange) => {
              return <Card exchange={exchange} time={stockExchange.time} />;
            })
          )}
        </CardList>

        <h2>Maiores Baixas</h2>
        <CardList>
          {isLoading ? (
            <SkeletonCard />
          ) : (
            stockExchange?.low.map((exchange) => {
              return <Card exchange={exchange} time={stockExchange.time} />;
            })
          )}
        </CardList>

        <h2>Ações mais Negociadas</h2>
        <CardList>
          {isLoading ? (
            <SkeletonCard />
          ) : (
            negotiated?.stocks.map((stock) => {
              return <Card negotiated={stock} time={negotiated.time} />;
            })
          )}
        </CardList>
      </div>
    </Container>
  );
};

export default StockExchanges;
