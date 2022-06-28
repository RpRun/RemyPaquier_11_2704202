import { Link, useLocation } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  let { pathname } = useLocation();

  return (
    <nav className="menu">
      <ul>
        <li className={pathname === "/RemyPaquier_11_2704202/" ? "underline" : undefined}>
          <Link to="/RemyPaquier_11_2704202/">Accueil</Link>
        </li>
        <li className={pathname === "/RemyPaquier_11_2704202/About" ? "underline" : undefined}>
          <Link to="RemyPaquier_11_2704202/About">A Propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
