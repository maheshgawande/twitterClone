import React from "react";

const SectionHeader = ({ name, logo, username }) => {
  return (
    <div className="section-header">
      <div className="home-refresh">
        <span>{name}</span>
        <span className="username"> {username} </span>
      </div>
      {logo}
    </div>
  );
};
export default SectionHeader;
