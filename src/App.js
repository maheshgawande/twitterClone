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
import Error404 from "Components/Pages/Error404";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/explore" exact component={Explore} />
            <Route path="/notifications" exact component={Notifications} />
            <Route path="/messages" exact component={Messages} />
            <Route path="/i/bookmarks" exact component={Bookmarks} />
            <Route path="/i/lists" exact component={Lists} />
            <Route path="/userName" exact component={Profile} />
            <Route component={Error404} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
