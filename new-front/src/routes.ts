import BovespaExchanges from "./pages/BovespaExchanges";
import Main from "./pages/Main";
import StockExchanges from "./pages/StockExchanges";
// import { ReactComponent as Home } from "./assets/images/svg/home.svg";
// import { ReactComponent as Trending } from "./assets/images/svg/trending.svg";
// import { ReactComponent as Papers } from "./assets/images/svg/papers.svg";

interface Route {
  path: string;
  icon?: JSX.Element;
  name: string;
  component: React.FC;
}

const routes: Route[] = [
  {
    path: "/",
    // icon: <Home />,
    name: "Home",
    component: Main,
  },
  {
    path: "/acoes",
    // icon: <Trending />,
    name: "Ações",
    component: StockExchanges,
  },
  {
    path: "/relevantes",
    // icon: <Papers />,
    name: "Mais Relevantes",
    component: BovespaExchanges,
  },
];

export default routes;
