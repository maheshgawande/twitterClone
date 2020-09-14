import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
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
import CreateLists from "Components/subComponents/listsComponents/CreateLists";
import ProfileSetting from "Components/subComponents/profileComponents/ProfileSetting";
import Error404 from "Components/Pages/Error404";

function App() {
  return (
    <div className="container">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <main>
          <Switch>
            {/* Home */}
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" component={Home} />
            {/* Explore */}
            <Route path="/explore" component={Explore} />]{/* Notification */}
            <Route path="/notifications" component={Notifications} />
            {/* Messages */}
            <Route path="/messages" exact component={Messages} />
            <Route
              path="/messages/compose"
              component={() => (
                <Toast header="New message" btnText="Next" body={<Compose />} />
              )}
            />
            {/* Bookmarks */}
            <Route path="/i/bookmarks" component={Bookmarks} />
            {/* Lists */}
            <Route path="/i/lists" component={Lists} />
            <Route
              path="/lists/create"
              component={() => (
                <Toast
                  header="Create new List"
                  btnText="Next"
                  body={<CreateLists />}
                />
              )}
            />
            {/* Profile */}
            <Route path="/userName" component={Profile} />
            <Route
              path="/settings/profile"
              component={() => (
                <Toast
                  header="Edit Profile"
                  btnText="Save"
                  body={<ProfileSetting />}
                />
              )}
            />
            {/* Trends */}
            <Route
              path="/settings/trends"
              component={() => (
                <Toast header="Trends" body={<TrendsSettingBody />} />
              )}
            />
            {/* Error 404 */}
            <Route component={Error404} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
