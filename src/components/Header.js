import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header container">
      <div className="logo">Cozicone</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}