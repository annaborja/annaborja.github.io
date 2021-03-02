import { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";

import { AppRoute } from "@constants";
import {
  CreativePage,
  CulturalPage,
  HomePage,
  NotFoundPage,
  PhysicalPage,
} from "@pages";

export const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path={AppRoute.CREATIVE}>
        <CreativePage />
      </Route>

      <Route exact path={AppRoute.CULTURAL}>
        <CulturalPage />
      </Route>

      <Route exact path={AppRoute.PHYSICAL}>
        <PhysicalPage />
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
