import { createContext, ReactNode, useContext, useState } from "react";
import { Theme } from "../interfaces/theme";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import usePersistedState from "../utils/usePersistedState";

type ThemeContextData = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextData);

type ThemeContextProps = {
  toggleTheme: () => void;
  theme: Theme;
  children: ReactNode;
};

export function ThemeContextProvider({
  children,
  toggleTheme,
  theme,
}: ThemeContextProps) {
  const [persistedTheme, setPersistedTheme] = usePersistedState("theme", theme);

  return (
    <ThemeContext.Provider
      value={{
        theme: persistedTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
