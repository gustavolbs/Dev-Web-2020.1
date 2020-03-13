import React from "react";
import Main from "./pages/Main";
import StockExchanges from "./pages/StockExchanges";
import { ReactComponent as Home } from "./assets/images/svg/home.svg";
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
    path: "/Ações",
    exact: true,
    icon: <Papers />,
    name: "Ações",
    component: () => <StockExchanges />
  }
];

export default routes;
