import React, { useContext } from "react";
import ThemeProvider, { ThemeContext } from "./context/ThemeContext";
import AppNavbar from "./components/Navbar";
import { useEffect } from "react";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Info from "./components/Info";
import img from './assets/img/image.png'
import Company from "./components/Company";
import Rate from "./components/Rate";
import FaqComponent  from "./components/FaqComponent";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

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
      <Hero isDark={isDark} />
      <Courses isDark={isDark}/>
      <Info isDark={isDark}>
        <img
          src={img}
          alt="Instructor"
          style={{ width: "100%", maxWidth: "420px" }}
        />
      </Info>
      <Company isDark={isDark} />
      <Rate isDark={isDark} />
      <FaqComponent isDark={isDark} />
      <CtaSection isDark={isDark} />
      <Footer isDark={isDark} />
    </>
  );
}
