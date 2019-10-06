import React from "react";
import SectionHeader from "Components/mainComponents/mainSection/SectionHeader";
import SectionMiddle from "Components/mainComponents/mainSection/SectionMiddle";
import Stream from "Components/mainComponents/mainSection/Stream";
import ExploreSectionMiddle from "Components/subComponents/exploreComponents/ExploreSectionMiddle";
import ExploreStream from "Components/subComponents/exploreComponents/ExploreStream";
import Follow from "Components/mainComponents/mainAside/Follow";
import Footer from "Components/mainComponents/mainAside/Footer";
import Search from "Components/mainComponents/mainAside/Search";
import SettingLogo from "assets/SettingLogo";

const Explore = () => {
  return (
    <div className="main-container explore">
      <section>
        <SectionHeader name={<Search />} logo={<SettingLogo />} />
        <SectionMiddle data={<ExploreSectionMiddle />} />
        <Stream data={<ExploreStream />} />
      </section>
      <aside>
        <Follow />
        <Footer />
      </aside>
    </div>
  );
};

export default Explore;
