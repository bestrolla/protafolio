import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import useTheme from "./hooks/useTheme";

function App() {
  const { dark, toggle } = useTheme();

  return (
    <div className={dark ? "dark" : ""}>
      <Navbar toggleTheme={toggle} />
      <Home />
    </div>
  );
}

export default App;