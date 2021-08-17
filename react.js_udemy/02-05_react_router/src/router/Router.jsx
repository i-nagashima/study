import { Switch, Route } from "react-router-dom";

import { Page1 } from "../Page1";
import { Page2 } from "../Page2";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { Home } from "../Home";
import { UrlParameter } from "../UrlParameter";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            <Route exact path={url}>
              <Page1 />
            </Route>
            <Route path={`${url}/detailA`}>
              <Page1DetailA />
            </Route>
            <Route path={`${url}/detailB`}>
              <Page1DetailB />
            </Route>
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            <Route exact path={url}>
              <Page2 />
            </Route>
            <Route path={`${url}/:id`}>
              <UrlParameter />
            </Route>
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
