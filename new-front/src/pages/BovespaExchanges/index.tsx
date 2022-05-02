import Card from "../../components/Card";
import Header from "../../components/Header";
import SkeletonCard from "../../components/SkeletonCard";
import { useBovespa } from "../../hooks/useBovespa";
import { CardList, Container } from "../../styles/pages";

const BovespaExchanges: React.FC = () => {
  const { exchanges, isLoading } = useBovespa();

  return (
    <Container>
      <Header
        title={"Ações mais relevantes"}
        description={
          "Acompanhe os valores das ações mais relevantes da Bovespa em tempo real"
        }
      />

      <div>
        <h2>Mais Relevantes</h2>
        <CardList>
          {isLoading ? (
            <SkeletonCard />
          ) : (
            exchanges?.stocks.map((exchange) => {
              return (
                <Card
                  key={exchange.symb}
                  exchange={exchange}
                  time={exchanges.time}
                />
              );
            })
          )}
        </CardList>
      </div>
    </Container>
  );
};

export default BovespaExchanges;
