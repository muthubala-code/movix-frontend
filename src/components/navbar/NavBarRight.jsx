import "./styles/navBarRight.css";
import { icons } from "./navItems";
import ProfileDropDown from "./ProfileDropDown";
import { useRef, useState } from "react";

const NavBarRight = () => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 500); // Optional: reduce delay for better UX
  };

  return (
    <div className="navbar-right">
      <div className="search-box">
        <icons.IoSearchOutline className="icon" />
        <input type="text" placeholder="Find movies, TV shows..." />
      </div>

      <div className="nav-right">
        <div className="language">
          <icons.HiLanguage className="icon" />
          <span>EN</span>
          <icons.IoMdArrowDropdown className="icon" />
        </div>

        <div
          className="profile"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <icons.FaUserCircle className="icon" />
          <ProfileDropDown
            open={open}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>

        <button className="subscribe-btn">Subscribe</button>
      </div>
    </div>
  );
};

export default NavBarRight;
