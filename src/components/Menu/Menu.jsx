import { Link } from "react-router-dom";
import "./Menu.scss";
const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
