import { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";

import { AppRoute } from "@constants";
import { CalisthenicsPage, HomePage } from "@pages";

export const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path={AppRoute.CALISTHENICS}>
        <CalisthenicsPage />
      </Route>

      <Route path={AppRoute.HOME}>
        <HomePage />
      </Route>

      {/* TODO: 404 page */}
    </Switch>
  );
};
