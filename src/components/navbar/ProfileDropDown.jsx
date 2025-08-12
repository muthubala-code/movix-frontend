import { useDispatch, useSelector } from "react-redux";
import "./styles/profiledropdown.css";

import { profileItems } from "./profileItems";
import { logout } from "../../features/auth/authSlice";
import { icons } from "./navItems";
import { useNavigate } from "react-router-dom";

const ProfileDropDown = ({ open, onMouseEnter, onMouseLeave }) => {
  const auth = useSelector((state) => state.auth);
  const user = auth.user;
  const isLogined = auth.isLogined;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!user || !isLogined) return null;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };

  return (
    <>
      {open && (
        <div
          className="dropdown-container"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="dropdown-menu">
            <div className="dropdown-header">
              <img
                src={user.profileUrl ?? "/profile.jpg"}
                alt="user profile pic"
              />
              <span>{user.username}</span>
            </div>
            <ul>
              {profileItems.map((item, index) => (
                <li key={index}>
                  <a href={item.url}>
                    {<item.icon />}
                    {item.name}
                  </a>
                </li>
              ))}
              <li onClick={handleLogout}>
                <a className="logout">
                  <icons.RxExit className="icon" /> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileDropDown;
