import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/SignIn/intex";
import SignUp from "../pages/SignUp/intex";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/adsfdas" exact component={SignUp} />
    <Route path="/" component={SignIn} />
  </Switch>
);

export default Routes;
