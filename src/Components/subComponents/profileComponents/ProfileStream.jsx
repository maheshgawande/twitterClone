import React from "react";
import { Route, Switch } from "react-router-dom";
import Tweets from "Components/subComponents/profileComponents/Tweets";
import Replies from "Components/subComponents/profileComponents/Replies";
import Media from "Components/subComponents/profileComponents/Media";
import Likes from "Components/subComponents/profileComponents/Likes";
import Error404 from "Components/Pages/Error404";

const ProfileStream = () => {
  return (
    <div>
      <Switch>
        <Route path="/username" exact={true} component={Tweets} />
        <Route path="/username/replies" component={Replies} />
        <Route path="/username/media" component={Media} />
        <Route path="/username/likes" component={Likes} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
};

export default ProfileStream;
