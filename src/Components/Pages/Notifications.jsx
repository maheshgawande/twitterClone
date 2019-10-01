import React from "react";
import SectionHeader from "Components/mainComponents/mainSection/SectionHeader";
import SectionMidle from "Components/mainComponents/mainSection/SectionMiddle";
import Stream from "Components/mainComponents/mainSection/Stream";
import NotificationsSectionMiddle from "Components/subComponents/notificationsComponents/NotificationsSectionMiddle";
import NotificationsStream from "Components/subComponents/notificationsComponents/NotificationsStream";
import Search from "Components/mainComponents/mainAside/Search";
import Trends from "Components/mainComponents/mainAside/Trends";
import Follow from "Components/mainComponents/mainAside/Follow";
import Footer from "Components/mainComponents/mainAside/Footer";
import SettingLogo from "assets/SettingLogo";

const Notifications = () => {
  return (
    <div className="main-container notifications">
      <section>
        <SectionHeader name="Notifications" logo={<SettingLogo />} />
        <SectionMidle data={<NotificationsSectionMiddle />} />
        <Stream data={<NotificationsStream />} />
      </section>
      <aside>
        <Search />
        <Trends />
        <Follow />
        <Footer />
      </aside>
    </div>
  );
};

export default Notifications;
