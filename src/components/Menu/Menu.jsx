import { Link, useLocation } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  let { pathname } = useLocation();

  return (
    <nav className="menu">
      <ul>
        <li className={pathname === "/RemyPaquier_11_27042022/" ? "underline" : undefined}>
          <Link to="/RemyPaquier_11_27042022/">Accueil</Link>
        </li>
        <li className={pathname === "/RemyPaquier_11_27042022/About" ? "underline" : undefined}>
          <Link to="RemyPaquier_11_27042022/About">A Propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
