import React from "react";
import "Styles/Notifications.css";
import { NavLink } from "react-router-dom";

const NotificationsSectionMiddle = () => {
  return (
    <div className="section-middle">
      <div className="nav">
        <NavLink
          to="/notifications"
          className="a"
          activeClassName={"active-link"}
        >
          All
        </NavLink>
        <NavLink to="/mentions" className="a" activeClassName={"active-link"}>
          Mentions
        </NavLink>
      </div>
    </div>
  );
};

export default NotificationsSectionMiddle;
