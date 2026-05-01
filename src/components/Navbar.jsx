export default function Navbar({isMenuOpen, toggleMenu }) {
  return (
    <>
      {!isMenuOpen && (
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      )}

      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu} />}

      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <h2>Angel Manzano</h2>

        <div className="nav-links">
          <a href="#projects" onClick={toggleMenu}> Proyectos </a>
          <a href="#about" onClick={toggleMenu}> Sobre mí </a>
          <a href="/CVangelmanzano.pdf" target="_blank" rel="noreferrer" onClick={toggleMenu}> CV </a>

         
        </div>
      </nav>
    </>
  );
}