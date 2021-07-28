import React from "react";
import { Avatar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from "@material-ui/icons/Help";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleSignout = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__icon">
          <MenuIcon />
        </div>
        <div className="header__logo">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png"
            alt="gmail"
          />
          <h1>Gmail</h1>
        </div>
      </div>
      <div className="header__middle">
        <div className="header__searchBar">
          <SearchIcon />
          <input type="text" placeholder="Search mail" />
        </div>
      </div>
      <div className="header__right">
        <HelpIcon />
        <SettingsIcon />
        <AppsIcon />
        <div className="header__profilePic" onClick={handleSignout}>
          <Avatar src={user?.photoUrl} />
        </div>
      </div>
    </div>
  );
}

export default Header;
