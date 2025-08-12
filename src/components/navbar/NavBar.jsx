import NavBarLeft from "./NavBarLeft";
import NavBarRight from "./NavBarRight";
import "./styles/navbar.css"

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavBarLeft />
      <NavBarRight />
    </nav>
  );
};

export default NavBar;
