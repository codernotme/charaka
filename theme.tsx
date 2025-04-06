import React, { createContext, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#4CAF50",
    secondary: "#FF5722",
    background: "#F5F5F5",
    text: "#212121",
  },
  spacing: (factor: number) => `${factor * 8}px`,
};

const ThemeContext = createContext(theme);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <StyledThemeProvider theme={theme}>
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  </StyledThemeProvider>
);

export const useTheme = () => useContext(ThemeContext);
