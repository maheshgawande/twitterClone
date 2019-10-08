import React from "react";
import SectionHeader from "Components/mainComponents/mainSection/SectionHeader";
import SectionMiddle from "Components/mainComponents/mainSection/SectionMiddle";
import Stream from "Components/mainComponents/mainSection/Stream";
import Search from "Components/mainComponents/mainAside/Search";
import Follow from "Components/mainComponents/mainAside/Follow";
import Trends from "Components/mainComponents/mainAside/Trends";
import Footer from "Components/mainComponents/mainAside/Footer";
import BackButton from "assets/BackButton";
import ProfileSectionMiddle from "Components/subComponents/profileComponents/ProfileSectionMiddle";
import ProfileStream from "Components/subComponents/profileComponents/ProfileStream";
import "Styles/Profile.css";

const Profile = () => {
  return (
    <div className="main-container profile">
      <section>
        <SectionHeader
          heading="fname lname"
          subText="0 Tweets"
          logo={<BackButton />}
        />
        <SectionMiddle data={<ProfileSectionMiddle />} />
        <Stream data={<ProfileStream />} />
      </section>
      <aside>
        <Search />
        <Follow />
        <Trends />
        <Footer />
      </aside>
    </div>
  );
};

export default Profile;
