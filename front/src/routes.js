import React from "react";
import Main from "./pages/Main";
import StockExchanges from "./pages/StockExchanges";
import BovespaExchanges from "./pages/BovespaExchanges";
import { ReactComponent as Home } from "./assets/images/svg/home.svg";
import { ReactComponent as Trending } from "./assets/images/svg/trending.svg";
import { ReactComponent as Papers } from "./assets/images/svg/papers.svg";

const routes = [
  {
    path: "/",
    exact: true,
    icon: <Home />,
    name: "Home",
    component: () => <Main />
  },
  {
    path: "/acoes",
    exact: true,
    icon: <Trending />,
    name: "Ações",
    component: () => <StockExchanges />
  },
  {
    path: "/relevantes",
    exact: true,
    icon: <Papers />,
    name: "Ações mais Relevante",
    component: () => <BovespaExchanges />
  }
];

export default routes;
