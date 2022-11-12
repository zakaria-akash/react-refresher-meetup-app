import React from "react";
import { Route, Switch } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <AllMeetups />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
