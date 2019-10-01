import React from "react";
import SectionHeader from "Components/mainComponents/mainSection/SectionHeader";
import SectionMiddle from "Components/mainComponents/mainSection/SectionMiddle";
import Stream from "Components/mainComponents/mainSection/Stream";
import ListsSectionMiddle from "Components/subComponents/listsComponents/ListsSectionMiddle";
import ListsStream from "Components/subComponents/listsComponents/ListsStream";
import Search from "Components/mainComponents/mainAside/Search";
import Trends from "Components/mainComponents/mainAside/Trends";
import Follow from "Components/mainComponents/mainAside/Follow";
import Footer from "Components/mainComponents/mainAside/Footer";
import ListLogo from "assets/ListLogo";
import "Styles/Lists.css";

const Lists = () => {
  return (
    <div className="main-container lists-container">
      <section>
        <SectionHeader name="Lists" username="@username" logo={<ListLogo />} />
        <SectionMiddle data={<ListsSectionMiddle />} />
        <Stream data={<ListsStream />} />
      </section>

      <aside>
        <div className="aside-container">
          <Search />
          <Trends />
          <Follow />
          <Footer />
        </div>
      </aside>
    </div>
  );
};

export default Lists;
