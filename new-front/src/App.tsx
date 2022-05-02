import { ThemeProvider } from "styled-components";

import usePersistedState from "./utils/usePersistedState";
import { QuantityContextProvider } from "./contexts/quantity";

import "react-loading-skeleton/dist/skeleton.css";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import GlobalStyles from "./styles/global";
import Router from "./router";
import { ThemeContextProvider } from "./contexts/theme";

function App() {
  const [persistedTheme, setPersistedTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setPersistedTheme(persistedTheme.title === "light" ? dark : light);
  };

  return (
    <QuantityContextProvider>
      <ThemeContextProvider theme={persistedTheme} toggleTheme={toggleTheme}>
        <ThemeProvider theme={persistedTheme}>
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </ThemeContextProvider>
    </QuantityContextProvider>
  );
}

export default App;
