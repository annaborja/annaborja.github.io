import { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";

import { AppRoute } from "@constants";
import {
  BooksPage,
  CalisthenicsPage,
  DrawingPage,
  HomePage,
  MartialArtsPage,
  MoviesPage,
  NotFoundPage,
  PodcastsPage,
  TVPage,
  WeightliftingPage,
} from "@pages";

const ROUTE_MAP: Readonly<
  Record<typeof AppRoute[keyof typeof AppRoute], FunctionComponent>
> = Object.freeze({
  [AppRoute.HOME]: HomePage,

  // Creative
  [AppRoute.DRAWING]: DrawingPage,

  // Cultural
  [AppRoute.BOOKS]: BooksPage,
  [AppRoute.MOVIES]: MoviesPage,
  [AppRoute.PODCASTS]: PodcastsPage,
  [AppRoute.TV]: TVPage,

  // Physical
  [AppRoute.CALISTHENICS]: CalisthenicsPage,
  [AppRoute.MARTIAL_ARTS]: MartialArtsPage,
  [AppRoute.WEIGHTLIFTING]: WeightliftingPage,
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
