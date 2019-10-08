import React from "react";
import SectionHeader from "Components/mainComponents/mainSection/SectionHeader";
import SectionMiddle from "Components/mainComponents/mainSection/SectionMiddle";
import Stream from "Components/mainComponents/mainSection/Stream";
import MessageLogo from "assets/MessageLogo";
import Search from "Components/mainComponents/mainAside/Search";
import Default from "Components/subComponents/messagesComponents/MessagesStream";
import "Styles/Messages.css";

const Messages = () => {
  return (
    <div className="main-container messages">
      <section>
        <SectionHeader heading="Messages" logo={<MessageLogo />} />
        <SectionMiddle data={<Search />} />
        <Stream data={<Default />} />
      </section>
      <aside></aside>
    </div>
  );
};

export default Messages;
