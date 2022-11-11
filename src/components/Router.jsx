import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import App from "./App";
import NotFound from "./NotFound";

class Router extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/shop/:shopId" component={App} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Router;
