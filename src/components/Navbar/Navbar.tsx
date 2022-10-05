import React from "react";
import StyledNavbar from "./style.Navbar";
import { ReactComponent as Dashboard } from "../../assets/svg/dashboard.svg";
import { ReactComponent as Support } from "../../assets/svg/support.svg";
import { ReactComponent as Notification } from "../../assets/svg/notification.svg";
import { ReactComponent as LogOut } from "../../assets/svg/logOut.svg";

import { useDispatch } from "react-redux";
import { logOutUser } from "../../features/auth/authSlices";
import { Link } from "react-router-dom";
import Button from "../Button";

function Navbar() {
  const dispatch = useDispatch();
  return (
    <StyledNavbar>
      <Link to="/dashboard" className="navbar-link">
        <Dashboard /> <p>Dashboard</p>
      </Link>
      <Link to="/support" className="navbar-link">
        <Support /> <p>Support</p>
      </Link>
      <Link to="notification" className="navbar-link">
        <Notification /> <p>Notification</p>
      </Link>
      <Button
        type="button"
        onClick={() => dispatch(logOutUser())}
        className="text navbar-link btn-logOut"
        text="Log Out"
      >
        <LogOut onClick={() => dispatch(logOutUser())} />
      </Button>
    </StyledNavbar>
  );
}

export default Navbar;
