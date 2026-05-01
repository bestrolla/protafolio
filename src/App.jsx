import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

function App() {
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
    <div className={`app-shell dark ${isMenuOpen ? "menu-open" : "menu-closed"}`}>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className="app-content">
        <Home />
      </div>
    </div>
  );
}

export default App;