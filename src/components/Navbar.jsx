export default function Navbar({ toggleTheme }) {
  return (
    <nav className="navbar">
      <h2>Ángel Dev</h2>

      <div>
        <a href="#projects">Proyectos</a>
        <a href="#about">Sobre mí</a>
        <a href="/cv.pdf" target="_blank">CV</a>

        <button onClick={toggleTheme}>
          🌙
        </button>
      </div>
    </nav>
  );
}