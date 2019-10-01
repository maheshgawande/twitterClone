import React from "react";
import AllNotifications from "Components/subComponents/notificationsComponents/AllNotifications";
import Mentions from "Components/subComponents/notificationsComponents/Mentions";
import { Route, Switch } from "react-router-dom";

const NotificationsStream = () => {
  return (
    <div className="stream">
      <Switch>
        <Route path="/notifications" exact component={AllNotifications} />
        <Route path="/mentions" exact component={Mentions} />
      </Switch>
    </div>
  );
};

export default NotificationsStream;
