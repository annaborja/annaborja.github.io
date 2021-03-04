import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { AppRoute } from "@constants";
import { HomeData } from "@data";

const { sections, subtitle, title } = HomeData;

export const HomePage: FunctionComponent = () => {
  return (
    <main>
      <header>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </header>

      {sections.map(({ links, title }) => (
        <section key={title}>
          <h1>{title}</h1>

          <ul>
            {links.map(({ routeKey, text }) => (
              <li key={routeKey}>
                <Link to={AppRoute[routeKey as keyof typeof AppRoute]}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
};
