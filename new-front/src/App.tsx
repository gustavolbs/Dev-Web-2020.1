import { ThemeProvider } from "styled-components";

import Sidebar from "./components/Sidebar";

import usePersistedState from "./utils/usePersistedState";
import { QuantityContextProvider } from "./contexts/quantity";

import "react-loading-skeleton/dist/skeleton.css";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import GlobalStyles from "./styles/global";

function App() {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <QuantityContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Sidebar toggleTheme={toggleTheme} />
      </ThemeProvider>
    </QuantityContextProvider>
  );
}

export default App;
