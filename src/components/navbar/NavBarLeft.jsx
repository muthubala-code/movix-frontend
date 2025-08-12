import { Link } from "react-router-dom";
import { navItems } from "./navItems";
import "./styles/navbarLeft.css";

const NavBarLeft = () => {
  return (
    <div className="navbar-left">
      <Link className="logo" to="/">
        <img src="/icon.png" alt="logo" />
        <h2>Movix</h2>
      </Link>

      <div className="navbar-links-container">
        <ul className="navbar-links">
          {navItems.map((item, index) => (
            <li className="navbar-link" key={index}>
              <a href={item.navUrl}>{item.navItem}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBarLeft;
