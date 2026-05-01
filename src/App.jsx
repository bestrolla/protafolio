import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import useTheme from "./hooks/useTheme";
import { useEffect, useState } from "react";

function App() {
  const { dark, toggle } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(() => {
    const saved = localStorage.getItem("sidebar-open");
    return saved === null ? true : saved === "true";
  });

  useEffect(() => {
    localStorage.setItem("sidebar-open", String(isMenuOpen));
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div
      className={`app-shell ${dark ? "dark" : ""} ${
        isMenuOpen ? "menu-open" : "menu-closed"
      }`}
    >
      <Navbar
        toggleTheme={toggle}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <div className="app-content">
        <Home dark={dark} />
      </div>
    </div>
  );
}

export default App;