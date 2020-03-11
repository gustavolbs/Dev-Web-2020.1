import React from "react";
import Main from "./pages/Main";
import Second from "./pages/Second";
import { ReactComponent as Home } from "./assets/images/svg/home.svg";
import { ReactComponent as Arrow } from "./assets/images/svg/arrow.svg";

const routes = [
  {
    path: "/",
    exact: true,
    icon: <Home />,
    name: "Home",
    component: () => <Main />
  },
  {
    path: "/second",
    exact: true,
    icon: <Arrow />,
    name: "Second",
    component: () => <Second />
  }
];

export default routes;
