import { navItems } from "./navItems";
import "./styles/navbarLeft.css";

const NavBarLeft = () => {
  return (
    <div className="navbar-left">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>

      <div className="navbar-links-container">
        <ul className="navbar-links">
          {navItems.map((item,index) => (
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
