import { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";

import { AppRoute } from "@constants";
import { CalisthenicsPage, HomePage, NotFoundPage } from "@pages";

export const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path={AppRoute.CALISTHENICS}>
        <CalisthenicsPage />
      </Route>

      <Route exact path={AppRoute.HOME}>
        <HomePage />
      </Route>

      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};
