import React from "react";
import Default from "Components/subComponents/Default";

const Media = () => {
  let defaultHeading = "You haven’t Tweeted any photos or videos yet";
  let defaultSubText =
    "When you send Tweets with photos or videos in them, it will show up here.";
  return (
    <Default heading={`${defaultHeading}`} subText={`${defaultSubText}`} />
  );
};

export default Media;
