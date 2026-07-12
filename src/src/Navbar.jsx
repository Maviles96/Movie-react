import { Link } from "react-router-dom";
import "./src/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        Movie React
      </Link>

      <div className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/search?query=marvel">Movies</Link>
      </div>
    </nav>
  );
}

export default Navbar;