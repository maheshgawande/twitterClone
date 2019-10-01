import React from "react";
import Owned from "Components/subComponents/listsComponents/Owned";
import Subscriptions from "Components/subComponents/listsComponents/Subscriptions";
import Membership from "Components/subComponents/listsComponents/Membership";
import { Route, Switch } from "react-router-dom";

const ListsStream = () => {
  return (
    <div className="stream">
      <Switch>
        <Route path="/i/lists" exact component={Owned} />
        <Route path="/i/subscriptions" exact component={Subscriptions} />
        <Route path="/i/membership" exact component={Membership} />
      </Switch>
    </div>
  );
};

export default ListsStream;
