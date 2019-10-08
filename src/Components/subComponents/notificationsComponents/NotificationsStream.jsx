import React from "react";
import AllNotifications from "Components/subComponents/notificationsComponents/AllNotifications";
import Mentions from "Components/subComponents/notificationsComponents/Mentions";
import Error404 from "Components/Pages/Error404";
import { Route, Switch } from "react-router-dom";

const NotificationsStream = () => {
  return (
    <div className="default">
      <Switch>
        <Route
          path="/notifications"
          exact={true}
          component={AllNotifications}
        />
        <Route path="/notifications/mentions" component={Mentions} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
};

export default NotificationsStream;
