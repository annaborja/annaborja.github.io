import { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";

import { AppRoute } from "@constants";
import {
  CalisthenicsPage,
  HomePage,
  MartialArtsPage,
  NotFoundPage,
} from "@pages";

const ROUTE_MAP: Readonly<
  Record<typeof AppRoute[keyof typeof AppRoute], FunctionComponent>
> = Object.freeze({
  [AppRoute.HOME]: HomePage,
  [AppRoute.CALISTHENICS]: CalisthenicsPage,
  [AppRoute.MARTIAL_ARTS]: MartialArtsPage,
});

export const Routes: FunctionComponent = () => {
  return (
    <Switch>
      {Object.entries(ROUTE_MAP).map(([path, PageComponent]) => (
        <Route exact key={path} path={path}>
          <PageComponent />
        </Route>
      ))}

      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};
