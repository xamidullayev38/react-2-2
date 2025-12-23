import React from "react";
import ThemeProvider, { ThemeContext } from "./context/ThemeContext";
import  AppNavbar  from "./components/Navbar";
export default function App() {
  return (
    <ThemeProvider>
      <AppNavbar />
    </ThemeProvider>
  );
}
