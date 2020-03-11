import React from "react";
import usePersistedState from "./utils/usePersistedState";

import Sidebar from "./components/Sidebar";

import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import GlobalStyles from "./styles/global";

function App() {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Sidebar toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
