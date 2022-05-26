import { Link, useLocation } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  let { pathname } = useLocation();

  return (
    <nav className="menu">
      <ul>
        <li className={pathname === "/" ? "underline" : undefined}>
          <Link to="/">Accueil</Link>
        </li>
        <li className={pathname === "/About" ? "underline" : undefined}>
          <Link to="/About">A Propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
