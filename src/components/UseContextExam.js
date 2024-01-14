import { useContext, createContext } from "react";

const ThemeContext = createContext("light");

export function ThemeButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme }}> Click Me</button>;
}

export default function UseContextExample() {
  <ThemeContext.Provider value="dark">
    <ThemeButton />
  </ThemeContext.Provider>;
}
