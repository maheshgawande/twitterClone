import React from "react";
import BannerImg from "assets/img/404-bg-img.jpg";
import ProfileLogo from "assets/img/profile_normal.png";

const ProfileSetting = () => {
  return (
    <div className="body compose">
      <div className="userBanner">
        <div className="banner">
          <div className="banner-img" style={bannerStyle}></div>
        </div>
      </div>
      <div className="userData">
        <div className="userAvatar-container">
          <a href="#avatar" className="avatar-container">
            <div className="avatar">
              <img src={ProfileLogo} alt="avatar" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const bannerStyle = {
  width: "100%",
  height: "200px",
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "#2F3336"
};

export default ProfileSetting;
