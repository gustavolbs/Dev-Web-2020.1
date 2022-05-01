import { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import routes from "../../routes";

import { ThemeContext } from "styled-components";
import { Container, Input } from "./styles";
import { useQuantity } from "../../contexts/quantity";

interface ISidebarProps {
  toggleTheme: () => void;
}

const Sidebar = ({ toggleTheme }: ISidebarProps) => {
  const { colors, title } = useContext(ThemeContext);
  const { handleChangeQuantity, quantity } = useQuantity();
  const { pathname } = window.location;

  return (
    <BrowserRouter>
      <Container>
        <div>
          <a href="#" className="logo">
            Money Track
          </a>
        </div>

        <Input htmlFor="quantity">
          Quantidade
          <input
            type="text"
            name="quantity"
            id="quantity"
            value={quantity}
            onChange={handleChangeQuantity}
          />
        </Input>

        {routes.map((route) => {
          return (
            <div className={pathname === route.path ? "active" : ""}>
              <Link to={route.path}>
                {/* {route.icon} */}
                {route.name}
              </Link>
            </div>
          );
        })}

        <div onClick={toggleTheme}>
          <a href="#">
            {/* {title === "dark" ? <Solar /> : <Light />} */}
            {title === "dark" ? "Light" : "Dark"}
          </a>
        </div>
      </Container>

      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Sidebar;
