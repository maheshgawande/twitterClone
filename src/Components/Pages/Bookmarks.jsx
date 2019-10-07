import React from "react";
import SectionHeader from "Components/mainComponents/mainSection/SectionHeader";
import Stream from "Components/mainComponents/mainSection/Stream";
import BookmarksStream from "Components/subComponents/bookmarksComponents/BookmarksStream";
import Search from "Components/mainComponents/mainAside/Search";
import Trends from "Components/mainComponents/mainAside/Trends";
import Follow from "Components/mainComponents/mainAside/Follow";
import Footer from "Components/mainComponents/mainAside/Footer";

const Bookmarks = () => {
  return (
    <div className="main-container bookmarks-container">
      <section>
        <SectionHeader heading="Bookmarks" subText="@username" />
        <Stream data={<BookmarksStream />} />
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

export default Bookmarks;
