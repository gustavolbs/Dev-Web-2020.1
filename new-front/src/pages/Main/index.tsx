import Card from "../../components/Card";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import SkeletonCard from "../../components/SkeletonCard";
import { useCurrencies } from "../../hooks/useCurrencies";
import { useStocks } from "../../hooks/useStocks";

// import Spinner from "../../components/Spinner";

import { CardList, Container } from "../../styles/pages";

const Main: React.FC = () => {
  const { currencies, isLoading: currenciesLoading } = useCurrencies();
  const { stocks, isLoading: stocksLoading } = useStocks();

  return (
    <Layout>
      <Container>
        <Header
          title={"Home"}
          description={
            "Acompanhe os valores das moedas e bolsa de valores ao redor do mundo em tempo real"
          }
        />

        <div>
          <h2>Moedas</h2>
          <CardList>
            {currenciesLoading ? (
              <SkeletonCard />
            ) : (
              Object.keys(currencies).map((currencyKey, key) => {
                return <Card key={key} currency={currencies[currencyKey]} />;
              })
            )}
          </CardList>

          <h2>Bolsas</h2>
          <CardList>
            {stocksLoading ? (
              <SkeletonCard />
            ) : (
              stocks.map((stock, key) => {
                return <Card key={key} stock={stock} />;
              })
            )}
          </CardList>
        </div>
      </Container>
    </Layout>
  );
};

export default Main;
