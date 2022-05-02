import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "./routes";

const Router = () => {
  const routeComponents = routes.map((route, key) => (
    <Route key={key} path={route.path} element={<route.component />} />
  ));

  return (
    <BrowserRouter>
      <Routes>{routeComponents}</Routes>
    </BrowserRouter>
  );
};

export default Router;
