import { Link } from "react-router-dom";
import "./Menu.scss";
const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="About">A Propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
