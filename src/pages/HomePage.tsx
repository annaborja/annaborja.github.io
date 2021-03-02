import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { AppRoute } from "@constants";

export const HomePage: FunctionComponent = () => {
  return (
    <>
      <header>
        <h1>AnnaBorja.com</h1>
        <h2>Notes on Life</h2>
      </header>

      <h1>
        <Link to={AppRoute.PHYSICAL}>The Physical</Link>
      </h1>

      <h1>
        <Link to={AppRoute.CREATIVE}>The Creative</Link>
      </h1>

      <h1>
        <Link to={AppRoute.CULTURAL}>The Cultural</Link>
      </h1>
    </>
  );
};
