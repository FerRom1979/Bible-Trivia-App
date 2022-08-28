import React from "react";
import StyledNavbar from "./style.Navbar";
import { ReactComponent as Dashboard } from "../../assets/svg/dashboard.svg";
import { ReactComponent as Support } from "../../assets/svg/support.svg";
import { ReactComponent as Notification } from "../../assets/svg/notification.svg";

function Navbar() {
  return (
    <StyledNavbar>
      <div className="navbar-link">
        <Dashboard /> <p>Dashboard</p>
      </div>
      <div className="navbar-link">
        <Support /> <p>Support</p>
      </div>
      <div className="navbar-link">
        <Notification /> <p>Notification</p>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
