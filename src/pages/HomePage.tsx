import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { AppRoute } from "@constants";

export const HomePage: FunctionComponent = () => {
  return (
    <main>
      <header>
        <h1>AnnaBorja.com</h1>
        <h2>Notes on Life</h2>
      </header>

      <section>
        <h1>The Physical</h1>

        <ul>
          <li>
            <Link to={AppRoute.CALISTHENICS}>Calisthenics</Link>
          </li>
          <li>
            <Link to={AppRoute.MARTIAL_ARTS}>Martial Arts</Link>
          </li>
        </ul>
      </section>

      <section>
        <h1>The Creative</h1>

        <ul></ul>
      </section>

      <section>
        <h1>The Cultural</h1>

        <ul></ul>
      </section>
    </main>
  );
};
