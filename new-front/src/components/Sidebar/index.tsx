import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../router/routes";

import { ThemeContext } from "styled-components";
import { Container, Input } from "./styles";
import { useQuantity } from "../../contexts/quantity";
import { useTheme } from "../../contexts/theme";

const Sidebar = () => {
  const { colors, title } = useContext(ThemeContext);
  const { toggleTheme } = useTheme();
  const { handleChangeQuantity, quantity } = useQuantity();
  const { pathname } = window.location;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container className={isOpen ? "menuOpen" : ""}>
      <div>
        <a href="#" className="logo">
          Money Track
        </a>
      </div>
      <button onClick={toggleMenu}>
        {isOpen ? <>&#x2715;</> : <>&#9776;</>}
      </button>

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

      {routes.map((route, key) => {
        return (
          <div key={key} className={pathname === route.path ? "active" : ""}>
            <Link to={route.path} onClick={toggleMenu}>
              {route.icon}
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
  );
};

export default Sidebar;
