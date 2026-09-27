import { useTheme } from "./ThemeContext";

export default function Theme() {
  const { theme, mode, toggleTheme } = useTheme();
  return <section className="exercise"><h2>1. Theme with useContext</h2><div className="p-4 rounded" style={{ color: theme.foreground, backgroundColor: theme.background }}><p>Current theme: {mode}</p><button className="btn border" style={{ color: theme.foreground, backgroundColor: theme.background }} onClick={toggleTheme}>Toggle Theme</button></div></section>;
}
