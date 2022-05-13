import { Link, useLocation } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  let { pathname } = useLocation();

  return (
    <nav className="menu">
      <ul>
        <li className={pathname === "/" && "underline"}>
          <Link to="/">Accueil</Link>
        </li>
        <li className={pathname === "/About" && "underline"}>
          <Link to="/About">A Propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
