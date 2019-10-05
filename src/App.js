import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
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
            <Route path="/" exact component={Home}>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/explore" component={Explore} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/messages" component={Messages} />
            <Route path="/i/bookmarks" component={Bookmarks} />
            <Route path="/i/lists" component={Lists} />
            <Route path="/userName" component={Profile} />
            <Route component={Error404} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
