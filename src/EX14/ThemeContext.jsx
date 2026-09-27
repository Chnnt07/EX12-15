import { createContext, useContext, useState } from "react";

export const themes = {
  light: { foreground: "#000000", background: "#eeeeee" },
  dark: { foreground: "#ffffff", background: "#61dafb" }
};
const ThemeContext = createContext(null);
export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("light");
  const toggleTheme = () => setMode((old) => old === "light" ? "dark" : "light");
  return <ThemeContext.Provider value={{ theme: themes[mode], mode, toggleTheme }}>{children}</ThemeContext.Provider>;
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("ThemeProvider is missing");
  return context;
}
