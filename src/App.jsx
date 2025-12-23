import React, { useContext } from "react";
import ThemeProvider, { ThemeContext } from "./context/ThemeContext";
import AppNavbar from "./components/Navbar";
import { useEffect } from "react";

export default function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  useEffect(() => {
    document.body.className =
      theme === "dark" ? "bg-dark text-light" : "bg-light text-dark";
  }, [theme]);

  return (
    <>
      <AppNavbar isDark={isDark} toggleTheme={toggleTheme} />
    </>
  );
}
