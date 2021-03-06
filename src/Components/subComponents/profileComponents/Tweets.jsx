import React from "react";
import Default from "Components/subComponents/Default";

const Tweets = () => {
  let defaultHeading = "You haven’t Tweeted yet";
  let defaultSubText = "When you post a Tweet, it’ll show up here.";
  return (
    <Default
      heading={`${defaultHeading}`}
      subText={`${defaultSubText}`}
      btnText="Tweet Now"
    />
  );
};

export default Tweets;
