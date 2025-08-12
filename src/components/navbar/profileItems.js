import { SlLike } from "react-icons/sl";
import { SlPlaylist } from "react-icons/sl";
import { IoDiamondSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

export const profileItems = [
  {
    url: "/favorites",
    name: "Favorites",
    icon: SlLike,
  },
  {
    url: "/history",
    name: "History",
    icon: SlPlaylist,
  },
  {
    url: "/subscription",
    name: "Subscription",
    icon: IoDiamondSharp,
  },
  {
    url: "/profile",
    name: "Profile",
    icon: FaUserCircle,
  }
];
