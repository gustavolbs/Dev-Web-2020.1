import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "../../routes";

import { ThemeContext } from "styled-components";
import { Container } from "./styles";

import Logo from "../../assets/images/gif/MoneyTrackWhite.gif";
import { ReactComponent as Arrow } from "../../assets/images/svg/arrow.svg";
import { ReactComponent as Solar } from "../../assets/images/svg/solar.svg";
import { ReactComponent as Light } from "../../assets/images/svg/light.svg";

export default function Sidebar({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Router>
      <Container>
        <ul>
          <li>
            <a href="#">
              <span>
                <img src={Logo} style={{ width: "auto", height: "68px" }} />
              </span>
              <Arrow />
            </a>
          </li>

          {routes.map(route => (
            <li>
              <Link to={route.path}>
                {route.icon}
                <span>{route.name}</span>
              </Link>
            </li>
          ))}

          <li onClick={toggleTheme}>
            <a href="#">
              {title === "dark" ? <Solar /> : <Light />}
              <span>Themify</span>
            </a>
          </li>
        </ul>
      </Container>

      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.component />}
          />
        ))}
      </Switch>
    </Router>
  );
}
