import React from "react";
import ForYou from "Components/subComponents/exploreComponents/ForYou";
import News from "Components/subComponents/exploreComponents/News";
import Sports from "Components/subComponents/exploreComponents/Sports";
import Fun from "Components/subComponents/exploreComponents/Fun";
import Entertainment from "Components/subComponents/exploreComponents/Entertainment";
import { Route, Switch } from "react-router-dom";

const ExploreStream = () => {
  return (
    <div className="stream">
      <Switch>
        <Route path="/bookmarks" component={ForYou} />
        <Route path="/bookmarks" component={News} />
        <Route path="/bookmarks" component={Sports} />
        <Route path="/bookmarks" component={Fun} />
        <Route path="/bookmarks" component={Entertainment} />
      </Switch>
    </div>
  );
};

export default ExploreStream;
