import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "Components/Layouts/Header";
import Home from "Components/Pages/Home";
import Explore from "Components/Pages/Explore";
import Notifications from "Components/Pages/Notifications";
import Messages from "Components/Pages/Messages";
import Bookmarks from "Components/Pages/Bookmarks";
import Lists from "Components/Pages/Lists";
import Profile from "Components/Pages/Profile";
import Toast from "Components/subComponents/Toast";
import TrendsSettingBody from "Components/subComponents/TrendsSetting";
import Compose from "Components/subComponents/messagesComponents/Compose";
import Error404 from "Components/Pages/Error404";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/explore" component={Explore} />]
            <Route path="/notifications" component={Notifications} />
            <Route path="/messages" exact component={Messages} />
            <Route
              path="/messages/compose"
              component={() => (
                <Toast header="New message" btnText="Next" body={<Compose />} />
              )}
            />
            <Route path="/i/bookmarks" component={Bookmarks} />
            <Route path="/i/lists" component={Lists} />
            <Route path="/userName" component={Profile} />
            <Route
              path="/settings/trends"
              component={() => (
                <Toast header="Trends" body={<TrendsSettingBody />} />
              )}
            />
            <Route component={Error404} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
